console.log('Linked')

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const particlesArray = []

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
    // console.log(event)
    mouse.y = event.y
})

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x
    mouse.y = event.y
})



class Particle {
    constructor(){
        // this.x = mouse.x
        // this.y = mouse.y
        this.x = Math.random()*canvas.width
        this.y = Math.random()*canvas.height
        this.size = Math.random()*5 +1
        this.speedX = Math.random() *3 -1.5
        this.speedY = Math.random() *3 -1.5
    }
    //change x and y coordinates
    update(){
        this.x += this.speedX
        this.y += this.speedY
    }
    // draw circle/element upon movement
    draw(){
        ctx.fillStyle ='yellow'
        ctx.strokeStyle ='red'
        ctx.beginPath()
        ctx.arc(this.x,this.y,50,0, Math.PI*2)
        ctx.stroke()
        ctx.fill()

    }
} 

//Making a particles array
const init = () => {
    for (let i=0; i<100; i++){
        particlesArray.push(new Particle())
    }
}
init()
console.log(particlesArray.length)

//Handling particles Array movement 
const handleParticles = () => {
    for (let i =0; i<particlesArray.length; i++){
        particlesArray[i].update()
        particlesArray[i].draw()
    }
}

const animate = () => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    handleParticles()
    requestAnimationFrame(animate)
}
animate()

