const background = document.querySelector('.background');
const hoverElements = document.querySelectorAll('.hover-element');
const container = document.querySelector('.container');

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
          x: 0,
          duration: 1, // Animation duration for the final color
          backgroundColor: '#e74c3c', // Final background color
          ease: 'back(2)',
          onComplete: function () {
            const tl = gsap.timeline({
              defaults: { opacity: 0, ease: 'back' },
            });
            gsap.set('.container', {
              visibility: 'visible',
              delay: '3.2',
              ease: 'back',
            });
            gsap.set('.time', {
              visibility: 'visible',
              delay: '0.2',
              ease: 'back',
            });

            tl.from('.container', { ease: 'linear', autoAlpha: 0 })
              .from('h1', { x: 80 })
              .from('h3', { x: -80 })
              .from('a', { y: 30 });
          },
        });
      },
    });
  },
});

hoverElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    const bgColor = getComputedStyle(element).color;
    background.style.backgroundColor = bgColor;
  });
});

function displayDateTime() {
  // Get the current date and time
  const currentDate = new Date();

  // Extract day of the week, hour, minute, and second
  const dayOfWeek = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  const hour = currentDate
    .getHours()
    .toLocaleString('en-US', { hour: 'numeric' });
  const minute = currentDate
    .getMinutes()
    .toLocaleString('en-US', { minute: 'numeric' });
  const second = currentDate
    .getSeconds()
    .toLocaleString('en-US', { second: 'numeric' });

  // Create formatted strings
  const formattedDayOfWeek = `${dayOfWeek}`;
  const formattedTime = `${hour}:${minute}:${second}`;

  // Display the day of the week and time on the webpage
  const dayOfWeekDiv = document.getElementById('dayOfWeek');
  const currentTimeDiv = document.getElementById('currentTime');

  dayOfWeekDiv.textContent = formattedDayOfWeek;
  currentTimeDiv.textContent = formattedTime;
}

// Update the displayed date and time every second
setInterval(displayDateTime, 1000);

// Initial call to displayDateTime function
displayDateTime();
