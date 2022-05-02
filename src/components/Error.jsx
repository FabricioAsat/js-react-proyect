import { useEffect } from "react";

const initInfoCards = {
	data: "",
	isPending: true,
	error: null,
};
export default function Error({ setInfoCards }) {
	useEffect(() => {
		setInfoCards(initInfoCards);
	}, [setInfoCards]);

	return (
		<div className="not-found">
			<h2>Realiza una búsqueda</h2>
		</div>
	);
}
