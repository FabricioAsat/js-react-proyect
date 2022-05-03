import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ModalButton from "./ModalButton";

export default function Modal({
	infoCards,
	setInfoCards,
	setTypeOfSearch,
	setValueSearchButton,
	okSearchType,
	browser,
}) {
	let { results } = infoCards.data;
	const [hidden, setHidden] = useState(false);

	// Contiene la url de los tipos de pokemons
	const [url, setUrl] = useState(null);

	// Contiene las url de los pokemons del tipo elegido
	const [typeUrl, setTypeUrl] = useState([]);

	let fetch = useFetch(url);

	const handleClick = () => {
		setHidden(true);
	};

	useEffect(() => {
		if (fetch.isPending) return;

		let regExp = new RegExp(`${browser.name}`, "gi");

		setTypeUrl([]);

		let { pokemon } = fetch.data;

		pokemon.forEach((elem) => {
			if (elem.pokemon.name.match(regExp)) {
				setTypeUrl((typeUrl) => [...typeUrl, elem.pokemon.url]);
			}
		});
	}, [fetch.data]);

	useEffect(() => {
		setHidden(false);
	}, [infoCards]);

	return (
		<>
			{!infoCards.isPending && !okSearchType && (
				<div className={`modal ${hidden && "hidden-modal"}`}>
					{!infoCards.isPending &&
						results.map((elem) => (
							<ModalButton
								key={elem.name}
								setUrl={setUrl}
								elem={elem}
								setHidden={setHidden}
								setTypeOfSearch={setTypeOfSearch}
								setValueSearchButton={setValueSearchButton}
							/>
						))}

					<button className={"out-modal-btn"} onClick={handleClick}>
						*
					</button>
				</div>
			)}
			{okSearchType && (
				<div>
					<h2>Prueba</h2>
				</div>
			)}
		</>
	);
}
