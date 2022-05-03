import Button from "./Button";
export default function TypeOfSearch({ setTypeOfSearch, setIsBrowsing, setValueSearchButton }) {
	return (
		<div className="typeOfSearch">
			<Button
				value="By name"
				setTypeOfSearch={setTypeOfSearch}
				setIsBrowsing={setIsBrowsing}
				setValueSearchButton={setValueSearchButton}
			/>
			<Button
				value="By type"
				setTypeOfSearch={setTypeOfSearch}
				setIsBrowsing={setIsBrowsing}
				setValueSearchButton={setValueSearchButton}
			/>
			<Button
				value="By generation"
				setTypeOfSearch={setTypeOfSearch}
				setIsBrowsing={setIsBrowsing}
				setValueSearchButton={setValueSearchButton}
			/>
		</div>
	);
}
