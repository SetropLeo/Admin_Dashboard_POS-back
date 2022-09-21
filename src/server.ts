import App from "./App";
import { AppDataSource } from "./data-source";

AppDataSource.initialize();
App.listen(3001);