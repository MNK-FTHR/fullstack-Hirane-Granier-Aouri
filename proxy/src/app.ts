import express from "express";
import axios from "axios";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/api", (_, res) => {
  res.send("Hello API");
});

app.get("/api/.user", (_, res) => {
  axios.get("http://nginx/api/hello").then((onfulfilled) => {
    res.send(onfulfilled.data);
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

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
