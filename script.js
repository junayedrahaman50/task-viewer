// Define objects with properties hours, minutes, and messageContent
let messages = [
  {
    hours: 11,
    minutes: 36,
    seconds: 58,
    ampm: "AM",
    messageContent:
      "Create a budget for your personal or business expenses and track your spending for the month.",
  },
  { hours: 12, minutes: 40, ampm: "AM", messageContent: "It's 2:00 PM!" },
  { hours: 6, minutes: 15, ampm: "PM", messageContent: "It's 6:15 PM!" },
];

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be displayed as 12

  // Add leading zeros to minutes and seconds if they are less than 10
  // minutes = minutes < 10 ? "0" + minutes : minutes;
  // seconds = seconds < 10 ? "0" + seconds : seconds;
  // Format the time as HH:MM:SS AM/PM
  // var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
  let timeString = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  // Update the DOM element with the clock time
  document.getElementById("clock").textContent = timeString;

  // Check if the current time matches any object in the messages array
  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
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
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
