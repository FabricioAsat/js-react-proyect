import { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";

export default function Cards({ name, infoCards, isBrowsing }) {
	// Almacena los url de las coincidencias con las busquedas
	const [urlCards, setUrlCards] = useState([]);

	useEffect(() => {
		if (infoCards.isPending) return;

		// Reseteo de url, para que no se concatenen infinitamente
		setUrlCards([]);

		let regExp = new RegExp(`${name}`, "gi");
		infoCards.data.results.forEach((elem) => {
			if (elem.name.match(regExp)) setUrlCards((urlCards) => [...urlCards, elem.url]);
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isBrowsing]);

	return (
		<>
			{urlCards.length > 0 && (
				<div className="cards-container">
					{urlCards.map((url) => (
						<Card url={url} />
					))}
				</div>
			)}
		</>
	);
}
