
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

function showImage(){
	//document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	//document.getElementById("imgTxt").style.opacity = 1 - flag;
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function play(){
	if(t == 0){
		myImage.setAttribute("src", "");
		myTxt.innerHTML = "";
		imageIndex = 0;
		clearInterval(showImageInterval);

		// Play background music
		const music = document.getElementById("bgMusic");
		music.play().catch(error => console.log("Audio playback prevented:", error));

		// Set up transitions
		document.getElementById("heartTxt").style.transition = "opacity 1s";
		document.getElementById("typeDiv").style.transition = "opacity 1s";
		document.getElementById("imgTxt").style.transition = "opacity 1s";

		// Start all fades together
		flag = 0;
		document.getElementById("heartTxt").style.opacity = 0;
		document.getElementById("typeDiv").style.opacity = 0;
		document.getElementById("imgTxt").style.opacity = 1;

		// Remove heart button from DOM after fade
		setTimeout(() => {
			document.getElementById("heartTxt").style.display = "none";
		}, 1000);

		// Start slideshow after fade
		setTimeout(() => {
			setInterval(showImage, 5000);
		}, 1000);
	}
	t++;
}

function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function event(){

	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
