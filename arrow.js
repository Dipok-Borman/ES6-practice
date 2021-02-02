//ES6 ak line function;
const doubleIt = number => number *2;
console.log(doubleIt(50));

// more than one parameters:
const add = (x, y) => x + y;
console.log(add(10,10));

//no parameters :
const getOne = () => 5;
console.log(getOne());

// elaborat ffunction :
const boro = (x, y) => {
    const sum = x + y;
    const minus = x - y;
    const multiply = sum * minus;
    return multiply;
}
console.log(boro(5, 10));