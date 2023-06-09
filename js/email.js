function sendEmail() {
    var form = document.getElementById("contact-form");
        var name = form.elements["name"].value;
        var email = form.elements["email"].value;
        var message = form.elements["message"].value;
            
        var templateParams = {
        from_name: name,
        from_email: email,
        message: message
        };

        //should use .env variables.. 
        emailjs.send("service_ixet7xo", "template_tmfhwvf", templateParams)
        .then(function(response) {
          console.log("SUCCESS!", response.status, response.text);
          alert('Email sent successfully!');
          // success message
        }, function(error) {
          console.log("FAILED...", error);
          alert('Failed to send email.');
          // error message
        });
  }