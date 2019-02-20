class Bootstrap implements Resume_Application.IBootstrap {
	private JavascriptDetectFeature: JavaScriptDetect;
	private InternetDetectFeature: InternetDetect;
	private LanguageSwitchFeature: LanguageSwitch;
	private AvailabilityStatusFeature: AvailabilityStatus;
	private AnalyticsFeature: Analytics;

	public Parameters = {
		"ResumeRootUrl": "https://tautvydas.info",
		"JavaScript": false,
		"Internet": false,
		"Language": null,
		"Version": 4,
		"Availability": null
	};

	constructor() {
		// Creating instances for each future
		this.JavascriptDetectFeature = new JavaScriptDetect(this.Parameters);
		this.InternetDetectFeature = new InternetDetect(this.Parameters);
		this.LanguageSwitchFeature = new LanguageSwitch(this.Parameters);
		this.AvailabilityStatusFeature = new AvailabilityStatus(this.Parameters, this.InternetDetectFeature);
		this.AnalyticsFeature = new Analytics(this.Parameters, this.InternetDetectFeature);

		// Starting initialization
		this.initialize();
	}

	public initialize() {
		/*
			Javascript feature makes sure default "no javascript" message is being removed
		*/
		this.JavascriptDetectFeature.initialize();

		/*
			Internet detector detects if user has internet connection & if he does:
			1. Gets my availability status
			2. Does some analytics
		*/
		this.InternetDetectFeature.initialize();

		/*
			Language detects the language setting depending on filename & loads the correct Language
			+ provides language swtich possibility
		*/
		this.LanguageSwitchFeature.initialize();

		this.AvailabilityStatusFeature.initialize();

		this.AnalyticsFeature.initialize();
	}
}

let Resume = new Bootstrap();
