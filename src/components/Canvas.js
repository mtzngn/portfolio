import React, { useEffect, useRef } from "react";

let x = 0;
export default function Canvas(){

    const canvasRef = useRef(null);
    let backgroundColor =  "rgba(2, 48, 71)";
    let circleArray = [];
    let lineArray = [];


    function Circle(x, y, dx, dy, radius, color) {
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
            if (this.x > 1000 - this.radius || this.x - this.radius < 0) {
                this.dx = -dx;
            }
            if (this.y > 1000 - this.radius || this.y - this.radius < 0) {
                this.dy = -dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            // const distMouse = Math.hypot(mouse.x - this.x, mouse.y - this.y)
            // minDist = 100;
            // var moveAway  = minDist  - distMouse
            // //dont let starts to leave the screen
            // if (mouse.y + minDist < innerHeight && mouse.y - minDist > 0 && mouse.x + minDist < innerWidth && mouse.x - minDist > 0) {
            //     if (distMouse < minDist) {
            //         if ((mouse.x - this.x) < 0) {
            //             this.x += moveAway
            //         } else {this.x -= moveAway}
            //         if (mouse.y - this.y < 0) {
            //             this.y += moveAway
            //         } else {this.y -= moveAway}
            //     }
            // }
            this.draw(ctx);
        }
        
    }

    function Line(x1,y1, x2, y2, a){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.a = a;
    
        this.draw = function(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.x1, this.y1)
            ctx.lineTo(this.x2, this.y2)
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.a})`
            ctx.stroke()
        }
        this.update = function(ctx) {
            this.draw(ctx)
        }
    }
    



    useEffect(()=>{
        document.addEventListener("click", (e)=>{
            console.log(e)
            circleArray.push(new Circle(e.pageX, e.pageY, (Math.random() - 0.5), (Math.random() - 0.5), (Math.random() + 1.1) * 3, "white"))
        })
        circleArray = [];
        for(let i = 0; i < 100; i++){
            let radius = (Math.random() + 0.2) * 5;
            let x = Math.random() * 1000;
            let y = Math.random() * 1000;
            let dx = (Math.random() - 0.5) ;  
            let dy = (Math.random() - 0.5) ;
            let color = "white"
            circleArray.push(new Circle(x, y, dx, dy, radius, color))
        }
        
    

        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0,0, canvas.width, canvas.height)

            circleArray.forEach((circle)=>{
                circle.update(ctx)
            })

            lineArray = []
            circleArray.forEach((circle, index)=>{
                circleArray.forEach((circle2, index2)=>{
                    if (index != index2 ) {
                        var dist = Math.hypot(circle.x - circle2.x, circle.y - circle2.y)
                        let a;
                        //make closer stars to have higher opacity
                        if (dist < 140) {
                            if (dist < 90) {
                                a = (5 / dist) 
                            }else if(90 < dist < 120) { 
                               a = 1 / dist
                            }
                            lineArray.push(new Line(circle.x, circle.y, circle2.x, circle2.y, a))
                        } else {}    
                    }
                })
            })
            lineArray.forEach((line)=>{
                line.update(ctx)
            })
            requestAnimationFrame(render);
        };
        render();
    }, []);
    return <canvas id="canvas" ref={canvasRef} height="800px" width="1000px" />
}