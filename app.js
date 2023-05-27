const LoginForm = document.querySelector("#LogIn-Form")
const LoginInput = document.querySelector("#LogIn-Form input")

const Link = document.querySelector("a")

function onLoginSubmit (event) {
    event.preventDefault();
    console.log(LoginInput.value);
}

function handleOnLink (event) {
    event.preventDefault();
    console.log(event);
}

LoginForm.addEventListener("submit", onLoginSubmit)
Link.addEventListener("click", handleOnLink)