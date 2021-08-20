import axios from 'axios';

const URL =
	'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
			},
			headers: {
				'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
				'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
			},
		});

		return data;
	} catch (error) {
		console.log(error);
	}
};
