
let chairModels = ["./model/modern_chair.glb", "./model/modern_chair_1.glb", "./model/modern_chair_2.glb"]; // Array of modern chair models
let currentChairModelIndex = 0; // Variable to track the current model index

document.getElementById("change-chair").addEventListener("click", function() {
    const chairModelViewer = document.getElementById("chair_model");

    // Change the source to the next model in the array
    currentChairModelIndex = (currentChairModelIndex + 1) % chairModels.length;
    chairModelViewer.src = chairModels[currentChairModelIndex];
});



let classicChairModels = ["./model/scan_chiair.glb", "./model/scan_chair_1.glb", "./model/scan_chair_2.glb"]; 
let currentClassicChairModelIndex = 0; 

document.getElementById("change-classic-chair").addEventListener("click", function() {
    const classicChairModelViewer = document.getElementById("classic_chair_model");

    currentClassicChairModelIndex = (currentClassicChairModelIndex + 1) % classicChairModels.length;
    classicChairModelViewer.src = classicChairModels[currentClassicChairModelIndex];
});



let isModernDeskModel = true; 

let deskModels = ["./model/desk.glb", "./model/modern_desk2.glb", "./model/modern_desk1.glb"]; 
let currentDeskModelIndex = 0; 

document.getElementById("change-desk").addEventListener("click", function() {
    const modernDeskModelViewer = document.getElementById("desk_model");

    currentDeskModelIndex = (currentDeskModelIndex + 1) % deskModels.length;
    modernDeskModelViewer.src = deskModels[currentDeskModelIndex];
});
