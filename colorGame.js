let size =6;
let color = generateRandomColor(size);
let sqrs = document.querySelectorAll(".square");
let pickedColor = pickColor();
let displayRGB = document.querySelector("#displaycolor");
displayRGB.textContent = pickedColor;
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");

for(let i =0;i<sqrs.length;i++){
	sqrs[i].style.backgroundColor = color[i];
	sqrs[i].addEventListener("click",function(){
		if(this.style.backgroundColor===pickedColor)
			makePickedColor();
		else
			{
				document.querySelector("#message").textContent = "Try again";
				this.style.backgroundColor="#232323";
			}
	})
}


resetButton.addEventListener("click",reset);

easyButton.addEventListener("click",function(){
			size = 3;
			hardButton.classList.remove("selected");
			easyButton.classList.add("selected");
			reset();
			

});

hardButton.addEventListener("click",function(){
	size = 6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	reset();
	});


function makePickedColor(){
	document.querySelector("#message").textContent = "Correct!";
		for(let i=0;i<sqrs.length;i++){
			sqrs[i].style.backgroundColor=pickedColor;
		}
		if(size===3){
			for(let i =3;i<6;i++){
			sqrs[i].style.backgroundColor = "#232323";
		}
		}

	
	document.querySelector("h1").style.backgroundColor=pickedColor; 
	resetButton.textContent="Try Again?";
}

function pickColor(){
	return(color[Math.floor(Math.random()*color.length)]);	
}

function generateRandomColor(num){
	let arr=[];
	for(let i=0;i<num;i++){
		let rnd = randomColor();
		arr.push("rgb("+String(rnd[0])+", "+String(rnd[1])+", "+String(rnd[2])+")");
	}
	return(arr);
}
function randomColor(){
	let random = [];
	random.push(Math.floor(Math.random()*256));
	random.push(Math.floor(Math.random()*256));
	random.push(Math.floor(Math.random()*256));
	return(random);
}

function reset(){
	//generate all new color
	color = generateRandomColor(size);
	//pick new color from array
	pickedColor = pickColor();
	displayRGB.textContent = pickedColor;
	//change the color of square
	for(let i =0;i<sqrs.length;i++){
		if(color[i]){
	sqrs[i].style.display = "block";
	sqrs[i].style.backgroundColor = color[i];
	}
	else
		sqrs[i].style.display = "none";
	}
	resetButton.textContent="New Colors";
	document.querySelector("h1").style.backgroundColor="steelblue";
	document.querySelector("#message").textContent = "";
}