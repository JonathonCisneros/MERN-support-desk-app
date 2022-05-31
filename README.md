# Support Desk App

Users can create an account and create tickets for product issues such as a cracked iPhone screen. This app is frontend to backend and utilizes MongoDB, Express, React, and Node (MERN) stack.

## MongoDB Setup

1. Create an account [here](https://cloud.mongodb.com/)
2. Create organization with MongoDB Atlas service
3. Create project
4. Build database
   1. Cloud Provider: aws
   2. Name the cluster
   3. Create cluster
5. Security Quitckstart
   1. Create username and password (for authentication to read and write to database)
   2. Connect from _My Local Environment_
   3. Enter you IP Address
6. Connect
   1. _Connect your application_
   2. Node.js
   3. Add URL to .env file in root folder

## Environment Variables

```
NODE_ENV = development
PORT = 5000
MONGO_URI = mongodb+srv://<username>:<password>@c<cluster-name>.nu1wg.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET = abc123
```

## Usage

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```
