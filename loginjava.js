// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGZnXe-mzM2VOLWl8HpgowHm5ALAbVfEs",
    authDomain: "my-profile-1d49d.firebaseapp.com",
    databaseURL: "https://my-profile-1d49d-default-rtdb.firebaseio.com/",
    projectId: "my-profile-1d49d",
    storageBucket: "my-profile-1d49d.appspot.com",
    messagingSenderId: "1085632041016",
    appId: "1:1085632041016:web:2b52f2e106d7f119d256cd",
    measurementId: "G-VNCBCT10Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// New Registration code
document.getElementById("register").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // For new registration
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            alert("Registration successful!!");
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(error);
        });
});

// Login code
document.getElementById("login").addEventListener("click", function () {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            alert(user.email + " Login successful!!!");
            document.getElementById('logout').style.display = 'block';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
});

// Logout code
document.getElementById("logout").addEventListener("click", function () {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        alert('Sign-out successful.');
        document.getElementById('logout').style.display = 'none';
    }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
    });
});

document.getElementById("register").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var passwordError = document.getElementById("password_error");

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match. Please check.";
        return;
    } else {
        // Passwords match, you can proceed with registration
        passwordError.textContent = ""; // Clear any previous error message
        // Add your registration logic here
    }
});

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const registerButton = document.getElementById("register");
const passwordError = document.getElementById("password_error");

confirmPasswordInput.addEventListener("input", () => {
    if (passwordInput.value === confirmPasswordInput.value) {
        registerButton.disabled = false;
        passwordError.textContent = "";
    } else {
        registerButton.disabled = true;
        passwordError.textContent = "Passwords do not match. Please check.";
    }
});

// Add an event listener to the "Login" button
document.getElementById('login').addEventListener('click', function () {
    // Get user input (email and password)
    const userEmail = document.getElementById('login_email').value;
    const userPassword = document.getElementById('login_password').value;

    // Perform your login validation here (e.g., check credentials)
    // For demonstration purposes, let's assume the login is successful
    const loginSuccessful = true;

    if (loginSuccessful) {
        // Redirect the user to web.html
        window.location.href = 'web.html';
    } else {
        // Handle login failure (e.g., display an error message)
        alert('Login failed. Please check your credentials.');
    }
});

