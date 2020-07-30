// 'use strict';

const firebase = require('firebase');
const {each} = require('jquery');
require('firebase/database');

const yelp = require('yelp-fusion');
const keys = require('./keys');
const client = yelp.client(keys.yelpKey);
firebase.initializeApp(keys.firebase);

const database = firebase.database();
const deliverySection = database.ref('delivery');

// // // get data from yelp 
// const newLocation = 'chicago, il';
// client.transactionSearch('delivery', {
//     location: newLocation
// }).then(data => {
//     console.log(data.jsonBody.businesses);

//     for (let i = 0; i < data.jsonBody.businesses.length; i++) {

//         let name = data.jsonBody.businesses[i].name;
//         let location = data.jsonBody.businesses[i].location;
//         let phone = data.jsonBody.businesses[i].display_phone;
//         let transactions = data.jsonBody.businesses[i].transactions;
//         let rating = data.jsonBody.businesses[i].rating;
//         let url = data.jsonBody.businesses[i].url;

//         let deliveryObject = {
//             name: name,
//             location: location,
//             phone: phone,
//             transactions: transactions,
//             rating: rating,
//             url: url
//         }
//         deliverySection.push(deliveryObject);
//         console.log(deliveryObject);

//     }
// }).catch(e => {
//     console.log(e);
// });

const restaurantName = document.querySelector('.name');
const restaurantLocation = document.querySelector('.location');
const restaurantPhone = document.querySelector('.phone');
const restaurantRating = document.querySelector('.rating');
const restaurantUrl = document.querySelector('.url-link');
const restaurantLink = document.querySelector('.url');
const navBar = document.querySelector('nav');

// get restaurant
const btnLa = document.querySelector('.city-la');
btnLa.addEventListener('click', getLaDeliveries);

function getLaDeliveries() {
    clear()
    database.ref('delivery').on('value', function (results) {
        const allDeliveries = results.val();

        const allIDs = Object.keys(allDeliveries);
        // let lengthOfIDs = allIDs.length;
        const min = 16;
        const max = 40;
        let randomNumber = Math.floor(Math.random() * (+max - +min) + +min);
        let randomID = allIDs[randomNumber];
        let eachDelivery = allDeliveries[randomID];

        let name = eachDelivery.name;
        let location = ` Address: ${eachDelivery.location.display_address[0]} ${eachDelivery.location.display_address[1]}`;
        let phone = ` Phone: ${eachDelivery.phone}`;
        let rating = ` Rating: ${eachDelivery.rating}`;
        let url = `${eachDelivery.url}`;

        if (eachDelivery.location.city === 'Los Angeles') {
            addHtml(name, location, phone, rating, url);
        } else {
            closed();
        }
        goBack()
    })
};

const btnSf = document.querySelector('.city-sf');
btnSf.addEventListener('click', getSfDeliveries);

function getSfDeliveries() {
    clear()
    database.ref('delivery').on('value', function (results) {
        const allDeliveries = results.val();

        const allIDs = Object.keys(allDeliveries);
        // let lengthOfIDs = allIDs.length;
        const min = 37;
        const max = 60;
        let randomNumber = Math.floor(Math.random() * (+max - +min) + +min);
        let randomID = allIDs[randomNumber];
        let eachDelivery = allDeliveries[randomID];
        
        let name = eachDelivery.name;
        let location = ` Address: ${eachDelivery.location.display_address[0]} ${eachDelivery.location.display_address[1]}`;
        let phone = ` Phone: ${eachDelivery.phone}`;
        let rating = ` Rating: ${eachDelivery.rating}`;
        let url = `${eachDelivery.url}`;
            
        if (eachDelivery.location.city === 'San Francisco') {
            addHtml(name, location, phone, rating, url);
        }else {
            closed();
            }
        goBack()
    })
};

const btnSd = document.querySelector('.city-sd');
btnSd.addEventListener('click', getSdDeliveries);

function getSdDeliveries() {
    clear()
    database.ref('delivery').on('value', function (results) {
        const allDeliveries = results.val();

        const allIDs = Object.keys(allDeliveries);
        // let lengthOfIDs = allIDs.length;
        const min = 0;
        const max = 20;
        let randomNumber = Math.floor(Math.random() * (+max - +min) + +min);
        let randomID = allIDs[randomNumber];
        let eachDelivery = allDeliveries[randomID];

        let name = eachDelivery.name;
        let location = ` Address: ${eachDelivery.location.display_address[0]} ${eachDelivery.location.display_address[1]}`;
        let phone = ` Phone: ${eachDelivery.phone}`;
        let rating = ` Rating: ${eachDelivery.rating}`;
        let url = `${eachDelivery.url}`;

        if (eachDelivery.location.city === 'San Diego') {
            addHtml(name, location, phone, rating, url);
        } else {
            closed();
        }
        goBack()
        })
};

