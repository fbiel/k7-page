import { writable } from 'svelte/store';

export const de = {
	article: {
		back: 'Zurück zu allen Einträgen',
		publishedAt: 'Veröffentlicht am:',
		updatedAt: 'Letzte Aktualisierung:',
		projects: 'Projekte',
		blogs: 'Neuigkeiten',
		errorLoading: {
			projects:
				'Beim Laden der Projekte ist ein Fehler aufgetreten. Bitte versuche es später nochmal.',
			blogs:
				'Beim Laden der Neuigkeiten ist ein Fehler aufgetreten. Bitte versuche es später nochmal.'
		},
		selection: {
			projects:
				'Hier finden Sie eine Auswahl unserer Projekte. Leider können wir nicht alle Projekte veröffentlichen. Wenn Sie mehr über unsere Projekte erfahren möchten, kontaktieren Sie uns gerne.',
			blogs: 'Hier finden Sie alle Neuigkeiten über K7-Konzept Karlsruhe.'
		},
		partOfSeries: 'Dieser Artikel ist Teil der Serie',
		part: 'Teil'
	},
	by: 'von',
	company: 'K7-Konzept Karlsruhe',
	home: {
		claim: 'Verlässliche Qualität, maßgeschneiderte Lösungen',
		claim2: ' - Ihr Experte für industriellen Fortschritt.',
		description:
			'K7-Konzept Karlsruhe ist ein junges Unternehmen, das sich auf Sondermaschinenbau sowie die Entwicklung von Software und Hardware für industrielle Anwendungen spezialisiert hat.',
		contactUs: 'Kontakt aufnehmen'
	},
	services: {
		services: 'Leistungen',
		ourServices: 'Unsere Leistungen',
		text: 'Wir bieten Ihnen ein breites Spektrum an Dienstleistungen an. Von der Konstruktion über die Softwareentwicklung bis hin zur Planung und Simulation.'
	},
	news: 'Neuigkeiten',
	jobs: {
		noJobsAvailable: 'Aktuell haben wir keine offenen Stellenausschreibungen.',
		career: 'Karriere'
	},
	team: {
		missing:
			'Sorry, bei der Vorstellung unseres Teams sind wir noch nicht ganz so weit. Wir arbeiten aber mit Hochdruck daran. Schau doch in den nächsten Tagen nochmal vorbei!',
		team: 'Team'
	},
	aboutUs: 'Über uns',
	imprint: 'Impressum',
	gdpr: 'Datenschutzerklärung',
	community: 'Community',
	pageNotFound: 'Seite nicht gefunden',
	pageNotFoundDescription:
		'Diese Seite existiert nicht. Bitte überprüfe die URL oder gehe zurück zur Startseite.',
	errorLoading: 'Fehler beim Laden',
	errorLoadingArticle:
		'Beim Laden des Artikels ist ein Fehler aufgetreten. Bitte versuche es später nochmal.',
	didYouKnow: 'Wussten Sie schon?',
	wwa: {
		ourServices: 'Unsere Leistungen',
		subTitle: 'Was uns ausmacht',
		title: 'Nicht Ihr klassisches Ingenieurbüro',
		text: 'Wir sind ein Team aus Ingenieur:innen, die sich auf Sondermaschinenbau sowie die Entwicklung von Software und Hardware für industrielle Anlagen spezialisiert haben. Als Entwicklungsunternehmen bieten wir nicht nur Konstruktionsdienstleistungen, sondern entwickeln auch die dazugehörige Software.',
		customerObsessed: 'Kundenorientiert',
		customerText:
			'Wir fangen bei Ihren Anforderungen an und arbeiten von dort rückwärts. Wir sind aufmerksame Zuhörer, und geben ehrliches Feedback. Wir gehen den Dingen auf den Grund.',
		softwareDriven: 'Softwaregetrieben',
		softwareText:
			'Wir arbeiten permanent daran effizienter zu werden und automatisieren unsere Prozesse. Damit wir uns auf das Wesentliche konzentrieren können.',
		dataSecurity: 'Datensicherheit',
		dataSecurityText:
			'Im Dschungel von DSGVO und Co. kennen wir uns bestens aus. Wir arbeiten in jedem Projekt nach den höchsten Datenschutzstandards.',
		interdisciplinary: 'Fachübergreifend',
		interdisciplinaryText:
			'Unsere Mitarbeiter:innen kennen sich nicht nur in ihrem Fachgebiet aus, sondern haben alle schon in anderen Abteilungen gearbeitet.'
	},
	contact: {
		nameNecessary: 'Name ist erforderlich',
		betterWriteSomething: 'Sie müssen schon was schreiben',
		whatIsItAbout: "Worum geht's denn?",
		invalidEmail: 'Ungültige Email',
		sendUsAMessage: 'Schreiben Sie uns eine Nachricht',
		information: 'Informationen',
		thanksForMessage: 'Danke für Ihre Nachricht',
		replySoon: 'Wir werden uns schnellstmöglich bei Ihnen melden!',
		yourName: 'Ihr Name',
		yourEmail: 'Ihre Email',
		subject: 'Thema',
		yourMessage: 'Ihre Nachricht',
		pleaseBeExact: 'Bitte beschreiben Sie Ihr Anliegen so genau wie möglich.',
		submit: 'Abschicken',
		email: 'Email',
		phone: 'Telefon',
		adress: 'Adresse',
		hours: 'Arbeitszeiten',
		gdpr: 'Ich akzeptiere die Datenschutzerklärung'
	},
	header: {
		changeLanguage: 'Sprache festlegen'
	},
	projectStatus: {
		'In Anfrage': 'In Anfrage',
		Neu: 'Neu',
		Konzept: 'Konzept',
		'In Bearbeitung': 'In Bearbeitung',
		Geliefert: 'Geliefert',
		Abgeschlossen: 'Abgeschlossen'
	},
	projects: {
		projects: 'Projekte',
		selection:
			'Hier finden Sie eine Auswahl unserer Projekte. Leider können wir nicht alle Projekte veröffentlichen. Wenn Sie mehr über unsere Projekte erfahren möchten, kontaktieren Sie uns gerne.',
		errorLoadingTitle: 'Fehler beim Laden',
		errorLoadingMessage:
			'Beim Laden der Projekte ist ein Fehler aufgetreten. Bitte versuche es später nochmal.'
	},
	ourClients: 'Unsere Kunden',
	department: {
		loading: 'Abteilung wird geladen...',
		allServices: 'Alle Dienstleistungen',
		projectSelection:
			'Hier handelt es sich nur um eine Auswahl von Projekten - leider können wir nicht alle Projekte veröffentlichen.',
		lookingFor:
			'ie suchen nach einem Spezialisten für eine bestimmte Technologie oder Fähigkeit? Hier finden Sie eine Auswahl der Technologien und Fähigkeiten, die wir in unserem Team haben.',
		skills: 'Technologien und Fähigkeiten',
		errorLoadingTitle: 'Fehler beim Laden der Abteilung',
		errorLoadingMessage:
			'Beim Laden der Abteilung ist ein Fehler aufgetreten. Bitte versuche es später nochmal.'
	},
	imprintPage: {
		responsible: 'Inhaltlich verantwortlich',
		register: 'Register',
		disclaimerTitle: 'Haftungsausschluss',
		changesPossible:
			'Die K7-Konzept Karlsruhe GmbH behält sich das Recht vor, ohne vorherige Ankündigung Änderungen oder Ergänzungen der bereitgestellten Informationen vorzunehmen oder diese zu entfernen.',
		noClaims:
			'Auf keinen Fall haftet die K7-Konzept Karlsruhe GmbH für Schäden, die durch fehlende Nutzungsmöglichkeiten oder Datenverluste im Zusammenhang mit der Nutzung von Dokumenten oder Informationen bzw. der Erbringung von Dienstleistungen entstehen, die auf dieser Website zugänglich sind.'
	},
	disclaimer:
		'Die K7-Konzept Karlsruhe GmbH übernimmt keine Garantie dafür, dass die auf dieser Website bereitgestellten Informationen vollständig, richtig und in jedem Fall aktuell sind. Insbesondere übernimmt die K7-Konzept Karlsruhe GmbH keine Haftung für Inhalte, die ausdrücklich oder konkludent als fremde Inhalte gekennzeichnet sind. Die K7-Konzept Karlsruhe GmbH ist nicht dafür verantwortlich, dass solche Inhalte vollständig, richtig, aktuell und rechtmäßig sind und nicht in unzulässiger Weise in Rechtsgüter Dritter eingreifen. Dies gilt auch für Inhalte von Webseiten, auf die durch einen Link verwiesen wird.',
	copy: 'In die Zwischenablage',
	copied: 'Kopiert',
	newsPage: {
		soon: 'Klar haben wir schon Neuigkeiten, aber weil wir so beschäftigt sind, haben wir noch keine Zeit gefunden, diese hier zu veröffentlichen. Schau in den nächsten Tagen doch nochmal vorbei, wir arbeiten daran!'
	},
	notReady: 'Noch nicht verfügbar',
	notReadySorry:
		'Sorry, aber diese Seite ist noch nicht fertig. Schau in den nächsten Tagen doch nochmal vorbei, wir arbeiten daran!'
};

