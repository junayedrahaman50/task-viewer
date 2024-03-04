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

/* Modal */
const modal = document.querySelector(".modal-form");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const addTaskBtn = document.querySelector(".add-icon-container");
const submitBtn = document.querySelector(".submit-button");

const modalActions = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnCloseModal.addEventListener("click", modalActions);
// overlay.addEventListener("click", modalActions);
addTaskBtn.addEventListener("click", modalActions);
submitBtn.addEventListener("click", modalActions);

/* Listening to the whole document */
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalActions();
  }
});

/* Resizable textarea */
const taskInputContent = document.querySelector(".task-input--content");
taskInputContent.addEventListener("keyup", (e) => {
  taskInputContent.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  // actual height of the texarea is 150px defined in css but 1px border in top and bottom also included so it is 148px
  console.log(scHeight);
  // using template string literal
  taskInputContent.style.height = `${scHeight}px`;
});
