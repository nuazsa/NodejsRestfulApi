export class TodolistService {
  todoList = [];

  getJsonTodoList() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todoList.map((val, index) => {
        return {
          id: index,
          todo: val
        }
      })
    });
  }

  getTodoList(req, res) {
    res.write(this.getJsonTodoList());
    res.end();
  }

  createTodo(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todoList.push(body.todo);

      res.write(this.getJsonTodoList());
      res.end()
    });
  }

  updateTodo(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todoList[body.id] = body.todo;

      res.write(this.getJsonTodoList());
      res.end()
    });
  }

  deleteTodoById(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todoList.splice(body.id, 1);

      res.write(this.getJsonTodoList());
      res.end();
    });
  }
}