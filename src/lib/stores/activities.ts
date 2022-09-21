import { readable } from 'svelte/store';

const activitiesDefaults = {
	sleep: {
		title: 'Sleep'
	},
	feed: {
		title: 'Feed'
	},
	nappy: {
		title: 'Nappy Change'
	},
	physio: {
		title: 'Physio'
	},
	walk: {
		title: 'Walk'
	},
	bath: {
		title: 'Bath'
	}
};

export const activities = readable(activitiesDefaults);
