# aoebetting

- package.json  
- tsconfig.json typescript configuration file
- dist /        will contain the compiled JavaScript files
- node_modules/ packages installed by npm
- src/          will contain all of our TypeScript source code
  - config/         will contain our configuration files
  - controllers/    controller files that handle simple logic of http request of our app
  - services/	    service files that handle communication between api/database and controllers and domain logic
  - database        files that handle the communication with our database and repositories
  - lib/            misc. features that don't belong anywhere else
  - middleware/     middleware functions for our Express app
  - models/         classes to define the models used in our app
- server.ts         class to handle the Express server
- app.ts            Entry point of our app code



to run app:
 1. npm install
    this will install all the dependencies.
    
 2. npm run dev
	this will monitor changes in typescript files, compile them and restart the server
	default port 4000: http://localhost:4000 to see the api request.

