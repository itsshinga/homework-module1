// Function to generate a random string of specified length
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@&$!';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Generate an 8-character random string and display it
document.addEventListener("DOMContentLoaded", function () {
    const randomString = generateRandomString(8); // Generate random code
    document.getElementById("codes").textContent = randomString;
});


//Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true;
}

//Activate function
disableButton();