name = 'Aaron';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Katherine';
    console.log(name)
};



console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);

function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
}

//-------------------------------------

let fruits = ['Peach', 'Strawberry', 'Lemon'];
// let favFruit;

function printFruits() {
    console.log(fruits[0]);
    let favFruit = fruits[2];

    function printFavFruit() {
        console.log(favFruit);
        // console.log(leastFav);
    }
printFavFruit();
}

printFruits();

let leastFav = fruits [1];


someFunction();
function someFunction(){
    console.log('Hello');
    console.log(name);
}





let newFunction = function () {
    alert('help me');
}
newFunction();