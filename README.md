# Чат-бот "Внутри Лапенко"
Проект выполнен  в рамках курса "Усправление разработкой програмного обеспечения"

Бот присылает мемы и видео. У приложения есть персонажи, каждый из которых отвечает за свою тематику. В общем канале все сообщения собираются по хронологии.

Команда: [Илья Гусев](https://github.com/ilyagusa), [Влад Кононов](https://github.com/VladosKON), [Полина Бурилло](https://github.com/BurilloPolina), [Саша Домашина](https://github.com/SashaDomashina)

# Установка
Перед установкой проекта необходимо самостоятельно установить:
```
python:v3.0+ 
nodejs:latest
```
Также перед установкой в файле ./package.json необходимо изменить абсолютный путь до проекта в **PATH_TO_PROJECT**
```
{
    "scripts": {
        "start-api": "cd api && (PATH_TO_PROJECT)/api/venv/Scripts/flask.exe run"
    }
}
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
