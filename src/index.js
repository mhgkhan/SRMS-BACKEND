import app from "../server.js";

app.listen(process.env.PORT, () => {
  console.log("server are listenning on port - ", process.env.PORT);
});
