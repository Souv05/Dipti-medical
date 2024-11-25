// Define valid credentials
const validUser = {
    username: 'user123',
    password: 'password123'
};

const validAdmin = {
    username: 'admin',
    password: 'admin123'
};

// Handle user login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    // Check if fields are empty
    if (!username || !password) {
        message.textContent = 'Please enter both username and password.';
        message.style.color = 'red';
        return;
    }

    // Validate user credentials
    if (username === validUser.username && password === validUser.password) {
        message.textContent = 'Login successful! Welcome!';
        message.style.color = 'green';
        // Redirect to user dashboard or handle user session
    } else {
        message.textContent = 'Invalid username or password. Please try again.';
        message.style.color = 'red';
    }
});

// Handle admin login
document.querySelector('.admin-login-btn').addEventListener('click', function() {
    const username = prompt("Enter Admin Username:").trim();
    const password = prompt("Enter Admin Password:").trim();

    // Validate admin credentials
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    if (username === validAdmin.username && password === validAdmin.password) {
        alert('Admin login successful! Welcome Admin!');
        window.location.href = 'admin-dashboard.html'; 
    } else {
        alert('Invalid admin credentials. Please try again.');
    }
});

// Get the modal
var modal = document.getElementById("registrationModal");

// Get the button that opens the modal
var openModalButton = document.getElementById("openModal");

// Get the <span> element that closes the modal
var closeModalButton = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle registration form submission
document.getElementById('registerForm')// Define valid credentials
const validCredentials = {
    user: {
        username: 'user123',
        password: 'password123'
    },
    admin: {
        username: 'admin',
        password: 'admin123'
    }
};

// Handle user login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    // Check if fields are empty
    if (!username || !password) {
        message.textContent = 'Please enter both username and password.';
        message.style.color = 'red';
        return;
    }

    // Validate user credentials
    if (username === validCredentials.user.username && password === validCredentials.user.password) {
        message.textContent = 'Login successful! Welcome!';
        message.style.color = 'green';
        // Redirect to user dashboard or handle user session
    } else if (username === validCredentials.admin.username && password === validCredentials.admin.password) {
        message.textContent = 'Admin login successful! Welcome Admin!';
        message.style.color = 'green';
        window.location.href = 'admin-dashboard.html'; 
    } else {
        message.textContent = 'Invalid username or password. Please try again.';
        message.style.color = 'red';
    }
});

