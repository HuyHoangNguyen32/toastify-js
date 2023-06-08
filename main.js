import toast from "./toast";

(() => {
  const successBtn = document.querySelector(".btn-success");
  const errorBtn = document.querySelector(".btn-danger");

  successBtn.addEventListener("click", () => {
    toast.success("This is a success message");
  });

  errorBtn.addEventListener("click", () => {
    toast.error("This is a error message");
  });
})();
