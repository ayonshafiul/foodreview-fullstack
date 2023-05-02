# foodreview
### (Serves as the backend for the android app on [foodreview-android](https://github.com/ayonshafiul/foodreview-android))


A simple food review app with a dedicated admin panel for restaurant owners and restaurant homepage allowing users to leave rating and reviews about their experiences.



```
--|frontend folder contains frontend built using react.
--|backend folder contains controller, model contains the other parts of the project that is built following the mvc pattern.
```

- Create a .env file with filling in with following variables

```

PORT=
DB_NAME=
DB_HOST=
DB_USER=r
DB_PASSWORD=
JWT_SECRET=
JWT_ADMIN_SECRET=

```

- create mysql tables using tables defined in sql_tables

- install dependencies using

```
npm install

```

- start the backend server using

```
node app.js
```

- go to view folder and install react dependencies and start frontend using

```
npm install
npm start
```
