const icon = document.querySelectorAll(".question__card-icon");
const answer = document.querySelectorAll(".question__answer");

for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener("click", function () {
        answer[i].classList.toggle("active")
        if (icon[i].textContent == '+') {
            icon[i].textContent = '-'
        }else {
            icon[i].textContent = '+'
        }
    })
}