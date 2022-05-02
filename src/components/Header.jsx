import Button from "./Button";

export default function Header() {
	return (
		<>
			<article className="header">
				<div className="title">
					<span className="title-up">Search</span>
					<br />
					<span className="title-down">Pokémon</span>
				</div>
				<Button value={`Login`} />
			</article>
		</>
	);
}
