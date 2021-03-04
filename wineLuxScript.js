
function answerAge()
{
let answerAge = prompt("How old are you?");
    if (answerAge >= 21) {
        alert("Follow The Wine Lux on Instagram to learn more! 🥂");
    } else { (answerAge < 21)
        alert("Sorry, please come back when you're 21 or older! ⏳")
    }
}
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", answerAge);
 