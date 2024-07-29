import { GristDocAPI } from 'grist-api';
import { GRIST_API_KEY } from '$env/static/private';

export async function load() {
	const DOC_URL = 'https://slocan.getgrist.com/wrs8LmMCRoWxA6PzLuyWj4';
	const api = new GristDocAPI(DOC_URL, { apiKey: GRIST_API_KEY });
	const data = await api.fetchTable('Offers');
	console.log(data);
	return { data };
}
