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