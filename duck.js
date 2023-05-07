const duck = new Konami("https://frogspin.github.io/duck.html")
const frog = new Konami("https://frogspin.github.io/")
const max = new Konami("https://frogspin.github.io/max.html")
duck.pattern = "68856775"
frog.pattern = "70827971"
max.pattern = "776588"
var shown = 1;

function showfps() {
	if (shown == 0) {
		console.log(shown)
		document.getElementById('fpsCount').style.color = 'black'
		shown = 1
	} else if (shown == 1) {
		console.log(shown)
		document.getElementById('fpsCount').style.color = 'white'
		shown = 0
	}

}

const showFps = new Konami(() => {
	const show = showfps()
})
showFps.pattern = "83727987"
