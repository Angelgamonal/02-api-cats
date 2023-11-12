import { useEffect, useState } from 'react';

const API_GET_WORD = 'https://catfact.ninja/fact';

const API_GET_IMAGE = 'https://cataas.com';

export const App = () => {
	const [firstWord, setFirstWord] = useState();

	const [urlImage, setUrlImage] = useState();

	useEffect(() => {
		fetch(API_GET_WORD)
			.then((res) => {
				if (!res.ok) throw new Error('Error in API_GET_WORD');

				return res.json();
			})
			.then((data) => {
				const { fact } = data;
				setFirstWord(fact);
			})
			.catch((error) => console.log('error->', error));
	}, []);

	useEffect(() => {
		if (!firstWord) return;

		const threeFirstWord = firstWord.split(' ', 3).join(' ');

		fetch(`${API_GET_IMAGE}/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`)
			.then((res) => {
				if (!res.ok) throw new Error('Error in API_GET_IMAGE');
				setUrlImage(res.url);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [firstWord]);

	return (
		<main
			style={{
				padding: '1em',
				display: 'flex',
				placeItems: 'center',
				flexDirection: 'column',
				maxWidth: '500px',
				margin: 'auto',
			}}
		>
			<h1>Prueba Tecnica</h1>

			{firstWord && <p>{firstWord}</p>}

			{urlImage && (
				<img src={urlImage} alt="cat" loading="lazy" style={{ width: '100%' }} />
			)}
		</main>
	);
};
