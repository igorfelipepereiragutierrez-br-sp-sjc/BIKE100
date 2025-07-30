//alert('Hello World');



class BIKEIG {
    // Constructor method for initializing object properties
    constructor(manufacturer, model) {
        this.manufacturer = manufacturer;
        this.model = model;
    }

    displayDetails() {
        alert(myBike.manufacturer + ' ' + myBike.model);
    }



    displayCircle() {

        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

var myBike = new BIKEIG('Caloi', 'BIKE100');
myBike.displayDetails();
myBike.displayCircle();