import express from "express";
import userRoutes from "./routers/users.js";

const app = express();

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(8080, () => {
  console.log("Server up and running at http://localhost:8080 ...");
})
