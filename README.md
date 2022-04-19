# Nodejs-intro

# Initiera ett nytt Node.js projekt med npm init
`npm init`

Se till att skapa en fil som motsvaras av namnet - entry point - den fil som startar webbservern, ex:
server.js

Se dokumentation i server.js

Starta server med kommando:
`node server.js`

Vid felmeddelande så beror det på att ES6 använder moduler
- lägg till följande i package.json
"type": "module",

Starta om server genom att först avbryta med CTRL+C, därefter starta: 
`node server`