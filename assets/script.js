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


const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
compteur = 0

right.addEventListener("click", function ()  {
	compteur += 1;
	if (compteur >= slides.length) {
		compteur = 0; 
	}
	const slide = slides[compteur];
	if (slide) {
		const img = slide.image;
		console.log(img);
	}
})

left.addEventListener("click", function ()  {
	compteur -=1;
    if (compteur < 0) {
        compteur = slides.length -1;
    }
    const slide = slides[compteur];
    if (slide) {
        const img = slide.image;
        console.log(img);
    }
})

