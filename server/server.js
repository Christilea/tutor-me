const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// require('./routes/login_routes')(app);

// app.use(require("./routes/login_routes"))(app);
// app.use(require("./routes/recipe_routes"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", function(req, res){
        res.sendFile(path.join(__dirname,"./client/public/index.html"))
    })
}



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});