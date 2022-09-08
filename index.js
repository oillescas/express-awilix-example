const mongoose = require("mongoose");
const container = require("./src/container");

const server = container.resolve("Server");
const config = container.resolve("config");

//mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    server.start();
  })
  .catch(console.error);
