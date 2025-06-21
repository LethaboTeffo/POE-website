const faqs = document.querySSelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
        });
       });


//Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#emails");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
//validate form
function validateForm() {

    clearMessages();
    let error

   if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email adress";
        email.classList.add("error-border");
        errorFlag = true;

    }
    if (message.value.length < 1) {
        errorNodes[2].innerText = "Message cannot be blank";
       message.classList.add("error-border");
        errorFlag = true;
    }
    if( !errorFlag) {
        success.innerText = "Success!";

    }
}

//clear error/success messages
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
}

//check if email is valid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
