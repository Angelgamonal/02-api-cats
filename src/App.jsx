import { useEffect, useState } from 'react';
import { useGetRandomFact } from './hooks/useGetRandomFact';
import { useGetCatImage } from './hooks/useGetCatImage';

export const App = () => {
	const { fact, randomFact } = useGetRandomFact();

	const { urlImage, isLoading } = useGetCatImage({ fact });

	const handleButton = () => {
		randomFact();
	};

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

			<button onClick={handleButton} disabled={isLoading}>
				{isLoading ? 'Cargando imagen...' : 'Cambiar imagen'}
			</button>

			{fact && <p>{fact}</p>}

			{isLoading ? (
				<span>Cargando...</span>
			) : (
				<img
					src={urlImage}
					alt="cat"
					loading="lazy"
					style={{ width: '100%', maxWidth: '300px' }}
				/>
			)}
		</main>
	);
};
