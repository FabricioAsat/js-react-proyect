import { useEffect, useState } from "react";

export function useFetch(url) {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async (url) => {
			try {
				let response = await fetch(url);

				// eslint-disable-next-line no-throw-literal
				if (!response.ok) throw { status: response.status, statusText: response.statusText };

				let json = await response.json();

				setIsPending(false);
				setData(json);
				setError({ err: false });
			} catch (err) {
				setIsPending(true);
				setError(err);
			}
		};

		getData(url);
	}, [url]);
	return { data, isPending, error };
}
