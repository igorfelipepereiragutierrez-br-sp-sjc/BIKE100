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



    displayCircleFront() {

        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        ctx.beginPath();

        //Primeiro parametro, distancia da borda esquerda.
        //Segundo parametro, distancia da borda superior.
        //Terceiro parametro, tamanho do circulo/aro.
        //Quarto parametro, Ponto de inicio do circulo/aro.
        //Quinto parametro, 2 * 3,14159 = 6.28318.
        ctx.arc(100, 100, 26, 0, 2 * Math.PI, false);

        //Altura/borda do circulo/aro.
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";

        ctx.fillStyle = "blue";
        ctx.fill();

        ctx.stroke();
    }


    displayCircleEnd() {

        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        ctx.beginPath();

        //Primeiro parametro, distancia da borda esquerda.
        //Segundo parametro, distancia da borda superior.
        //Terceiro parametro, tamanho do circulo/aro.
        //Quarto parametro, Ponto de inicio do circulo/aro.
        //Quinto parametro, 2 * 3,14159 = 6.28318.
        ctx.arc(200, 100, 26, 0, 2 * Math.PI, false);

        //Altura/borda do circulo/aro.
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";

        ctx.fillStyle = "blue";
        ctx.fill();

        ctx.stroke();
    }    
}

var myBike = new BIKEIG('Caloi', 'BIKE100');
myBike.displayDetails();
myBike.displayCircleFront();
myBike.displayCircleEnd();