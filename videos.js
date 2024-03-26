// Open the modal
function openModal(videoUrl) {
    var modal = document.getElementById("modal");
    var modalVideo = document.getElementById("modalVideo");
    modal.style.display = "block";
    modalVideo.src = videoUrl;
}

// Close the modal
function closeModal() {
    var modal = document.getElementById("modal");
    var modalVideo = document.getElementById("modalVideo");
    modal.style.display = "none";
    modalVideo.src = "";
}
