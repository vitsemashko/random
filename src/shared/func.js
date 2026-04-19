export const capitalLetter = () => {
	const min = 1;
	const max = 5;
	let result = Math.floor(Math.random() * max - min + 1) + min;
	switch (result) {
		case 1:
			return "A";
			break;
		case 2:
			return "B";
			break;
		case 3:
			return "C";
			break;
		case 4:
			return "D";
			break;
		case 5:
			return "E";
			break;
		default:
			break;
	}
};
export const numberInRange = () => {
	const min = 0;
	const max = 99;
	let result = Math.floor(Math.random() * max - min + 1) + min;
	if (result >= 0 && result <= 9) {
		return 0 + `${result}`;
	} else {
		return result;
	}
};
