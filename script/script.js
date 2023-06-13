const text = "WELCOME TO MY PORTFOLIO";
      let index = 0;

      function typeWriter() {
        if (index < text.length) {
          document.getElementById("typewriter").innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, Math.floor(Math.random() * 100) + 50); // use variable delay of 50-250ms
        }
        else {
          setTimeout(function() {
            document.getElementById("typewriter").innerHTML = ""; // Clear the current text
            index = 0; // Reset the index variable to 0 to repeat typing
            typeWriter(); // Start typing again
          }, 3000); // Wait for 3 second before starting again
        }
      }
      typeWriter();

//DATE AND TIME
// create a function to update the date and time
function updateDateTime() {
    // create a new Date object
    let currentDate = new Date();
  
    // set the timezone to "Asia/Manila"
    let options = { timeZone: 'Asia/Manila' };
  
    // format the date and time as a string with the specified timezone
    let dateStr = currentDate.toLocaleDateString('en-US', options);
    let timeStr = currentDate.toLocaleTimeString('en-US', options);
  
    // display the date and time on the web page
    document.getElementById("date").innerHTML = dateStr;
    document.getElementById("time").innerHTML = timeStr;
  }
  
  // call the updateDateTime function every second using setInterval()
  setInterval(updateDateTime, 1000);