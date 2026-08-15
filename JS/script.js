// HOME PAGE JS
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const searchValue = searchInput.value.trim();

    if (searchValue === "") {

        alert("Please enter a service.");

        searchInput.focus();

        return;
    }

    alert("Searching for: " + searchValue);

});


/* ================================
   POPULAR SEARCHES
================================ */

const popularButtons =
    document.querySelectorAll(".popular-searches button");

popularButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const searchValue =
            button.getAttribute("data-search");

        searchInput.value = searchValue;

        searchInput.focus();

    });

});


/* ================================
   CATEGORIES
================================ */

const categories =
    document.querySelectorAll(".category");

categories.forEach(function (category) {

    category.addEventListener("click", function () {

        const categoryName =
            category.getAttribute("data-category");

        alert("Opening " + categoryName + " services.");

    });

});


/* ================================
   FAVORITES
================================ */

const favoriteButtons =
    document.querySelectorAll(".favorite");

favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("active");

        if (button.classList.contains("active")) {

            button.textContent = "♥";

        } else {

            button.textContent = "♡";

        }

    });

});


/* ================================
   EXPLORE BUTTON
================================ */

const exploreButton =
    document.getElementById("exploreBtn");

exploreButton.addEventListener("click", function () {

    alert("The full services page will open here.");

});


/* ================================
   SELLER BUTTON
================================ */

const sellerButton =
    document.getElementById("sellerBtn");

sellerButton.addEventListener("click", function () {

    alert("Seller registration will open here.");

});


/* ================================
   LOGIN
================================ */

const loginButton =
    document.getElementById("loginBtn");

loginButton.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Login page will open here.");

});


/* ================================
   SIGN UP
================================ */

const signupButton =
    document.getElementById("signupBtn");

signupButton.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Sign up page will open here.");

});


/* ================================
   MOBILE MENU
================================ */

const mobileMenu =
    document.getElementById("mobileMenu");

const navLinks =
    document.querySelector(".nav-links");

mobileMenu.addEventListener("click", function () {

    navLinks.classList.toggle("mobile-open");

});