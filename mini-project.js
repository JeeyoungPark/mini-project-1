const hexColor = document.querySelector("#hexColor"),
 bodyColor = document.querySelector("body"),
 button = document.querySelector("button");

 console.log(bodyColor);

function getHexColor() {
    const arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var result = "#"
    for (var i = 0; i < 6; i++){
        var randomIndex = Math.floor(Math.random() * arr.length);
        result += arr[randomIndex];
    }
    return result;
}

function changeColor() {
    hexColor.innerText = "HEX COLOR : " + getHexColor();
    bodyColor.style.backgroundColor = getHexColor();
}

button.addEventListener('click', changeColor);
