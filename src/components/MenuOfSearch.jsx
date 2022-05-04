import { useState } from "react";
import Browser from "./Browser";
import Cards from "./Cards";
import Error from "./Error";
import Modal from "./Modal";
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

	//* Comanda el valor del botón search
	const [valueSearchButton, setValueSearchButton] = useState("Select");

	const [okSearchType, setOkSearchType] = useState(false);

	return (
		<>
			<TypeOfSearch
				setTypeOfSearch={setTypeOfSearch}
				setIsBrowsing={setIsBrowsing}
				setValueSearchButton={setValueSearchButton}
			/>
			<Browser
				typeOfSearch={typeOfSearch}
				setTypeOfSearch={setTypeOfSearch}
				setInfoCards={setInfoCards}
				browser={browser}
				setBrowser={setBrowser}
				setIsBrowsing={setIsBrowsing}
				isBrowsing={isBrowsing}
				setValueSearchButton={setValueSearchButton}
				valueSearchButton={valueSearchButton}
				setOkSearchType={setOkSearchType}
				//
			/>

			{typeOfSearch === "By name" && !infoCards.isPending && browser.name !== "" ? (
				<Cards name={browser.name} infoCards={infoCards} isBrowsing={isBrowsing} />
			) : String(typeOfSearch).match(/type/gi) ? (
				<Modal
					infoCards={infoCards}
					setTypeOfSearch={setTypeOfSearch}
					setValueSearchButton={setValueSearchButton}
					okSearchType={okSearchType}
					browser={browser}
					setInfoCards={setInfoCards}
				/>
			) : String(typeOfSearch).match(/generation/gi) ? (
				<Modal
					infoCards={infoCards}
					setTypeOfSearch={setTypeOfSearch}
					setValueSearchButton={setValueSearchButton}
					okSearchType={okSearchType}
					browser={browser}
					setInfoCards={setInfoCards}
				/>
			) : (
				<Error setInfoCards={setInfoCards} />
			)}
		</>
	);
}
