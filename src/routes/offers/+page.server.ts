import { GristDocAPI } from 'grist-api';
import { GRIST_API_KEY } from '$env/static/private';

export async function load() {
	const DOC_URL = 'https://slocan.getgrist.com/wrs8LmMCRoWxA6PzLuyWj4';
	const api = new GristDocAPI(DOC_URL, { apiKey: GRIST_API_KEY });
	const data = await api.fetchTable('Offers');
	// console.log(data);
  const sortedData = data.toSorted((a,b) => {
    const commA = a.gristHelper_Display2 || a.Community_if_Other_ || 'Other';
    const commB = b.gristHelper_Display2 || b.Community_if_Other_ || 'Other';
    const communityA = commA.toUpperCase();
    const communityB = commB.toUpperCase();

    if (communityA < communityB) {
      return -1;
    } else if (communityA > communityB) {
      return 1;
    } else {
      return 0;
    }
  });
	return { sortedData };
}
