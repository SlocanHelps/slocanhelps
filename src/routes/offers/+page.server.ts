import { GristDocAPI } from 'grist-api';

export async function load() {
	const DOC_URL = 'https://slocan.getgrist.com/wrs8LmMCRoWxA6PzLuyWj4';
	const api = new GristDocAPI(DOC_URL, { apiKey: '***REMOVED***' });
	const data = await api.fetchTable('Offers');
	console.log(data);
	return { data };
}
