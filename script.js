// Event listener for selecting an image
document.getElementById("imageInput").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const image = new Image();
    image.src = event.target.result;
    image.onload = function () {
      // Display the selected image on the page
      document.getElementById("selectedImage").src = image.src;
    };
  };

  reader.readAsDataURL(file);
});

function scanImage() {
  const scanner = new jscanify();
  const paperWidth = 500;
  const paperHeight = 1000;
  const image = document.getElementById("selectedImage");

  if (image.src) {
    const highlightedCanvas = scanner.highlightPaper(image);
    const resultCanvas = scanner.extractPaper(image, paperWidth, paperHeight);

    // Display the scanned result on the page
    const highlightedResultsDiv = document.getElementById("highlightedResults");
    highlightedResultsDiv.innerHTML = "";
    highlightedResultsDiv.appendChild(highlightedCanvas);

    // Display the scanned result on the page
    const scanResultsDiv = document.getElementById("scanResults");
    scanResultsDiv.innerHTML = "";
    scanResultsDiv.appendChild(resultCanvas);
  } else {
    alert("Please select an image to scan.");
  }
}
