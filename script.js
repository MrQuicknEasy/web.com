document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("quoteForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    // Create email body
    let mailtoLink = `mailto:Mrquickandeasy1@gmail.com?subject=Quote Request from ${name}&body=
      Name: ${name}%0D%0A
      Email: ${email}%0D%0A
      Phone: ${phone}%0D%0A
      Service Needed: ${service}%0D%0A
      Message: ${message}%0D%0A`;

    // Open the user's email app with the pre-filled details
    window.location.href = mailtoLink;

    // Reset form after opening email client
    document.getElementById("quoteForm").reset();
  });
});
