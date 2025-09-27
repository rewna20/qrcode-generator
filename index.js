const inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const qrContainer=document.getElementById("qrcode")
const backBtn=document.querySelector(".back-btn")
const gobackBtn=document.querySelector("#goback-btn")
const mainSection=document.querySelector(".main")
const downloadBtn=document.querySelector("#download-btn")
const shareBtn=document.querySelector("#share-btn")
const qrCodeDiv=document.querySelector("#qrcode")
const smallLogoImg=document.querySelector("#smallLogo-img")
const outerBorder=document.querySelector(".outer-border")
inputBtn.addEventListener("click",function(){
    console.log(inputEl.value)
})



inputBtn.addEventListener("click",function(){
if(inputEl.value != ""){ // so that it doesn't run when there is nothing written in the input field
  qrContainer.innerHTML=""
  const qrCode = new QRCode(qrContainer, {
    text: inputEl.value,
    width: 200,
    height:200,
  });
  inputEl.value=""
  mainSection.style.display = "none"
  backBtn.style.display="inline-block"
  qrCodeDiv.style.display="flex"
  smallLogoImg.style.display="inline"
  outerBorder.style.display = "flex"
}
})


gobackBtn.addEventListener("click",function(){
mainSection.style.display = ""
backBtn.style.display="none"
qrContainer.innerHTML=""
qrCodeDiv.style.display="none"
smallLogoImg.style.display="none"
outerBorder.style.display="none"
})

downloadBtn.addEventListener("click", () => {
    const canvas = document.querySelector("#qrcode canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png"); // Convert QR to image
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png"; // filename
    a.click();
});

 shareBtn.addEventListener("click", async () => {
    const canvas = document.querySelector("#qrcode canvas"); // Get QR code canvas
    if (!canvas) return;
// Convert to image
    const blob = await new Promise(resolve => canvas.toBlob(resolve)); 
    // Copy to clipboard
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]); 
    alert("QR code copied!"); // Confirmation
    
 });
