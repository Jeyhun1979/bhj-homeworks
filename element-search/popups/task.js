document.addEventListener("DOMContentLoaded", function() {
    const modalMain = document.getElementById("modal_main");
    const modalSuccess = document.getElementById("modal_success");
    
    modalMain.classList.add("modal_active");
    
    const closeModalButtons = document.querySelectorAll(".modal__close");
    
    closeModalButtons.forEach(button => {
        button.addEventListener("click", function() {
            const modal = this.closest(".modal");
            modal.classList.remove("modal_active");
        });
    });
    
    const showSuccessButton = document.querySelector(".show-success");
    
    showSuccessButton.addEventListener("click", function(event) {
        event.preventDefault();
        modalMain.classList.remove("modal_active");
        modalSuccess.classList.add("modal_active");
    });
});