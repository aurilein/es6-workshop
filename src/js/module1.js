var $ = require('jquery');


console.log("module1stuff", $('h1'));

class Auto {
    constructor(data) {
        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
    }

    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Auto {
    constructor(data) {
        super(data);
        this.isElectric = data.isElectric;
        this.isHatchback = data.isHatchback;
    }

    getDetails() {
        return `${super.getDetails()} Electric: ${this.isElectric} Hatchback: ${this.isHatchback}`;
    }
}

var car = new Car({
    make: 'Chevy',
    model: 'Malibu',
    price: 30000,
    year: 2014,
    isElectric: false,
    isHatchback: false
});



$(function() {
    var div = document.getElementById('output');
    div.innerHTML = car.getDetails();
});

