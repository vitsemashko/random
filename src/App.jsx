import { useState } from "react";
import { capitalLetter, numberInRange } from "./shared/func";
import { openingsNames } from "./shared/db";
import "./App.css";

const App = () => {
	const [letter, setLetter] = useState(capitalLetter());
	const [number, setNumber] = useState(numberInRange());
	const [isVis, setIsVis] = useState(false);
	const [value, setValue] = useState("");
	const [filtered, setFiltered] = useState([]);
	const randLetter = () => {
		setLetter(capitalLetter());
		setNumber(numberInRange());
		setIsVis(!isVis);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleFilter(value);
	};
	const handleFilter = (value) => {
		let filtered = openingsNames.filter((item) => {
			return item.id === value;
		});
		setFiltered(filtered);
	};
	return (
		<div>
			<button className="button-66" onClick={randLetter} type="button">
				Randomize
			</button>
			{isVis && (
				<>
					<span className="id">
						{letter}
						{number}
					</span>
				</>
			)}
			<hr />
			<form className="form" onSubmit={handleSubmit}>
				<input
					className="input"
					type="text"
					placeholder="enter id"
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
			</form>
			{filtered.map((item) => {
				return (
					<div className="filterWrapper" key={item.id}>
						<p>
							<b>Opening name: </b>
							{item.name}
						</p>
						<p>
							<b>FEN: </b>
							{item.fen}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default App;
