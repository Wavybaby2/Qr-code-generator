let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");    
    }
    else{
        qrText.classList.add("error");
        qrText.style.border = "1px solid red";
        setTimeout(() => {
            qrText.classList.remove("error");
        },1000);
        setTimeout(() => {
            qrText.style.border = "1px solid #494eea";
        },1000);
    }
}
