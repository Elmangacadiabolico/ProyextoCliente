document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("boton-mas");
    const span = document.getElementsByClassName("close")[0];
    const modalInput = document.getElementById("modal-input");
    const modalSave = document.getElementById("modal-save");
    
    btn.onclick = function () {
        modal.style.display = "block";
    };
    
    span.onclick = function () {
        modal.style.display = "none";
    };
    
    modalSave.onclick = function () {
        // Aquí puedes realizar acciones con el valor del input en el modal
        console.log("Input value:", modalInput.value);
        modal.style.display = "none";
    };
    
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});


