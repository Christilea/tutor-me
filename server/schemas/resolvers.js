const { AuthenticationError } = require("apollo-server-express");
const { User, Passwords } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate(
                    "Passwords"
                );
                return user;
            }
            throw new AuthenticationError("");
        },
        passwords: async () => {
            return await Passwords.find();
        },
    },
    Mutation: {
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, {
                    new: true,
                });
            }
            throw new AuthenticationError(" ");
        }
    }
};

module.exports = resolvers;