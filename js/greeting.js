const LoginForm = document.querySelector("#LogIn-Form")
const LoginInput = document.querySelector("#LogIn-Form input")
const Greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function OnLoginSubmit (event){
    event.preventDefault();
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    const username = LoginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting (username){
    Greeting.classList.remove(HIDDEN_CLASSNAME);
    if(String(new Date().getHours())<17){
        Greeting.innerText = `Good morning, ${username}`;
    } else {
        Greeting.innerText = `Good evening, ${username}`;
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit", OnLoginSubmit);
} else {
    paintGreeting(savedUsername);
}