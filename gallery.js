// Open the modal
function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Close the modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
