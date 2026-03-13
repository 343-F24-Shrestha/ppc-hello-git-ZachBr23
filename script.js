let contact = document.getElementById("contact");
let email = document.getElementById("email");

contact.addEventListener("click", sayHello);

function sayHello() {
  if (email.textContent === "") {
    email.textContent = "breitbzt@dukes.jmu.edu";
    email.style.backgroundColor = "yellow";
    contact.textContent = "Hide!";
  } else {
    email.textContent = "";
    email.style.backgroundColor = "";
    contact.textContent = "Say Hello!";
  }
}