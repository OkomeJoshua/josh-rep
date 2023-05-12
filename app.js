const updateButton = document.getElementById("update");

const learningText = document.getElementById("learning");

updateButton.addEventListener("click",function(){

    learningText.textContent = "I am currently learning JavaScript";
});