//*29*create a variable to keep track of the num of squares 
var numOfSquares = 6;

var colors = numOfSquares; //until*29*generateRandomColors(6);

var squares = document.querySelectorAll( ".square");

var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");
//*20* add button to play again
var reset = document.querySelector('#reset');
//the buttons must have a different color when selected add css
var easy = document.querySelector('#easy');

var hard = document.querySelector('#hard');

var stripe = document.querySelector('#stripe')

colorDisplay.textContent = pickedColor;

    easy.addEventListener('click', function () {
            easy.classList.add( 'selected' );
            hard.classList.remove(  'selected'); 
            numOfSquares = 3;
            colors = generateRandomColors(numOfSquares);
            pickedColor = pickColor();
            colorDisplay.textContent = pickedColor;
            for (var i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.background = colors[i];
            } else {
                squares[i].style.display ='none';
}
}
});

    hard.addEventListener('click', function () {
        hard.classList.add('selected');
        easy.classList.remove('selected');
        numOfSquares = 6;
        colors = generateRandomColors(
        numOfSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for (var i = 0; i < squares.length; i++){
            squares[i].style.background =colors[i];
            squares[i].style.display ='block';
    }
});


    reset.addEventListener('click',function () {
        messageDisplay.textContent = "";
        this.textContent = 'New Colors';
        stripe.style.background ='black';
        stripe.style.color ='';
        colors = generateRandomColors(numOfSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;

        for (var i = 0; i <squares.length; i++) {
        squares[i].style.background =colors[i];
    }

        h1.style.background ='black';
});


for (var i = 0; i < squares.length; i++) {
    squares[i].style.background =colors[i];
    squares[i].addEventListener( "click",function () {
        var clickedColor = this.style.background;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            messageDisplay.style.color = 'green';
            changeColors (  clickedColor );
            h1 .style.background =clickedColor;
            stripe.style.background = clickedColor;
            reset.textContent ='Play Again ?';
        } else {
            this.style.background ="black";
            messageDisplay.textContent ="Try Again!";
             messageDisplay.style.color = 'red'; }
});
}


function changeColors(color) {
        //loop through all squares
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = color;
        }
}

function pickColor() {
        var random = Math.floor(Math.random() *colors.length);
        return colors[random];
}

function generateRandomColors(num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
                //get random color and push into arr
                arr.push(randomColor());
        }
        return arr;
}

function randomColor() {
        //pick a "red" from 0 - 255
        var r = Math.floor(Math.random() *
                256);
        //pick a "green" from 0 - 255
        var g = Math.floor(Math.random() *
                256);
        //pick a "blue" from 0 - 255
        var b = Math.floor(Math.random() *
                256);
        return "rgb(" + r + ", " + g +
                ", " + b + ")";
}