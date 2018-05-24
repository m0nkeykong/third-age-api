'use strict';

var express = require('express'),
    app = express(),
    ROOT = './html',
    path = require('path'),
    bodyParser = require('body-parser'),
    oldppl = require('./oldppl');
const port = process.env.PORT || 3000;

app.use('/assets', express.static(`${__dirname}/${ROOT}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//deal with login   ><((*>
app.all('*',  (req, res, next) => { 
    console.log('user is logged in');
    next();
});
//<*))><

//deal with default page request   ><((*>
app.get('/', (req, res) => {            
    res.sendFile(`${__dirname}/${ROOT}/index.html`);
});
//<*))><

//getAllProducts request - return json   ><((*>
app.get('/getAllProducts', (req, res) => {      
    res.setHeader('Content-Type', 'application/json');
    res.set('header-one', 'getAllProducts method GET');
    res.status(200).json(oldppl.getAllData());
});

app.post('/getAllProducts', (req, res) => { 
    res.setHeader('Content-Type', 'application/json');
    res.set('header-one', 'getAllProducts method POST');
    res.status(200).json(oldppl.getAllData());
});
//<*))><

//getProductById request - return json   ><((*>
app.get('/getProductByAuthor/:prodID', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.set('header-one', 'getProductByAuthor method GET');
    res.status(200).json(oldppl.getProductByAuthor(req.params.prodID));
});

app.post('/getProductByAuthor', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.set('header-one', 'getProductByAuthor method POST');
    res.status(200).json(oldppl.getProductByAuthor(req.body.prodID));
});
//<*))><

//getProductUnderPrice request - return products under or equal to inserted price   ><((*>
app.get('/getProductUnderPrice/:highestPrice', (req, res) => { 
    res.setHeader('Content-Type', 'application/json');
    res.set('header-one', 'getProductUnderPrice method GET');
    res.status(200).send(oldppl.getProductUnderPrice(req.params.highestPrice));
});

app.post('/getProductUnderPrice', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.set('header-one', 'getProductUnderPrice method POST');
    res.status(200).json(oldppl.getProductUnderPrice(req.body.highestPrice));
});
//<*))><

//getProductByPriceAndAuthor request - return products under or equal to inserted price and same author   ><((*>
app.get('/getProductByPriceAndAuthor/:highestPrice/:author', (req, res) => { 
    res.setHeader('Content-Type', 'application/json');
    res.set('header-one', 'getProductByPriceAndAuthor method GET');
    res.status(200).json(oldppl.getProductByPriceAndAuthor(req.params.highestPrice, req.params.author));
});

app.post('/getProductByPriceAndAuthor', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.set('header-one', 'getProductByPriceAndAuthor method POST');
    res.status(200).json(oldppl.getProductByPriceAndAuthor(req.body.highestPrice, req.body.author));
});

app.put('/getProductByPriceAndAuthor', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.set('header-one', 'getProductByPriceAndAuthor method PUT');
    res.status(200).json(oldppl.getProductByPriceAndAuthor(req.body.highestPrice, req.body.author));
});
//<*))><

//fallback - deal with unknown page request   ><((*>
app.all('*', (req, res, next) => {            
    console.log('requested page not found');
    res.status(404).sendFile(`${__dirname}/${ROOT}/404.html`);
});
//<*))><

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});