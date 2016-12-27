class LanguageSwitch implements Resume_Application.ILanguageSwitch {
	public translations = [
		"en",
		"lt",
		"pl"
	];

	constructor(
		private Parameters: Resume_Application.IParameters
	) {}

	/*
		Detecting language
	*/
	public initialize() {
		// Detecting language by checking filename for language code stirng (Priority)
		const locationPath = window.location.href;
		this.scanForCodeMatch(locationPath);

		// If no language string detected in filename checking for language in navigator object
		if (!this.Parameters.Language && navigator && navigator.language) {
			this.scanForCodeMatch(navigator.language);
		}

		// Defaulting to english
		if (!this.Parameters.Language) {
			this.Parameters.Language = this.translations[0];
		}

	}
	private scanForCodeMatch(targetString: string) {
		for (let i = 0, b = this.translations.length; i < b; i++) {
			let translation = this.translations[i];
			if (targetString.indexOf(translation) >= 0) {
				this.Parameters.Language = translation;
				break;
			}
		}
	}
}