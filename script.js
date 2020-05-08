let $miceInShop = document.querySelectorAll(".animal-shop .mouse");
let $animalShop = document.querySelector(".animal-shop");
let $alsoMiceInShop = $animalShop.querySelectorAll(".mouse");

$animalShop.style.width = "25px";
$animalShop.style.height = "25px";
$animalShop.style.backgroundColor = "purple";
$animalShop.style.position = "fixed";

function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

var $animalContainer = document.createElement("div");
$animalContainer.setAttribute("class", "animal-container");
// var $animalH1 = document.createElement("h1");
// $animalH1.innerHTML = "Hello I am a mouse";
// $animalContainer.appendChild($animalH1);

$animalContainer.innerHTML = `
  <h1>Hi I am a mouse</h1>
  <img src='./mouse.jpg'>
  <p>My story started in a nice warm home</p>
`

document.querySelector("body").appendChild($animalContainer);


function createNewMouse(name, story){
    var $animalContainer = document.createElement("div");
    $animalContainer.setAttribute("class", "animal-container");
    $animalContainer.innerHTML = `
        <h1>Hi I am a mouse, named ${name}</h1>
        <img src='./mouse.jpg'>
        <p>This is my story: ${story}</p>
    `
    document.querySelector("body").appendChild($animalContainer);
}

// how to remove elements
// how to create more complex nested html structures

let $mice = document.querySelectorAll(".mouse");

for(let i = 0; i < $mice.length; i++) {
    $mice[i].innerHTML = "<h1>mouse!!!!!</h1>";
}


// manipulate all elements with a certain class
// event handling