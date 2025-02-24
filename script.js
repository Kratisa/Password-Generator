const passwordField = document.getElementById("password");
const copyButton = document.getElementById("copy");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-val");
const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const strengthDisplay = document.getElementById("strength");
const toggleThemeButton = document.getElementById("toggle-theme");

function generatePassword() {
    const length = lengthSlider.value;
    const useLowercase = lowercaseCheckbox.checked;
    const useUppercase = uppercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;
    let characters = "";
    if (useLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (useUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) characters += "0123456789";
    if (useSymbols) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    passwordField.value = password;
    updateStrength(password);
}

function updateStrength(password) {
    let strength = "Weak";
    if (password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength = "Strong";
    } else if (password.length >= 8 && (/[A-Z]/.test(password) || /[0-9]/.test(password))) {
        strength = "Medium";
    }
    strengthDisplay.textContent = strength;
}

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied to clipboard!");
});

generateButton.addEventListener("click", generatePassword);
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleThemeButton.textContent = "☀️ Light Mode";
    } else {
        toggleThemeButton.textContent = "🌙 Dark Mode";
    }
});