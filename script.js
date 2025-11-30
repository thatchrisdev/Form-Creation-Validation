document.addEventListener('DOMContentLoaded', () => {
    // 1. Form Selection
    const form = document.getElementById('registration-form');
    // 2. Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');

    // 3. Form Submission Event Listener
    form.addEventListener('submit', (event) => {
        // Prevent the form from submitting to the server
        event.preventDefault();

        // 4. Input Retrieval and Trimming
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 5. Initialize Validation Variables
        let isValid = true;
        let messages = [];

        // 6. Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // 7. Email Validation
        // Basic check for '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must include '@' and '.').");
        }

        // 8. Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 9. Displaying Feedback
        // Make the feedback div visible
        feedbackDiv.style.display = "block";
        feedbackDiv.style.padding = "10px"; // Ensure padding is applied when visible

        if (isValid) {
            // Success Message
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#155724"; // Dark green text
            feedbackDiv.style.backgroundColor = "#d4edda"; // Light green background
            // Optionally clear the form
            form.reset();
        } else {
            // Error Messages
            // Join error messages with <br> for line breaks and assign to innerHTML
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#721c24"; // Dark red text
            feedbackDiv.style.backgroundColor = "#f8d7da"; // Light red background
        }
    });
});

