import "../css/index.css";

const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".change-screen-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector(".add-task-btn");

const toggleScreen = () => {
  wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

const showModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

addTaskBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
