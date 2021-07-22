var firebaseConfig = {
    apiKey: "AIzaSyD5n8fwXMfytg_O8fkJYfw8WKshlhIsO8Q",
    authDomain: "cosens-70be9.firebaseapp.com",
    databaseURL: "https://cosens-70be9-default-rtdb.firebaseio.com",
    projectId: "cosens-70be9",
    storageBucket: "cosens-70be9.appspot.com",
    messagingSenderId: "1034382280500",
    appId: "1:1034382280500:web:423a405212e87900360761"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var frst = 0
var scnd = 0
var tell = 0
var pinn = 0
var ball = 0
var userReference = firebase.database().ref('users');

function newUser(frst, scnd, numb, pin, balance) {
    var newUser = userReference.push();
    newUser.set({
        frstname: frst,
        scndname: scnd,
        tel: numb,
        pin: pin,
        balance: balance,
    });
    alert('done')
}

function signup() {
    $('contianer').html(`<div id="user_div" class="loggedin-div">
        <h3>Welcome User</h3>
        <p id="user_para">Welcome to Firebase web login Example. You're currently logged in.</p>
        <button onclick="logout()">Logout</button>
        </div>
    `)
}
