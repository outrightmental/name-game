
function render() {
	$('.name').html(getName());
	$('.description').html(getDescription());
	$('.tagline').html(getTagline());
}

function capitalized(text) {
	return text.substr(0,1).toUpperCase()+text.substr(1);
}

function getName() {
	return capitalized($('#testName').val());
}

function getDescription() {
	return $('#testDescription').val();
}

function getTagline() {
	return $('#testTagline').val();
}