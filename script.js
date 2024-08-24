// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        result = decodeText.replace("viewform?","formResponse?&submit=Submit&")
        document.getElementById("result").innerHTML = result;
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);

});

    function copyLink() {

       // Get the text field
       var copyText = document.getElementById("result");
     
       // Select the text field
       //copyText.select();
       //copyText.setSelectionRange(0, 99999); // For mobile devices
     
        // Copy the text inside the text field
       navigator.clipboard.writeText(copyText.innerText);
     
       // Alert the copied text
       alert("Copied the text: " + copyText.innerText);
    } 