import { useEffect, useState } from "react";
import "./App.css";

function App() {
	// creo una funzione per salvare il tasto premuto, una dove lo uso e l'altra dove lo inizializzo al momento del press
	const [activeKey, setActiveKey] = useState("");

	// creo la funzione che fa suonare quando premo un tasto da tastiera, trasformato in maiuscolo
	useEffect(() => {
		document.addEventListener("keydown", (event) => {
			playSound(event.key.toUpperCase());
		});
	}, []);

	// creo l'array di oggetti contenente il tasto, il codice del tasto e il src dell'audio
	const drumPads = [
		{
			keyCode: 81,
			text: "Q",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
		},
		{
			keyCode: 87,
			text: "W",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
		},
		{
			keyCode: 69,
			text: "E",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
		},
		{
			keyCode: 65,
			text: "A",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
		},
		{
			keyCode: 83,
			text: "S",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
		},
		{
			keyCode: 68,
			text: "D",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
		},
		{
			keyCode: 90,
			text: "Z",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
		},
		{
			keyCode: 88,
			text: "X",
			src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
		},
		{
			keyCode: 67,
			text: "C",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
		},
	];

	function playSound(selector) {
		const audio = document.getElementById(selector);
		audio.play();
		setActiveKey(selector);
	}

	return (
		<div className="App">
			<div id="drum-machine">
        <p id="titleApp">My DrumPad App</p>
        <div id="display">{activeKey}</div>
				<div className="drum-pads">
					{drumPads.map((drumPad) => (
						<div
							key={drumPad.src}
							onClick={() => {
								playSound(drumPad.text);
							}}
							class="drum-pad"
							id={drumPad.src}
						>
							{drumPad.text}
							<audio
								className="clip"
								id={drumPad.text}
								src={drumPad.src}
							></audio>
						</div>
					))}
				</div>
        <p id="footer">by Marco Falotico</p>
			</div>
		</div>
	);
}

export default App;
