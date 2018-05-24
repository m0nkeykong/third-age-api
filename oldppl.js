"use strict";
var connection = require('./mongoose_connect');

global.temp = [];
//class of polls
class OldPPL {
    //constructor
    constructor() {
    }

    //return all data from json 
    getAllData() { 
        connection.find({},
            (err, document) => {
                if (err)
                    console.log(`query error: ${err}`);
                console.log(`${document}`);
                temp = [];
                temp = document;    
            }
        ),
        err => {
            console.log(`connection error: ${err}`);
            temp = err;
        };
        return temp;
    }

    //return products from the same author
    getProductByAuthor(_author){
        connection.findOne({author : _author },
            (err, document) => {
                if (err)
                    console.log(`query error: ${err}`);
                
                console.log(document);
                temp = [];
                temp = document;
            }
        ),
        err => {
            console.log(`connection error: ${err}`);
            temp = err;
        };
        return temp;
    }

    //return products under or equal to requsted price
    getProductUnderPrice(highestPrice) {
        connection.find({},
            (err, document) => {
                if (err)
                    console.log(`query error: ${err}`);
                
                console.log(`${document}`);
                
                temp = [];
                for (let i in document) {
                    for(let j in document[i].books)
                    if (document[i].books[j].price <= highestPrice){
                        temp.push(`Author: ${document[i].author}`);
                        temp.push(document[i].books[j]);
                    }
                }
            }
        ),
        err => {
            console.log(`connection error: ${err}`);
            temp = err;
        };
        return temp;
    }

    //return products under or equal to requsted price and from author
    getProductByPriceAndAuthor(highestPrice, _author){
        connection.find({author : _author},
            (err, document) => {
                if (err)
                    console.log(`query error: ${err}`);
                
                temp = [];
                temp.push(document[0].author);
                
                for(let i in document[0].books){
                    if(document[0].books[i].price <= highestPrice)
                        temp.push(document[0].books[i]);
                }
                console.log(temp);
            }
        ),
        err => {
            console.log(`connection error: ${err}`);
            temp = err;
        };
        return temp;
    }
}

module.exports = new OldPPL;