function Snake(){
    
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.pos = createVector(0, 0);
    
    
    this.update = function () {
        
        if(this.total === this.tail.length){
            for (let i = 0; i < this.total - 1; i++){
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);
        
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
        
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
        
        
    };
    
    this.show = function () {
        fill(255);
        for(let i = 0; i < this.total; i++){
            rect(this.tail[i].x, this.tail[i].y, scl, scl)
        }
        rect(this.x, this.y, scl, scl)
    };
    
    this.dir = function (x, y) {
        if(x !== 0){
            if((this.xspeed === -1 && x === 1) || (this.xspeed === 1 && x === -1)){
        
            } else {
                this.yspeed = y;
                this.xspeed = x;
            }
        } else if (y !== 0){
            if((this.yspeed === -1 && y === 1) || (this.yspeed === 1 && y === -1)){
        
            } else {
                this.yspeed = y;
                this.xspeed = x;
            }
        }
    };
    
    this.eat = function (pos) {
        const d = dist(this.x, this.y, pos.x, pos.y);
        if(d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    };
    
    this.die = function () {
        if(this.pos.x >= width || this.pos.y >= height || this.pos.x < 0 || this.pos.y < 0){
        
        }
        for(var i=0;i<this.tail.length;i++){
            if(this.tail[i].x === this.pos.x && this.tail[i].y === this.pos.y){
            
            }
        }
    }
}