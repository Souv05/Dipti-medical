// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const confirmPassword = document.getElementById('reg-confirm-password').value.trim();
    const message = document.getElementById('reg-message');

    // Check if fields are empty
    if (!username || !email || !password || !confirmPassword) {
        message.textContent = 'Please fill in all fields.';
        message.style.color = 'red';
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match.';
        message.style.color = 'red';
        return;
    }

    // Here you can add logic to store the user details (e.g., send to server)
    message.textContent = 'Registration successful! You can now log in.';
    message.style.color = 'green';

    // Optionally, reset the form
    document.getElementById('registerForm').reset();
});