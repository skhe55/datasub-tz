# Datasub - тестовое задание

## Описание 

*Создать приложение приема платежей (client / server)*


## Deploying

### Server Api
*По пути server/src/app.module.ts вписать свои имя пользователя, пароль базы данных.*
`MongooseModule.forRoot('mongodb+srv://${USER}:${PASSWORD}@cluster0.knie3.mongodb.net/payments?retryWrites=true&w=majority')`

**Описание эндпоинтов API будет доступно по адресу http://localhost:3001/api**

`yarn`

`yarn start:dev` - *dev environment*

`yarn start:prod` - *production version*

### Client

`yarn`

`yarn dev` - *dev environment*

`yarn build` - *build project*

---
## Stack

**Client** - *Next Js, MUI*

**Server** - *Nest Js, Mongoose*

