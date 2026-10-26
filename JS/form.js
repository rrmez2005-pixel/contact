document.getElementById("Contact-Form").onsubmit = () => {

    let isValid = true;

    clearErrors();

    let fname = document.getElementById("fname").value.trim();
    if (fname === "") {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }


    let lname = document.getElementById("lname").value.trim();
    if (lname === "") {
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

    let linkedin = document.getElementById("linkedin").value.trim();
    //NEEDS a linkedin url
    if (linkedin !== "" && !linkedin.startsWith("https://linkedin.com/in/")) {
        document.getElementById("err-linkedin").style.display = "block";
        isValid = false;
    }

    let email = document.getElementById("email").value.trim();
    let isMailingList = document.getElementById("mail").checked;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (isMailingList && email === "") {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    } else if (email !== "" && !emailPattern.test(email)) {
        document.getElementById("err-symbol").style.display = "block";
        isValid = false;
    }


    let meeting = document.getElementById("meeting").value;
    let other = document.getElementById("other").value.trim();

    if (meeting == "Select") {
        document.getElementById("err-meeting").style.display = "block";
        isValid = false;
    }
    if (meeting == "Other" && other === "") {
        document.getElementById("err-other").style.display = "block";
        isValid = false;
    }

    if (isMailingList) {
        let methodSelected = false;
        let methodButtons = document.getElementsByName("format");

        for (let i = 0; i < methodButtons.length; i++) {
            if (methodButtons[i].checked) {
                methodSelected = true;
                break;
            }
        }
        if (!methodSelected) {
            document.getElementById("err-format").style.display = "block";
            isValid = false;
        }
    }


    return isValid;
}; 

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}