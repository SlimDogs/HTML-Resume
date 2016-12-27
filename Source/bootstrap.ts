class Bootstrap implements Resume_Application.IBootstrap {
	private JavascriptDetectFeature: Resume_Application.IJavaScriptDetect;
	private InternetDetectFeature: Resume_Application.IInternetDetect;
	private LanguageSwitchFeature: Resume_Application.ILanguageSwitch;
	private QuickNavigationFeature: Resume_Application.IQuickNavigation;
	private AvailabilityStatusFeature: Resume_Application.IAvailabilityStatus;

	public Parameters = {
		"ResumeRootUrl": "http://www.tautvydas.info",
		"JavaScript": false,
		"Internet": false,
		"Language": null,
		"Version": 1,
		"Availability": null
	};

	constructor() {
		// Creating instances for each future
		this.JavascriptDetectFeature = new JavaScriptDetect(this.Parameters);
		this.InternetDetectFeature = new InternetDetect(this.Parameters);
		this.LanguageSwitchFeature = new LanguageSwitch(this.Parameters);
		this.QuickNavigationFeature = new QuickNavigation(this.Parameters);
		this.AvailabilityStatusFeature = new AvailabilityStatus(this.Parameters, this.InternetDetectFeature);

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

		/*
			Quick navigation plugin appends quick nav panel which allows quickly to scroll between different
			resume sections
		*/
		this.QuickNavigationFeature.initialize();

		$("body").addClass("NOT-LATEST-VERSION");
	}
}

let Resume = new Bootstrap();
