import axios from 'axios';

export const JSONToFormData = (json) => {
	const formData = new FormData();

	for ( const key in json ) {
	    formData.append(key, json[key]);
	}
	return formData;
}

export const isValidDate = (d) => {
	let valid = false;
	if (Object.prototype.toString.call(d) === '[object Date]') {
		if (!isNaN(d.getTime())) {
			valid = true;
		}
	}
	return valid;
}

export const saveFileToNextServer = async (formData) => {
	const config = {
		headers: {
			'content-type': 'multipart/form-data'
		}
	}

	const res = await axios.post(formData, '/api/uploads');

	return res;
}