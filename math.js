function randomNumber() {
    let max = 6;
    return Math.floor(Math.random()*max);
}

class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    // methods
    //add
    add(v) {
        return new Vector2D(this.x + v.x, this.y + v.y);
    }

    //subtract
    sub(v) {
        return new Vector2D(this.x - v.x, this.y - v.y);
    }

    //dotproduct
    multiply(v) {
        return new Number(this.x * v.x + this.y * v.y).toFixed(decimal);
    }

    //multiply NUmber
    multiplyN(n) {
        return new Vector2D(this.x*n,this.y*n);
    }

    //value or length
    value(v) {
        return new Number(Math.sqrt(v.x*v.x+v.y*v.y)).toFixed(decimal);
    }

    //connecting vector base to v2
    connect(v) {
        return new Vector2D(this.x-v.x,this.y-v.y);
    }

    //opposite vector
    opposite(v) {
        return new Vector2D(0-v.x,0-v.y)
    }

    //orthogonal
    orthogonal(v) {
        return new Vector2D(-this.y,this.x);
    }

    //normalize Vector
    normalize(v) {
        let value = this.value(v);
        let x = (1/value)*this.x
        let x2 = x.toFixed(decimal);
        let y = (1/value)*this.y;
        let y2 = y.toFixed(decimal);
        return new Vector2D(x2,y2)
    }

    //angle between Vectors
    angle(v) {
        let v1v = this.value(this);
        let v2v = v.value(v);
        let v1x2 = this.multiply(v);
        let cos = v1x2 / (v1v*v2v);
        var angle1 = Math.acos(cos);
        var angleDegrees = angle1 * (180 / Math.PI);
        return Math.round(angleDegrees);
    }

    middlePoint(v) { 
        let v1 = this.multiplyN(1/2);
        let v2 = v.multiplyN(1/2);
        return new Vector2D(v1.x+v2.x,v1.y+v2.y);
    }

    //get point on certain distance between points
    linearinterpolation(v,d) {
        let v1 = this.multiplyN(1-d)
        let v2 = v.multiplyN(d)
        return v1.add(v2);
    }

    //project orthogonally onto another vector
    project(v) {
        let vMult = (this.multiply(v)/(v.value(v)*v.value(v)));
        let v1 = v.multiplyN(vMult);
        let x = v1.x.toFixed(decimal);
        let y = v1.y.toFixed(decimal);
        return new Vector2D(x,y);
    }



}