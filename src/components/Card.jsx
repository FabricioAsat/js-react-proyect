import { useFetch } from "../hooks/useFetch";

export default function Card({ url }) {
	//
	const dataPokemon = {
		name: "",
		sprites: "",
		types: "",
	};

	const infoPokemon = useFetch(url);

	// Si no hay datos, no renderiza la card
	if (infoPokemon.isPending) return;

	const { name, sprites, types } = infoPokemon.data;

	dataPokemon.name = name.charAt(0).toUpperCase() + name.slice(1);
	dataPokemon.name = dataPokemon.name.replaceAll("-", " ");

	dataPokemon.sprites = sprites.front_default;

	types.forEach((type) => {
		dataPokemon.types += type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1) + " ";
	});

	return (
		<>
			{!infoPokemon.isPending && (
				<div className="card">
					<img src={dataPokemon.sprites} alt={dataPokemon.name} />
					<h4>{dataPokemon.name}</h4>
					<p>{dataPokemon.types}</p>
				</div>
			)}
		</>
	);
}
