
// Simple event Listener that displays the user's name on the screen. Later more logic will be added to check 
// against the database if the user actually exists and prompt the appropriate message.
// No need for logic to check if both fields have values because both fields are required before hitting the Log in button.
document.querySelector('.login-box form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = event.target.username.value;

    // Hide the login form
    document.querySelector('.login-box').style.display = 'none';

    // Update the username display
    const usernameContainer = document.querySelector('.username-container');
    usernameContainer.innerHTML = `${username} <i id="user" class="fa-solid fa-user" style="color: #ffffff;"></i>`;

    // Display the welcome message and logout button
    const welcomeContainer = document.createElement('div');
    welcomeContainer.className = 'welcome-container';
    welcomeContainer.innerHTML = `
        <div class="welcome-message">
            Welcome, <strong>${username}!</strong>
        </div>
        <button id="logoutButton">Logout</button>
    `;
    document.querySelector('.box2').appendChild(welcomeContainer);

    // Add event listener for logout
    document.getElementById('logoutButton').addEventListener('click', function () {
        // Remove welcome container
        welcomeContainer.remove();

        // Reset the username display
        usernameContainer.innerHTML = `Username <i id="user" class="fa-solid fa-user" style="color: #ffffff;"></i>`;

        // Show the login form again
        document.querySelector('.login-box').style.display = 'block';
    });
});


// Function to change mark the appropriate recipient of the feedback.
function toggleColor(currentButton, otherButtonId) {
    const otherButton = document.getElementById(otherButtonId);
    if (currentButton.style.backgroundColor === 'green') {
        // Reset to original color
        currentButton.style.backgroundColor = '';
    } else {
        currentButton.style.backgroundColor = 'green';
        // Reset the other button
        otherButton.style.backgroundColor = '';
    }
}

// Notify user that message was sent.
document.getElementById("sendButton").addEventListener("click", function () {
    alert("Feedback sent!");
});

