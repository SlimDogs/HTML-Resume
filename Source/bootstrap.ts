class Bootstrap implements Resume_Application.IBootstrap {
	private JavascriptDetectFeature: Resume_Application.IJavaScriptDetect;
	private InternetDetectFeature: Resume_Application.IInternetDetect;
	private LanguageSwitchFeature: Resume_Application.ILanguageSwitch;
	private QuickNavigationFeature: Resume_Application.IQuickNavigation;

	public Parameters = {
		"ResumeRootUrl": "http://tautvydas.info",
		"JavaScript": false,
		"Internet": false,
		"Language": null
	};

	constructor() {
		// Creating instances for each future
		this.JavascriptDetectFeature = new JavaScriptDetect();
		this.InternetDetectFeature = new InternetDetect();
		this.LanguageSwitchFeature = new LanguageSwitch();
		this.QuickNavigationFeature = new QuickNavigation();

		// Starting initialization
		this.initialize();
	}

	public initialize() {
		/*
			Javascript feature makes sure default "no javascript" message is being removed
		*/
		this.JavascriptDetectFeature.initialize(this.Parameters);

		/*
			Internet detector detects if user has internet connection & if he does:
			1. Gets my availability status
			2. Does some analytics
		*/
		this.InternetDetectFeature.initialize(this.Parameters);

		/*
			Language detects the language setting depending on filename & loads the correct Language
			+ provides language swtich possibility
		*/
		this.LanguageSwitchFeature.initialize(this.Parameters);

		/*
			Quick navigation plugin appends quick nav panel which allows quickly to scroll between different
			resume sections
		*/
		this.QuickNavigationFeature.initialize();
	}
}

let Resume = new Bootstrap();
