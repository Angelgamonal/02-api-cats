import { useEffect, useState } from 'react';

const API_GET_IMAGE = 'https://cataas.com';

export const useGetCatImage = ({ fact }) => {
	const [urlImage, setUrlImage] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const catImage = async (word = 'null') => {
		try {
			setIsLoading(true);

			const resp = await fetch(
				`${API_GET_IMAGE}/cat/says/${word}?fontSize=50&fontColor=red`
			);

			if (!resp.ok) throw new Error('Error in API_GET_IMAGE');

			setUrlImage(resp.url);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setUrlImage(true);
		}
	};

	useEffect(() => {
		if (!fact) return;

		const threeFirstWord = fact.split(' ', 3).join(' ');

		catImage(threeFirstWord);
	}, [fact]);

	return { urlImage, setUrlImage, isLoading };
};
