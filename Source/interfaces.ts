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

	export interface ILanguageSwitch extends IBaseFeature {
		translations: Array<string>;
	}

	export interface IQuickNavigation extends IBaseFeature {
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
}