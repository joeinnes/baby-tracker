export const load = async () => {
	const times = [
		{
			start: new Date(2022, 9, 21, 0, 0, 0, 0),
			end: new Date(2022, 9, 21, 7, 19, 0, 0),
			activity: 'sleep'
		},
		{
			start: new Date(2022, 9, 21, 7, 19, 0, 0),
			end: new Date(2022, 9, 21, 7, 51, 53, 0),
			activity: 'feed',
			meta: {
				type: 'breast',
				r: 715,
				l: 1257
			}
		},
		{
			start: new Date(2022, 9, 21, 8, 0, 0, 0),
			activity: 'nappy',
			meta: {
				wet: true,
				solid: false
			}
		},
		{
			start: new Date(2022, 9, 21, 8, 15, 0, 0),
			end: new Date(2022, 9, 21, 12, 1, 0, 0),
			activity: 'sleep'
		},
		{
			start: new Date(2022, 9, 21, 12, 1, 0, 0),
			activity: 'nappy',
			meta: {
				wet: true,
				solid: false
			}
		},
		{
			start: new Date(2022, 9, 21, 12, 1, 0, 0),
			end: new Date(2022, 9, 21, 12, 13, 3, 0),
			activity: 'feed',
			meta: {
				type: 'breast',
				r: 331,
				l: 392
			}
		},
		{
			start: new Date(2022, 9, 21, 13, 40, 0, 0),
			activity: 'physio'
		},
		{
			start: new Date(2022, 9, 21, 13, 51, 0, 0),
			activity: 'nappy',
			meta: {
				wet: true,
				solid: false
			}
		},
		{
			start: new Date(2022, 9, 21, 13, 55, 0, 0),
			end: new Date(2022, 9, 21, 14, 48, 0, 0),
			activity: 'feed',
			meta: {
				type: 'breast',
				r: 1818,
				l: 1064
			}
		},
		{
			start: new Date(2022, 9, 21, 16, 30, 0, 0),
			activity: 'nappy',
			meta: {
				wet: true,
				solid: false
			}
		},
		{
			start: new Date(2022, 9, 21, 17, 0, 0, 0),
			end: new Date(2022, 9, 21, 18, 20, 0, 0),
			activity: 'walk'
		},

		{
			start: new Date(2022, 9, 21, 17, 1, 0, 0),
			end: new Date(2022, 9, 21, 18, 21, 0, 0),
			activity: 'sleep'
		},
		{
			start: new Date(2022, 9, 21, 19, 5, 0, 0),
			end: new Date(2022, 9, 21, 19, 57, 0, 0),
			activity: 'feed',
			meta: {
				type: 'breast',
				r: 1397,
				l: 997
			}
		},
		{
			start: new Date(2022, 9, 21, 21, 21, 0, 0),
			end: new Date(2022, 9, 21, 21, 43, 0, 0),
			activity: 'feed',
			meta: {
				type: 'breast',
				r: 0,
				l: 1283
			}
		},
		{
			start: new Date(2022, 9, 21, 21, 55, 0, 0),
			activity: 'nappy',
			meta: {
				wet: true,
				solid: false
			}
		},
		{
			start: new Date(2022, 9, 21, 22, 0, 0, 0),
			activity: 'bath'
		},
		{
			start: new Date(2022, 9, 21, 22, 9, 0, 0),
			end: new Date(2022, 9, 21, 22, 30, 0, 0),
			activity: 'feed',
			meta: {
				type: 'breast',
				r: 1273,
				l: 0
			}
		},
		{
			start: new Date(2022, 9, 21, 23, 28, 0, 0),
			end: new Date(2022, 9, 21, 23, 56, 0, 0),
			activity: 'feed',
			meta: {
				type: 'breast',
				r: 0,
				l: 1639
			}
		},
		{
			start: new Date(2022, 9, 21, 23, 56, 0, 0),
			end: new Date(2022, 9, 22, 4, 7, 0, 0),
			activity: 'sleep'
		}
	];

	return { times };
};
