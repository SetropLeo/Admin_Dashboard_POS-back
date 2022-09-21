import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/User';

class UserController {
  public async create(request: Request, response: Response) {
    try {
      const { first_name, last_name, email, password } = request.body;
      const userRepo = AppDataSource.getRepository(User);

      const user = await userRepo.find(email);

      if (user.length)
        return response
          .status(422)
          .json({ message: `User ${email} already exists` });

      const newUser = userRepo.create({
        first_name,
        last_name,
        email,
        password,
      });

      userRepo.save(newUser);

      return response.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error.' });
    }
  }
}

export default new UserController();
