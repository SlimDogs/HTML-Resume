class LanguageSwitch implements Resume_Application.ILanguageSwitch {
	public translations = {
		"en": {
			"authorName": "Tautvydas Derzinskas",
			"cv": "Curriculum Vitae",
			"profile": "Profile",
			"profileDesc": `I build responsive, scalable web sites and web applications using a variety of technologies that work on smartphones, tablets and desktop computers.
							<br /><br />
							Starting with UI development, I became proficient in pure JavaScript as well as JavaScript frameworks like AngularJs. When I work my main goals always are to create beautiful and well performing frontend. Recent web applications I worked on was huge in size, so I have learned how important is to have well performing and fast frontend!`,
			"available": "I am currently looking for a permament new position!",
			"unavailable": "I am currently not looking for a new position.",
			"contacts": "Contacts",
			"address": "Address:",
			"mobile": "Mobile number:",
			"email": "Email:",
			"web": "Personal web:",
			"employment": "Employment history",
			"senior": "Senior Web Developer",
			"orbusDates": "Aug 2014 - Currently",
			"orbusResp1": "Enterprice management application development",
			"orbusResp2": "SharePoint applications development",
			"orbusResp3": "Training new developers",
			"orbusResp4": "Managing frontend development operations",
			"orbusDescription": `My main responsibility was frontend development for newest "Orbus Software" product called "Office Architect" (not official name as product is not released yet). It is a massive single page application which main purpose is Enterprise management.
					<br /><br />
					It was a very enjoyable project to work on because it's foundation was AngularJs framework and application had a lot of features. Some of the features were very UI heavy. Working with such features enabled me to get known with all Angular benefits and flaws.
					One of the better examples of UI heavy feature was "Matrix" view. Users could create a matrix which axis contained hundred of thousands items and my task was to display these axis and all the intersections between them in one page having a seemless scrolling experience. I had to use lazy loading and virtual dom rendering approach to do this.
					<br /><br />
					I have personally worked practically on every aspect of UI - from setting up the routing logic to tiny bits like custom form dropdown elements. I have written hundreds of AgularJs factories, services, directives and their controllers... I am familliar with all the problems which occurs when developing using AngularJs and the ways how to overcome them. The importance of not using watchers and two way binding even though using it would make developers life so much easier (sadly in cost of perormance).
					<br /><br />
					As our main product was very tied with Microsoft products such as Visio, SharePoint I had oppurtunity to do some work related to them. To be specific I was responsibile of SharePoint application development. SharePoint applications - it's parts of "Office Architect" which can be integrated into SharePoint pages. I learned a lot about SharePoint and cross domain communication while working on these apps. I used such techniques as jSONp for cross domain data transfering and PostMessage API for communication between apps which were located in different iframes / tabs. A very unique and valuable experience!
					<br /><br />
					As the main frontend developer I had to take responsibility and care about the frontend devOps. Our development operations were such as SASS compilation, Babel/TypeScript compilation, file bundling and minification, unit test running and many others. Initially we used Grunt as a devOps task runner, but after some time I had oppurtunity to replace it with Gulp which is much more flexible.
					<br /><br />
					Besides all the development work I have done I did a lot of mentoring too. I was responsible for new developers integration into our development process.`,
			"techUsed": "Skills developed / Technologies used",
			"webDev": "Web Developer",
			"wersportsDates": "Mar 2013 – Mar 2014",
			"wersportsResp1": "Ecommerce and email campaigns development",
			"wersportsResp2": "Ebay store and listings development",
			"wersportsResp3": "SEO implementation",
			"wersportsDescription": `At that time a small ecommerce based family business in which I took part as a main frontend developer.
					<br /><br />
					While working in co-operation with backend developer my main responsibility was development of We R Sports ecommerce page. Even though it was not a single page application I have used quite a lot of JavaScript to implement it as there were a lot of features which required some heavier coding. I have used various jQuery plugins and vanilla javascript to implement such features as slideshows, 360 product previews and many others. As our backend was based on Symfony (PHP framework) which used TWIG as it's default templating system I had to adapt and learn it to support my backend collegue as much as possible.
					<br /><br />
					As we finished with the main web site my task was to transfer it to an eBay store. Ebay provides posibility to use custom html / javascript code to enhance sellers stores and we decided to use this feature and transfer a copy of the whole We R Sports eccommerce web site there. At that time I did not had much experience with JavaScript frameworks such as Angular I went with a decision to create own custom core which would drive the whole single page application. This core was made using plain JavaScript and jQuery. We were the first ones who introduced constantly updating data to the eBay listings, which enabled us to use unusual, our own features in eBay store and listings. All our enhanced eBay listings had various unusual for eBay UI heavy features such as product reviews, recommended/similar products lists and so on - I was behind all ui work.
					<br /><br />
					While not working with main ecommerce platform and eBay store I was responsible of implementing Schema.org schemas in companies public projects to improve SEO. Also I was implementing email templates for We R Sports marketing campaigns and news letters.`,
			"developer": "Developer",
			"gvcDates": "Nov 2012 – Mar 2013",
			"gvcResp1": "Ecommerce page and email campaign development",
			"gvcResp2": "Ebay stores and listing development",
			"gvcDescription": `In this small re-selling ecommerce based company I stayed for a short period of time and as a single developer in the whole company I was responsible for every IT related thing.
					<br /><br />
					I was maintaining and developing two ecommerce platforms (DigiSpot.co.uk, GoodsStal.co.uk). As both platforms has ten of thousands products on sale the biggest responsibility and trouble was to make sure all the data (prices, stock) was always up to date as the company was just re-selling the items while actually not having them in own warehouses. I have implemented a small application which daily collected all the data from product providers and converted it to tabbed documents which later could be imported into our ecommerce platforms to refresh all the data.
					<br /><br />
					Every once a while I was also updating ebay listings in multiple stores owned by the company. Ths involved me into using eBays restful API to update the listings automatically and html template creation from scratch.
					<br /><br />
					I was also the one man makerting operation: creating email news letters.
					<br /><br />
					I am very glad I had oppurtunity to work in this company as here my tasks varied a lot and it made me realize that I love frontend development more then backend!`,
			"freelancer": "Freelancer",
			"freeDates": "Oct 2008 – Feb 2010",
			"freeResp1": "Websites development from scratch",
			"freeResp2": "New features integration into existing projects",
			"freeDescrption": `During this period of time I have worked on multiple various projects, doing various tasks starting with finding web hosting solutions and finishing with web site creation from scratch.
					<br /><br />
					I have created a few blogs based on WordPress, CuteNews content management systems.
					<br /><br />
					For existing web sites I was implementing features such as discussion boards, guest books (I have actually developed my own PHP based guest book which uses flat files as database), analytics tracking.`,
			"education": "Education",
			"eduName1": "Siauliai University, Lithuania",
			"eduStudies1": "Bachelor studies of IT",
			"eduName2": "Didzvaris Gymnasium, Lithuania",
			"eduStudies2": "Secondary education",
			"eduName3": "Jovaras school, Lithuania",
			"eduStudies3": "Primary education",
			"skills": "Skills"
		},
		"lt": {
			"authorName": "Tautvydas Deržinskas",
			"cv": "Gyvenimo aprašymas",
			"profile": "Santrumpa",
			"profileDesc": `I build responsive, scalable web sites and web applications using a variety of technologies that work on smartphones, tablets and desktop computers.
							<br /><br />
							Starting with UI development, I became proficient in pure JavaScript as well as JavaScript frameworks like AngularJs. When I work my main goals always are to create beautiful and well performing frontend. Recent web applications I worked on was huge in size, so I have learned how important is to have well performing and fast frontend!`,
			"available": "Šiuo metu ieškau naujo darbo!",
			"unavailable": "Šiuo metu naujo darbo neieškau.",
			"contacts": "Kontaktai",
			"address": "Adresas:",
			"mobile": "Mob. numeris:",
			"email": "El. pašto adresas:",
			"web": "Asmeninė svetainė:",
			"employment": "Darbinė veikla",
			"senior": "Vyresnysis Web Inžinierius",
			"orbusDates": "2014 Rugpjūtis - Dabar",
			"orbusResp1": "Įmoniu valdymo programinės įrangos kūrimas",
			"orbusResp2": "SharePoint aplikacijų kūrimas",
			"orbusResp3": "Naujų programuotojų treniravimas",
			"orbusResp4": "Programavimo operacijų kontrolė",
			"orbusDescription": `My main responsibility was frontend development for newest "Orbus Software" product called "Office Architect" (not official name as product is not released yet). It is a massive single page application which main purpose is Enterprise management.
					<br /><br />
					It was a very enjoyable project to work on because it's foundation was AngularJs framework and application had a lot of features. Some of the features were very UI heavy. Working with such features enabled me to get known with all Angular benefits and flaws.
					One of the better examples of UI heavy feature was "Matrix" view. Users could create a matrix which axis contained hundred of thousands items and my task was to display these axis and all the intersections between them in one page having a seemless scrolling experience. I had to use lazy loading and virtual dom rendering approach to do this.
					<br /><br />
					I have personally worked practically on every aspect of UI - from setting up the routing logic to tiny bits like custom form dropdown elements. I have written hundreds of AgularJs factories, services, directives and their controllers... I am familliar with all the problems which occurs when developing using AngularJs and the ways how to overcome them. The importance of not using watchers and two way binding even though using it would make developers life so much easier (sadly in cost of perormance).
					<br /><br />
					As our main product was very tied with Microsoft products such as Visio, SharePoint I had oppurtunity to do some work related to them. To be specific I was responsibile of SharePoint application development. SharePoint applications - it's parts of "Office Architect" which can be integrated into SharePoint pages. I learned a lot about SharePoint and cross domain communication while working on these apps. I used such techniques as jSONp for cross domain data transfering and PostMessage API for communication between apps which were located in different iframes / tabs. A very unique and valuable experience!
					<br /><br />
					As the main frontend developer I had to take responsibility and care about the frontend devOps. Our development operations were such as SASS compilation, Babel/TypeScript compilation, file bundling and minification, unit test running and many others. Initially we used Grunt as a devOps task runner, but after some time I had oppurtunity to replace it with Gulp which is much more flexible.
					<br /><br />
					Besides all the development work I have done I did a lot of mentoring too. I was responsible for new developers integration into our development process.`,
			"techUsed": "Naudotos technologijos",
			"webDev": "Web Inžinierius",
			"wersportsDates": "2013 Kovas – 2014 Kovas",
			"wersportsResp1": "Internetinės parduotuvės kūrimas",
			"wersportsResp2": "Ebay parduotuvės ir skelbimų kūrimas ir vystimas",
			"wersportsResp3": "SEO įgyvendinimas",
			"wersportsDescription": `At that time a small ecommerce based family business in which I took part as a main frontend developer.
					<br /><br />
					While working in co-operation with backend developer my main responsibility was development of We R Sports ecommerce page. Even though it was not a single page application I have used quite a lot of JavaScript to implement it as there were a lot of features which required some heavier coding. I have used various jQuery plugins and vanilla javascript to implement such features as slideshows, 360 product previews and many others. As our backend was based on Symfony (PHP framework) which used TWIG as it's default templating system I had to adapt and learn it to support my backend collegue as much as possible.
					<br /><br />
					As we finished with the main web site my task was to transfer it to an eBay store. Ebay provides posibility to use custom html / javascript code to enhance sellers stores and we decided to use this feature and transfer a copy of the whole We R Sports eccommerce web site there. At that time I did not had much experience with JavaScript frameworks such as Angular I went with a decision to create own custom core which would drive the whole single page application. This core was made using plain JavaScript and jQuery. We were the first ones who introduced constantly updating data to the eBay listings, which enabled us to use unusual, our own features in eBay store and listings. All our enhanced eBay listings had various unusual for eBay UI heavy features such as product reviews, recommended/similar products lists and so on - I was behind all ui work.
					<br /><br />
					While not working with main ecommerce platform and eBay store I was responsible of implementing Schema.org schemas in companies public projects to improve SEO. Also I was implementing email templates for We R Sports marketing campaigns and news letters.`,
			"developer": "Programuotojas",
			"gvcDates": "2012 Lapkritis – 2013 Kovas",
			"gvcResp1": "Internetinės parduotuvės kūrimas",
			"gvcResp2": "Ebay parduotuvės ir skelbimų kūrimas ir vystimas",
			"gvcDescription": `In this small re-selling ecommerce based company I stayed for a short period of time and as a single developer in the whole company I was responsible for every IT related thing.
					<br /><br />
					I was maintaining and developing two ecommerce platforms (DigiSpot.co.uk, GoodsStal.co.uk). As both platforms has ten of thousands products on sale the biggest responsibility and trouble was to make sure all the data (prices, stock) was always up to date as the company was just re-selling the items while actually not having them in own warehouses. I have implemented a small application which daily collected all the data from product providers and converted it to tabbed documents which later could be imported into our ecommerce platforms to refresh all the data.
					<br /><br />
					Every once a while I was also updating ebay listings in multiple stores owned by the company. Ths involved me into using eBays restful API to update the listings automatically and html template creation from scratch.
					<br /><br />
					I was also the one man makerting operation: creating email news letters.
					<br /><br />
					I am very glad I had oppurtunity to work in this company as here my tasks varied a lot and it made me realize that I love frontend development more then backend!`,
			"freelancer": "Laisvai samdomas",
			"freeDates": "2008 Spalis – 2010 Vasaris",
			"freeResp1": "Svetainės kūrimas nuo nulio",
			"freeResp2": "Papildomų funkcijų diegimas į egzistuojančius projektus",
			"freeDescrption": `During this period of time I have worked on multiple various projects, doing various tasks starting with finding web hosting solutions and finishing with web site creation from scratch.
					<br /><br />
					I have created a few blogs based on WordPress, CuteNews content management systems.
					<br /><br />
					For existing web sites I was implementing features such as discussion boards, guest books (I have actually developed my own PHP based guest book which uses flat files as database), analytics tracking.`,
			"education": "Išsilavinimas",
			"eduName1": "Šiaulių Universitetas, Lietuva",
			"eduStudies1": "Informatikos bakalauro studijos",
			"eduName2": "Didždvario gimnazija, Lietuva",
			"eduStudies2": "Vidurinis išsilavinimas",
			"eduName3": "Jovaro mokykla, Lietuva",
			"eduStudies3": "Pradinis išsilavinimas",
			"skills": "Įgūdžiai"
		}
	};

	constructor(
		private Parameters: Resume_Application.IParameters
	) {}

	/*
		Detecting language
	*/
	public initialize() {
		// Detecting language by checking filename for language code stirng (Priority)
		const locationPath = window.location.href;
		this.scanForCodeMatch(locationPath);

		// If no language string detected in filename checking for language in navigator object
		if (!this.Parameters.Language && navigator && navigator.language) {
			this.scanForCodeMatch(navigator.language);
		}

		// Defaulting to english
		if (!this.Parameters.Language) {
			this.Parameters.Language = this.translations[0];
		}

		this.changeLanguage(this.Parameters.Language); // Setting the language

		let self = this;
		$("#language-selector").on("change", function() {
			let selectedTranslation = $(this).val();
			self.changeLanguage(selectedTranslation);
		});

	}
	private scanForCodeMatch(targetString: string) {
		for (let translation in this.translations) {
			if (targetString.indexOf(translation) >= 0) {
				this.Parameters.Language = translation;
				break;
			}
		}
	}

	public changeLanguage(translation: string) {
		if (this.translations[translation]) {
			for (let key in this.translations[translation]) {
				$(`[data-lang="${key}"]`).html(this.translations[translation][key]);
			}

			this.Parameters.Language = translation;
		}
	}
}