class InternetDetect implements Resume_Application.IInternetDetect {
	private subscriptions: Array<() => void> = [];

	constructor() {}

	public initialize(Parameters: Resume_Application.IParameters) {
		if (navigator && navigator.onLine || !navigator) {
			// Performing proper internet connection test with getting some life test image
			let i = new Image();
			i.onload = () => {
				$("body").removeClass("NO-INTERNET");
				Parameters.Internet = true;
				this.parseSubscriptions();
			};
			i.onerror = () => {
				Parameters.Internet = false;
				this.parseSubscriptions();
			};

			let date = new Date(),
				dateMs = date.getTime();

			i.src = `${Parameters.ResumeRootUrl}/online.gif?d=${dateMs}`;
		}
		else {
			Parameters.Internet = false;
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