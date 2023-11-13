import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/getRandomFact';

export const useGetRandomFact = () => {
	const [fact, setFact] = useState();

	const randomFact = () => {
		getRandomFact().then((randomFact) => setFact(randomFact));
	};

	useEffect(() => {
		randomFact();
	}, []);

	return { fact, setFact, randomFact };
};
