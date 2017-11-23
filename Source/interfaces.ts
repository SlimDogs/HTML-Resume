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

	// Json Responses
	export interface IResponseCV {
		"Resume": {
			"Version": number;
			"Availability": boolean;
		};
	}
}