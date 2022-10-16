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
        this.coords = []
        this.repeat;
        this.xCoord
        this.yCoord
        this.correctNum = 0
        this.wrongNum = 0
    }
    array() {
        for (let i = 0; i<this.size; i++) {
            this.columns.push(i)
            this.rows.push(this.columns)
        } 
        
    }
    drawboxes() {
        for (let i = 0; i < this.rows.length; i++) {
            for (let j = 0; j<this.rows.length; j++) {
                ctx.fillStyle = '#C8E0E8'
                ctx.fillRect(this.columns[i] * this.boxSize + 5, this.columns[j] * this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
                
            }
        }
        
    }
    onPress(event) {
        let xpos, ypos;
        let x = cnv.offsetLeft
        let y = cnv.offsetTop
        xpos = event.clientX - x + 250
        ypos = event.clientY - y + 250
    // if (xpos < 0 || xpos > 500 || ypos < 0 ||ypos>500 ) {
    //     console.log('cmon man')
    // } else {
    //     console.log(Math.floor(xpos/(500/this.size)) + 1, Math.floor(ypos/(500/this.size)) + 1)
    // }

    this.xCoord= Math.floor(xpos/(500/this.size)) + 1
    this.yCoord= Math.floor(ypos/(500/this.size)) + 1
    
    

    this.correctBox();
    }
    checkRepeat(x,y) {
        this.repeat = false
            for (let j = 0; j < this.coords.length; j++) {
                if (this.coords[j][0] === x && this.coords[j][1] === y) {
                 this.repeat = true
                 break;
                }
            }
    }
    ranBox() {
        let i = 0
        while (i < this.difficulty) {
            // New Coordinates to Try
            let x = Math.floor(Math.random()*this.size)
            let y = Math.floor(Math.random()*this.size)
            
            // Test if New Coordinates have been used
            this.checkRepeat(x,y)

            // Check for Repetition
            if (this.repeat === false) {
                ctx.fillStyle = 'black'
                ctx.fillRect(x * this.boxSize + 5, y * this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
                this.coords.push([x,y])
                i++
            } 
        }
        setTimeout(() => {
            this.drawboxes()
          }, 1000)
    }
    correctBox() {
        // if (() => griddy.onPress())
        let correct = false
        for (let i = 0; i < this.coords.length; i++) {
            if (this.coords[i][0] === this.xCoord - 1 && this.coords[i][1] === this.yCoord - 1) {
                correct = true
                break;
            } 
        }
        if (correct === true) {
            ctx.fillStyle = 'green'
            ctx.fillRect((this.xCoord - 1) * this.boxSize + 5,  (this.yCoord - 1)* this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
            this.correctNum++
        } else {
            ctx.fillStyle = 'red'
            ctx.fillRect((this.xCoord - 1) * this.boxSize + 5,  (this.yCoord - 1)* this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
            this.wrongNum++
        }

        if (this.correctNum === this.coords.length) {
            
                this.drawboxes()
                this.ranBox()
            
            this.correctNum = 0
            this.wrongNum = 0
            this.coords = []

        }
        console.log(this.correctNum)
        
        
    }
}



let griddy = new grid(5, 5)
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
