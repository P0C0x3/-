// Окно авторизации
const shadowLink = document.querySelector(".shadow-link");
const headerRegLink = document.querySelector(".header-reg-link");
const authWindowBlock = document.querySelector(".auth-window-block");
const authLogin = document.querySelector(".auth-login");

headerRegLink.addEventListener("click", function() {
	authWindowBlock.style.display = "block";
	authLogin.focus();
});

shadowLink.addEventListener("click", function() {
	authWindowBlock.style.display = "none";
});
