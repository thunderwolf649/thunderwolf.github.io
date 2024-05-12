document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('post');
    var successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        var formData = new FormData(form);
        successMessage.style.display = 'block';
        form.reset();
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 5000);
    });
});