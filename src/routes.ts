import { Router } from "express";
import UserController from "./controllers/UserController";


const routes = Router();

// USER 
routes.post('/users', UserController.create)


export default routes;