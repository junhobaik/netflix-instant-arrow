console.log("'Netflix Instant Arrow' is running");

let isEventadded = false;
let pathName = "";

const HandleArrowKey = event => {
  const key = event.keyCode;

  if (key === 39 || key === 37) {
    document.querySelector("button.button-nfplayerPause").click();

    setTimeout(() => {
      document.querySelector("button.button-nfplayerPlay").click();
    }, 100);
  }
};

const watchInterval = setInterval(() => {
  const newPathName = window.location.pathname;

  if (newPathName !== pathName) {
    if (newPathName.indexOf("watch") !== -1) {
      document.addEventListener("keyup", HandleArrowKey);
    } else {
      document.removeEventListener("keyup", HandleArrowKey);
    }
  }

  pathName = newPathName;
}, 1000);
