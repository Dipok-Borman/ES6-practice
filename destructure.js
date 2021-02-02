const parson = {name : "kalu", gfName : "Kala", phone : "01717112233", address : "kochu Kata"};

const parsonName = parson.name;
console.log(parsonName);

//destructure:
const {phone, gfName} = parson;
console.log(gfName, phone);

//complex object:
const complexObject = {
    name : "vobani",
    info : {
        leader : "tiger",
        raja : "hati",
    }
}
const {leader} = complexObject.info;
console.log(leader);

//destructure array:
const friends = ["salman khan", "sahruk khan", "Amir khan", "sakib khan"];
const [first, second, ...restFriends] = friends;
console.log(restFriends);
console.log(first);