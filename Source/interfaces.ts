/// <reference types="jquery" />

namespace Resume_Application {
	export interface IParameters {
		"ResumeRootUrl": string;
		"JavaScript": boolean;
		"Internet": boolean;
		"Language": string;
		"Version": number;
		"Availability": boolean;
	}
	interface IBaseFeature {
		initialize?: () => void;
	}

	export interface IBootstrap extends IBaseFeature {
		Parameters: IParameters;
	}

	export interface IJavaScriptDetect extends IBaseFeature {
	}

	export interface IInternetDetect extends IBaseFeature {
		subcsribe: (callback: () => void) => void;
	}

	interface ITranslations {
		[key: string]: string;
	}
	export interface ILanguageSwitch extends IBaseFeature {
		translations: {
			[key: string]: ITranslations;
		};
		changeLanguage: (translation: string) => void;
	}

	export interface IAvailabilityStatus extends IBaseFeature {
		updateAvailabilityStatus: () => void;
	}

	// Json Responses
	export interface IResponseCV {
		"Resume": {
			"Version": number;
			"Availability": boolean;
		};
	}

	// Analytics interface
	export interface IAnalytics {
		injectAnalytics: () => void;
	}
}