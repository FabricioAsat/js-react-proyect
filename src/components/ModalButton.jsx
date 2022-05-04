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
		setTypeOfSearch(
			`Search ${elem.name.charAt(0).toUpperCase() + elem.name.slice(1).replaceAll("-", " ")} types`
		);
		setValueSearchButton(`Search`);
	};

	return (
		<button className="btn-modal" onClick={handleClick}>
			{elem.name.charAt(0).toUpperCase() + elem.name.slice(1).replaceAll("-", " ")}
		</button>
	);
}
