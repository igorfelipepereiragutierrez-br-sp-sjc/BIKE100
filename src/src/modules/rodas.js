class BIKEIG_RODAS {


    constructor(tamanhoAro, tamanhoPneu, qtdRaios) {
        this.tamanhoAro = tamanhoAro;
        this.tamanhoPneu = tamanhoPneu;
        this.qtdRaios = qtdRaios;
        //cubo/rolamentos/etc
        //camara/psi/etc

    }

    // exibirRodaFrente(tamanhoAro, tamanhoPneu, qtdRaios) {

    //     const canvas = document.getElementById("myCanvas");
    //     const ctx = canvas.getContext("2d");

    //     ctx.beginPath();

    //     ctx.lineWidth = tamanhoPneu;

    //     //Primeiro parametro, distancia da borda esquerda.
    //     //Segundo parametro, distancia da borda superior.
    //     //Terceiro parametro, tamanho do circulo/aro.
    //     //Quarto parametro, Ponto de inicio do circulo/aro.
    //     //Quinto parametro, 2 * 3,14159 = 6.28318. (cm)
    //     ctx.arc(100, 100, tamanhoAro, 0, (2 * Math.PI), false);

    //     //Altura/borda do circulo/aro.



    //     ctx.strokeStyle = 'indianred';
    //     ctx.lineWidth = 1;
    //     ctx.lineJoin = 'round';

    //     //Cor do pneu
    //     //ctx.strokeStyle = "red";
    //     //ctx.fillStyle = "blue";
    //     //ctx.fill();


    //     ctx.stroke();



    // }

    // exibirRodaTraseira(tamanhoAro, tamanhoPneu, qtdRaios) {

    //     const canvas = document.getElementById("myCanvas");
    //     const ctx = canvas.getContext("2d");

    //     ctx.beginPath();

    //     //Primeiro parametro, distancia da borda esquerda.
    //     //Segundo parametro, distancia da borda superior.
    //     //Terceiro parametro, tamanho do circulo/aro.
    //     //Quarto parametro, Ponto de inicio do circulo/aro.
    //     //Quinto parametro, 2 * 3,14159 = 6.28318. (cm)
    //     ctx.arc(200, 100, tamanhoAro, 0, (2 * Math.PI), false);

    //     //Altura/borda do circulo/aro.
    //     ctx.lineWidth = tamanhoPneu;

    //     //Cor do pneu
    //     ctx.strokeStyle = "red";

    //     ctx.fillStyle = "blue";
    //     ctx.fill();

    //     ctx.stroke();
    // }


    ExibirRodaTeste(tamanhoAro, tamanhoPneu, qtdRaios) {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var cw = tamanhoPneu;
        var ch = tamanhoAro;

        var cx = cw / 2;
        var cy = ch / 2;
        //var radius = 135;
        var radius = tamanhoAro;
        var minutes = 0;
        var minutesIncrement = 0.10;

        animate();

        function animate(time) {
            //ctx.clearRect(0, 0, cw, ch);
            //ctx.beginPath();
            //ctx.stroke();

            fillWedge(300, 150, radius, minutesToAngle(0), minutesToAngle(minutes), 'white');
            ctx.stroke();
            minutes += minutesIncrement;
            if (minutes > 60) {
                minutes = 0;
            }
            requestAnimationFrame(animate);
        }

        var cx = canvas.width / 2;
        var cy = canvas.height / 2;

        var radius = Math.min(canvas.width, canvas.height) * .90 / 2;

        function fillWedge(cx, cy, radius, startAngle, endAngle, fillcolor) {
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, radius, startAngle, endAngle); //Tem um bug que esta colocando uma linha la em cima.
            // ctx.arc(150, 75, radius, -1.5707963267948966, -1.5707963267948966);
            // ctx.arc(150, 75, radius, -1.5707963267948966, -1.4660765716752369);
            // ctx.arc(150, 75, radius, -1.5707963267948966, -1.361356816555577);
            ctx.closePath();
            ctx.fillStyle = fillcolor;
            ctx.fill();
        }

        function minutesToAngle(minutes) {
            var twelveOClock = -Math.PI / 2;
            var fullCircle = Math.PI * 2;
            return (twelveOClock + fullCircle * (minutes / 60));
        }
    }
}


alert('teste');
var myBike = new BIKEIG_RODAS(26, 2, 36);
// myBike.exibirRodaFrente(26, 2, 36);
// myBike.exibirRodaTraseira(26, 2, 36);

myBike.ExibirRodaTeste(26, 2, 36);