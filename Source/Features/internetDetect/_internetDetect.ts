class InternetDetect {
	private subscriptions: Array<() => void> = [];

	constructor(
		private Parameters: Resume_Application.IParameters
	) {}

	public initialize() {
		if (navigator && navigator.onLine || !navigator) {
			// Performing proper internet connection test with getting some life test image
			let i = new Image();
			i.onload = () => {
				$("body").removeClass("NO-INTERNET");

				this.Parameters.Internet = true;
				this.parseSubscriptions();
			};
			i.onerror = () => {
				this.Parameters.Internet = false;

				// If we fail we do an instant retry to make sure it wasn't an mistake
				setTimeout(() => {
					this.initialize();
				}, 1000);
			};

			let date = new Date(),
				dateMs = date.getTime();

			i.src = `${this.Parameters.ResumeRootUrl}/online.gif?d=${dateMs}`;
		}
		else {
			this.Parameters.Internet = false;
		}
	}
	private parseSubscriptions() {
		for (let i = 0, b = this.subscriptions.length; i < b; i++) {
			this.subscriptions[i]();
		}
	}

	public subcsribe(callback: () => void) {
		this.subscriptions.push(callback);
	}
}