/*
Create a QR Code based on the URL being passed to the website
*/

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

var blinksterID = urlParams.get('blinksterID');

var discount = urlParams.get('discount');
//console.log(blinksterID);

/*
Generate a QR Code with the following Style
Blinks Orange -> #FB4616
Blinks Logo in the middle
Square edges
...
*/

// https://github.com/kozakdenys/qr-code-styling
if(discount === null) {
	discount = "VIP-8675309";
}

var qrCodeURL = "www.jonathanbobrow.com/move38/FFDeal?discount=" + discount + "&ref=" + blinksterID;
var qrSize = window.innerWidth * 0.6 - 20;

const qrCode = new QRCodeStyling({
	width: qrSize,
	height: qrSize,
	type: "svg",
	data: qrCodeURL,
	image: "./img/blinks-logow.png",
	dotsOptions: {
		color: "#ff5b13",
		type: "square"
	},
	backgroundOptions: {
		color: "#fff",
	},
	imageOptions: {
		crossOrigin: "anonymous",
		margin: 3
	}
});

qrCode.append(document.getElementById("canvas"));

// update the padding after
document.getElementById("canvas").style.padding = "10px";
document.getElementById("canvas").style.width = qrSize;

// update the secret link at the bottom
if(blinksterID === null) {
	document.getElementById("secretLink").innerHTML = "www.move38.com/" + discount;
}
else {
	document.getElementById("secretLink").innerHTML = "www.move38.com/" + discount + "?ref=" + blinksterID;
}

// if we want to allow the download of the QR code
//qrCode.download({ name: "qr", extension: "svg" });