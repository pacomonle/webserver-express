## Código fuente del proyecto

```
npm install
```
# ver el paquete de NODEjs -> HTTP para montar un webserver
# npm init
# npm install express --save
# npm i nodemon --save (script en el package.json)
# npm i hbs --save

## heroku
instalar cli (comprobar version heroku -v)
crear script start en el package.json
heroku login

crear archivo git ignore - incluir node_modules/
iniciar repositorio git init
git status
git add .
git commit -m "first commit"
git status

heroku git:remote -a <nombre del proyecto creado en heroku>
git push heroku master
heroku open