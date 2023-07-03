// Accessing the form element
const form = document.getElementById('volunteer-form');

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  // Accessing form input values
  const fullName = document.getElementById('full-name').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const postalCode = document.getElementById('postal-code').value;
  const country = document.getElementById('country').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  // Accessing checkbox values
  const availabilityInputs = document.querySelectorAll('input[name="availability"]:checked');
  const availability = Array.from(availabilityInputs).map(input => input.value);

  // Accessing textarea value
  const skillsExperience = document.getElementById('skills-experience').value;

  // Accessing checkbox values for volunteer interests
  const volunteerInterestsInputs = document.querySelectorAll('input[name="volunteer-interests"]:checked');
  const volunteerInterests = Array.from(volunteerInterestsInputs).map(input => input.value);

  // Accessing reference values
  const reference1Name = document.getElementById('reference1-name').value;
  const reference1Phone = document.getElementById('reference1-phone').value;
  const reference1Email = document.getElementById('reference1-email').value;
  const reference2Name = document.getElementById('reference2-name').value;
  const reference2Phone = document.getElementById('reference2-phone').value;
  const reference2Email = document.getElementById('reference2-email').value;

  // Accessing background check value
  const backgroundCheck = document.querySelector('input[name="background-check"]:checked').value;

  // Create an object to store the form data
  const formData = {
    fullName,
    address,
    city,
    state,
    postalCode,
    country,
    phone,
    email,
    availability,
    skillsExperience,
    volunteerInterests,
    references: [
      {
        name: reference1Name,
        phone: reference1Phone,
        email: reference1Email
      },
      {
        name: reference2Name,
        phone: reference2Phone,
        email: reference2Email
      }
    ],
    backgroundCheck
  };

  // Perform additional processing or send the form data to a server

  fetch('https://example.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          // Form submission successful
          console.log('Form submitted successfully');
        } else {
          // Form submission failed
          console.error('Form submission failed');
        }
      })
      .catch(error => {
        console.error('An error occurred during form submission:', error);
      });


  // Reset the form after submission
  form.reset();
});