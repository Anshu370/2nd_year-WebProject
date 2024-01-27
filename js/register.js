
function validate() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('ph_no').value;
    const password = document.getElementById('pass').value;
    
    if(name.length < 6){
        console.log(name)
        alert("name should not be less than 6 charectors")
    }

    if(!email.includes("@gamil.com")){
        console.log(email.includes("@gamil.com"))
        alert("email is not in correct formate")
    }

    if(phone.length != 10){
        console.log(phone)
        alert("enter correct phone number")
    }

    if(password.length < 6){
        console.log(password)
        alert("Enter valid password with length more than 6")
    }


}