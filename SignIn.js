let loginForm = document.getElementById('loginform');
console.log(loginForm);
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if (email.value == "" || password.value == "") {
        alert("Please enter value in both fields.");
    } else {
        alert("the form has  been submitted");
        console.log(`This form has email of ${email.value} and password of ${password.value} fields`);
        email.value = "";
        password.value = "";
    }

})




