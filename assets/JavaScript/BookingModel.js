const netAmountElement = document.getElementById('amount');
const netAmountValue = parseInt(netAmountElement.textContent.replace('Net Amount: ₹ ', ''));

const prebookingAmount = (netAmountValue * 0.3).toFixed(2);

const prebookingAmountElement = document.getElementById('prebooking-amount');

prebookingAmountElement.textContent = prebookingAmount;



// OPEN DIALOG BOX
const box_button=document.querySelector('.book-now-btn');
const dialog_box_cont=document.getElementById('dialog-box');
const shield=document.querySelector("#bg-dull");
const close=document.querySelector('#close-dialog');

box_button.addEventListener('click',function(){
    // dialog_box_cont.style.display='block';
    shield.style.display='block';
})

close.addEventListener('click',()=>{
    shield.style.display='none';
})
// not work 
document.addEventListener('DOMContentLoaded', function() {
    const eventName = document.querySelector('#hero-left h1').textContent;

    document.querySelector('#dialog-box h1').textContent = eventName;
});


// Qr Code Genertor with API
function qrcode()
{
        const btn = document.querySelector('#close-dialog');
        const img = document.querySelector('#img');
        const jokesText = document.querySelector('#jokes');

        // Event listener for the button click
        btn.addEventListener("click", getimage);

        async function getimage() {
            // Sample text to encode into QR code
            const data = "Hello, this is a QR code!";
            
            // Make a fetch request to the QR code API
            let response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(data)}`);

            if (!response.ok) {
                alert("Network error");
                return;
            }

            // Set the image source to the QR code URL
            img.src = response.url;

            // Optionally, you can also update the title or any other element with some info
            jokesText.innerHTML = "New QR Code Generated!";
        }
    }
