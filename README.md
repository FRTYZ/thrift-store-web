# Thrift Store Web (Frontend) | PERN Stack

## Desktop
![alt text](https://github.com/FRTYZ/thrift-store-web/main/public/home-desktop.png)

## Mobile
![alt text](https://github.com/FRTYZ/thrift-store-web/main/public/home-mobile.png)

## Hello Everyone
I developed a sample project where second-hand clothes can be sold. as a design, I resembled sites such as "www.dolap.com". in addition, it is a project where I developed my own design skills.

I used NodeJS (Express), PostgreSQL, JWT, Redis with Typescript to create RESTful API service as backend. 

As frontend, I created React with Typescript, I used Redux for State and Material UI for CSS framework.
 
### Features
* ReactJS with Typescript 
* Material UI
* Redux

### Features in development
* The chat feature between users is being developed.

## Live Demo
https://thrift-store-web.vercel.app/

## Requirements
* NodeJS (min v20.10.0)

## How to install

* ### STEP 1: You need to install the backend side to your local
    * [Thrift Store Backend](https://github.com/FRTYZ/thrift-store-backend)

* ### STEP 2: Make sure that the backend is running on port 8080.

* ### STEP 3: Create the ".env" file. and add the following
  
```
VITE_GRANT_TYPE = client_credentials
VITE_CLIENT_ID = thrift_store_client
VITE_CLIENT_SECRET = 7f68ee6df7739cda
VITE_ENDPOINT = http://localhost:8080
```  

* ### STEP 4: install all packages with the command
```
npm install
npm run dev
```

* ### 🎉 The project will run on port 5173

## Package.json

```
{
  "name": "thrift-store-web",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@fontsource/roboto": "^5.0.13",
    "@mui/icons-material": "^5.15.17",
    "@mui/material": "^5.15.17",
    "@mui/styled-engine-sc": "^6.0.0-alpha.18",
    "@reduxjs/toolkit": "^2.2.4",
    "formik": "^2.4.6",
    "jwt-decode": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-material-ui-carousel": "^3.4.2",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.23.1",
    "react-slugify": "^3.0.3",
    "styled-components": "^6.1.11",
    "sweetalert2": "^11.11.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
```


Good Encodings