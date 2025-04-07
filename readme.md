----------------------------------
ESPANHOL
----------------------------------

## Prueba NODE

- Crear un CRUD (API REST) en Node para el registro de usuarios.
- Para la creación de la prueba, utilizar un repositorio falso de usuarios (puede ser en memoria).

## Reglas

- Debe existir un usuario administrador previamente registrado para utilizar la autenticación (no es necesario cifrar la contraseña):
{
  "name": "admin",
  "email": "admin@spsgroup.com.br",
  "type": "admin",
  "password": "1234"
}

- Crear una ruta de autenticación (token Jwt).
- Las rutas de la API solo pueden ser ejecutadas si el usuario está autenticado.
- Debe ser posible añadir usuarios con los campos: email, nombre, type, password.
- No debe ser posible registrar un correo electrónico ya existente.
- Debe ser posible eliminar usuarios.
- Debe ser posible modificar los datos de un usuario.


Esta API RESTful está diseñada para gestionar usuarios en un sistema. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los usuarios, con autenticación mediante JSON Web Token (JWT). 

## Rutas de la API

La API está disponible en `http://localhost:3000/api/users/`.

### Rutas de Usuarios

Todas las rutas, excepto `/api/users/login`, requieren autenticación mediante un token JWT. El token debe incluirse en el encabezado de la solicitud con el formato `Authorization: Bearer <tu_token_aqui>`.

### Métodos HTTP

#### **POST** - `/api/users/login`
- **Descripción**: Inicia sesión y obtiene un token JWT para autenticarse.
- **Cuerpo de la solicitud (JSON)**:
  ```json
  {
    "email": "admin@spsgroup.com.br",
    "password": "1234"
  }

#### **GET** - `/api/users`
- **Descripción**: Obtiene todos los usuarios.
- **Autenticación**: Requiere un token JWT.

#### **POST** - `/api/users`
- **Descripción**: Crea un nuevo usuario.
- **Autenticación**: Requiere un token JWT.
- **Cuerpo de la solicitud (JSON)**:
  ```json
  {
  "name": "Carlos Gómez",
  "email": "carlos@example.com",
  "type": "admin",
  "password": "123456"
  }

#### **PUT** - `/api/users/:id`
- **Descripción**: Actualiza la información de un usuario específico por su ID.
- **Autenticación**: Requiere un token JWT.
- **Cuerpo de la solicitud (JSON)**:
  ```json
  {
  "name": "Carlos Gómez",
  "email": "carlos@example.com",
  "type": "admin",
  "password": "123456"
  }

#### **DELETE** - `/api/users/:id`
- **Descripción**: Elimina un usuario específico por su ID.
- **Autenticación**: Requiere un token JWT.

#### **GET** - `/api/users/:id`
- **Descripción**: Obtiene un usuario específico por su ID.
- **Autenticación**: Requiere un token JWT.

----------------------------------
PORTUGUÊS
----------------------------------

# Teste NODE

- Criar um CRUD (API REST) em node para cadastro de usuários
- Para a criação do teste utilizar um repositório fake dos usuários. (Pode ser em memória)

## Regras

- Deve existir um usuário admin previamente cadastrado para utilizar autenticação (não precisa criptografar a senha);
  {
    name: "admin",
    email: "admin@spsgroup.com.br",
    type: "admin"
    password: "1234"
  }

- Criar rota de autenticação (Jwt token)
- As rotas da API só podem ser executadas se estiver autenticada
- Deve ser possível adicionar usuários. Campos: email, nome, type, password
- Não deve ser possível cadastrar o e-mail já cadastrado
- Deve ser possível remover usuário
- Deve ser possível alterar os dados do usuário

## Rotas da API

A API está disponível em `http://localhost:3000/api/users/`.

### Rotas de Usuários

Todas as rotas, exceto `/api/users/login`, requerem autenticação por meio de um token JWT. O token deve ser incluído no cabeçalho da solicitação no formato `Authorization: Bearer <seu_token_aqui>`.

### Métodos HTTP

#### **POST** - `/api/users/login`
- **Descrição**: Faz login e obtém um token JWT para autenticação.
- **Corpo da solicitação (JSON)**:
  ```json
  {
    "email": "admin@spsgroup.com.br",
    "password": "1234"
  }

#### **GET** - `/api/users`
- **Descrição**: Obtém todos os usuários.
- **Autenticação**: Requer um token JWT.

#### **POST** - `/api/users`
- **Descrição**: Cria um novo usuário.
- **Autenticação**: Requer um token JWT.
- **Corpo da solicitação (JSON)**:
  ```json
  {
    "name": "Carlos Gómez",
    "email": "carlos@example.com",
    "type": "admin",
    "password": "123456"
  }

#### **PUT** - `/api/users/:id`
- **Descrição**: Atualiza as informações de um usuário específico pelo seu ID.
- **Autenticação**: Requer um token JWT.
- **Corpo da solicitação (JSON)**:
  ```json
  {
    "name": "Carlos Gómez",
    "email": "carlos@example.com",
    "type": "admin",
    "password": "123456"
  }

#### **DELETE** - `/api/users/:id`
- **Descrição**: Exclui um usuário específico pelo seu ID.
- **Autenticação**: Requer um token JWT.

#### **GET** - `/api/users/:id`
- **Descrição**: Obtém um usuário específico pelo seu ID.
- **Autenticação**: Requer um token JWT.
