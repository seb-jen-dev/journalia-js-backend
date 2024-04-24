import { Sequelize } from "sequelize";

const dbContext = new Sequelize({
  dialect: 'sqlite',
  storage: 'journalia-db.sqlite'
});

export default dbContext;
