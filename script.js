let cnv = document.getElementById('canvas');
let ctx = cnv.getContext("2d");

cnv.width = 500;
cnv.height = 500;

document.addEventListener("click",onPress);

function onPress(event){
        let xy = [event.clientX, event.clientY]
        xy = griddy.pressIndex(xy)
        console.log(xy)
         }


class grid {
    constructor(size, canvasSize) {
        this.size = size
        this.canvasSize = canvasSize
    }
    pressIndex(coords){
        let x = Math.floor(coords[0]/(this.canvasSize/this.size))
        let y = Math.floor(coords[1]/(this.canvasSize/this.size))
        let xy = [x,y]
        return xy
    }
    displayDefault() {
        for (let i = 0; i < this.size; i++) {
            let gridspacing = this.canvasSize/this.size
            ctx.beginPath();
            ctx.moveTo(i * gridspacing, 0);
            ctx.lineTo(i * gridspacing, cnv.height);
            ctx.stroke();
    
            ctx.beginPath();
            ctx.moveTo(0, i * gridspacing);
            ctx.lineTo(cnv.width, i*gridspacing);
            ctx.stroke();
        }
    }
    displayRanBox() {
        ctx.fillStyle = 'black'
        ctx.fillRect(this.canvasSize/this.size * coords[0],this.canvasSize/this.size * coords[1],this.canvasSize/this.size,this.canvasSize/this.size)
    }
}

let griddy = new grid(5, cnv.width)

griddy.displayDefault()

griddy.displayRanBox()












// function displayDefault() {
//     for (let i = 0; i < 10; i++) {
//         ctx.beginPath();
//         ctx.moveTo(i * 50, 0);
//         ctx.lineTo(i * 50, cnv.height);
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.moveTo(0, i * 50);
//         ctx.lineTo(cnv.width, i*50);
//         ctx.stroke();
//     }
// }

// displayDefault()

// document.addEventListener("click",onPress);



// function onPress(event){
//     let xy = [event.clientX, event.clientY]
//     console.log(xy)
//      }
