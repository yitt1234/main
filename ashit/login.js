import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

const auth = getAuth();



document.getElementById('signUpButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signUpEmail = document.getElementById('signUpEmail').value
    const signUpPassword = document.getElementById('signUpPassword').value

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword )
        .then((userCredential) => {
            console.log(userCredential)
            // Signed in
            const user = userCredential.user;


            // ...
        })
        .catch((error) => {
            console.log('error')
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(error.message)
            alert(error.message)
            localStorage.removeItem('userinfo')
        });

})
//TODO write user information and name into the textcloud page
document.getElementById('signInButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signInEmail = document.getElementById('signInEmail').value
    const signInPassword = document.getElementById('signInPassword').value

    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
            // Signed in
            console.log(userCredential)

            localStorage.setItem("emaill", signInEmail)
            // ...
        })
        .catch((error) => {
            console.log('로그인 실패')
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("failed to login " + error.message)
        });

})


document.getElementById('2').addEventListener('click', (event) => {
    event.preventDefault()

})
document.getElementById('4').addEventListener('click', (event) => {
    event.preventDefault()
})

$(document).ready(function(){
    $("#1").show()
    $("#3").hide()
})


$("#2").click(function(){
    $("#1").hide()
    $("#3").show()
});
$("#4").click(function(){
    $("#3").hide()
    $("#1").show()
});
