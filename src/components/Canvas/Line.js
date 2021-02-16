export default     function Line(x1,y1, x2, y2, a){
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