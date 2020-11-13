import express from 'express';
import cors from 'cors';
import path from 'path';
import template from './src/template';
import serverSideRender from './src/server';
import data from './assets/data.json'

const app = express();

app.use(cors());
// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

const initialState = {

	isPending: false,
	people: data,
	error: '',
  characterCounter: false
}

// server-side rendered page
app.get('/server', (req, res) => {
  const { preloadedState, content}  = serverSideRender(initialState);
  const response = template("Server-Side Rendered Page", preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

// client=side rendered page
app.get('/client', (req, res) => {
  let response = template('Client-Side Rendered page');
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});


app.listen(3000, ()=> {

	console.log('App is running on port 3000');

});