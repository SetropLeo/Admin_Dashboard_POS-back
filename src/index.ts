import { AppDataSource } from "./database/data-source";

AppDataSource.initialize()
  .then(() => {
    console.log('Migrations Runned');
  })
  .catch((error) => console.log(error))