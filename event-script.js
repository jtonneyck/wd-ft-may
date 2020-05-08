// document.addEventListener("click", function(){
//     // alert("The user clicked!");
// });

// document.addEventListener("keydown", function(){
//     alert("The user pressed a key!");
// })

let $leftButton = document.querySelector("#left-button");
let $rightButton = document.querySelector("#right-button");

let rover = {
    position: {
        left: 0,
        bottom: 0
    }
}

$leftButton.onclick = function(){
    let $rover = document.querySelector("#rover");
    rover.position.left -= 20;
    $rover.style.left = `${rover.position.left}px`;
}

// $leftButton.addEventListener("click", function(){
//     let $rover = document.querySelector("#rover");
//     rover.position.left -= 20;
//     $rover.style.left = `${rover.position.left}px`;
// })

$rightButton.addEventListener("click", function(){
    let $rover = document.querySelector("#rover");
    rover.position.left += 20;
    $rover.style.left = `${rover.position.left}px`;
})

let $boxes = document.querySelectorAll(".box");

for(let i = 0; i < $boxes.length; i++) {
    $boxes[i].addEventListener("click", function(e){
        debugger
        let $boxContainer = document.querySelector(".box-container");
        $boxContainer.removeChild(e.currentTarget);
        // event.currentTarget.style.backgroundColor = "yellow";
        
    })
}


let $playerButton = document.querySelector("#player-button");
let $userName = document.querySelector("#username");

$playerButton.addEventListener("click", function(){
    let username = $userName.value;

    let $h1 = document.createElement("h1");
    $h1.innerHTML = username;

    document.querySelector("body").appendChild($h1);
})

let $stories = document.querySelectorAll(".stories");

for(let i =0; i< $stories.length; i++){
    $stories[i].addEventListener("click", function(event){
        alert(event.currentTarget.innerHTML);
    })
}