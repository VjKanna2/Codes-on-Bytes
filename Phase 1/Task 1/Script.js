// for eye in password
function myFunction(){
    var x = document.getElementById("pword");
    if (x.type === "password") {
        x.type = "text";
    } 
    else {
        x.type = "password";
    }
}

// for username
function myFunction2(){
    var y = document.getElementById("uname").value;
    if (y.trim() !== "") {
        alert("Hello, " + y + "!");
    } 
    else {
        alert("Please enter a valid username.");
    }
}