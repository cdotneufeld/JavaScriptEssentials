let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Congratulations! You've reached 10 followers!");
    } else if (count === 5) {
        alert("Great job! You've reached 5 followers!");
    }
}

function resetCount() {
    count = 0;
    alert("Follower count has been reset.");
    displayCount();
}
