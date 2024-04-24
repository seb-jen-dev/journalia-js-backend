import express from "express";

const users = [
  {
    username: "god",
    password: "god",
    friends: []
  },
  {
    username: "adam",
    password: "adam",
    friends: ["eve"],
    friendRequests: ["god"]
  },
  {
    username: "eve",
    password: "eve",
    friends: ["adam"],
    friendRequests: ["god"]
  }
];

const userRouter = express.Router();

userRouter.get('/:username', (req, res) => {
  const user = users.find((u) => u.username === req.params.username);
  if (!user) {
    res.sendStatus(404);
  }
  res.json(user);
});

export default userRouter
