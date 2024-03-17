//!!!!!!! Dieses Skript wurde mit Open AIs ChatGPT kreiert !!!!!!!

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    document.body.appendChild(popup);

    let longerTexts = {
        lehrlinge: `
        <br>
        <br>
        In einem festlichen Ambiente, begleitet von dem verführerischen Duft frisch gebackener Köstlichkeiten, 
        versammelten sich die talentierten Bäckerlehrlinge aus der gesamten Region zur diesjährigen Bäcker-Lehrlingsmeisterschaft. 
        Unter den strahlenden Augen ihrer Ausbilder und Kollegen präsentierten unsere beiden Lehrlinge, Anna und Max, ihre herausragenden 
        Fähigkeiten und ihr Engagement für das Handwerk.
        <br>
        <br>
        <h4>Der Wettbewerb</h4>
        Die Bäcker-Lehrlingsmeisterschaft ist ein jährlicher Höhepunkt für junge Bäckerinnen und Bäcker. Hier haben sie die Gelegenheit, ihr Können 
        unter Beweis zu stellen und sich mit Gleichgesinnten zu messen. Die Teilnehmerinnen und Teilnehmer müssen verschiedene Aufgaben bewältigen, 
        darunter:
        <br>
        <br>
        <b>Kreatives Backen:</b><br>Die Lehrlinge zaubern aus einfachen Zutaten wahre Kunstwerke. Ob kunstvolle Torten, knusprige Baguettes oder zarte Croissants – hier sind der Fantasie keine Grenzen gesetzt.
        <br>
        <br>
        <b>Präzision und Schnelligkeit:</b><br>In einem spannenden Zeitwettbewerb müssen die Lehrlinge Brote formen, Teige kneten und Backwaren dekorieren. Jeder Handgriff muss sitzen, denn die Uhr tickt unerbittlich.
        <br>
        <br>
        <b>Theorieprüfung:</b><br>Neben praktischen Fähigkeiten werden auch das Fachwissen und die Kenntnisse der Lehrlinge getestet. Fragen zur Teigzusammensetzung, Backtemperaturen und Hygienevorschriften stehen auf dem Prüfstand.
        <br>
        <br>
        <h4>Unsere stolzen Lehrlinge</h4>
        Anna und Max haben sich monatelang auf diesen Tag vorbereitet. Ihre Leidenschaft für das Bäckerhandwerk spiegelt sich in jedem Brotlaib, jeder Torte und jedem Plunderstück wider. 
        Mit zitternden Händen präsentierten sie ihre Kreationen der strengen Jury, die aus erfahrenen Bäckermeistern und -meisterinnen bestand.
        Und dann kam der große Moment: Die Siegerehrung! Unsere beiden Lehrlinge strahlten, als sie ihre Auszeichnungen entgegennahmen. 
        Anna wurde für ihre filigrane Tortendekoration geehrt, während Max mit seinen perfekt geformten Baguettes überzeugte.
        <br>
        <br>
        <h4>Ein Blick in die Zukunft</h4>
        Die Bäcker-Lehrlingsmeisterschaft ist nicht nur ein Wettbewerb, sondern auch eine Plattform für junge Talente. Viele der Teilnehmerinnen und Teilnehmer werden später Bäckermeisterinnen und -meister. 
        Sie werden ihre eigenen Bäckereien eröffnen, traditionelle Rezepte weitergeben und die Liebe zum Handwerk weitertragen.
        Wir sind stolz auf unsere Lehrlinge und freuen uns darauf, ihre Karrieren zu begleiten.
        Die Bäcker-Lehrlingsmeisterschaft 2024 wird uns noch lange in Erinnerung bleiben – als ein Tag, an dem unsere Bäckerfamilie enger zusammengerückt ist und die Leidenschaft für gutes Brot und süße Versuchungen gefeiert wurde.
        <br>
        <br>
        Herzlichen Glückwunsch, Anna und Max! 🥐🍰🎉`,
        neueroeffnung: `
        <br>
        <br>
        Wir sind überglücklich, Ihnen mitteilen zu können, dass unsere Bäckerei-Familie bald Zuwachs bekommt! Eine neue Filiale wird in Wien ihre Türen öffnen, und wir können es kaum erwarten, Sie dort zu begrüßen.
        <br>
        <br>
        <h4>Ein Ort zum Genießen</h4>
        Unsere neue Filiale wird nicht nur ein weiterer Backshop sein. Nein, sie wird ein Ort des Genusses, der Gemeinschaft und der Freude. Hier werden Sie nicht nur frische Backwaren finden, sondern auch eine gemütliche Atmosphäre, in der Sie sich wie zu Hause fühlen können.
        <br>
        <br>
        <h4>Was erwartet Sie?</h4>
        Frische Backwaren: Unsere Bäckermeister werden täglich köstliche Brote, Brötchen, Kuchen und Gebäck frisch aus dem Ofen zaubern. Die duftenden Aromen werden Sie verführen!
        Kaffee und mehr: Begleiten Sie Ihr Gebäck mit einer Tasse aromatischem Kaffee oder einem erfrischenden Getränk. Unser Café-Bereich lädt zum Verweilen ein.
        Herzliche Gastfreundschaft: Unser freundliches Team freut sich darauf, Sie zu bedienen. Wir möchten, dass Sie sich bei uns wohl und willkommen fühlen.
        <br>
        <br>
        <h4>Wo finden Sie uns?</h4>
        Die neue Filiale wird sich im Herzen von Wien befinden. Genauere Details zur Adresse und den Öffnungszeiten werden wir in Kürze bekanntgeben. Bleiben Sie gespannt!
        <br>
        <br>
        <h4>Gemeinsam feiern</h4>
        Die Eröffnung unserer neuen Filiale wird ein besonderes Ereignis sein. Wir planen, ein kleines Fest zu veranstalten, bei dem Sie unsere Backspezialitäten probieren können. Freuen Sie sich auf Musik, Lächeln und natürlich jede Menge leckeres Gebäck!
        <br>
        <br>
        Wir danken Ihnen für Ihre Treue und freuen uns darauf, Sie bald in unserer neuen Filiale begrüßen zu dürfen. Bis dahin: Guten Appetit und auf bald! 🥐🎉`,
        brotsorten: `
        Entdecken Sie bald unsere neuen Getreidesorten und lassen Sie sich von ihrer Vielfalt und Aromen begeistern.
        <br>
        <br>
        <h4>Die Vielfalt der Aromen</h4>
        Unsere neuen Getreidesorten sind nicht nur eine Bereicherung für unser Sortiment, sondern auch für Ihren Gaumen. Hier sind einige der Highlights:
        <br>
        <br>
        <b>Sting:</b> Diese Sorte, gezüchtet von Nordsaat und Saaten-Union, besticht durch ihre aromatische Note und eignet sich hervorragend für Brote und Brötchen.
        <br>
        <br>
        <b>LG Caruso:</b> Limagrain hat diese Sorte entwickelt, die besonders für knusprige Baguettes und herzhafte Vollkornbrote geeignet ist.
        <br>
        <br>
        <b>Novalis:</b> Eine Kreation von Breun und Limagrain, die sich perfekt für süße Backwaren wie Kuchen und Plunder eignet.
        <br>
        <br>
        <b>Ruth:</b> Nordsaat und Saaten-Union haben mit dieser Sorte eine ideale Wahl für rustikale Roggenbrote geschaffen.
        <br>
        <br>
        <b>Gretchen:</b> Gezüchtet von Breun und Hauptsaaten, ist Gretchen eine vielseitige Sorte, die sowohl für Weißbrote als auch für Vollkornvarianten geeignet ist.
        <br>
        <br>
        <h4>Nachhaltigkeit und Qualität</h4>
        Die Züchtung neuer Getreidesorten ist nicht nur eine kulinarische Bereicherung, sondern auch ein Beitrag zur Nachhaltigkeit. Unsere Bäcker setzen auf regionale Rohstoffe und legen Wert auf den Erhalt traditioneller Sorten. 
        So können wir Ihnen nicht nur köstliche Backwaren bieten, sondern auch die Umwelt schonen. Probieren Sie selbst!
        Besuchen Sie unsere Filialen und entdecken Sie die neuen Getreidesorten. Ob knuspriges Baguette, saftiges Vollkornbrot oder süßer Kuchen – wir haben für jeden Geschmack etwas dabei. 
        Lassen Sie sich von den Aromen verführen und genießen Sie die Vielfalt!
        <br>
        <br>
        Wir freuen uns darauf, Sie bald in unserer Bäckerei begrüßen zu dürfen. Guten Appetit! 🌾🥖🍰`,
        "catering-tisch": `
        Die Backkunst ist nicht nur unser Name, sondern auch unser Programm. Wir lieben es, köstliche Backwaren zu zaubern und die Herzen unserer Kunden zu erobern.
        Doch unsere Backkunst endet nicht an der Ladentheke – sie geht noch weiter. Denn Catering gehört ebenfalls zu unserer Kunst.
        <br>
        <br>
        <h4>Catering mit Herz und Geschmack</h4>
        Unsere Bäckerei ist mehr als nur ein Ort, an dem Sie frische Brötchen und duftende Kuchen kaufen können. Wir möchten, dass Sie unsere Backkunst überall genießen können – sei es bei einer Hochzeit, einem Firmenevent oder einem gemütlichen Familienfest. 
        Deshalb bieten wir ein umfangreiches Catering-Angebot, das Ihre Veranstaltung zu einem unvergesslichen Erlebnis macht.
        <br>
        <br>
        <h4>Was erwartet Sie beim Backkunst-Catering?</h4>
        <b>Köstliche Vielfalt:</b> Unsere Bäckermeister kreieren für Sie eine Auswahl an herzhaften und süßen Köstlichkeiten. Von belegten Sandwiches über Fingerfood bis hin zu himmlischen Desserts – wir verwöhnen Ihre Gäste mit Backwaren, die alle Sinne verzaubern.
        <br>
        <br>
        <b>Professioneller Service:</b> Unser Catering-Team kümmert sich um alles – von der Lieferung bis zum Aufbau. Wir sorgen dafür, dass Ihre Gäste kulinarisch verwöhnt werden, während Sie sich entspannen und das Event genießen können.
        <br>
        <br>
        <b>Individuelle Beratung:</b> Jede Veranstaltung ist einzigartig. Deshalb besprechen wir gerne Ihre Wünsche und Vorstellungen. Ob rustikales Bauernfrühstück, elegantes Fingerfood oder opulente Torten – wir passen unser Catering genau an Ihre Bedürfnisse an.
        <br>
        <br>
        <h4>Unsere Referenzen sprechen für sich</h4>
        Unsere Backkunst hat bereits viele Menschen begeistert. Wir durften Hochzeiten, Firmenfeiern und private Feste mit unseren Backwaren bereichern. Unsere Kunden schätzen nicht nur den Geschmack, sondern auch die liebevolle Präsentation und den zuvorkommenden Service.
        <br>
        <br>
        Wir freuen uns darauf, Ihre Gäste zu verwöhnen und Ihre Veranstaltung zu einem kulinarischen Highlight zu machen. 🥐🍰🎉`,
    };

    cards.forEach((card) => {
        const img = card.querySelector("img");
        const cardTitle = img
            .getAttribute("alt")
            .toLowerCase()
            .replace(/\s/g, "-"); // Ersetze Leerzeichen durch Bindestriche
        img.addEventListener("click", function () {
            const clone = card.cloneNode(true);
            clone.classList.add("popup-content");
            // Ändern des Textes im Klon des Paragraphen basierend auf dem Karten-Titel
            const popupText = clone.querySelector(".card-text p");
            const additionalText = longerTexts[cardTitle] || ""; // Überprüfe, ob ein längerer Text für die Karte vorhanden ist
            popupText.innerHTML += additionalText; // Füge den entsprechenden längeren Text hinzu, dabei HTML-Tags berücksichtigen
            // popup.innerHTML = "";
            popup.appendChild(clone);
            popup.style.display = "block";
        });
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});