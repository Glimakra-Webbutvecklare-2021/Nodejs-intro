# Nodejs-intro


Initiera ett nytt Node.js projekt
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

#### Branch 1-hello
Visa texten Hello World

#### Branch 2-html
Skicka html

#### Branch 3-file
Skicka innehållet från en html fil - läs fil från filsystem 

#### Branch 4-mime
Skicka innehåll med rätt innehållstyp