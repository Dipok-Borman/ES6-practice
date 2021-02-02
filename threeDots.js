
// Analog system:
const age1 = [14,5,24,26];
const age2 = [45,45,87,89,55,5];
const age3 = [41,2,48,79,56,52,54];
const allAge = age1.concat(age2).concat([10]).concat(age3);
console.log(allAge);

// Update system:
// ... it's called spreadOperator:
const allAge2 = [...age1,...age2,5,...age3];
console.log(allAge2);

const takaPoisha = [123,52,41,54,2,1,2,1,5,1552,55545,52];
const maxiMam = Math.max(...takaPoisha);
console.log(maxiMam);
