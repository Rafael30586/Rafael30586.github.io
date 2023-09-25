const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function mostrarNumero(){
    alert(`0351 156754046`);
}

function mostrarCorreo(){
    alert(`fraq86@gmail.com`);
}