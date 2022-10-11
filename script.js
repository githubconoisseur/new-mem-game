let cnv = document.getElementById('canvas');
let ctx = cnv.getContext("2d");

cnv.width = 500;
cnv.height = 500;


class grid {
    constructor(size, difficulty) {
        this.size = size
        this.rows = []
        this.columns = []
        this.boxSize = 500/this.size
        this.difficulty = difficulty
    }
    array() {
        for (let i = 0; i<this.size; i++) {
            this.columns.push(i)
            this.rows.push(this.columns)
        } 
        console.log(this.rows)  
    }
    drawboxes() {
        for (let i = 0; i < this.rows.length; i++) {
            for (let j = 0; j<this.rows.length; j++) {
                ctx.fillStyle = '#C8E0E8'
                ctx.fillRect(this.columns[i] * this.boxSize + 5, this.columns[j] * this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
                
            }
        }
        console.log(this.size)
    }
    onPress(event) {
        let xpos, ypos;
        let x = cnv.offsetLeft
        let y = cnv.offsetTop
        xpos = event.clientX - x + 250
        ypos = event.clientY - y + 250
    if (xpos < 0 || xpos > 500 || ypos < 0 ||ypos>500 ) {
        console.log('cmon man')
    } else {
        console.log(Math.floor(xpos/(500/this.size)) + 1, Math.floor(ypos/(500/this.size)) + 1)
    }
    
    ctx.fillStyle = 'black'
    ctx.fillRect((Math.floor(xpos/(500/this.size))) * this.boxSize + 5,  (Math.floor(ypos/(500/this.size))) * this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
    }
    ranBox() {
        let repeatDetection = []
        let i = 0
        let checked = true
        // for (let i = 0; i < this.difficulty; i++) {
        //     let ranRow = Math.floor(Math.random()*this.size)
        //     let ranColumnDepth = Math.floor(Math.random()*this.size)
        //     repeatDetection.push(ranRow,ranColumnDepth)

        // ctx.fillStyle = 'black'
        // ctx.fillRect(ranRow * this.boxSize + 5, ranColumnDepth * this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
        // console.log(ranRow, ranColumnDepth)
        // }
        // while (i < this.difficulty) {
        //     let ranRow = Math.floor(Math.random()*this.size)
        //     let ranColumnDepth = Math.floor(Math.random()*this.size)
        //     for (let j = 0; j <= repeatDetection.length; j++) {
        //         if (repeatDetection[j] !== ranRow,ranColumnDepth) {
        //             checked = false;
        //             repeatDetection.push(ranRow,ranColumnDepth)
        //         }
        //     }

        //     if (checked === true) {
        //         ctx.fillStyle = 'black'
        //     ctx.fillRect(ranRow * this.boxSize + 5, ranColumnDepth * this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
        //     }
        //     i++
        // }
        
    }
}




let griddy = new grid(5, 25)
document.addEventListener('click', (e) => griddy.onPress(e)); 
griddy.array()
griddy.drawboxes()
griddy.ranBox()







// console.log(rows[1][1])
// function arrayloop(num) {
//     let g = []
//     for (i = 0; i<num; i++) {
//         g.push(i)
//     }
//     console.log(g)
// }

// arrayloop(5)






// document.addEventListener("click",onPress);

// function onPress(event){
//         let xy = [event.clientX, event.clientY]
//         xy = griddy.pressIndex(xy)
//         console.log(xy)
//          }


// class grid {
//     constructor(size, canvasSize) {
//         this.size = size
//         this.canvasSize = canvasSize
//     }
//     pressIndex(coords){
//         let x = Math.floor(coords[0]/(this.canvasSize/this.size))
//         let y = Math.floor(coords[1]/(this.canvasSize/this.size)-1)
//         let xy = [x,y]
//         return xy
//     }
//     displayDefault() {
//         for (let i = 0; i < this.size; i++) {
//             let gridspacing = this.canvasSize/this.size
//             ctx.beginPath();
//             ctx.moveTo(i * gridspacing, 0);
//             ctx.lineTo(i * gridspacing, cnv.height);
//             ctx.stroke();
    
//             ctx.beginPath();
//             ctx.moveTo(0, i * gridspacing);
//             ctx.lineTo(cnv.width, i*gridspacing);
//             ctx.stroke();
//         }
//     }
//     displayRanBox(coords) {
//         ctx.fillStyle = 'black'
//         ctx.fillRect(this.canvasSize/this.size * coords[0],this.canvasSize/this.size * coords[1],this.canvasSize/this.size,this.canvasSize/this.size)
//     }
// }

// let griddy = new grid(4, cnv.width)

// griddy.displayDefault()

// griddy.displayRanBox()












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
