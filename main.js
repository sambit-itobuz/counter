const count = document.getElementById("count");
let countValue = Number(count.textContent);

function decrease() {
    countValue--;
    count.innerText = countValue;
    updateColor(countValue);
}

function increase() {
    countValue++;
    count.innerText = countValue;
    updateColor(countValue);
}

function reset() {
    countValue = 0;
    count.innerText = countValue;
    updateColor(countValue);
}

function updateColor(countVal) {
    if(countVal > 0) {
        count.style.color = "green";
    }
    else if(countVal < 0) {
        count.style.color = "red";
    }
    else {
        count.style.color = "black";
    }
}