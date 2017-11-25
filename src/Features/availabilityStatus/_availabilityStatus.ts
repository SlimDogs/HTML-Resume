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
			$.ajax({
				type: "GET",
				dataType: "json",
				url: `${this.Parameters.ResumeRootUrl}/CV.json`,
				success: (response: Resume_Application.IResponseCV) => {
					if (response.Resume.Version === this.Parameters.Version) {
						$("body").removeClass("AVAILABILITY-NOT-CLEAR");
						this.Parameters.Availability = response.Resume.Availability;

						if (response.Resume.Availability) {
							$("body").addClass("AVAILABILITY-AVAILABLE");
						}
						else {
							$("body").addClass("AVAILABILITY-NOT-AVAILABLE");
						}
					}
					else {
						/*
							With this class on the body informational message above page content is displayed
							which informs viewer about newer CV version.
						*/
						$("body").addClass("NOT-LATEST-VERSION");
					}
				}
			});
		}
	}
}