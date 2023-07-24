import { writable } from 'svelte/store';

export const de = {
	link: '/',
	language: 'de',
	notFound: 'Nicht gefunden',
	meta: {
		home: 'Dies ist die Firmenhomepage von K7-Konzept Karlsruhe. Wir sind ein junges Unternehmen, das sich auf Sondermaschinenbau sowie die Entwicklung von Software und Hardware für industrielle Anwendungen spezialisiert hat.',
		blog: 'Hier finden Sie alle Neuigkeiten aus dem Unternehmensblog von K7-Konzept Karlsruhe. Wir veröffentlichen regelmäßig Artikel zu den Themen Sondermaschinenbau, Softwareentwicklung und Hardwareentwicklung.',
		blogEntry: 'Der hier beschriebene Artikel wurde von K7-Konzept Karlsruhe veröffentlicht.',
		career:
			'Hier finden Sie alle offenen Stellenanzeigen von K7-Konzept Karlsruhe. Wir sind immer auf der Suche nach talentierten und leidenschaftlichen Menschen, die unser Team verstärken.',
		downloads:
			'Hier finden Sie alle Downloads von K7-Konzept Karlsruhe. Wir stellen Ihnen Dokumente, Corporate Design und Logos zur Verfügung.',
		imprint:
			'Das rechtlich verbindliche Impressum von K7-Konzept Karlsruhe. Hier finden Sie alle Informationen zum Unternehmen, den Kontaktdaten und den rechtlichen Hinweisen.',
		privacy:
			'Die Datenschutzerklärung von K7-Konzept Karlsruhe. Hier finden Sie alle Informationen zum Datenschutz und der Verarbeitung von personenbezogenen Daten.',
		projects:
			'Hier finden Sie eine Auswahl unserer Projekte. Leider können wir nicht alle Projekte veröffentlichen. Wenn Sie mehr über unsere Projekte erfahren möchten, kontaktieren Sie uns gerne.',
		projectEntry:
			'Das hier beschriebene Projekt wurde von K7-Konzept Karlsruhe realisiert. Hier finden Sie alle Informationen zum Projekt, den verwendeten Technologien und den beteiligten Personen.',
		services:
			'Hier finden Sie eine Auswahl der Technologien und Fähigkeiten, die wir in unserem Team haben. Sie suchen nach einem Spezialisten für eine bestimmte Technologie oder Fähigkeit? Dann sind Sie hier genau richtig.',
		serviceEntry:
			'Die hier beschriebene Dienstleistung wird von K7-Konzept Karlsruhe angeboten. Hier finden Sie alle Informationen zur Dienstleistung, den verwendeten Technologien und den beteiligten Personen.',
		team: 'Hier finden Sie unser Team. Wir sind ein junges und vielfältiges Team aus Ingenieur:innen, die sich auf Sondermaschinenbau sowie die Entwicklung von Software und Hardware für industrielle Anwendungen spezialisiert haben.'
	},
	pagination: {
		previous: 'Zurück',
		next: 'Weiter',
		results: (from: number, to: number, total: number) =>
			`Zeige ${from} bis ${to} von ${total} Ergebnissen`
	},
	error404: {
		title: 'Seite nicht gefunden',
		description: 'Sorry, wir konnten nicht finden wonach du gesucht hast.'
	},
	blog: {
		back: 'Zurück zum Blog',
		publishedAt: 'Veröffentlicht am:',
		updatedAt: 'Letzte Aktualisierung:',
		fromTheblog: 'Aus dem Blog',
		benefit:
			'Profitieren Sie von unserem Wissen und unserer Erfahrung. Wir teilen unsere Erkenntnisse und Erfahrungen in unserem Blog.'
	},

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
		claim: 'Maßgeschneiderte Lösungen, verlässliche Qualität',
		claim2: ' - Ihr Experte für industriellen Fortschritt.',
		description:
			'K7-Konzept Karlsruhe ist ein junges Unternehmen, das sich auf Sondermaschinenbau sowie die Entwicklung von Software und Hardware für industrielle Anwendungen spezialisiert hat.',
		contactUs: 'Kontakt aufnehmen',
		oneJob: 'Job verfügbar',
		moreJobs: 'Jobs verfügbar'
	},
	services: {
		services: 'Leistungen',
		ourServices: 'Unsere Leistungen',

		text: 'Wir bieten Ihnen ein breites Spektrum an Dienstleistungen an. Von der Konstruktion über die Softwareentwicklung bis hin zur Planung und Simulation.',
		oneHand: 'Alles aus einer Hand',
		knowHow: 'Kleine Teams, viel Know-How',
		smallTeams:
			'Wir halten unsere Projektteams möglichst klein, um die Kommunikation und die Zusammenarbeit zu vereinfachen. Das ist möglich, weil unsere Mitarbeiter:innen über ein breites Spektrum an Fähigkeiten verfügen. So können wir die meisten Aufgaben inhouse erledigen und sind nicht auf externe Dienstleister angewiesen.'
	},
	news: 'Neuigkeiten',
	jobs: {
		noJobsAvailable: 'Aktuell haben wir keine offenen Stellenausschreibungen.',
		career: 'Karriere',
		futureTogether: 'Gemeinsam die Zukunft gestalten',
		proud:
			'Wir sind stolz darauf, ein junges und vielfältiges Team zu sein. Als Arbeitgeber sind wir fest davon überzeugt, dass der Erfolg eines Unternehmens untrennbar mit dem Erfolg seiner Mitarbeiter verbunden ist.',
		aboutPeople:
			'Bei K7 investieren wir nicht nur in Technologie und Projekte, sondern vor allem in unsere talentierten Mitarbeiter. Wir unterstützen dich dabei, deine Fähigkeiten weiterzuentwickeln, neue Herausforderungen anzunehmen und persönlich zu wachsen. Durch regelmäßige Schulungen, individuelles Coaching und Mentoring fördern wir deine berufliche Entwicklung und helfen dir, deine Karriereziele zu erreichen.',
		openPositions: 'Offene Stellenanzeigen',
		claim:
			'Wenn du Teil eines Unternehmens sein möchtest, das dir nicht nur einen Job bietet, sondern auch echte Möglichkeiten zur persönlichen und beruflichen Entwicklung, dann bewirb dich jetzt bei K7. Gemeinsam können wir Großes erreichen und die Zukunft des Sondermaschinenbaus und industrieller Technologien gestalten. Wir freuen uns darauf, von dir zu hören!',
		error:
			'Beim Laden der Stellenanzeigen ist ein Fehler aufgetreten. Bitte versuche es später nochmal.',
		weOffer: 'Wir bieten',
		diversity:
			'Unser Team besteht aus Menschen unterschiedlicher Hintergründe, Expertisen und Perspektiven. Wir schätzen Vielfalt und glauben daran, dass Innovation durch den Austausch verschiedener Ideen und Sichtweisen entsteht. Bei uns findest du eine offene, dynamische Arbeitsumgebung, in der du deine Ideen einbringen und gemeinsam mit einem engagierten Team an spannenden Projekten arbeiten kannst.',
		features: {
			flexibleWorkingHours: {
				name: 'Flexible Arbeitszeiten',
				description:
					'Wir bieten flexible Arbeitszeiten mit Gleitzeit und Überstundenabbau, damit du deine Arbeit und dein Privatleben in Einklang bringen kannst.'
			},
			homeoffice: {
				name: 'Homeoffice',
				description:
					'Jeder Mitarbeiter erhält einen Laptop. Wir haben unsere Infrastruktur so optimiert, dass du von überall aus arbeiten kannst.'
			},
			training: {
				name: 'Weiterbildung',
				description:
					'Jeder unserer Mitarbeiter kennt sich in Disziplinen außerhalb seines Fachgebiets aus. Wir unterstützen dich bei der Weiterbildung.'
			},
			centralLocation: {
				name: 'Zentrale Lage',
				description:
					'Unser Büro liegt zentral in Karlsruhe in der Nähe des ZKM und ist gut mit den öffentlichen Verkehrsmitteln erreichbar.'
			},
			fruitAndBeverages: {
				name: 'Obst und Getränke',
				description:
					'Alle Mitarbeiter erhalten kostenlos Obst und Wasser, Kaffee sowie verschiedene Kaltgetränke.'
			},
			ergonomicWorkplace: {
				name: 'Ergonomischer Arbeitsplatz',
				description:
					'Wir bieten ergonomische Arbeitsplätze mit höhenverstellbaren Schreibtischen und ergonomischen Stühlen.'
			}
		},
		weAreLookingFor: 'Zur Zeit suchen wir:',
		mwd: '(m/w/d)',
		emailTo: 'E-Mail an',
		contact: 'Anprechpartner',
		location: 'Standort',
		earliestStart: 'Verfügbar abt',
		about: 'Über diesen Job',
		yourProfile: 'Ihr Profil',
		yourTasks: 'Ihre Aufgaben',
		soundsLikeYou: 'Das klingt nach Ihnen? Dann freuen wir uns auf Ihre Bewerbung per E-Mail an'
	},
	team: {
		missing:
			'Sorry, bei der Vorstellung unseres Teams sind wir noch nicht ganz so weit. Wir arbeiten aber mit Hochdruck daran. Schau doch in den nächsten Tagen nochmal vorbei!',
		team: 'Unser Team',
		meatLeadership: 'Triff unser Team',
		teamDescription:
			'Wir setzen uns dafür ein, das bestmöglichste Erlebnis für unsere Kunden und unsere Mitarbeiter zu schaffen.',
		yourPicture: 'Sie möchten Ihr Bild auch hier sehen?',
		apply: 'Dann bewerben Sie sich jetzt!',
		notAllMembers:
			'Hier sind natürlich nicht alle Mitarbeiter aufgeführt, nicht jeder möchte im Internet auftauchen.'
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
		talkAboutProject: 'Lassen Sie uns über Ihr Projekt reden!',
		weHelp: 'Wir helfen Unternehmen bei der Umsetzung Ihrer Projekte.',
		whatIsItAbout: "Worum geht's denn?",
		invalidEmail: 'Ungültige Email',
		sendUsAMessage: 'Schreiben Sie uns eine Nachricht',
		information: 'Informationen',
		thanksForMessage: 'Danke für Ihre Nachricht!',
		replySoon: 'Wir werden uns schnellstmöglich bei Ihnen melden.',
		error: 'Das hat nicht geklappt!',
		missing: 'Leider fehlen noch ein paar Angaben.',
		yourName: 'Ihr Name',
		name: 'Vorname',
		surname: 'Nachname',
		yourEmail: 'Ihre Email',
		subject: 'Thema',
		yourMessage: 'Ihre Nachricht',
		pleaseBeExact: 'Bitte beschreiben Sie Ihr Anliegen so genau wie möglich.',
		submit: 'Abschicken',
		email: 'Email',
		phone: 'Telefon',
		adress: 'Adresse',
		hours: 'Arbeitszeiten',
		gdpr: 'Ich akzeptiere die Datenschutzerklärung',
		gdprMissing: 'Bitte akzeptieren Sie die Datenschutzerklärung.'
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
			'Sie suchen nach einem Spezialisten für eine bestimmte Technologie oder Fähigkeit? Hier finden Sie eine Auswahl der Technologien und Fähigkeiten, die wir in unserem Team haben.',
		skills: 'Technologien und Fähigkeiten',
		errorLoadingTitle: 'Fehler beim Laden der Abteilung',
		errorLoadingMessage:
			'Beim Laden der Abteilung ist ein Fehler aufgetreten. Bitte versuche es später nochmal.',
		talkAboutProject: 'Erzählen Sie uns von Ihrem Projekt',
		interesting:
			'Das klingt interessant für Sie? Dann schreiben Sie uns doch eine Nachricht an info@k-7.eu. Oder besuchen Sie uns in unserem Büro in Karlsruhe.',
		writeMessage: 'Nachricht schreiben'
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
	link: '/en/',
	language: 'en',
	notFound: 'Not found',
	pagination: {
		previous: 'Previous',
		next: 'Next',
		results: (from: number, to: number, total: number) =>
			`Showing ${from} to ${to} of ${total} results`
	},
	meta: {
		home: 'This is the company homepage of K7-Konzept Karlsruhe. We are a young company specializing in special machine construction and the development of software and hardware for industrial applications.',
		blog: 'Here you will find all the latest news from the K7-Konzept Karlsruhe company blog. We regularly publish articles on special machine construction, software development and hardware development.',
		blogEntry: 'The article described here was published by K7-Konzept Karlsruhe.',
		career:
			'Here you will find all the job advertisements from K7-Konzept Karlsruhe. We are always looking for talented and passionate people to join our team.',
		downloads:
			'Here you will find all downloads from K7-Konzept Karlsruhe. We provide you with documents, corporate design and logos.',
		imprint:
			'The legally binding imprint of K7-Konzept Karlsruhe. Here you will find all information about the company, the contact details and the legal notices.',
		privacy:
			'The privacy policy of K7-Konzept Karlsruhe. Here you will find all information about data protection and the processing of personal data.',
		projects:
			'Here you will find a selection of our projects. Unfortunately we cannot publish all projects. If you would like to learn more about our projects, please contact us.',
		projectEntry:
			'The project described here was realized by K7-Konzept Karlsruhe. Here you will find all information about the project, the technologies used and the people involved.',
		services:
			'Here you will find a selection of the technologies and skills we have in our team. Are you looking for a specialist in a specific technology or skill? Then you are exactly right here.',
		serviceEntry:
			'The service described here is offered by K7-Konzept Karlsruhe. Here you will find all information about the service, the technologies used and the people involved.',
		team: 'Here you will find our team. We are a young and diverse team of engineers specializing in special machine construction and the development of software and hardware for industrial applications.'
	},
	error404: {
		title: 'Page not found',
		description: 'The page you are looking for does not exist.'
	},
	blog: {
		back: 'Back to all entries',
		publishedAt: 'Published on:',
		updatedAt: 'Last update:',
		fromTheblog: 'From the blog',
		benefit:
			'Profit from our knowledge and experience. We share our insights and experiences in our blog.'
	},
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
		adress: 'Address',
		betterWriteSomething: 'You should at least write something',
		weHelp: 'We help companies making their projects reality.',
		email: 'E-mail',
		hours: 'Wsorking hours',
		talkAboutProject: 'Let’s talk about your project',
		error: 'That didn’t work!',
		missing: 'Unfortunately, some information is still missing.',
		name: 'First name',
		surname: 'Last name',
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
		gdpr: 'I accept the privacy policy',
		gdprMissing: 'Please accept the privacy policy.'
	},
	copied: 'Copied',
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
		skills: 'technologies and skills',
		//'Erzählen Sie uns von Ihrem Projekt',
		talkAboutProject: 'Tell us about your project',
		//interesting: 'Das klingt interessant für Sie? Dann Schreiben Sie uns eine Nachricht an info@k-7.eu. Oder besuchen Sie uns in unserem Büro in Karlsruhe.',
		interesting:
			'That sounds interesting to you? Then write us a message to info@k-7.eu. Or visit us in our office in Karlsruhe.',
		writeMessage: 'Write message'
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
			'K7-concept Karlsruhe is a young company specializing in the construction of special machines and the development of software and hardware for industrial applications.',
		oneJob: 'job available',
		moreJobs: 'jobs available'
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
		noJobsAvailable: 'We currently have no vacancies.',
		openPositions: 'Open positions',
		futureTogether: 'Shape the future together with us',
		proud:
			'We are proud to be a young and diverse team. As an employer, we firmly believe that the success of a company is inextricably linked to the success of its employees.',
		aboutPeople:
			'At K7, we invest not only in technology and projects, but above all in our talented employees. We support you in developing your skills, taking on new challenges and growing personally. Through regular training, individual coaching and mentoring, we promote your professional development and help you achieve your career goals.',
		claim:
			'If you want to be part of a company that not only offers you a job, but also real opportunities for personal and professional development, then apply now at K7. Together we can achieve great things and shape the future of special machine construction and industrial technologies. We look forward to hearing from you!',
		error: 'An error occurred while loading the job advertisements. Please try again later.',
		weOffer: 'What we offer',
		diversity:
			'Our team consists of people from different backgrounds, expertise and perspectives. We appreciate diversity and believe that innovation arises from the exchange of different ideas and perspectives. Here you will find an open, dynamic working environment where you can contribute your ideas and work together with a dedicated team on exciting projects.',
		features: {
			flexibleWorkingHours: {
				name: 'Flexible Working hours',
				description:
					'We offer flexible working hours with flexitime and overtime reduction so that you can balance your work and private life.'
			},
			homeoffice: {
				name: 'Remote work',
				description:
					'Each employee receives a laptop. We have optimized our infrastructure so that you can work from anywhere.'
			},
			training: {
				name: 'Training',
				description:
					'Each of our employees is familiar with disciplines outside their field of expertise. We support you in further education.'
			},
			centralLocation: {
				name: 'Central location',
				description:
					'Our office is centrally located in Karlsruhe near the ZKM and is easily accessible by public transport.'
			},
			fruitAndBeverages: {
				name: 'Fruit and beverages',
				description: 'All employees receive free fruit and water, coffee and various cold drinks.'
			},
			ergonomicWorkplace: {
				name: 'Ergonomic workplace',
				description:
					'We offer ergonomic workplaces with height-adjustable desks and ergonomic chairs.'
			}
		},
		weAreLookingFor: 'We are currently looking for:',
		mwd: '(m/f/d)',
		emailTo: 'E-mail to',
		contact: 'Contact',
		location: 'Location',
		earliestStart: 'Earliest start',
		about: 'About this job',
		yourProfile: 'Your profile',
		yourTasks: 'Your tasks',
		soundsLikeYou: 'Sounds like you? Then we look forward to your application by e-mail to'
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
		text: 'We offer you a wide range of services. \nFrom design and software development to planning and simulation.',
		oneHand: 'Everything from one source',
		knowHow: 'Small teams, a lot of know-how',
		smallTeams:
			'We keep our project teams as small as possible in order to simplify communication and collaboration. \nThis is possible because our employees have a wide range of skills. \nThis allows us to do most of the tasks in-house and are not dependent on external service providers.'
	},
	team: {
		missing:
			'Sorry, we are not quite there yet when it comes to introducing our team. \nBut we are working on it. \nCheck back in the next few days!',
		team: 'Team',
		meatLeadership: 'Meet our leadership team',
		teamDescription:
			'Our leadership team consists of talented and passionate people who are committed to creating the best possible experience for our customers and our employees.',
		yourPicture: 'Would you like to see your picture here too?',
		apply: 'Then apply now!',
		notAllMembers:
			'Here are of course not all employees listed, not everyone wants to appear on the Internet.'
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
export const setLang = (lang: 'de' | 'en') => {
	t.set(lang === 'de' ? de : en);
};
