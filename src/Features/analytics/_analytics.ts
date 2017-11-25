declare let ga: any;

class Analytics {
	constructor(
		private Parameters: Resume_Application.IParameters,
		private InternetDetectFeature: InternetDetect
	) {}

	public initialize() {
		// Subscribing to Async internet status detection event
		if (!this.Parameters.Internet) {
			this.InternetDetectFeature.subcsribe(
				this.injectAnalytics.bind(this)
			);
		}
		else {
			this.injectAnalytics();
		}
	}

	public injectAnalytics() {
		if (this.Parameters.Internet) {

			let currdate: any = new Date();

			/* tslint:disable:no-string-literal */
			/* tslint:disable:semicolon */
			/* tslint:disable:no-unused-expression */
			// This code is from Google, so let's not modify it too much, just add gaNewElem and gaElems:

			(function(i, s, o, g, r, a: any, m: any) {
				i["GoogleAnalyticsObject"] = r;
				i[r] = i[r] || function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * currdate;
				a = s.createElement(o),
					m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga", {}, {});

			/* tslint:enable:no-unused-expression */
			/* tslint:enable:semicolon */
			/* tslint:enable:no-string-literal */

			ga("create", "UA-89922170-1", "auto");
			ga("send", "pageview");
		}
	}
}