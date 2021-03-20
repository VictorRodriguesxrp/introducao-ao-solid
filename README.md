# introducao-ao-solid

Application developed during the [Rocketseat](https://rocketseat.com.br/) Ignite-Bootcamp.
It consists in an application to pratice some concepts about the SOLID. 

## Installing
```
$ yarn
```
Or:
```
$ npm install
```

## Configuring

# Usage
To start up the app run:
```
$ yarn dev
```
Or:
```
$ npm run dev
```
## Routes
|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/users`|POST|Body with user `name` and `email`.|Create a new user, multiple users with same e-mail can't be created.
|`//users/:user_id/admin`|PATCH| `id` in the route params |Turns the user with given id in a Admin User.
|`/users/:user_id`|GET|`Id` send in route params.|List a user profile, the user and it's propertys.
|`/users`|GET|You must send `id` in the headers.| It will list all users in project, but only if the user who are sending the request (by the id in the header) is a Admin. 

----
## Running the tests
The application use: [Jest](https://jestjs.io/).
```
$ yarn test
```
Or:
```
$ npm run test
```
![testes1](https://user-images.githubusercontent.com/64935593/111876300-ee2feb80-897c-11eb-90df-c1e5e4703e2a.PNG)
![testes2](https://user-images.githubusercontent.com/64935593/111876299-ed975500-897c-11eb-9d19-4fc026c30b64.PNG)
