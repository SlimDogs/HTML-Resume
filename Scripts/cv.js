(function() {

    'use strict';

    var CONST = {};
    CONST.LANG = {};

    // English language pack
    CONST.LANG.uk = {
        'author': 'Tautvydas Derzinskas',
        'cv': 'Curriculum Vitae',
        'english': 'English',
        'lithuanian': 'Lithuanian',
        'polish': 'Polish',
        'russian': 'Russian',
        'birthDateLabel': 'Birth date',
        'birthDateValue': '12 / 10 / 1988',
        'emailLabel': 'Email address',
        'emailValue': 'tautvydasUk@gmail.com',
        'webLabel': 'Personal web',
        'webValue': 'http://tautvydas.info',
        'phoneLabel': 'Phone number',
        'phoneValue': '07442977197'
    }

    // Lithuanian language pack
    CONST.LANG.lt = {
        'author': 'Tautvydas Deržinskas',
        'cv': 'Gyvenimo aprašymas',
        'english': 'Anglų',
        'lithuanian': 'Lietuvių',
        'polish': 'Lenkų',
        'russian': 'Rusų',
        'birthDateLabel': 'Gimimo metai',
        'birthDateValue': '1988-10-12',
        'emailLabel': 'El. pašto adresas',
        'emailValue': 'tautvydasUk@gmail.com',
        'webLabel': 'Asmeninis puslapis',
        'webValue': 'http://tautvydas.info',
        'phoneLabel': 'Telefono numeris',
        'phoneValue': '07442977197'
    }

    // Polish language pack
    CONST.LANG.pl = {
        'author': 'Tautvydas Derzinskas',
        'cv': 'Curriculum Vitae',
        'english': 'Angielski',
        'lithuanian': 'Litewski',
        'polish': 'Polski',
        'russian': 'Rosyjski',
        'birthDateLabel': 'Data urodzenia',
        'birthDateValue': '12 / 10 / 1988',
        'emailLabel': 'Adres email',
        'emailValue': 'tautvydasUk@gmail.com',
        'webLabel': 'Własna strona internetowa',
        'webValue': 'http://tautvydas.info',
        'phoneLabel': 'Numer telefonu',
        'phoneValue': '07442977197'
    }


    var languageButtons = document.getElementById('language-selector').childNodes;
    for (var i = 0, b = languageButtons.length; i < b; i++) {
        languageButtons[i].addEventListener('click', function() {
            if (this.className.indexOf('active') < 0) {
                updateLanguage(this.className);
            }
        });
    }

    var selectorGroups = ['label', 'title', 'label-title'];

    function updateLanguage(code) {
        // Removing "active" class
        var flagButtons = document.getElementById('language-selector').childNodes;
        for (var i = 0, b = flagButtons.length; i < b; i++) {
            if (flagButtons[i].className && flagButtons[i].className.indexOf('active') >= 0 && flagButtons[i].className.indexOf(code) < 0) {
                flagButtons[i].className = flagButtons[i].className.replace(' active', '');
            } else if (flagButtons[i].className === code) {
                flagButtons[i].className += ' active';
            }
        }

        // Updating language
        for (var i = 0, b = selectorGroups.length; i < b; i++) {
            var selector = 'data-lang-' + selectorGroups[i],
                elements = document.querySelectorAll('[' + selector + ']');

            if (elements) {
                for (var a = 0, c = elements.length; a < c; a++) {
                    var element = elements[a],
                        key = element.getAttribute(selector);

                    // Changing text node
                    if (selectorGroups[i].indexOf('label') >= 0) {
                        element.innerHTML = CONST.LANG[code][key];
                    }

                    // Changing title attribute
                    if (selectorGroups[i].indexOf('title') >= 0) {
                        element.setAttribute('title', CONST.LANG[code][key]);
                    }

                }
            }

        }
    };

    function bootstrap() {
        // Removing warning message
        var warningMessageElement = document.getElementById('warning-message');
        warningMessageElement.parentNode.removeChild(warningMessageElement);

        // Removing invisible classes
        var languuageSelectorElement = document.getElementById('language-selector');
        languuageSelectorElement.removeAttribute('class');

        // Setting initial language from file name
        var url = location.href,
            initialCode = url.substring(url.lastIndexOf('/') + 1, url.length).replace('.html', '').split('_')[1];
        updateLanguage(initialCode || 'uk');
    }
    bootstrap();

})();