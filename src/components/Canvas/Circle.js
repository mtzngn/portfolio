export default function Circle(x, y, dx, dy, radius, color) {
    let mouse = {
        x: undefined,
        y: undefined,
    }
    let minDist;

    document.addEventListener("mousemove", (e)=>{
        mouse.x = e.x;
        mouse.y = parseInt(e.y) -75;
        console.log(mouse.y)
    })
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    
    this.draw = (ctx) => {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        ctx.fillStyle = this.color
        ctx.fill();
    }

    this.update = (ctx) => {
        if (this.x > window.innerWidth - this.radius || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y > window.innerHeight - this.radius || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        const distMouse = Math.hypot(mouse.x - this.x, mouse.y - this.y)
        minDist = 100;
        let moveAway  = minDist  - distMouse
        //dont let starts to leave the screen
        if (mouse.y + minDist < window.innerHeight && mouse.y - minDist > 0 && mouse.x + minDist < window.innerWidth && mouse.x - minDist > 0) {
            if (distMouse < minDist) {
                if ((mouse.x - this.x) < 0) {
                    this.x += moveAway
                } else {this.x -= moveAway}
                if (mouse.y - this.y < 0) {
                    this.y += moveAway
                } else {this.y -= moveAway}
            }
        }
        this.draw(ctx);
    }
}