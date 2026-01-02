import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 md:px-8 font-open-sans">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-montserrat">
                    Privacyverklaring
                </h1>
                <p className="text-slate-500 mb-12 italic">
                    Laatst gewijzigd: Januari 2026
                </p>

                <div className="space-y-12 text-slate-700 leading-relaxed">

                    {/* Inleiding */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Inleiding</h2>
                        <p>
                            E.J.H. Wildeman (handelend als Wildeman Stukadoors) respecteert de privacy van bezoekers van de website en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. Verwerking van de persoonsgegevens gebeurt op een wijze die in overeenstemming is met de eisen die de Algemene Verordening Gegevensbescherming (AVG) stelt.
                        </p>
                    </section>

                    {/* 1. Bedrijfsgegevens */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">1. Bedrijfsgegevens</h2>
                        <p>De verwerkingsverantwoordelijke is:</p>
                        <address className="not-italic mt-2">
                            E.J.H. Wildeman<br />
                            Vrijheid 1<br />
                            8081 PH Elburg<br />
                            KvK: 8144125<br />
                            E-mail: <a href="mailto:Info@stukadoorsbedrijf-wildeman.nl" className="text-wildeman-blauw hover:underline">Info@stukadoorsbedrijf-wildeman.nl</a>
                        </address>
                    </section>

                    {/* 2. Welke gegevens verwerken wij? */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">2. Welke gegevens verwerken wij?</h2>
                        <p className="mb-4">
                            Wij verwerken uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt (bijvoorbeeld via de offerte-wizard, e-mail of telefoon). Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Voor- en achternaam</li>
                            <li>Adresgegevens (voor het opstellen van offertes en uitvoeren van werkzaamheden)</li>
                            <li>Telefoonnummer</li>
                            <li>E-mailadres</li>
                            <li>IP-adres (geanonimiseerd voor statistieken)</li>
                            <li>Overige persoonsgegevens die u actief verstrekt in correspondentie.</li>
                        </ul>
                    </section>

                    {/* 3. Met welk doel verwerken wij gegevens? */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">3. Met welk doel verwerken wij gegevens?</h2>
                        <p className="mb-4">Wildeman Stukadoors verwerkt uw gegevens voor de volgende doelen:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Het afhandelen van uw betaling.</li>
                            <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren.</li>
                            <li>Om goederen en diensten bij u af te leveren (het stucwerk).</li>
                        </ul>
                        <p>
                            Wildeman Stukadoors verwerkt ook persoonsgegevens als wij hier wettelijk toe verplicht zijn, zoals gegevens die wij nodig hebben voor onze belastingaangifte.
                        </p>
                    </section>

                    {/* 4. Hoe lang bewaren we gegevens? */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">4. Hoe lang bewaren we gegevens?</h2>
                        <p className="mb-4">Wij bewaren uw persoonsgegevens niet langer dan strikt nodig is.</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Offerteaanvragen zonder opdracht:</strong> Maximaal 1 jaar (voor eventuele vervolgvragen).</li>
                            <li><strong>Klantenadministratie & Facturen:</strong> 7 jaar. Dit is de wettelijke bewaartermijn van de Belastingdienst.</li>
                        </ul>
                    </section>

                    {/* 5. Delen van persoonsgegevens met derden */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">5. Delen van persoonsgegevens met derden</h2>
                        <p className="mb-4">
                            Wildeman Stukadoors verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
                        </p>
                        <p>
                            Met bedrijven die uw gegevens verwerken in onze opdracht (zoals onze boekhouder of softwareleverancier), sluiten wij een verwerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid.
                        </p>
                    </section>

                    {/* 6. Cookies */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">6. Cookies</h2>
                        <p>
                            Deze website gebruikt alleen technische en functionele cookies. En analytische cookies die geen inbreuk maken op uw privacy. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op uw computer, tablet of smartphone. De cookies die wij gebruiken zijn noodzakelijk voor de technische werking van de website en uw gebruiksgemak. U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat.
                        </p>
                    </section>

                    {/* 7. Gegevens inzien, aanpassen of verwijderen */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">7. Gegevens inzien, aanpassen of verwijderen</h2>
                        <p className="mb-4">
                            U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door Wildeman Stukadoors.
                        </p>
                        <p className="mb-4">
                            U kunt een verzoek tot inzage, correctie of verwijdering sturen naar <a href="mailto:Info@stukadoorsbedrijf-wildeman.nl" className="text-wildeman-blauw hover:underline">Info@stukadoorsbedrijf-wildeman.nl</a>. Om er zeker van te zijn dat het verzoek tot inzage door u is gedaan, kunnen wij u vragen om een kopie van uw identiteitsbewijs mee te sturen (maak hierbij uw BSN zwart ter bescherming van uw privacy). We reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.
                        </p>
                    </section>

                    {/* 8. Beveiliging */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">8. Beveiliging</h2>
                        <p>
                            Wij nemen de bescherming van uw gegevens serieus en nemen passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. De website maakt gebruik van een betrouwbaar SSL Certificaat om te borgen dat uw persoonsgegevens niet in verkeerde handen vallen.
                        </p>
                    </section>

                </div>

                <div className="mt-20 pt-10 border-t border-slate-200">
                    <Link href="/" className="text-wildeman-blauw font-bold hover:underline">
                        &larr; Terug naar de website
                    </Link>
                </div>
            </div>
        </main>
    );
}
