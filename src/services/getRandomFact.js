const API_GET_WORD = 'https://catfact.ninja/fact';

export const getRandomFact = () => {
	return fetch(API_GET_WORD)
		.then((res) => {
			if (!res.ok) throw new Error('Error in API_GET_WORD');

			return res.json();
		})
		.then((data) => {
			return data.fact;
		})
		.catch((error) => console.log('error->', error));
};
