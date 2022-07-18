# User Management API

A Simple User Management node-express REST API Application

## Developed With

- NodeJs
- ExpressJs
- MongoDb
- Mongoose

## Routes

| Routes                               | Description            |
| ------------------------------------ | ---------------------- |
| [POST] /api/v1/users/signup          | Create a new user      |
| [POST] /api/v1/users/login           | Login a user           |
| [PATCH] /api/v1/users/updatePassword | Update a user password |
| [PATCH] /api/v1/users/updateUser     | Update a user data     |
| [DELETE] /api/v1/users/deleteUser    | Delete a user          |

## Implemented sending automated emails from the app

When a user successfully signup on the app, an email is sent to the user's email account.

![](../../Documents/altSchool/Screenshot%202022-07-18%20180742.png)

