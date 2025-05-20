document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const msg = document.getElementById('msg');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    msg.textContent = "Submitting...";
    msg.style.color = "black";

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(text => {
        msg.textContent = "Thank you for your submission!";
        msg.style.color = "green";

        setTimeout(() => {
          form.reset();
          msg.textContent = "";
        }, 3000);
      })
      .catch(error => {
        console.error('Error!', error.message);
        msg.textContent = "Submission failed. Please try again.";
        msg.style.color = "red";
      });
  });
});
