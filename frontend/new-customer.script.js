 const form = document.querySelector('#new-customer-form');
 const statusTxt = form.querySelector('span.email-me');

 form.onsubmit = (e) => {
	e.preventDefault(); // Prevent form from submitting
    statusTxt.style.display = 'block';

    let xhr = new XMLHttpRequest(); // creating new xml object
    xhr.open("POST", "message.php", true); // sending post request
    xhr.onload = () =>{ //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){ 
            let response = xhr.responseText;
            console.log(response);
            if(response.indexOf("success") != -1){ // if response contains success
                form.reset(); // reset form after successful submission
                statusTxt.innerHTML = "Message sent successfully!"; // show success message
            };
        }
    };
    let formData = new FormData(form); // Create FormData object from form
    xhr.send(formData); // Send form data
};

