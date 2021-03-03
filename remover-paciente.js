var pacientes = document.querySelector("table");

pacientes.addEventListener("dblclick", function (event) {

    if (event.target.localName !== "th") {
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(() => {
            event.target.parentNode.remove();
        }, 500);
    }
});
