import express from "express";
import cors from "cors";
import userRoutes from "./routers/users.js";
import { DataTypes } from "sequelize";
import dbContext from "./database/db.js";

async function dbConnect() {
  try {
    await dbContext.authenticate();
    console.log("Database connection succesfully established!");
  }
  catch(error) {
    console.error("Unable to connect to database: ", error);
  }
}

async function dbTest() {
  const User = dbContext.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
         allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  );
  await dbContext.sync({force: true});
  try {
    const user = await User.create({ username: "God", password: "Eden123" });
    console.log(`User ${user.username} saved into the users table!`);
  }
  catch(error) {
    console.error("ERROR! saving user to db: ", error);
  }
}

const app = express();

app.use(cors());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(8080, async () => {
  console.log("Server up and running at http://localhost:8080 ...");
  await dbConnect();
  await dbTest();
});
