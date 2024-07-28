import { GristDocAPI } from 'grist-api';

export async function load() {
	const DOC_URL = 'https://slocan.getgrist.com/wrs8LmMCRoWxA6PzLuyWj4';
	const api = new GristDocAPI(DOC_URL, { apiKey: 'b5c27addbea06f5a31dc1932e60332841d6851ee' });
	const data = await api.fetchTable('Offers');
	console.log(data);
	return { data };
}
