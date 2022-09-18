document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".form").addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    const mobileNumber = parseInt(event.target.mobile.value);
    if (mobileNumber.toString() == NaN.toString()) {
      alert("Please enter a correct mobile number");
    }
    console.log(mobileNumber);
    console.log(event.target.password.value);
  });

  document.getElementById("email").addEventListener("input", function (event) {
    const el = event.target;
    if (el.validity.typeMismatch) {
      el.setCustomValidity("Please enter a valid email address");
      el.reportValidity();
    } else {
      el.setCustomValidity("");
    }
  });

  document.addEventListener("click", function (event) {
    console.log(document.getElementById("outside").value);
  });
});
