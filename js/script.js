document.addEventListener('DOMContentLoaded', function() {
  // Function to get and display the current PST time
  function displayPSTTime() {
      const options = {
          timeZone: 'America/Los_Angeles',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
      };

      const pstTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
      document.getElementById('localTime').textContent = pstTime + ' PST';
  }

  // Call the function initially
  displayPSTTime();

  // Update the time every second (optional)
  setInterval(displayPSTTime, 1000);
});
