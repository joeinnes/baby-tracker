import { readable } from 'svelte/store';

const coloursDefaults = {
	sleep: {
		h: 150,
		s: 0.75,
		l: 0.5
	},
	feed: {
		h: 345,
		s: 0.75,
		l: 0.5
	},
	nappy: {
		h: 300,
		s: 0.75,
		l: 0.5
	},
	physio: {
		h: 200,
		s: 0.75,
		l: 0.5
	},
	walk: {
		h: 50,
		s: 0.75,
		l: 0.5
	},
	bath: {
		h: 240,
		s: 0.75,
		l: 0.5
	}
};

export const colours = readable(coloursDefaults);
