import Link from "next/link";

export default function AlgemeneVoorwaarden() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 md:px-8 font-open-sans">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-montserrat">
                    Algemene Voorwaarden
                </h1>
                <p className="text-slate-500 mb-12 italic">
                    Laatst gewijzigd: Januari 2026
                </p>

                <div className="space-y-12 text-slate-700 leading-relaxed">

                    {/* Artikel 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Artikel 1. Definities</h2>
                        <ul className="space-y-4 list-disc pl-5">
                            <li>
                                <strong>Opdrachtnemer:</strong> E.J.H. Wildeman, handelend onder de naam Wildeman Stucadoors, gevestigd te Elburg (Vrijheid 1), ingeschreven bij de KvK onder nummer 8144125.
                            </li>
                            <li>
                                <strong>Opdrachtgever:</strong> De natuurlijke persoon of rechtspersoon die aan opdrachtnemer opdracht heeft gegeven tot het verrichten van werkzaamheden.
                            </li>
                            <li>
                                <strong>Werkzaamheden:</strong> Alle werkzaamheden waartoe opdracht is gegeven, waaronder begrepen maar niet beperkt tot stucwerk (binnen en buiten), sierpleister, raapwerk en gevelisolatie.
                            </li>
                        </ul>
                    </section>

                    {/* Artikel 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Artikel 2. Toepasselijkheid</h2>
                        <ul className="space-y-4 list-disc pl-5">
                            <li>
                                Deze voorwaarden zijn van toepassing op alle offertes, aanbiedingen en overeenkomsten tussen opdrachtnemer en opdrachtgever.
                            </li>
                            <li>
                                Afwijkingen van deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk schriftelijk zijn overeengekomen.
                            </li>
                        </ul>
                    </section>

                    {/* Artikel 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Artikel 3. Offertes en Aanbiedingen</h2>
                        <ul className="space-y-4 list-disc pl-5">
                            <li>
                                Alle offertes zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld.
                            </li>
                            <li>
                                De prijzen in de offertes zijn inclusief BTW voor particulieren, tenzij anders vermeld.
                            </li>
                            <li>
                                Een offerte vervalt indien de prijzen van materialen of lonen tussentijds substantieel stijgen.
                            </li>
                        </ul>
                    </section>

                    {/* Artikel 4 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Artikel 4. Uitvoering van de Overeenkomst</h2>
                        <div className="space-y-4">
                            <p>
                                Opdrachtnemer zal de overeenkomst naar beste inzicht en vermogen uitvoeren, overeenkomstig de eisen van goed vakmanschap.
                            </p>
                            <p>
                                Opdrachtgever draagt er zorg voor dat alle gegevens en faciliteiten (zoals water, elektriciteit en een vrije werkruimte), waarvan opdrachtnemer aangeeft dat deze noodzakelijk zijn, tijdig beschikbaar zijn.
                            </p>
                            <p>
                                Indien de werkruimte niet vrij is van obstakels (meubels, radiatoren, etc.), heeft opdrachtnemer het recht de werkzaamheden op te schorten of extra kosten in rekening te brengen.
                            </p>
                        </div>
                    </section>

                    {/* Artikel 5 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Artikel 5. Meerwerk</h2>
                        <ul className="space-y-4 list-disc pl-5">
                            <li>
                                Indien tijdens de uitvoering blijkt dat het noodzakelijk is om de werkzaamheden te wijzigen of aan te vullen (bijvoorbeeld door onvoorziene slechte ondergrond), wordt dit als meerwerk beschouwd.
                            </li>
                            <li>
                                Meerwerk wordt in overleg en op basis van nacalculatie gefactureerd.
                            </li>
                        </ul>
                    </section>

                    {/* Artikel 6 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Artikel 6. Droging en Nabehandeling</h2>
                        <div className="space-y-4">
                            <p>
                                Opdrachtnemer wijst opdrachtgever op de noodzaak van goede ventilatie na het aanbrengen van stucwerk. De verantwoordelijkheid voor het droogproces ligt bij de opdrachtgever.
                            </p>
                            <p>
                                Schade ontstaan door te snelle droging (bouwdehumidifiers) of te trage droging (gebrek aan ventilatie) komt voor rekening van opdrachtgever.
                            </p>
                        </div>
                    </section>

                    {/* Artikel 7 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Artikel 7. Garantie en Aansprakelijkheid</h2>
                        <ul className="space-y-4 list-disc pl-5">
                            <li>
                                Opdrachtnemer staat in voor de deugdelijkheid van het geleverde werk (NOA-richtlijnen).
                            </li>
                            <li>
                                Er wordt geen garantie gegeven op scheurvorming die ontstaat door werking van de ondergrond of constructie van de woning (zetting, krimp/uitzetting van verschillende materialen).
                            </li>
                            <li>
                                Bij buitenstucwerk is de garantie niet van toepassing op schade door extreme weersinvloeden of mechanische beschadigingen van buitenaf.
                            </li>
                        </ul>
                    </section>

                    {/* Artikel 8 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Artikel 8. Betaling</h2>
                        <ul className="space-y-4 list-disc pl-5">
                            <li>
                                Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij schriftelijk anders overeengekomen.
                            </li>
                            <li>
                                Bij projecten met een looptijd langer dan 2 weken of een waarde boven €2.500,- kan betaling in termijnen worden verlangd.
                            </li>
                        </ul>
                    </section>

                    {/* Artikel 9 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Artikel 9. Geschillen</h2>
                        <p>
                            Op alle rechtsbetrekkingen waarbij opdrachtnemer partij is, is uitsluitend het Nederlands recht van toepassing.
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
