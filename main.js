/*
    Random Class On Body
*/

var classList = ["class-one", "class-two", "class-three", "class-four"],

    randomKey = Math.floor(Math.random() * classList.length);

// For testing random
console.log(randomKey);

// To Add Class to Body
document.body.setAttribute('class', classList[randomKey]);