export type TranslationFile = typeof de;

export const en: TranslationFile = {
	aboutUs: 'About us',
	article: {
		back: 'Back to all entries',
		blogs: 'News',
		errorLoading: {
			blogs: 'There was an error loading the news. \nPlease try again later.',
			projects: 'An error occurred while loading the projects. \nPlease try again later.'
		},
		projects: 'Projects',
		publishedAt: 'Published on:',
		selection: {
			blogs: 'Here you will find all the latest news about the K7 Concept Karlsruhe.',
			projects:
				'Here you will find a selection of our projects. \nUnfortunately we cannot publish all projects. \nIf you would like to learn more about our projects, please contact us.'
		},
		updatedAt: 'Last update:',
		partOfSeries: 'This article is part of the series',
		part: 'Part'
	},
	by: 'from',
	company: 'K7-Konzept Karlsruhe',
	community: 'Community',
	contact: {
		adress: 'address',
		betterWriteSomething: 'You should at least write something',
		email: 'E-mail',
		hours: 'working hours',
		information: 'Information',
		invalidEmail: 'Invalid E-mail',
		nameNecessary: 'Name is required',
		phone: 'phone',
		pleaseBeExact: 'Please describe your request as precisely as possible.',
		replySoon: 'We will contact you as soon as possible!',
		sendUsAMessage: 'Send us a message',
		subject: 'Theme',
		submit: 'Send',
		thanksForMessage: 'Thank you for your message',
		whatIsItAbout: 'What is it about?',
		yourEmail: 'Your email',
		yourMessage: 'Your message',
		yourName: 'Your name',
		gdpr: 'I accept the privacy policy'
	},
	copied: 'copied',
	copy: 'To the clipboard',
	department: {
		allServices: 'All services',
		errorLoadingMessage: 'There was an error loading the department. \nPlease try again later.',
		errorLoadingTitle: 'Error loading department',
		loading: 'Loading department...',
		lookingFor:
			'Are you looking for a specialist in a specific technology or skill? \nHere is a selection of the technologies and skills we have in our team.',
		projectSelection:
			'This is just a selection of projects - unfortunately we cannot publish all projects.',
		skills: 'technologies and skills'
	},
	didYouKnow: 'Did you know?',
	disclaimer:
		'K7-Concept Karlsruhe GmbH does not guarantee that the information provided on this website is complete, correct and in any case up-to-date. \nIn particular, K7-Concept Karlsruhe GmbH assumes no liability for content that is expressly or implicitly marked as third-party content. \nK7-konzept Karlsruhe GmbH is not responsible for ensuring that such content is complete, correct, up-to-date and legal and does not inadmissibly interfere with the legal interests of third parties. \nThis also applies to the content of websites referred to by a link.',
	errorLoading: 'Error at loading',
	errorLoadingArticle: 'There was an error loading the article. \nPlease try again later.',
	header: {
		changeLanguage: 'Change language'
	},
	home: {
		claim: 'K7 - Modern engineering',
		claim2: ' - Ihr Experte für industriellen Fortschritt.',
		contactUs: 'Get in touch',
		description:
			'K7-concept Karlsruhe is a young company specializing in the construction of special machines and the development of software and hardware for industrial applications.'
	},
	imprint: 'Imprint',
	imprintPage: {
		changesPossible:
			'K7-Concept Karlsruhe GmbH reserves the right to make changes or additions to the information provided or to remove it without prior notice.',
		disclaimerTitle: 'Disclaimer',
		register: 'Register',
		noClaims:
			'Under no circumstances is K7-Concept Karlsruhe GmbH liable for damage caused by a lack of usage options or data loss in connection with the use of documents or information or the provision of services that are accessible on this website.',
		responsible: 'Content responsibility'
	},
	jobs: {
		career: 'Career',
		noJobsAvailable: 'We currently have no vacancies.'
	},
	news: 'News',
	newsPage: {
		soon: "Of course we already have news, but because we are so busy we haven't found time to publish them here. \nCheck back in the next few days, we're working on it!"
	},
	notReady: 'Not yet available',
	notReadySorry:
		"Sorry, but this page is not ready yet. \nCheck back in the next few days, we're working on it!",
	ourClients: 'Our clients',
	pageNotFound: 'Page not found',
	pageNotFoundDescription:
		'This page does not exist. \nPlease check the URL or go back to the home page.',
	projectStatus: {
		Abgeschlossen: 'Completed',
		Geliefert: 'Delivered',
		'In Anfrage': 'Inquired',
		'In Bearbeitung': 'In progress',
		Konzept: 'Concept',
		Neu: 'New'
	},
	projects: {
		errorLoadingMessage: 'An error occurred while loading the projects. \nPlease try again later.',
		errorLoadingTitle: 'error at loading',
		projects: 'Projects',
		selection:
			'Here is a selection of our most recent projects. \nUnfortunately we cannot publish all projects. \nIf you would like to learn more about our projects, please contact us.'
	},
	services: {
		ourServices: 'Our services',
		services: 'Services',
		text: 'We offer you a wide range of services. \nFrom design and software development to planning and simulation.'
	},
	team: {
		missing:
			'Sorry, we are not quite there yet when it comes to introducing our team. \nBut we are working on it. \nCheck back in the next few days!',
		team: 'team'
	},
	wwa: {
		customerObsessed: 'Customer obsessed',
		customerText:
			'We start with your requirements and work backwards from there. \nWe are careful listeners and give honest feedback. \nWe get to the bottom of things.',
		dataSecurity: 'Data security',
		dataSecurityText:
			'We are very familiar with the jungle of GDPR and Co. \nWe work in every project according to the highest data protection standards.',
		interdisciplinary: 'Interdisciplinary',
		interdisciplinaryText:
			'Our employees not only know their area of ​​expertise, but have all worked in other departments.',
		ourServices: 'Our services',
		softwareDriven: 'software driven',
		softwareText:
			'We are constantly working to become more efficient and automate our processes. \nSo that we can concentrate on the essentials.',
		subTitle: 'Who we are',
		text: 'We are a team of engineers specializing in special machine construction and the development of software and hardware for industrial plants. \nAs a development company, we not only offer design services, but also develop the associated software.',
		title: 'Not your classic engineering office'
	},
	gdpr: 'Privacy policy'
};

export const t = writable<TranslationFile>(de);
export const setLang = (lang: 'de' | 'en') => t.set(lang === 'de' ? de : en);
