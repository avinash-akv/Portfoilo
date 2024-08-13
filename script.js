"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js">
"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js">


$(document).ready(function(){
    $('.sidenav').sidenav();
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_8rxhbyv', 'template_09jrykp', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
});
