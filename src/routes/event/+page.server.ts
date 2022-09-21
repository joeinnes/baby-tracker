import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const typeOfAction = data.get('action_type');
	}
};
