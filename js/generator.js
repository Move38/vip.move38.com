/*
Create a QR Code based on the URL being passed to the website
*/

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var blinksterID = urlParams.get('ref');
var discount = urlParams.get('discount');
//console.log(blinksterID);

// Load a desktop version if visited not on a mobile device
if (screen.width >= 500) {
	   document.location = "../desktop-generator.html?discount="+discount+"&ref="+blinksterID;
	   /* Sends the user to a desktop formatted site ... */
	}
	

var _statcounter = _statcounter || []; 
_statcounter.push({"tags": {"blinksterID": blinksterID, "discount": discount, "page": "generator"}}); 

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

var qrCodeURL = "https://vip.move38.com/?discount=" + discount + "&ref=" + blinksterID;
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
	document.getElementById("secretLink").innerHTML = "https://vip.move38.com/?discount=" + discount;
}
else {
	document.getElementById("secretLink").innerHTML = "https://vip.move38.com/?discount=" + discount;
}

function secretLinkAction() {
	  var discountCode = "VIP-8675309";
	  window.location.href= "https://vip.move38.com/?discount=" + discount + "&ref=" + blinksterID
	};
	

// if we want to allow the download of the QR code
//qrCode.download({ name: "qr", extension: "svg" });