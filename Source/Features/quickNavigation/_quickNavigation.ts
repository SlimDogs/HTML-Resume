class QuickNavigation implements Resume_Application.IQuickNavigation {
	constructor(
		private Parameters: Resume_Application.IParameters
	) {}

	public initialize() {
		console.log(this.Parameters);
	}
}