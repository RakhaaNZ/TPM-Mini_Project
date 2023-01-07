//scroll bar
window.onscroll = function() {
    var windowScroll = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollAmount = (windowScroll / windowHeight) * 100;
    document.getElementById("linebar").style.width = scrollAmount + "%";
};

//Validation Form
function validateForm() {
    if (document.forms["form"]["firstname", "lastname", "email", "message"].value == "") {
        alert("Form cannot be empty");
        document.forms["form"]["firstname", "lastname", "email", "message"].focus();
        return false;
    }
}

const rules = {
    firstname: {
        required: true,
        minlength: 3
    },
    lastname: {
        required: true,
        minlength: 3
    },
    email: {
        required: true,
        email: true
    },
    number: {
        required: true
    },
    gender: "required",
    message: "required"
}

const message = {
    firstname: {
        required: "Please enter your firstname",
        minlength: "Your firstname must consist of at lease 3 characters"
    },
    lastname: {
        required: "Please enter your lastname",
        minlength: "Your firstname must consist of at lease 3 characters"
    },
    email: {
        required: "Please enter your email",
        email: "Please enter a valid email addres with ''@''"
    },
    number: "Please enter your phone number",
    gender: "Please select one",
    message: "Please enter your message"
}

$(document).ready(function(){
    $('#form').validate({
        rules : rules,
        messages : message
    })
})

