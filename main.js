var score = 0;
var random_number = Math.floor(Math.random() * 10) + 1;
console.log(random_number);
var timeLeft = 10;

function check(number, randomNumber) {
    if (number == randomNumber) {
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById("info").innerHTML = "Correct!";
        timeLeft = 10;
        clearTimeout();
    } else {
        document.getElementById("info").innerHTML = "Try again";s
    }
}

function generateNumber() {
    var input_number = document.getElementById("numberInput").value;
    check(input_number, random_number);
}

var game_timeout = setTimeout(function() {
    document.getElementById("numberInput").disabled = true;
    document.getElementById("info").innerHTML = "Oops! Time's up. The answer was : " + random_number;
}, 10000);

var timer_interval = setInterval(function() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("time").innerHTML = timeLeft;
    } else {
        clearInterval(timer_interval);
        clearTimeout(game_timeout);
    }

}, 1000);