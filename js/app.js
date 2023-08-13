const logo1 = document.querySelector('.container__logo');
logo1.onclick = function() {
  window.location.href = "https://divanini.github.io/saas/html/home.html"
}

const arrowToCareer = document.querySelectorAll('.career__arrow');
arrowToCareer.forEach(button => {
  button.onclick = function() {
    window.location.href = "https://divanini.github.io/saas/html/features.html";
  }
});

const password = document.querySelector('.container__form-password')
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function() {
        const usernameInput = document.querySelector(".container__form-name");
        const passwordInput = document.querySelector(".container__form-password");
        fetch("user/data.json")
            .then(response => response.json())
            .then(data => {
                const enteredUsername = usernameInput.value;
                const enteredPassword = passwordInput.value;

                const matchingUser = data.find(user => user.username === enteredUsername && user.password === enteredPassword);

                if (matchingUser) {
                    window.location.href = "html/home.html";
                } else {
                    location.reload()
                }
            })
            .catch(error => console.error("Error fetching data.json:", error));
    });
});


