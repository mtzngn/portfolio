import React, { useEffect, useRef } from "react";
import Circle from "./Circle"
import Line from "./Line"

export default function Canvas(){
    const canvasRef = useRef(null);
    let backgroundColor =  "rgb(20,33,61)";
    let circleArray = [];
    let lineArray = [];


    useEffect(()=>{
        const ctx = canvasRef.current.getContext("2d");
        let canvasHeight = canvasRef.current.clientHeight
        let canvasWidth = canvasRef.current.clientWidth

        document.addEventListener("click", (e)=>{
            circleArray.push(new Circle(e.pageX, e.pageY, (Math.random() - 0.5), (Math.random() - 0.5), (Math.random() + 1.1) * 3, "white"))
        })

        const handleResize = e => {
            ctx.canvas.height = window.innerHeight;
            ctx.canvas.width = window.innerWidth;
          };
      
          handleResize();
          window.addEventListener("resize", handleResize);

        circleArray = [];
        for(let i = 0; i < canvasWidth * 0.2 ; i++){
            let radius = (Math.random() + 0.2) * 5;
            let x = Math.random() * canvasWidth;
            let y = Math.random() * canvasHeight;
            let dx = (Math.random() - 0.5) ;  
            let dy = (Math.random() - 0.5) ;
            let color = "white"
            circleArray.push(new Circle(x, y, dx, dy, radius, color))
        }
        
        const render = () => {
            if(canvasRef.current == null) {return}
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0,0, canvasWidth, canvasHeight)

            circleArray.forEach((circle)=>{
                circle.update(ctx)
            })

            lineArray = []
            circleArray.forEach((circle, index)=>{
                circleArray.forEach((circle2, index2)=>{
                    if (index != index2 ) {
                        var dist = Math.hypot(circle.x - circle2.x, circle.y - circle2.y)
                        let a;
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

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <canvas id="canvas" ref={canvasRef} 
    
    width= {window.innerWidth} height = {window.innerHeight * 0.92} />
}