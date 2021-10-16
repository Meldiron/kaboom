(() => {

if (!kaboom) {
	console.error("kaboom not found");
	return;
}

function loadCP437() {
	loadFont(
		"CP437",
		"data:image/png;base64,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",
		9,
		16
	);
}

kaboom.loadCP437 = loadCP437;

})();