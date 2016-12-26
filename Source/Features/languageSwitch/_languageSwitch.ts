class LanguageSwitch implements Resume_Application.ILanguageSwitch {
	public translations = [
		"en",
		"lt",
		"pl"
	];

	constructor() {}

	/*
		Detecting language
	*/
	public initialize(Parameters: Resume_Application.IParameters) {
		// Detecting language by checking filename for language code stirng (Priority)
		const locationPath = window.location.href;
		this.scanForCodeMatch(locationPath, Parameters);

		// If no language string detected in filename checking for language in navigator object
		if (!Parameters.Language && navigator && navigator.language) {
			this.scanForCodeMatch(navigator.language, Parameters);
		}

		// Defaulting to english
		if (!Parameters.Language) {
			Parameters.Language = this.translations[0];
		}

	}
	private scanForCodeMatch(targetString: string, Parameters: Resume_Application.IParameters) {
		for (let i = 0, b = this.translations.length; i < b; i++) {
			let translation = this.translations[i];
			if (targetString.indexOf(translation) >= 0) {
				Parameters.Language = translation;
				break;
			}
		}
	}
}