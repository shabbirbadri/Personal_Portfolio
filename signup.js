// Function to handle sign up form submission
function handleSignup(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    // Retrieve sign up form inputs
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Retrieve existing users from local storage
    var storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if username already exists
    var existingUser = storedUsers.find(user => user.username === username);
  
    if (existingUser) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
  
    // Add new user to the stored users
    var newUser = {
      username: username,
      email: email,
      password: password
    };
  
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
  
    alert("Sign up successful! Please sign in to continue.");
    // Clear the sign up form
    document.getElementById("signup-form").reset();
  }
  
  // Function to handle sign in form submission
  function handleSignIn(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    // Retrieve sign in form inputs
    var loginUsername = document.getElementById("login-username").value;
    var loginPassword = document.getElementById("login-password").value;
  
    // Retrieve stored users from local storage
    var storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Find the user with matching credentials
    var foundUser = storedUsers.find(user => user.username === loginUsername && user.password === loginPassword);
  
    if (foundUser) {
      alert("Login successful!");
      // Redirect or perform additional actions after successful login
    } else {
      alert("Invalid username or password");
    }
  
    // Clear the sign in form
    document.getElementById("signin-form").reset();
  }
  
  // Attach event listeners to the sign up and sign in forms
  document.getElementById("signup-form").addEventListener("submit", handleSignup);
  document.getElementById("signin-form").addEventListener("submit", handleSignIn);
  