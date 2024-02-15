var btn = document.querySelector(".btn-hover");
var bChange = document.querySelector(".bac-change");
var all_c = document.querySelector(".all-c");
const textarea = document.getElementById('area');
var body = document.body;

function backChange() {

    var bodyColor = getComputedStyle(body).backgroundColor;

    var hexColor = rgbToHex(bodyColor);

    if (hexColor === "#343541") {
        btn.style.transform = "translateX(29px)";
        document.body.style.backgroundColor = "white";
        bChange.style.backgroundColor = "black";
        btn.style.backgroundColor = "white";
        all_c.style.color = "black";
    }

    else if (hexColor === "#ffffff") {
        btn.style.transform = "translateX(0px)";
        btn.style.backgroundColor = "black";
        document.body.style.backgroundColor = "#343541";
        bChange.style.backgroundColor = "white";
        all_c.style.color = "white";
    }
}

function rgbToHex(rgbColor) {
    var match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    if (!match) {
        return rgbColor;
    }

    return "#" + (
        "0" + parseInt(match[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(match[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(match[3], 10).toString(16)).slice(-2);
}

btn.onclick = function () {
    backChange();
};


textarea.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        message_send();
        textarea.value = "";
    }
});

function message_send(){
    var resultCon = document.querySelector(".result-con");
    var userMessage = document.createElement("div");
    var ashMessage = document.createElement("div");

    userMessage.className = "user-mess"; 
    ashMessage.className = "ash-mess"; 

    userMessage.innerHTML = "<h2>You: </h2>" + textarea.value;

    resultCon.appendChild(userMessage);
}