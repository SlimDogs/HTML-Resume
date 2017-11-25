class JavaScriptDetect {
	constructor(
		private Parameters: Resume_Application.IParameters
	) {}

	public initialize() {
		$("body").removeClass("NO-JAVASCRIPT");
		this.Parameters.JavaScript = true;
	}
}