# SL Application will get a list of people from the SalesLoft API

After cloning the project:

In order to use the SalesLoft API correctly you should follow next steps:

1.-Create a .env file at project root.
2.-Add the API URL and the API key to the file like the next example:
API_URL=https://api.salesloft.com/v2/people.json
BEARER_TOKEN=mytoken
If you are having issues with CORS please add the next URL:
API_URL=https://cors-anywhere.herokuapp.com/https://api.salesloft.com/v2/people.json
This heroku server is going to help us handling the API response and add the neccessary headres to it so the frontend code will have access to the response.
3.-Run npm start

Server-Side rendering will be available at: http://localhost:3000/server

Client-Side rendering will be available at: http://localhost:3000/client
