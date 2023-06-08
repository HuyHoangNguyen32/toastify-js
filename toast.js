import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const toast = {
  success(message) {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      style: {
        background: "#4caf50",
      },
    }).showToast();
  },
  error(message) {
    Toastify({
      text: message,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#ef5350",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  },
};

export default toast;
