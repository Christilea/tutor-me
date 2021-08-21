module.exports = function (sequelize, DataTypes) {
    const Tutoring = sequelize.define("tutoring", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
          
        },
        location: {
            type: DataTypes.STRING
            
        },
        date_time: {
            type: DataTypes.DATE 
        }

    });
}