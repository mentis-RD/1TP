const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const div = document.querySelector(`#div${button.dataset.id}`);
        const pastDiv = document.querySelector(".show");
        if (pastDiv) {
            pastDiv.classList.remove("show");
        }
        div.classList.add("show");
    });
});