const btnNyc = document.querySelector('.city-nyc');
btnNyc.addEventListener('click', getNycDeliveries);

function getNycDeliveries() {
    clear()
    database.ref('delivery').on('value', function (results) {
        const allDeliveries = results.val();

        const allIDs = Object.keys(allDeliveries);
        // let lengthOfIDs = allIDs.length;
        const min = 57;
        const max = 80;
        let randomNumber = Math.floor(Math.random() * (+max - +min) + +min);
        let randomID = allIDs[randomNumber];
        let eachDelivery = allDeliveries[randomID];

        let name = eachDelivery.name;
        let location = ` Address: ${eachDelivery.location.display_address[0]} ${eachDelivery.location.display_address[1]}`;
        let phone = ` Phone: ${eachDelivery.phone}`;
        let rating = ` Rating: ${eachDelivery.rating}`;
        let url = `${eachDelivery.url}`;

        if (eachDelivery.location.city === 'New York') {
            addHtml(name, location, phone, rating, url);
        } else {
            closed();
        }
        goBack()
        })
};

const btnPhx = document.querySelector('.city-phx');
btnPhx.addEventListener('click', getPhxDeliveries);

function getPhxDeliveries() {
    clear()
    database.ref('delivery').on('value', function (results) {
        const allDeliveries = results.val();

        const allIDs = Object.keys(allDeliveries);
        // let lengthOfIDs = allIDs.length;
        const min = 77;
        const max = 82;
        let randomNumber = Math.floor(Math.random() * (+max - +min) + +min);
        let randomID = allIDs[randomNumber];
        let eachDelivery = allDeliveries[randomID];

        let name = eachDelivery.name;
        let location = ` Address: ${eachDelivery.location.display_address[0]} ${eachDelivery.location.display_address[1]}`;
        let phone = ` Phone: ${eachDelivery.phone}`;
        let rating = ` Rating: ${eachDelivery.rating}`;
        let url = `${eachDelivery.url}`;

        if (eachDelivery.location.city === 'Phoenix') {
            addHtml(name, location, phone, rating, url);
        } else {
            closed();
        }
        goBack()
        })
};

const btnChi = document.querySelector('.city-chi');
btnChi.addEventListener('click', getChiDeliveries);

function getChiDeliveries() {
    clear()
    database.ref('delivery').on('value', function (results) {
        const allDeliveries = results.val();
        
        const allIDs = Object.keys(allDeliveries);
        // let lengthOfIDs = allIDs.length;
        const min = 77;
        const max = 82;
        let randomNumber = Math.floor(Math.random() * (+max - +min) + +min);
        let randomID = allIDs[randomNumber];
        let eachDelivery = allDeliveries[randomID];

        let name = eachDelivery.name;
        let location = ` Address: ${eachDelivery.location.display_address[0]} ${eachDelivery.location.display_address[1]}`;
        let phone = ` Phone: ${eachDelivery.phone}`;
        let rating = ` Rating: ${eachDelivery.rating}`;
        let url = `${eachDelivery.url}`;

        if (eachDelivery.location.city === 'Chicago') {
            addHtml(name, location, phone, rating, url);
        } else {
            closed();
        }
        goBack()
    })
};

// html
function clear() {

    navBar.textContent = 'Order delivery from...';
    restaurantName.textContent = '';
    restaurantLocation.textContent = '';
    restaurantPhone.textContent = '';
    restaurantRating.textContent = '';
};

function addHtml(name, location, phone, rating, url) {

    restaurantName.textContent = name;
    restaurantLocation.textContent = location;
    restaurantPhone.textContent = phone;
    restaurantRating.textContent = rating;
    restaurantUrl.href = url;
};

function closed() {
    restaurantName.textContent = "There's food at home";
    restaurantLink.textContent = '';
    const tryAgain = document.querySelector('.try-again');
    tryAgain.classList.add('hidden');
    const loaded = document.querySelector('.loaded');
    loaded.classList.remove('hidden');
}

// go back, reload
const goBackBtn = document.querySelector('.go-back');

function goBack() {
    goBackBtn.classList.remove('hidden');
};  

const a = document.querySelector('a');
a.addEventListener('click', function(){
    goBackBtn.classList.add('hidden');
});