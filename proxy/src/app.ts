import express from "express";
import axios from "axios";
import cors from 'cors';

const app = express();
const port = 8000;

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

app.use(express.json());

app.get("/api", (_, res) => {
  res.json("Hello API");
});

app.get("/api/.user", (_, res) => {
  axios.get("http://nginx/api/hello").then((onfulfilled) => {
    res.json(onfulfilled.data);
  });
});
//http://car:5000
app.post("/api/.user/login", (req, res) => {
  axios.post("http://nginx/api/login_check", {
    username: req.body.username,
    password: req.body.password
  }).then((onfulfilled) => {
    res.send(onfulfilled.data);
  });
});

app.get("/api/admin", (_, res) => {
  axios.get("http://nginx/api/admin").then((onfulfilled) => {
    res.send(onfulfilled.data);
  });
});

app.get("/api/checkrole", (req, res) => {
  axios.post("http://nginx/api/checkrole", {
    role: req.body.role
  }).then((onfulfilled) => {
    res.send(onfulfilled.data);
  });
});

// axios.get("http://nginx/api/hello").then((onfulfilled) => {
//  console.log(onfulfilled.data);
// });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
