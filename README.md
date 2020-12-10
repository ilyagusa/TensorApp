# Чат-бот "Внутри Лапенко"
Проект выполнен  в рамках курса "Усправление разработкой програмного обеспечения"

Команда: [Илья Гусев](https://github.com/ilyagusa), [Влад Кононов](https://github.com/VladosKON), [Полина Бурилло](https://github.com/BurilloPolina), [Саша Домашина](https://github.com/SashaDomashina)

# Установка
Перед установкой проекта необходимо самостоятельно установить:
```
python:v3.0+ 
nodejs:latest
```
## Установка Back-end
```
cd api
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```
## Установка Front-end
```
cd &{PROJECT_APP}
npm install
```
## Запуск проекта
```
npm run start-api
npm start
```
### Очиска истории сообщений (in browser)
```
localhost:5000/messages/delete
```
