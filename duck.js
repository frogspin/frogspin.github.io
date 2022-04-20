const duck = new Konami("duck.html")
const frog = new Konami("phrog.html")

duck.pattern = "68856775"
frog.pattern = "70827971"

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
