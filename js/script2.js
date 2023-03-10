console.log('Linked')

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const particlesArray = []
let hue =0

//To set the size of an object to remain constant
window.addEventListener('resize', function (){
    //setting the scales for every reneual
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    // making the object inside the loop
    
})

const mouse = {
    x: undefined,
    y: undefined,


}
canvas.addEventListener('click', function(event){
    mouse.x = event.x
    mouse.y = event.y
    for (let i=0; i<10; i++){
    particlesArray.push(new Particle())
    }
})

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x
    mouse.y = event.y
    for (let i=0; i<5; i++){
        particlesArray.push(new Particle())
        }
})



class Particle {
    constructor(){
         this.x = mouse.x
         this.y = mouse.y
        //this.x = Math.random()*canvas.width
        //this.y = Math.random()*canvas.height
        this.size = Math.random()*15 +1
        this.speedX = Math.random() *3 -1.5
        this.speedY = Math.random() *3 -1.5
        this.color = 'hsl(' + hue + ', 100%, 50%)'
    }
    //change x and y coordinates
    update(){
        this.x += this.speedX
        this.y += this.speedY
        if (this.size>0.2) {
            this.size -=0.1
        }
    }
    // draw circle/element upon movement
    draw(){
        ctx.fillStyle = this.color
        ctx.strokeStyle ='red'
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0, Math.PI*2)
        ctx.fill()

    }
} 

// //Making a particles array
// const init = () => {
//     for (let i=0; i<100; i++){
//         particlesArray.push(new Particle())
//     }
// }
// init()
// console.log(particlesArray.length)

//Handling particles Array movement 
const handleParticles = () => {
    for (let i =0; i<particlesArray.length; i++){
        particlesArray[i].update()
        particlesArray[i].draw()
        if (particlesArray[i].size <=0.3){
            particlesArray.splice(i, 1)
            i--
        }
    }
}
console.log(particlesArray.length)

const animate = () => {
    //ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(0,0,0,0.02)'
    ctx.fillRect(0,0,canvas.width, canvas.height)
    handleParticles()
    hue+=2
    requestAnimationFrame(animate)
}
animate()

