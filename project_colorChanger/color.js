const buttons = document.querySelectorAll(".button")
const body=document.querySelectorAll("body")
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id=="lightgreen"){
            body.style.backgroundcolor=e.target.id
        }
        if (e.target.id=="lightblue"){
            body.style.backgroundcolor=e.target.id
        }
        if (e.target.id=="pink"){
            body.style.backgroundcolor=e.target.id
        }
    })
})