Setup the Backend

## 1. In the first step we need to install the dependencies that will be used

      **START THE PROJECT**
  - "git init -y" 
      - Config package.json


      **EXPRESS**
  - "npm install express @types/express" 
      - Used to create a Express application for HTTP Requests

  - "npm install --save-dev @types/express" 
      - Used to install express typings 


      **CORS**
  - "npm install cors" 
      - Used to enable CORS in App file

  - "npm install --save-dev @types/cors" 
      - Used to install CORS typings 


      **POSTGRESQL**
  - "npm install pg" 
      - Used by node for interfacing with a PostgreSQL database


      **DOTENV**
  - "npm install dotenv" 
      - Used to load environment variables from a .env file


      **TYPEORM**
  - "npm install typeorm" 
      - Used to encapsulate the code needed to manipulate the data
      - Interact directly with an object in the same language you're using instead of SQL
      - Help with tables manipulation
     

      **UUID**
  - "npm install uuid @types/uuid" 
      - Used to create a random UUID

  - "npm install @types/uuid" 
      - Used to install UUID typings 


      **TYPEORM**
  - "npm install typeorm" 
      - Used to encapsulate the code needed to manipulate the data
      - Interact directly with an object in the same language you're using instead of SQL


      **TYPESCRIPT**
  - "npm install --save-dev typescript" 
      - Used to add optional types to JavaScript


      **TS-NODE-DEV**
  - "npm install --save-dev ts-node-dev" 
      - Used to restart node process when any of required files changes



## 2. In the second step we need to configure the scripts that will be used

  - In the package.json file, look for the "scripts" object and insert the following commands:

      **RUN**
    "dev": "ts-node-dev src/server.ts",
      - Used to run the backend and the database

      **TYPEORM SHORTCUT**
    "typeorm": "ts-node-dev node_modules/typeorm/cli.js",
      - Create a TYPEORM shortcut for the other scripts

      **TYPEORM SHORTCUT**
    "migration:generate": "npx typeorm migration:generate -n",
      - Generate a new migration that will be used to apply changes in the database
      - After the -n you need to insert a name for the migration

      **TYPEORM SHORTCUT**
    "migration:run": "npx typeorm migration:run"
      - Run the migrations



## 3. In the third step we need to configure the .env file

  - We have a base configuration.
  - An .env.example file has been created to help with the configuration

  TYPEORM_CONNECTION = *DB USED*
  TYPEORM_HOST = *DB HOST*
  TYPEORM_USERNAME = *DB USERNAME*
  TYPEORM_PASSWORD =  *DB PASSWORD*
  TYPEORM_DATABASE = *DB NAME*
  TYPEORM_PORT = *DB PORT*
  TYPEORM_MIGRATIONS = *PATH WHERE MIGRATIONS WILL BE CREATED*
  TYPEORM_MIGRATIONS_DIR = *IDK WHAT IT DOES*
  TYPEORM_ENTITIES = src/entities/*.ts *PATH WHERE ENTITIES (TABLES) WILL BE LOCATED*
  TYPEORM_ENTITIES_DIR = *IDK WHAT IT DOES*



## 4. In the fourth step we can start coding.

  - We need some things to run the correctly the backend:

    --> Create the *routes file* and create define a router const

    --> Create the *App file* and define a class that will be used to start the server

      - Create a *Server constant* and instantiate it as a *express application*

      - Setup the *Server constant* to use the *middlewares* (cors and express.json()) and the *routes constant*.



## 5. In the fifth step we will create some directories that will be needed

  - By this step we need to have already created the *Routes.ts*, *App.ts* and *Server.ts* files

  - Inside *src dir* we will need to create the following directories:

    - *controllers*: They are like a bridge between HTTP/REST API requests and the database

    - *database*: Will be used to store migrations and to store the file that create db connection with the project

      - *migrations*: Will be the directory where migrations will be stored

    - *entities*: Will be used to store the entities that will be read and used to create the tables in the database


## 6. In the sixth step we will stablish the connection with database

  - Look for the *./database/index.ts* file and open it.

  - Import the *createConnection* method from typeorm and just run it


## 7. Create the entities