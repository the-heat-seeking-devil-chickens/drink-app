# DrinkApp

## Description

DrinkApp shows a list of drinks. Each drink contains information about its ingredients, garnish, and directions on how to mix the drink.

You can filter drinks based on their type.

## How to get things running

- Install npm dependencies
- Create an .env file which should contain the following variables

```
   NODE_ENV = development
   PORT = 8080
   MONGO_URI = <YOUR MONGODB URI>
   MONGO_URI_TEST = <YOUR TESTING MONGODB URI>
```

You do not need to create any mongoDB collections; these should auto-create when the app is first started.

## Tech Stack

Frontend is implemented using React
Backend is implemented using Express
Database is implemented using MongoDB
Testing is implemented using Jest

## Iteration

Team DevilChicken added the following functionality to DrinkApp.

- added create / update / delete functionality so that app users can modify the drink list
- added unit tests which can be run with `$ npm run test`
- refactored package.json into a single file
