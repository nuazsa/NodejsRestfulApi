import { createServer } from "node:http";
import { TodolistService } from "./service.mjs";

const service = new TodolistService();

const server = createServer((req, res) => {
  if (req.method === "GET") {
    service.getTodoList(req, res);
  } else if (req.method === "POST") {
    service.createTodo(req, res);
  } else if (req.method === "PUT") {
    service.updateTodo(req, res);
  } else if (req.method === "DELETE") {
    service.updateTodo(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        code: 404,
        status: "Not Found",
        message: "Route not found",
      })
    );
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
