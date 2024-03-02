// Define objects with properties hours, minutes, and messageContent
var messages = [
  { hours: 10, minutes: 30, ampm: "AM", messageContent: "It's 10:30 AM!" },
  { hours: 12, minutes: 40, ampm: "AM", messageContent: "It's 2:00 PM!" },
  { hours: 6, minutes: 15, ampm: "PM", messageContent: "It's 6:15 PM!" },
];

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be displayed as 12

  // Add leading zeros to minutes and seconds if they are less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Format the time as HH:MM:SS AM/PM
  var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;

  // Update the DOM element with the clock time
  document.getElementById("clock").textContent = timeString;

  // Check if the current time matches any object in the messages array
  for (var i = 0; i < messages.length; i++) {
    var message = messages[i];
    if (
      hours === message.hours &&
      minutes === message.minutes &&
      ampm === message.ampm
    ) {
      // Update the DOM element with the corresponding message content
      document.getElementById("message").textContent = message.messageContent;
      return; // Exit the loop if a match is found
    }
  }

  // Clear the message if the current time doesn't match any object in the messages array
  document.getElementById("message").textContent = "";
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
