function login() {
    
    var username = document.getElementById("username").value;
    
    var password = document.getElementById("password").value;

    
    if (username === "" || password === "") {
        
        alert("Please enter both username and password.");
        
        return;
    }

    
    if (username === "user" && password === "pass") {
        
        alert("Login successful!");
       
    } else {
        
        alert("Invalid username or password. Please try again.");
    }
}
