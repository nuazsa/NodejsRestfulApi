# API for Todo List

> A simple and efficient API designed to manage your to-do list. Add, view, and organize your tasks effortlessly.

## Endpoint
`http://127.0.0.1:3000`

### Get All Todo
- URL
    - `/todos`
- Method
    - `GET`
- Response
```
{
  "code": 200,
  "status": "OK",
  "data": {
    "id": 0,
    "todo" "cooking at 12pm"
}
```

### Create Todo
- URL
    - `/todos`
- Method
    - `POST`
- Request Body
    - `todo` as `string`
- Response
```
{
  "code": 200,
  "status": "OK",
  "data": {
    "id": 0,
    "todo" "cooking at 12pm"
}
```

### Update Todo
- URL
    - `/todos`
- Method
    - `PUT`
- Request Body
    - `id` as `int`
    - `todo` as `string`
- Response
```
{
  "code": 200,
  "status": "OK",
  "data": {
    "id": 0,
    "todo" "cooking at 12pm"
}
```

### Delete Todo By Id
- URL
    - `/todos`
- Method
    - `DELETE`
- Response
```
{
  "code": 200,
  "status": "OK",
  "data": {
    "id": 0,
    "todo" "cooking at 12pm"
}
```
