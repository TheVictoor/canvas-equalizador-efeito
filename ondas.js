const ONDAS = 60;
const WIDTH = window.innerWidth / 2 * 1.3;
const HEIGHT = window.innerHeight / 2 * .6;
let SIZE =   WIDTH / ONDAS ;

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let ondas = [];

canvas.width = WIDTH;
canvas.height = HEIGHT;

class Onda {

    constructor(){
        this.x = 0;
        this.y = 0;
        this.height = 0;
        this.width = SIZE;

        this.colorR = Math.random() * 255;
        this.colorG = Math.random() * 255;
        this.colorB = Math.random() * 255;
        
        this.move = Math.random() * 7 ;
        this.heightLimit = (Math.random() * HEIGHT) * 0.8;
        this.heightLimit = this.heightLimit < (HEIGHT * 0.20) ? HEIGHT * 0.30 : this.heightLimit;
    }

    color() {
        return `rgba(${ this.colorR }, ${ this.colorG }, ${ this.colorB } , .9)`;
    }

}

function animate(){

    context.clearRect( 0, 0, WIDTH, HEIGHT );

    for ( const onda of ondas ) {
        context.fillStyle = onda.color();
        context.fillRect( onda.x, onda.y, onda.width, onda.height );

        if( onda.height + onda.move > onda.heightLimit || onda.height + onda.move <= 0 ){
            onda.move = -onda.move;
        }

        onda.height += onda.move;
        onda.y = HEIGHT - onda.height;
    }  
    
    requestAnimationFrame( animate );
}

for( let indice = 0; indice < ONDAS; indice++ ){
    let onda = new Onda();
    onda.x = indice * SIZE;    
    ondas.push(onda);
}

animate();