import emailjs from 'emailjs-com';
// Initialize EmailJS with your user ID
(function() {
    emailjs.init("service_n7jovgl"); // Replace with your actual EmailJS user ID
})();

// Function to send email
function sendEmail() {
    alert("Sending email...");
    // Get input values from the form
    var name = document.querySelector('input[placeholder="Name"]').value;
    var email = document.querySelector('input[placeholder="Email"]').value;
    var message = document.querySelector('textarea[placeholder="what you want to say"]').value;

    // Check if fields are filled
    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    // Email template parameters
    var templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "cchantigadu75@gmail.com" // Your email
    };

    // Send email using EmailJS
    emailjs.send('service_n7jovgl', 'template_qrotcva', templateParams)
        .then(function(response) {
            alert("Email successfully sent!");
        }, function(error) {
            alert("Failed to send email: " + error.text);
        });
}
