class AvailabilityStatus {
	constructor(
		private Parameters: Resume_Application.IParameters,
		private InternetDetectFeature: InternetDetect
	) {
		// Subscribing to Async internet status detection event
		this.InternetDetectFeature.subcsribe(
			this.updateAvailabilityStatus.bind(this)
		);
	}

	public initialize() {
		if (this.Parameters.Internet != null) {
			this.updateAvailabilityStatus();
		}
	}

	public updateAvailabilityStatus() {
		if (this.Parameters.Internet) {
			// If we have internet connection we try to get availability status from the github!
			const xhr = new XMLHttpRequest();
			xhr.addEventListener("load", () => {
				const response: Resume_Application.IResponseCV = JSON.parse(xhr.response);

				if (response.Resume.Version === this.Parameters.Version) {
					document.body.classList.remove("AVAILABILITY-NOT-CLEAR");
					this.Parameters.Availability = response.Resume.Availability;

					if (response.Resume.Availability) {
						document.body.classList.add("AVAILABILITY-AVAILABLE");
					}
					else {
						document.body.classList.add("AVAILABILITY-NOT-AVAILABLE");
					}
				}
				else {
					/*
						With this class on the body informational message above page content is displayed
						which informs viewer about newer CV version.
					*/
					document.body.classList.add("NOT-LATEST-VERSION");
				}
			}, false);
			xhr.open("GET", `${this.Parameters.ResumeRootUrl}/CV.json`);
			xhr.send();
		}
	}
}