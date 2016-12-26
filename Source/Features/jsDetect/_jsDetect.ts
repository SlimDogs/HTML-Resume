class JavaScriptDetect implements Resume_Application.IJavaScriptDetect {
	constructor() {}

	public initialize(Parameters: Resume_Application.IParameters) {
		$("body").removeClass("NO-JAVASCRIPT");

		Parameters.JavaScript = true;
	}
}