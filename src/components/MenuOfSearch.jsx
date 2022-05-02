import { useState } from "react";
import Browser from "./Browser";
import Cards from "./Cards";
import Error from "./Error";
import TypeOfSearch from "./TypeOfSearch";

const initInfoCards = {
	data: "",
	isPending: true,
	error: null,
};

export default function MenuOfSearch() {
	// * Almacena el valor del input, para una busqueda más detallada
	const [browser, setBrowser] = useState({ name: "" });

	// * Almacena el tipo de busqueda, si por nombre, tipo o generación
	const [typeOfSearch, setTypeOfSearch] = useState("Search by");

	//* Almacena los datos del fetch
	const [infoCards, setInfoCards] = useState(initInfoCards);

	//* Verifica si se apreta buscar o no.
	const [isBrowsing, setIsBrowsing] = useState(false);

	return (
		<>
			<TypeOfSearch setTypeOfSearch={setTypeOfSearch} setIsBrowsing={setIsBrowsing} />
			<Browser
				typeOfSearch={typeOfSearch}
				setTypeOfSearch={setTypeOfSearch}
				setInfoCards={setInfoCards}
				browser={browser}
				setBrowser={setBrowser}
				setIsBrowsing={setIsBrowsing}
				isBrowsing={isBrowsing}
			/>
			{browser.name === "" && <Error setInfoCards={setInfoCards} />}
			{!infoCards.isPending && browser.name !== "" && (
				<Cards name={browser.name} infoCards={infoCards} isBrowsing={isBrowsing} />
			)}
		</>
	);
}
