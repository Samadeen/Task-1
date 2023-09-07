const background = document.querySelector('.background');
const hoverElements = document.querySelectorAll('.hover-element');

// script.js
gsap.to('.background', {
  x: '-50vw',
  duration: 1, // Animation duration (in seconds)
  backgroundColor: '#000', // Intermediate color 1
  ease: 'back(2)',
  onComplete: function () {
    // Animation is complete for Intermediate color 1
    gsap.to('.background', {
      x: '50vw',
      duration: 1, // Animation duration for Intermediate color 2
      backgroundColor: '#3498db', // Intermediate color 2
      ease: 'back(2)',
      onComplete: function () {
        // Animation is complete for Intermediate color 2
        gsap.to('.background', {
          x: '-50vw',
          duration: 1, // Animation duration for the final color
          backgroundColor: '#e74c3c', // Final background color
          ease: 'back(2)',
          onComplete: function () {
            // Animation is complete for the final color
            // You can add any additional actions here
          },
        });
      },
    });
  },
});

hoverElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    const bgColor = getComputedStyle(element).backgroundColor;
    background.style.backgroundColor = bgColor;
  });
});

function displayDateTime() {
  // Get the current date and time
  const currentDate = new Date();

  // Extract day, hour, minute, and second
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  const day = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  // Create a formatted string
  const formattedDateTime = `${day}`;

  // Display the formatted date and time on the webpage
  const datetimeDiv = document.getElementById('datetime');
  datetimeDiv.textContent = formattedDateTime;
}

// Update the displayed date and time every second
setInterval(displayDateTime, 1000);

// Initial call to displayDateTime function
displayDateTime();
