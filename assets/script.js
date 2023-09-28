const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let compteur = 0

const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const dots = document.querySelector(".dots");
const image = document.querySelector('.banner-img')
const tag = document.querySelector('#banner p')


dotsCreator();
dotsUpdate();

right.addEventListener("click", function () {
	compteur += 1;
	if (compteur >= slides.length) {
		compteur = 0;
	}
	updateSlide()
})

left.addEventListener("click", function () {
	compteur -= 1;
	if (compteur < 0) {
		compteur = slides.length - 1;
	}
	updateSlide()
})

const updateSlide = () => {
	const slide = slides[compteur];
	// image.src = "./assets/images/slideshow/" + slide.image;
	image.setAttribute('src', `./assets/images/slideshow/${slide.image}`)
	tag.innerHTML = slide.tagLine
	
	const updateDot = document.querySelectorAll('.dot_selected')
}

function dotsCreator() {
	for (let index = 0; index < slides.length; index++) {
		const dot = document.createElement("div");
		dot.setAttribute("class", "dot");
		dots.appendChild(dot);
	}
}

function dotsUpdate() {
	const dotPoints = document.querySelectorAll(".dot");
	for (let index = 0; index < dotPoints.length; index++) {
		const dot = dotPoints[index];
		if (index == compteur) {
			dot.classList.add('dot_selected');
		} 
	}
}
