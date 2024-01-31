let decimal = 2;

let n = new Number(randomNumber());

//v = VectorStandard
let v= new Vector2D(randomNumber(),randomNumber());
//let v= new Vector2D(5,5);

//v2 = v2 for mathematical operations
let v2 = new Vector2D(randomNumber(),randomNumber());
//let v2= new Vector2D(2,4);

//v3 = connecting Vector from Base to v2
let v3;
v3 = v2.connect(v);

//Add
let vA = v.add(v2);

//sub
let vS = v.sub(v2);

//multiply / Dotproduct
let vM = v.multiply(v2);

//multiply with number
let vMN = v.multiplyN(n);

//value of v2
let vV1 = v.value(v);
let vV2 = v2.value(v2);
let vV3 = v3.value(v3);

//Oppositve Vector
let vO1 = v.opposite(v);
let vO2 = v2.opposite(v2);
let vO3 = v3.opposite(v3);

//Orthogonal Vector
let vOrtho = v.orthogonal(v);

//Normalized Vector
let vN1 = v.normalize(v);
let vN2 = v2.normalize(v2);
let vN3 = v3.normalize(v3);

//Normalized Vector length
let vVN1 = vN1.value(vN1);
let vVN2 = vN2.value(vN2);
let vVN3 = vN3.value(vN3);

//angle between base and v2
let angle = v.angle(v2);

//point in middle between two points
let vMid = v.middlePoint(v2);

//project v2 to base vector
let distance=1/4
let vI = v2.linearinterpolation(v,distance);

//project orthogonally onto another vector
let vProj = v.project(v2)

console.log("Base Vector= "+v.x+"/"+v.y);
console.log("v2= "+v2.x+"/"+v2.y);
console.log("number: " + n);
console.log("---")

console.log("connecting Vector Base to v2= " +v3.x+"/"+v3.y)
console.log("Result of Add Vector " + v2.x + "/" + v2.y + " = " + vA.x +"/"+vA.y);
console.log("Result of Subtract Vector " + v2.x + "/" + v2.y + " = " + vS.x +"/"+ vS.y);
console.log("Result of Multiply with Vector (Dotproduct) " + v2.x + "/" + v2.y + " = " + vM);
console.log("Result of Multiply with Number " + n + " = " + vMN.x + "/" + vMN.y);
console.log("Oppostive Vector of v2= " + vO2.x + "/" + vO2.y + " || Base Vector= " + vO1.x + "/" + vO1.y + " || Connecting Vector= " + vO3.x + "/" + vO3.y);
console.log("Value/Length of v2= " + vV2 + " || Base Vector= " + vV1 + " || Connecting Vector= " + vV3);
console.log("orthogonal vector of basis= " + vOrtho.x+"/"+vOrtho.y)

console.log("---")
console.log("Point in middle between Base and v2= " + vMid.x + "/" + vMid.y)
console.log("orthogonal projection from "+v.x+"/"+v.y+ " to "+v2.x+"/"+v2.y +" with hitpoint on " + vProj.x +"/"+vProj.y)
console.log("linear interpolation of " + distance + " from " +v2.x+"/"+v2.y+ " to "+v.x+"/"+v.y +" = " + vI.x +"/"+vI.y)
console.log("angle between Base and v2= " + angle)
console.log("normalized Vector= " + vN2.x + "/" + vN2.y + " || Base Vector= " + vN1.x + "/" + vN1.y + " || Connecting Vector= " + vN3.x + "/" + vN3.y);
console.log("Value/Length of normalized v2= " + vVN2 + " || Base Vector= " + vVN1 + " || Connecting Vector= " + vVN3);
