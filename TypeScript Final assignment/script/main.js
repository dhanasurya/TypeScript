function newuser() {
    var newusername = document.getElementById("homepage");
    var newlogin = document.getElementById("userdetails");
    newusername.style.display = "none";
    newlogin.style.display = "block";
}
function login() {
    var newusername = document.getElementById("homepage");
    var newlogin = document.getElementById("userdetails");
    var loginpage = document.getElementById("loginpage");
    newusername.style.display = "none";
    newlogin.style.display = "none";
    loginpage.style.display = "block";
}
function validuserId() {
    var newusername = document.getElementById("homepage");
    var newlogin = document.getElementById("userdetails");
    var loginpage = document.getElementById("loginpage");
    var valid = document.getElementById("option");
    newusername.style.display = "none";
    newlogin.style.display = "none";
    loginpage.style.display = "none";
    valid.style.display = "block";
}
function availablecourses() {
    var newusername = document.getElementById("homepage");
    var newlogin = document.getElementById("userdetails");
    var loginpage = document.getElementById("loginpage");
    var valid = document.getElementById("option");
    var select = document.getElementById("courses");
    newusername.style.display = "none";
    newlogin.style.display = "none";
    loginpage.style.display = "none";
    valid.style.display = "block";
    select.style.display = "block";
}
function enroll() {
}
var User = /** @class */ (function () {
    function User(userName, userAge, userphoneNumber) {
        this.UserName = userName;
        this.UserAge = userAge;
        this.UserPhoneNumber = userphoneNumber;
    }
    return User;
}());
var Enroll = /** @class */ (function () {
    function Enroll() {
    }
    return Enroll;
}());
var userlist = new Array();
function adduser() {
    var userName = document.getElementById("username1");
    var userAge = document.getElementById("userage1");
    var userphoneNumber = document.getElementById("userphone1");
    userlist.push(new User(userName, userAge, userphoneNumber));
    alert("registeration Successful");
}
