let noButton = document.getElementById("noButton");
let yesButton = document.getElementById("yesButton");

yesButton.addEventListener("click", function(e) {
    window.location.href = "./yay.html";
});

noButton.addEventListener("click", function(e) {
    
    var temp = noButton.offsetWidth;
    var temp2 = noButton.offsetHeight;
    noButton.style.width = (temp-50) + "px";
    noButton.style.height = (temp2-50) + "px";

    var temp3 = yesButton.offsetWidth;
    var temp4 = yesButton.offsetHeight;
    yesButton.style.width = (temp3+50) + "px";
    yesButton.style.height = (temp4+50) + "px";

    if (temp < 150)
    {
        noButton.style.display = 'none';
    }
});
