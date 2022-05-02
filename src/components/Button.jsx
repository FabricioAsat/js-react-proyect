import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const initInfoCards = {
	data: "",
	isPending: true,
	error: null,
};
export default function Button({
	value,
	setTypeOfSearch,
	url,
	setInfoCards,
	setIsBrowsing,
	isBrowsing,
	typeOfSearch,
}) {
	let fetch = useFetch(url);

	useEffect(() => {
		if (fetch.isPending) return;
		setInfoCards(initInfoCards);
	}, [typeOfSearch]);

	const handleClick = (e) => {
		setIsBrowsing(e.target.textContent === "Search");

		// Para los typeButtons
		if (setTypeOfSearch) setTypeOfSearch(e.target.textContent);

		if (typeOfSearch === "By name") {
			if (fetch.isPending) return;
			setInfoCards(fetch);

			// Si el botón search se presiona, entonces se activa el buscador
			isBrowsing ? setIsBrowsing(false) : setIsBrowsing(true);
		}
	};

	return (
		<>
			<button className="btn" onClick={handleClick}>
				{value || "undefined"}
			</button>
		</>
	);
}
