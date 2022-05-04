import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "./Card";
import Error from "./Error";
import ModalButton from "./ModalButton";

export default function Modal({
	infoCards,
	setTypeOfSearch,
	setValueSearchButton,
	okSearchType,
	browser,
	setInfoCards,
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

		if (String(url).match(/type/gi)) {
			let { pokemon } = fetch.data;
			pokemon.forEach((elem) => {
				if (elem.pokemon.name.match(regExp)) {
					setTypeUrl((typeUrl) => [...typeUrl, elem.pokemon.url]);
				}
			});
			return;
		}

		if (String(url).match(/generation/gi)) {
			let { pokemon_species } = fetch.data;
			pokemon_species.forEach((elem) => {
				if (elem.name.match(regExp)) {
					// Exp reg para obtener el id y acceder al pokemon mediante su id en la api
					let idObtener = /(\d+)/g;
					let idPokemon = elem.url.match(idObtener)[1];
					setTypeUrl((typeUrl) => [...typeUrl, `https://pokeapi.co/api/v2/pokemon/${idPokemon}`]);
				}
			});
			return;
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetch.data, browser.name]);

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
			{okSearchType && typeUrl.length > 0 ? (
				<div className="cards-container">
					{typeUrl.map((url) => (
						<Card key={url} url={url} />
					))}
				</div>
			) : (
				<Error setInfoCards={setInfoCards} />
			)}
		</>
	);
}
