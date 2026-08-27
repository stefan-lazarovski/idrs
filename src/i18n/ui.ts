// src/i18n/ui.ts
export const languages = {
    mk: "Македонски",
    en: "English",
};

export const defaultLang = "mk";

/* ---- UI strings (headings, labels, paragraphs) ---- */
export const ui = {
    mk: {
        // Meta
        "meta.title": "IDRS Конференција · Меѓународна конференција за решавање спорови",
        "meta.description":
            "Два дена на практика, политики и дијалог за трговска арбитража и медијација во Скопје, 12–13 ноември 2026.",

        // Navigation
        "nav.about": "За нас",
        "nav.agenda": "Агенда",
        "nav.speakers": "Говорници",
        "nav.contact": "Контакт",

        // Hero
        "hero.badge1": "Арбитража",
        "hero.badge2": "Медијација",
        "hero.badge3": "Скопје 2026",
        "hero.title": "Меѓународна конференција за решавање спорови",
        "hero.lead":
            "Два дена на практика, политики и дијалог за трговска арбитража и медијација — во организација на Институтот за демократски развој и соработка, Скопје.",
        "hero.date": "12–13 ноември 2026",
        "hero.venue": "Центар Порта Македонија, Скопје",

        // Countdown
        "countdown.days": "Денови",
        "countdown.hours": "Часови",
        "countdown.minutes": "Минути",
        "countdown.seconds": "Секунди",

        // About
        "about.supertitle": "За конференцијата",
        "about.title": "Форум за решавање спорови и градење доверба",
        "about.p1":
            "IDRS Конференцијата собира арбитри, медијатори, судии, корпоративни правници и академици од Југоисточна Европа и пошироко, за да разгледаат како алтернативното решавање спорови може да им служи на бизнисите, институциите и граѓаните.",
        "about.p2":
            "Преку пленарни предавања, панели и практични работилници, учесниците го истражуваат развојот на рамките на трговската арбитража и растечката улога на медијацијата во прекуграничните спорови и споровите во јавниот сектор.",
        "about.stat1Label": "Дена програма",
        "about.stat2Label": "Говорници и панелисти",
        "about.stat3Label": "Претставени земји",

        // Agenda
        "agenda.supertitle": "Програма",
        "agenda.title": "Дводневна агенда",
        "agenda.subtitle":
            "Сесиите се одржуваат од 09:00 до 17:30 во двата дена во Центарот Порта Македонија.",

        // Speakers
        "speakers.supertitle": "Говорници",
        "speakers.title": "Гласови од струката",

        // Contact
        "contact.supertitle": "Контакт",
        "contact.title": "Стапете во контакт",
        "contact.venueLabel": "Локација",
        "contact.venueName": "Конференциски центар Порта Македонија",
        "contact.venueStreet": "Булевар ВМРО, 1000 Скопје",
        "contact.venueCountry": "Северна Македонија",
        "contact.phoneLabel": "Телефон",
        "contact.emailLabel": "Е-пошта",
        "contact.organizerLabel": "Организатор",
        "contact.organizer": "Институт за демократски развој и соработка · Скопје",

        // Footer
        "footer.tagline": "IDRS · Скопје · Меѓународна конференција за решавање спорови",
    },
    en: {
        // Meta
        "meta.title": "IDRS Conference · International Conference on Dispute Resolution",
        "meta.description":
            "Two days of practice, policy and dialogue on commercial arbitration and mediation in Skopje, 12–13 November 2026.",

        // Navigation
        "nav.about": "About",
        "nav.agenda": "Agenda",
        "nav.speakers": "Speakers",
        "nav.contact": "Contact",

        // Hero
        "hero.badge1": "Arbitration",
        "hero.badge2": "Mediation",
        "hero.badge3": "Skopje 2026",
        "hero.title": "International Conference on Dispute Resolution",
        "hero.lead":
            "Two days of practice, policy and dialogue on commercial arbitration and mediation — convened by the Institute for Democratic Development and Cooperation, Skopje.",
        "hero.date": "12–13 November 2026",
        "hero.venue": "Porta Macedonia Centre, Skopje",

        // Countdown
        "countdown.days": "Days",
        "countdown.hours": "Hours",
        "countdown.minutes": "Minutes",
        "countdown.seconds": "Seconds",

        // About
        "about.supertitle": "About the conference",
        "about.title": "A forum for resolving disputes and building trust",
        "about.p1":
            "The IDRS Conference brings together arbitrators, mediators, judges, in-house counsel and academics from across Southeast Europe and beyond to examine how alternative dispute resolution can serve businesses, institutions and citizens.",
        "about.p2":
            "Across keynotes, panels and practical workshops, participants explore the evolving frameworks of commercial arbitration and the growing role of mediation in cross-border and public-sector disputes.",
        "about.stat1Label": "Days of program",
        "about.stat2Label": "Speakers & panelists",
        "about.stat3Label": "Countries represented",

        // Agenda
        "agenda.supertitle": "Program",
        "agenda.title": "Two-day agenda",
        "agenda.subtitle": "Sessions run 09:00–17:30 both days at the Porta Macedonia Centre.",

        // Speakers
        "speakers.supertitle": "Speakers",
        "speakers.title": "Voices from the field",

        // Contact
        "contact.supertitle": "Contact",
        "contact.title": "Get in touch",
        "contact.venueLabel": "Venue",
        "contact.venueName": "Porta Macedonia Conference Centre",
        "contact.venueStreet": "Bulevar VMRO, 1000 Skopje",
        "contact.venueCountry": "North Macedonia",
        "contact.phoneLabel": "Phone",
        "contact.emailLabel": "Email",
        "contact.organizerLabel": "Organizer",
        "contact.organizer": "Institute for Democratic Development and Cooperation · Skopje",

        // Footer
        "footer.tagline": "IDRS · Skopje · International Conference on Dispute Resolution",
    },
} as const;

