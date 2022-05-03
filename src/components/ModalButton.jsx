export default function ModalButton({
	elem,
	setUrl,
	setHidden,
	setTypeOfSearch,
	setValueSearchButton,
}) {
	const handleClick = (e) => {
		setUrl(elem.url);

		setHidden(true);
		setTypeOfSearch(`Search ${elem.name} types`);
		setValueSearchButton(`Search`);
	};

	return (
		<button className="btn-modal" onClick={handleClick}>
			{elem.name}
		</button>
	);
}
