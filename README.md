# Простой REST на typescript.

## Технологии

* typescript
* restify
* typeorm

## Старт проекта

##### Склонируйте репозиторий и перейдите в папку проекта

```
git clone https://github.com/zahar517/Rest-typeorm-example.git
```

##### Установите модули локально

```
npm install | yarn install
```

##### Запустите postgres database server

```
postgres -D /path/to/db
```

##### Запустите сборку проекта

```
DATABASE_TYPE=postgres DATABASE_NAME=test DATABASE_USERNAME=test DATABASE_PASSWORD=test DATABASE_HOST=localhost DATABASE_PORT=5432 npm start | yarn start
```
или отредактируйте в файле ```./src/index.ts``` настройки базы данных