/* ---- Structured content (PLACEHOLDER — swap in your real data) ---- */
export const agenda = {
    mk: [
        {
            label: "Ден 1",
            theme: "12 ноември · Арбитража",
            sessions: [
                { time: "09:00", title: "Отворање и пленарно предавање", desc: "Деталите за сесијата следуваат." },
                { time: "10:30", title: "Панел дискусија", desc: "Деталите за сесијата следуваат." },
                { time: "13:30", title: "Работилница", desc: "Деталите за сесијата следуваат." },
                { time: "15:30", title: "Панел дискусија", desc: "Деталите за сесијата следуваат." },
            ],
        },
        {
            label: "Ден 2",
            theme: "13 ноември · Медијација",
            sessions: [
                { time: "09:00", title: "Отворање и пленарно предавање", desc: "Деталите за сесијата следуваат." },
                { time: "10:30", title: "Панел дискусија", desc: "Деталите за сесијата следуваат." },
                { time: "13:30", title: "Работилница", desc: "Деталите за сесијата следуваат." },
            ],
        },
    ],
    en: [
        {
            label: "Day 1",
            theme: "12 November · Arbitration",
            sessions: [
                { time: "09:00", title: "Opening & keynote", desc: "Session details to follow." },
                { time: "10:30", title: "Panel discussion", desc: "Session details to follow." },
                { time: "13:30", title: "Workshop", desc: "Session details to follow." },
                { time: "15:30", title: "Panel discussion", desc: "Session details to follow." },
            ],
        },
        {
            label: "Day 2",
            theme: "13 November · Mediation",
            sessions: [
                { time: "09:00", title: "Opening & keynote", desc: "Session details to follow." },
                { time: "10:30", title: "Panel discussion", desc: "Session details to follow." },
                { time: "13:30", title: "Workshop", desc: "Session details to follow." },
            ],
        },
    ],
};

export const speakers = {
    mk: [
        { name: "Д-р Елена Петровска", role: "Арбитер · ICC", bio: "Кратка биографија на говорникот.", image: "https://placehold.co/300x400" },
        { name: "Марко Анастасов", role: "Акредитиран медијатор", bio: "Кратка биографија на говорникот.", image: "https://placehold.co/300x400" },
        { name: "Проф. Ана Јовановиќ", role: "Правен факултет, Скопје", bio: "Кратка биографија на говорникот.", image: "https://placehold.co/300x400" },
        { name: "Џејмс Витфилд, KC", role: "Баристер · Лондон", bio: "Кратка биографија на говорникот.", image: "https://placehold.co/300x400" },
    ],
    en: [
        { name: "Dr. Elena Petrovska", role: "Arbitrator · ICC Court", bio: "Short speaker biography.", image: "https://placehold.co/300x400" },
        { name: "Marko Anastasov", role: "Accredited Mediator", bio: "Short speaker biography.", image: "https://placehold.co/300x400" },
        { name: "Prof. Ana Jovanović", role: "Faculty of Law, Skopje", bio: "Short speaker biography.", image: "https://placehold.co/300x400" },
        { name: "James Whitfield KC", role: "Barrister · London", bio: "Short speaker biography.", image: "https://placehold.co/300x400" },
    ],
};