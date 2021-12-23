// Import the functions you need from the SDKs you need
		  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
		  
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCTdMAFcXuS-n9sarTsSmS-_2gKO0W6l9g",

  authDomain: "personalsite-contact-form.firebaseapp.com",

  databaseURL: "https://personalsite-contact-form-default-rtdb.firebaseio.com",

  projectId: "personalsite-contact-form",

  storageBucket: "personalsite-contact-form.appspot.com",

  messagingSenderId: "883062758064",

  appId: "1:883062758064:web:d22df5d24d92ae88e1b975"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen form submit

document.getElementById('contactForm').addEventListener('click', submitForm);

//Submit Form
function submitForm(e) {
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, message);
    console.log(name, email, message);

    // // Show alert
    // document.querySelector('.alert').style.display = 'block';

    // // Hide alert after 3 seconds
    // setTimeout(function(){
    //     document.querySelector('.alert').style.display = 'none';
    // },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
}
