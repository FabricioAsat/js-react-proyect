import Button from "./Button";
import { useEffect } from "react";
export default function Browser({
	browser,
	setBrowser,
	typeOfSearch,
	setInfoCards,
	setIsBrowsing,
	isBrowsing,
	valueSearchButton,
	setValueSearchButton,
	setOkSearchType,
}) {
	//
	const handleChange = (e) => {
		setBrowser({
			...browser,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (!String(typeOfSearch).match(/types/gi)) return;
		setOkSearchType(false);
	}, [browser]);

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
				value={valueSearchButton}
				setInfoCards={setInfoCards}
				setIsBrowsing={setIsBrowsing}
				isBrowsing={isBrowsing}
				typeOfSearch={typeOfSearch}
				setValueSearchButton={setValueSearchButton}
				setOkSearchType={setOkSearchType}
			/>
		</div>
	);
}
