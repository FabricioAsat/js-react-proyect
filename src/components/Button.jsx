import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const initInfoCards = {
	data: "",
	isPending: true,
	error: null,
};
export default function Button({
	value,
	setTypeOfSearch,
	setInfoCards,
	setIsBrowsing,
	isBrowsing,
	typeOfSearch,
	setValueSearchButton,
	setOkSearchType,
}) {
	const [url, setUrl] = useState(null);

	// const [okType, setOkType] = useState(false);

	let fetch = useFetch(url);

	useEffect(() => {
		if (typeOfSearch === "By name") setUrl("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126");
		if (typeOfSearch === "By type") setUrl("https://pokeapi.co/api/v2/type");
	}, [url, typeOfSearch, fetch]);

	useEffect(() => {
		if (typeOfSearch === "By name" || typeOfSearch === "Select") {
			setValueSearchButton("Search");
		} else if (typeOfSearch === "By type") {
			setValueSearchButton("View types");
		} else if (typeOfSearch === "By generation") {
			setValueSearchButton("View generations");
		}

		if (fetch.isPending) return;
		setInfoCards(initInfoCards);

		setOkSearchType(false);
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

			return;
		}

		if (typeOfSearch === "By type") {
			setInfoCards(fetch);
			return;
		}

		// Entra cuando se presiona search en search types
		if (String(typeOfSearch).match(/types/gi)) {
			setOkSearchType(true);
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
