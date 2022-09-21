import "reflect-metadata"
import { AppDataSource } from "./data-source";
import { User } from "./entities/User";

AppDataSource.initialize()
  .then(async () => {

    const user = new User();
    user.first_name = 'Leo';
    user.last_name = 'Setrop';
    user.email = 'leol_portes@hotmail.com';
    user.password = '123';
    await AppDataSource.manager.save(user);

    console.log('Load users from the database');
    const users = await AppDataSource.manager.find(User);
    console.log('Loaded Users', users);


    console.log('Inserted informations in the database.');
  })
  .catch((error) => console.log(error))