class AvailabilityStatus implements Resume_Application.IAvailabilityStatus {
	constructor(
		private Parameters: Resume_Application.IParameters,
		private InternetDetectFeature: Resume_Application.IInternetDetect
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
				success: function (response: Resume_Application.IResponseCV) {
					$("body").removeClass("AVAILABILITY-NOT-CLEAR");

					if (response.Resume.Availability) {
						$("body").addClass("AVAILABILITY-AVAILABLE");
					}
					else {
						$("body").addClass("AVAILABILITY-NOT-AVAILABLE");
					}
				}
			});
		}
	}
}