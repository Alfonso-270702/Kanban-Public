# Kanban

## POST /register
Register so user can access kanban

### Properties
- name (string)
- email (string)
- password (string)

### Request Body
``` javascript
{
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "password": "1234"
}
```

### Response
Status 201
``` javascript
    {
        "msg": "John Doe successfully register"
    }
```
Status 400
``` javascript
{
    "errors":[
      "error_name"
    ]
}
```
Status 500
``` javascript
{
    "errors":{
      "internal server error"
    }
}
```
<br>

## POST /login
Login if user want to CRUD todo list

### Properties
- email (string)
- password (string)

### Request Body
``` javascript
{
    "email": "johndoe@gmail.com",
    "password": "1234"
}
```

### Response
Status 200
``` javascript
{
  "msg": "Jane Doe successfully login",
  "token": "<user_token>"
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```

Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## GET /kanban
Get All Kanban list

### Properties
- title (string)
- author (string)
- category (string)
- userId (integer)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

### Response
Status 200
``` javascript
{
   "data": [
        {
            "id": 1,
            "title": "Liburan ke Bali",
            "category": "backlog",
            "author": "Alfonso",
            "userId": 1,
            "createdAt": "2020-07-17T07:23:46.804Z",
            "updatedAt": "2020-07-17T07:23:46.804Z"
        }
    ]
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## POST /kanban
Create kanban

### Properties
- title (string)
- author (string)
- category (string)
- userId (integer)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

## Request Body
``` javascript
{
    "data": {
        "id": (string),
        "title": (string),
        "author": (string),
        "category": (string),
        "userId" :(integer)
    }
}
```

### Response
Status 201
``` javascript
{
    "data": {
        "id": 1,
        "title": "title",
        "author": "author",
        "category": "category",
        "userId": 1,
        "createdAt": "2020-07-15T11:12:05.376Z",
        "updatedAt": "2020-07-15T11:13:16.220Z"
    }
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## PUT /kanban/:id
Update user Kanban

### Properties
- title (string)
- author (string)
- category (string)
- userId (integer)
- id (integer)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

## Request Body
``` javascript
{
    "data": {
        "id": 1,
        "title": "title",
        "author": "author",
        "category": "category",
        "userId": 1,
    }
}
```

### Response
Status 200
``` javascript
{
  msg:'successfully edit kanban'
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 404
``` javascript
{
    "errors": [
      "ERROR! Not Found"
    ]
}
```

Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## DELETE /kanban/:id
Delete user Kanban

### Properties
- id (integer)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

## Request Params
``` javascript
{
  "id": "user_id",
}
```

### Response
Status 200
``` javascript
{
  msg:'successfully delete kanban'
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 404
``` javascript
{
    "errors": [
      "ERROR! Not Found"
    ]
}
```

Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## POST /googlelogin
Register with google 

### Request Body
``` javascript
{
  "id_token" = (string)
}
```

### Response

Status 200
``` javascript
  {
    "token": (string)
  }
```

Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>