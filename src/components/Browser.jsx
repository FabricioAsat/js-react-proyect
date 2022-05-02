import Button from "./Button";

export default function Browser({
	browser,
	setBrowser,
	typeOfSearch,
	setInfoCards,
	setIsBrowsing,
	isBrowsing,
}) {
	//
	const handleChange = (e) => {
		setBrowser({
			...browser,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="browser">
			<div className="search_group field">
				<input
					type="search"
					className="search_field"
					placeholder="Search by"
					name="name"
					required
					onChange={handleChange}
					autoComplete="off"
				/>
				<label htmlFor="name" className="search_label">
					{typeOfSearch}
				</label>
			</div>
			<Button
				value="Search"
				url={getURL(typeOfSearch)}
				setInfoCards={setInfoCards}
				setIsBrowsing={setIsBrowsing}
				isBrowsing={isBrowsing}
				typeOfSearch={typeOfSearch}
			/>
		</div>
	);
}

function getURL(typeOfSearch) {
	if (typeOfSearch === "By name") return " https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126";
	return null;
}
