class JavaScriptDetect {
	constructor(
		private Parameters: Resume_Application.IParameters
	) {}

	public initialize() {
		document.body.classList.remove("NO-JAVASCRIPT");
		this.Parameters.JavaScript = true;
	}
}