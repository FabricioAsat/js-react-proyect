import Button from "./Button";
export default function TypeOfSearch({ setTypeOfSearch, setIsBrowsing }) {
	return (
		<div className="typeOfSearch">
			<Button value="By name" setTypeOfSearch={setTypeOfSearch} setIsBrowsing={setIsBrowsing} />
			<Button value="By type" setTypeOfSearch={setTypeOfSearch} setIsBrowsing={setIsBrowsing} />
			<Button
				value="By generation"
				setTypeOfSearch={setTypeOfSearch}
				setIsBrowsing={setIsBrowsing}
			/>
		</div>
	);
}
