const signup = document.getElementById("signup");
signup.onmouseover = (e) => {
    if(!signup.classList.contains("move-right") && !signup.classList.contains("move-left")) {
        signup.classList.remove("translate-middle-x")
        signup.classList.remove("start-50");
        signup.classList.add("move-right");
    }else if(signup.classList.contains("move-right")) {
        signup.classList.remove("move-right");
        signup.classList.add("move-left");
    }else if(signup.classList.contains("move-left")) {
        signup.classList.remove("move-left");
        signup.classList.add("move-right");
    }
};