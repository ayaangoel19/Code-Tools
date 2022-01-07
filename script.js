// Typewriter Effect
let txt = "Welcome to CodeTools";
let i = 0;
window.onload = setInterval(() => {
  if (i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    i++;
  }
}, 50);

//Changing Navbar Color on scroll
window.onscroll = function () {
  bgChange();
};
function bgChange() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    document.getElementById("bgChange").style.backgroundColor = "black";
    document.getElementsByClassName("logo")[0].style.color = "white";
    document.getElementsByClassName("logoimg")[0].style.filter =
      "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)";
    document.getElementsByClassName("tothetop")[0].style.display = "block";
    document.getElementById("bgChange").style.boxShadow =
      "0px 12px 18px 0px rgb(45 43 43 / 75%";
  } else {
    document.getElementById("bgChange").style.backgroundColor = "transparent";
    document.getElementsByClassName("logo")[0].style.color = "black";
    document.getElementsByClassName("logoimg")[0].style.filter = "";
    document.getElementsByClassName("tothetop")[0].style.display = "none";
    document.getElementById("bgChange").style.boxShadow = "";
  }
}

// Signup Form
let submit = false;
let password = document.getElementById('signUpPass').value;
document.getElementById("submitbtn").addEventListener("click", () => {
  if (document.getElementById("signUpUserName").value === "") {
    alert("You cant leave username empty");
  }
  else if (document.getElementById("signUpPass").value === "") {
    alert("You cant leave password empty");
  } else {
    submit = true;
    document.getElementsByClassName("signupcontainer")[0].style.display =
    "none";
    let username = document.getElementById("signUpUserName").value;
    document.getElementById('afterh1').innerHTML = `You've been signed up to CodeTools, ${username}`;
    document.getElementsByClassName("aftercontainer")[0].style.display = "flex";
  }
});

setInterval(() => {
  if (submit === true) {
    let username = document.getElementById("signUpUserName").value;
    document.getElementsByClassName("signName")[0].style.display = "block";
    document.getElementsByClassName("signName")[0].innerHTML = username.charAt(0);
  }
}, 0001);