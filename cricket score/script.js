var scores = [];

if (localStorage.getItem("scores")) {
    scores = JSON.parse(localStorage.getItem("scores"));
    updateScore();
}

function addRuns(input) {
    let count = 0;
    let s = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] != "Wide") {
            count++;
        }
    }
    if (count >= 6) {
        alert("out of balls");
        return;
    }
    let score = document.getElementById("score");
    scores.push(input);
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] != "Wide" && scores[i] != "W") {
            s = s + scores[i];
        }
    }
    let display = document.getElementById("display");
    display.innerHTML = "Score: " + s;
    storeToLocalStorage();
    // console.log(score);
    // console.log(score.innerHTML);
    score.innerHTML = score.innerHTML + '<div class="bg-body border rounded-5 overitem shadow-sm">' + input + '</div>';
    // alert(input);
}

function storeToLocalStorage() {
    localStorage.setItem("scores", JSON.stringify(scores));
}

function updateScore() {
    let score = document.getElementById("score");
    for (let i = 0; i < scores.length; i++) {
        score.innerHTML = score.innerHTML + '<div class="bg-body border rounded-5 overitem shadow-sm">' + scores[i] + '</div>';
    }
}

function reset() {
    localStorage.clear();
    location.reload();
}