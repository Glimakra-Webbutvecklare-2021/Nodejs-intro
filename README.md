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

OBS - om servern startas om och en port redan används av systemet visas ett felmeddelande i stil med
`...listen EADDRINUSE...` 

Ge följande kommando för att avbrta processen
`taskkill /F /IM node.exe`

# Ge ett svar med html - inte bara vanlig text...
mimetype

# Filer
För att skicka innehåll som finns i en fil - ex index.html, krävs att servern kan läsa innehållet från en fil... med core modulen fs

Skapa en fil som servern ska kunna läsa - ofta en mapp namngiven *public* eller *public_html*