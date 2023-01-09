let levelNum = document.getElementById('lvlnum');
let cnv = document.getElementById('canvas');
let ctx = cnv.getContext("2d");
let accordion = document.getElementsByClassName("accordion");

//description box with information about the rules
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  
//canvas width and height
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
        this.repeat
        this.xCoord
        this.yCoord
        this.correctNum = 0
        this.wrongNum = 0
        this.level = 1
        this.clickable = false
        this.correctClicked = []
        this.outsideClick = false
    }
    //increases amount of squares that shows up on grid to be clicked, and resets the previous round data
    levelUp() {
        if (this.correctNum === this.coords.length) {
            this.correctNum = 0
            this.wrongNum = 0
            this.coords = []
            this.correctClicked = []
            this.level++
            this.difficulty++
            this.clickable = false
                this.drawboxes()
                this.ranBox()
        } 
        //checks if you lose the game
        if (this.wrongNum >= 3) {
            alert('you lost :(  click ok to restart')
            this.level = 1
            this.difficulty = 3
            this.correctNum = 0
            this.wrongNum = 0
            this.coords = []
            this.correctClicked = []
            this.clickable = false
                this.drawboxes()
                this.ranBox()
        }
    }
    //creates 2d array for grid
    array() {
        for (let i = 0; i<this.size; i++) {
            this.columns.push(i)
            this.rows.push(this.columns)
        }   
    }
    //draws grid
    drawboxes() {
        ctx.clearRect(0,0,cnv.width, cnv.height);
        for (let i = 0; i < this.rows.length; i++) {
            for (let j = 0; j<this.rows.length; j++) {
                ctx.fillStyle = '#C8E0E8'
                ctx.fillRect(this.columns[i] * this.boxSize + 5, this.columns[j] * this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
                
            }
        }
        
    }
    
    //checks for clicks on the grid
    onPress(event) {
        if(this.clickable === false) return
        let xpos, ypos;
        let x = cnv.offsetLeft
        let y = cnv.offsetTop
        xpos = event.clientX - x + 250
        ypos = event.clientY - y + 250

        if (xpos < 0 || xpos > 500 || ypos < 0 ||ypos>500 ) {
            this.outsideClick = true
            console.log('cmon man') } else {
                this.outsideClick = false
            }

    this.xCoord= Math.floor(xpos/(500/this.size)) + 1
    this.yCoord= Math.floor(ypos/(500/this.size)) + 1
    
    this.correctBox();
    }

    //checks if you click the same correct square twice
    checkRepeat(x,y) {
        this.repeat = false
            for (let j = 0; j < this.coords.length; j++) {
                if (this.coords[j][0] === x && this.coords[j][1] === y) {
                 this.repeat = true
                 break;
                }
            }
    }

    //generates new random squares to be clicked
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
            this.clickable = true
            this.drawboxes()
          }, 1000)
          levelNum.innerHTML = this.level
    }

    //checks if you have clicked the correct box
    correctBox() {
        let correct = false
        let alrClicked = false
        for (let i = 0; i < this.coords.length; i++) {
            if (this.coords[i][0] === this.xCoord - 1 && this.coords[i][1] === this.yCoord - 1) {
                correct = true
                break;
            } 
        }
        for (let j = 0; j<this.correctClicked.length; j++) {
            if (this.correctClicked[j][0] === this.xCoord && this.correctClicked[j][1] === this.yCoord) {
                alrClicked = true;
                break;
            }
        }
        if (correct === true && alrClicked === false) {
            ctx.fillStyle = 'green'
            ctx.fillRect((this.xCoord - 1) * this.boxSize + 5,  (this.yCoord - 1)* this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
            this.correctClicked.push([this.xCoord,this.yCoord])
            this.correctNum++
            this.levelUp();
        } else if (correct === true && alrClicked !== false) {
            console.log('bye')
        } else if (this.outsideClick !== true) {
            ctx.fillStyle = 'red'
            ctx.fillRect((this.xCoord - 1) * this.boxSize + 5,  (this.yCoord - 1)* this.boxSize + 5, this.boxSize - 10, this.boxSize - 10)
            this.wrongNum++
            this.levelUp();
        }
    }
}

let griddy = new grid(7 , 3)
document.addEventListener('click', (e) => griddy.onPress(e)); 
griddy.array()
griddy.drawboxes()
griddy.ranBox()



