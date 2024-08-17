"use client";

import React, { useState } from "react";
import backgroundImage from "@/assets/privacy-policy/zandvoort.jpg";
import PageBanner from "@/shared/pageBanner/PageBanner";
import Tabs from "@/components/tabs/Tabs";

const PrivacyPolicy = () => {
  const pageTitle = "Privacy Policy";
  const overlayColor = "bg-black/50";
  const [activeTabs, setActiveTabs] = useState("uk");
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const tabs = [
    { key: "uk", label: "UK, APAC & Rest of World (ex. EU, USA & Canada)" },
    { key: "eu", label: "EU (Deutsche)" },
    // Add more tabs as needed
  ];

  return (
    <>
      <PageBanner
        image={backgroundImage}
        title={pageTitle}
        overlayColor={overlayColor}
        imageUnderline={""}
        button={false}
      >
        We ask that you read this website's privacy policy carefully as it
        contains important information on who we are, how and why we collect,
        store, use and share personal information, your rights in relation to
        your personal information and on how to contact us and supervisory
        authorities in the event you have a complaint.
      </PageBanner>

      <Tabs
        tabs={tabs}
        activeTabs={activeTabs}
        setActiveTabs={setActiveTabs}
        setActiveAccordion={setActiveAccordion}
        centerClass={true} // Set to true or false based on your preference
      >
        {/* Tab content */}
        {activeTabs === "uk" && (
          <>
            <section className="max-w-[672px] mx-auto px-6">
              <div className="page-content-wrap">
                <p className="leading-7 my-4">
                  Collecting Cars respects your privacy and is committed to
                  protecting your personal information.
                </p>
                <p className="leading-7 my-4">
                  In this privacy policy we have compiled essential information
                  about our handling of your personal information and your
                  corresponding rights.
                </p>
                <p className="leading-7 my-4">
                  This privacy policy applies to your use of our website and all
                  Collecting Cars applications, services, mailing lists,
                  products and tools (collectively the “Services”), regardless
                  of how you access or use these Services, including access via
                  mobile devices and apps.
                </p>
                <p className="leading-7 my-4">
                  We ask that you read this privacy policy carefully as it
                  contains important information on who we are, how and why we
                  collect, store, use and share personal information, your
                  rights in relation to your personal information and on how to
                  contact us and supervisory authorities in the event you have a
                  complaint.
                </p>
                <h3 className="font-bold my-4 text-base">1. WHO WE ARE</h3>
                <p className="leading-7 my-4">
                  Collecting Cars is made up of different trading entities. The
                  Services are operated by The Collecting Group Ltd, together
                  with its subsidiaries. “Collecting Cars”, “we”, “us” or “our”.
                  This privacy policy is issued on behalf of Collecting Cars.
                </p>
                <p className="leading-7 my-4">
                  We collect, use and are responsible for certain personal
                  information about you. Depending on which region you are
                  located, one of the Collecting Cars entities is responsible
                  for the collection and processing of your personal information
                  in connection with the provision of our Services, as follows:
                </p>
                <ul>
                  <li className="leading-7 my-4 ps-4">
                    <strong>
                      United Kingdom and Rest of World (excluding APAC,
                      USA/Canada and EU):
                    </strong>
                    Collecting Cars UK Ltd, registered in England and Wales
                    number 12902375 at: C/O Bishop Fleming, 10 Temple Back,
                    Bristol, United Kingdom, BS1 6FL.
                  </li>
                  <li className="leading-7 my-4 ps-4">
                    <strong>APAC:</strong> Collecting Cars APAC Ltd registered
                    in England and Wales number 13053019 at: C/O Bishop Fleming,
                    10 Temple Back, Bristol, United Kingdom, BS1 6FL.
                  </li>
                </ul>
                <p className="leading-7 my-4">
                  If you are based in Australia, we are also regulated under the
                  Australian Privacy Act 1988 (Cth) (“Privacy Act”) and we are
                  committed to keeping your personal information safe and
                  managing it in accordance with the Australian Privacy
                  Principles under the Privacy Act and other applicable privacy
                  laws.
                </p>
                <h3 className="font-bold my-4 text-base">
                  2. OUR COLLECTION AND USE OF YOUR PERSONAL INFORMATION
                </h3>
                <p className="leading-7 my-4">
                  We collect personal information from you either directly when
                  you use our Services, such as when you sign up to our mailing
                  list, create an account in order to sell a vehicle or
                  automobilia or bid on a vehicle or automobilia, give us
                  feedback, enter a competition, promotion or survey, register
                  or attend one of our events, or indirectly, such as your
                  browsing activity while using our Services (see ‘Cookies’
                  below).
                </p>
                <p className="leading-7 my-4">
                  The personal information we collect about you depends on the
                  activities carried out through our Services. Such information
                  includes:
                </p>
                <p className="leading-7 my-4">
                  <strong>Identity Data:</strong> includes first name, last
                  name, username or similar identifier, title, date of birth and
                  gender. It also includes images of your face and appearance
                  when appearing on video footage or photograph when you attend
                  any of our events.
                </p>
                <p className="leading-7 my-4">
                  <strong>Contact Data:</strong> includes billing address,
                  delivery address, email address and telephone numbers.
                </p>
                <p className="leading-7 my-4">
                  <strong>Financial Data:</strong> includes bank account and
                  payment card details.
                </p>
                <p className="leading-7 my-4">
                  <strong>Transaction Data:</strong> includes details about
                  payments to and from you and other details of services you
                  have purchased from us.
                </p>
                <p className="leading-7 my-4">
                  <strong>Technical Data:</strong> includes internet protocol
                  (IP) address, your login data, browser type and version, time
                  zone setting and location, browser plug-in types and versions,
                  operating system and platform, and other technology on the
                  devices you use to access our Services.
                </p>
                <p className="leading-7 my-4">
                  <strong>Profile Data:</strong> includes your username and
                  password, unique account reference number, bids, offers and
                  purchases made by you, your search preferences, feedback,
                  survey responses, and other correspondence.
                </p>
                <p className="leading-7 my-4">
                  <strong>Usage Data:</strong> includes information about how
                  you use our Services.
                </p>
                <p className="leading-7 my-4">
                  <strong>Marketing and Communications Data:</strong> includes
                  correspondence with us and your preferences in receiving
                  marketing from us and our third parties and your communication
                  preferences.
                </p>
                <p className="leading-7 my-4">
                  In accordance with data protection laws, when we use your
                  personal information, we are required to have a legal basis
                  for doing so. There are various different legal bases upon
                  which we may rely, depending on what personal information we
                  process and why. The legal bases we may rely on include:
                </p>
                <h3 className="font-bold my-4 text-base">
                  3. OUR LEGAL BASIS FOR PROCESSING YOUR PERSONAL INFORMATION
                </h3>
                <p className="leading-7 my-4">
                  In accordance with data protection laws, when we use your
                  personal information, we are required to have a legal basis
                  for doing so. There are various different legal bases upon
                  which we may rely, depending on what personal information we
                  process and why. The legal bases we may rely on include:
                </p>
                <ul>
                  <li className="leading-7 my-4 ps-4">
                    <strong>Consent:</strong>
                    where you have given us clear consent for us to process your
                    personal information for a specific purpose.
                  </li>
                  <li className="leading-7 my-4 ps-4">
                    <strong>Contract:</strong> where our use of your personal
                    information is necessary for a contract we have with you, or
                    because you have asked us to take specific steps before
                    entering into a contract.
                  </li>
                  <li className="leading-7 my-4 ps-4">
                    <strong>Legal obligation:</strong> where our use of your
                    personal information is necessary for us to comply with the
                    law (not including contractual obligations).
                  </li>
                  <li className="leading-7 my-4 ps-4">
                    <strong>Legitimate interests:</strong> where our use of your
                    personal information is necessary for our legitimate
                    interests or the legitimate interests of a third party
                    (unless there is a good reason to protect your personal
                    information which overrides our legitimate interests).
                  </li>
                </ul>
                <h3 className="font-bold my-4 text-base">
                  4. FURTHER INFORMATION: THE PERSONAL INFORMATION WE COLLECT,
                  WHEN AND HOW WE USE IT
                </h3>
              </div>
            </section>
            <div className="overflow-x-auto px-4">
              <div className="container">
                <table className="min-w-full max-w-[1343px] mx-auto border-collapse border">
                  <tbody>
                    <tr>
                      <th className="border border-slate-300 p-5">
                        <div>
                          <p>
                            <strong>Zweck/Tätigkeit</strong>
                          </p>
                        </div>
                      </th>
                      <th className="border border-slate-300 p-5">
                        <div>
                          <p>
                            <strong>Art der Daten</strong>
                          </p>
                        </div>
                      </th>
                      <th className="border border-slate-300 p-5">
                        <div>
                          <p>
                            <strong>
                              Rechtmäßige Grundlage für die Verarbeitung
                            </strong>
                          </p>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Um Sie als neuen Kunden oder Nutzer zu registrieren
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Identität</p>
                        </div>
                        <div>
                          <p>(b) Kontakt</p>
                        </div>
                        <div>
                          <p>(c) Profil</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>Erfüllung eines Vertrags mit Ihnen</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Zur Bereitstellung von Dienstleistungen für Sie,
                            einschließlich:
                          </p>
                        </div>
                        <div>
                          <p>
                            (a) Anbieten Ihres Fahrzeugs oder Automobils zum
                            Verkauf
                          </p>
                        </div>
                        <div>
                          <p>
                            (b) Verwaltung von Zahlungen, Gebühren und Abgaben
                          </p>
                        </div>
                        <div>
                          <p>
                            (c) Einziehung und Beitreibung der uns geschuldeten
                            Gelder
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Identität</p>
                        </div>
                        <div>
                          <p>(b) Kontakt</p>
                        </div>
                        <div>
                          <p>(c) Kontodaten</p>
                        </div>
                        <div>
                          <p>(d) Transaktion</p>
                        </div>
                        <div>
                          <p>(e) Marketing und Kommunikation</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Erfüllung eines Vertrags mit Ihnen</p>
                        </div>
                        <div>
                          <p>
                            (b) Erforderlich für unsere berechtigten Interessen
                            (um uns geschuldete Forderungen einzutreiben)
                          </p>
                        </div>
                        <div>
                          <p>
                            (c) Erforderlich für die berechtigten Interessen
                            anderer (Betrugsverhinderung)
                          </p>
                        </div>
                        <div>
                          <p>(d) Erhalt Ihrer Einwilligung</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Unsere Beziehung zu Ihnen zu verwalten, was
                            Folgendes beinhaltet:
                          </p>
                        </div>
                        <div>
                          <p>
                            (a) Benachrichtigung über Änderungen unserer
                            Geschäftsbedingungen oder Dienstleistungen{" "}
                          </p>
                        </div>
                        <div>
                          <p>
                            (b) Aufforderung, eine Bewertung abzugeben oder an
                            einer Umfrage teilzunehmen
                          </p>
                        </div>
                        <div>
                          <p>
                            (c) Benachrichtigung über relevante Informationen in
                            Bezug auf Ihre Nutzung unserer Dienste, wie z. B.
                            Updates zu Ihren Verkäufen, Käufen und
                            Angebotsaktivitäten
                          </p>
                        </div>
                        <div>
                          <p>
                            (d) die Möglichkeit, Probleme mit den Diensten zu
                            melden oder Feedback zu hinterlassen
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Identität</p>
                        </div>
                        <div>
                          <p>(b) Kontakt</p>
                        </div>
                        <div>
                          <p>(c) Profil</p>
                        </div>
                        <div>
                          <p>(d) Marketing und Kommunikation</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Erfüllung eines Vertrags mit Ihnen</p>
                        </div>
                        <div>
                          <p>
                            (b) Erforderlich zur Erfüllung einer rechtlichen
                            Verpflichtung
                          </p>
                        </div>
                        <div>
                          <p>
                            (c) Notwendig für unsere berechtigten Interessen (um
                            unsere Aufzeichnungen auf dem neuesten Stand zu
                            halten und um zu untersuchen, wie Kunden unsere
                            Dienste nutzen)
                          </p>
                        </div>
                        <div>
                          <p>(d) Erhalt Ihrer Einwilligung</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Um Ihnen zu ermöglichen, an einer Verlosung oder
                            einem Wettbewerb teilzunehmen, eine Veranstaltung zu
                            besuchen, Marketinginformationen zu erhalten, eine
                            Umfrage auszufüllen, ein Feedback zu hinterlassen,
                            eine Anfrage zu stellen oder an einem Treue- oder
                            Partnerprogramm teilzunehmen
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Identität</p>
                        </div>
                        <div>
                          <p>(b) Kontakt</p>
                        </div>
                        <div>
                          <p>(c) Profil</p>
                        </div>
                        <div>
                          <p>(d) Verwendung</p>
                        </div>
                        <div>
                          <p>(e) Marketing und Kommunikation</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Erfüllung eines Vertrags mit Ihnen</p>
                        </div>
                        <div>
                          <p>
                            (b) Erforderlich für unsere berechtigten Interessen
                            (um zu untersuchen, wie Kunden unsere Dienste
                            nutzen, um sie weiterzuentwickeln und unser Geschäft
                            auszubauen)
                          </p>
                        </div>
                        <div>
                          <p>(c) Erhalt Ihrer Einwilligung </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Zur Verwaltung und zum Schutz unseres Unternehmens
                            und dieser Website (einschließlich Fehlersuche,
                            Datenanalyse, Tests, Systemwartung, Support,
                            Berichterstattung und Hosting von Daten)
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Identität</p>
                        </div>
                        <div>
                          <p>(b) Kontakt</p>
                        </div>
                        <div>
                          <p>(c) Technisch</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            (a) Erforderlich für unsere berechtigten Interessen
                            (für die Führung unserer Geschäfte, die
                            Bereitstellung von Verwaltungs- und IT-Diensten, die
                            Netzwerksicherheit, die Verhinderung von Betrug und
                            im Zusammenhang mit einer
                            Unternehmensumstrukturierung oder einer
                            Umstrukturierung der Gruppe)
                          </p>
                        </div>
                        <div>
                          <p>
                            (b) Erforderlich zur Erfüllung einer rechtlichen
                            Verpflichtung
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Um Ihnen relevante Serviceinhalte und Werbung zu
                            liefern und die Effektivität der Werbung zu messen
                            oder zu verstehen, die wir Ihnen anbieten. Dazu
                            gehört auch die Zusendung von Marketingmaterial von
                            den Unternehmen der The Collecting Group an Sie
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Identität</p>
                        </div>
                        <div>
                          <p>(b) Kontakt</p>
                        </div>
                        <div>
                          <p>(c) Profil</p>
                        </div>
                        <div>
                          <p>(d) Verwendung</p>
                        </div>
                        <div>
                          <p>(e) Marketing und Kommunikation</p>
                        </div>
                        <div>
                          <p>(f) Technisch</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            (a) Erforderlich für unsere berechtigten Interessen
                            (um zu untersuchen, wie Kunden unsere Dienste
                            nutzen, um sie weiterzuentwickeln, um unser Geschäft
                            auszubauen und um unsere Marketingstrategie zu
                            informieren)
                          </p>
                        </div>
                        <div>
                          <p>(b) Erhalt Ihrer Einwilligung </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Nutzung von Datenanalysen zur Verbesserung unserer
                            Website, unserer Dienstleistungen, unseres
                            Marketings, unserer Kundenbeziehungen und unserer
                            Erfahrungen
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Technisch</p>
                        </div>
                        <div>
                          <p>(b) Verwendung</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            (a) Erforderlich für unsere berechtigten Interessen
                            (zur Entwicklung unserer Dienstleistungen und zum
                            Ausbau unseres Geschäfts)
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Um Ihnen zu ermöglichen, Fahrzeuge zu suchen, zu
                            kaufen und den Käufer oder Verkäufer zu
                            kontaktieren, um die Transaktion abzuschließen
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Identität</p>
                        </div>
                        <div>
                          <p>(b) Kontakt</p>
                        </div>
                        <div>
                          <p>(c) Profil</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Erfüllung eines Vertrags mit unseren Kunden</p>
                        </div>
                        <div>
                          <p>
                            (b) Erforderlich für unser berechtigtes Interesse
                            (zur Unterstützung unseres Geschäftsmodells)
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Die Teilnahme an einer Veranstaltung zu filmen oder
                            zu fotografieren, um die Teilnahme zu fördern
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Bild</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Erforderlich für unsere berechtigten Interessen (zur
                            Entwicklung unserer Dienstleistungen und zum Ausbau
                            unseres Geschäfts)
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Um Ihnen die Teilnahme an Forschungsprojekten zu
                            ermöglichen, die zur Verbesserung unserer Website,
                            unserer Dienstleistungen, unseres Marketings,
                            unserer Kundenbeziehungen und unserer Erfahrungen
                            durchgeführt werden
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Identität</p>
                        </div>
                        <div>
                          <p>(b) Kontakt</p>
                        </div>
                        <div>
                          <p>(c) Profil</p>
                        </div>
                        <div>
                          <p>(d) Technisch</p>
                        </div>
                        <div>
                          <p>(e) Verwendung</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            (a) Erforderlich für unsere berechtigten Interessen
                            (um zu untersuchen, wie Kunden unsere
                            Dienstleistungen nutzen, um sie weiterzuentwickeln,
                            um unser Geschäft auszubauen und um unsere Strategie
                            zu auszurichten)
                          </p>
                        </div>
                        <div>
                          <p>(b) Erhalt Ihrer Einwilligung</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Um unsere Geschaeftsbeziehung mit Ihnen zu
                            verwalten, wenn Sie Waren kaufen
                          </p>
                        </div>
                        <div>
                          <p></p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Identität</p>
                        </div>
                        <div>
                          <p>(b) Kontakt</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            (a) Erforderlich für unsere berechtigten Interessen
                            (um zu untersuchen, wie Kunden unsere
                            Dienstleistungen nutzen, um sie weiterzuentwickeln,
                            um unser Geschäft auszubauen und um unsere Strategie
                            zu auszurichten)
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>
                            Um Ihre Identität zu authentifizieren und zu
                            verifizieren, einschließlich für Kontrollen zur
                            Verhinderung von Geldwäsche und Anfragen zur
                            Ausübung Ihrer Rechte gemäß dieser Richtlinie&nbsp;
                          </p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>a) Identität&nbsp;</p>
                        </div>
                        <div>
                          <p>(b) Kontakt&nbsp;</p>
                        </div>
                      </td>
                      <td className="border border-slate-300 p-5">
                        <div>
                          <p>(a) Erhalt Ihrer Einwilligung&nbsp;</p>
                        </div>
                        <div>
                          <p>
                            (b) Erforderlich zur Erfüllung einer rechtlichen
                            Verpflichtung&nbsp;
                          </p>
                        </div>
                        <div>
                          <p>(c) Erfüllung eines Vertrags mit Ihnen&nbsp;</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <section className="max-w-[672px] mx-auto px-6">
              <div className="page-content-wrap">
                <p className="leading-7 my-4">
                  Erforderlich für unsere berechtigten Interessen (zur
                  Entwicklung unserer Dienstleistungen und zum Ausbau unseres
                  Geschäfts)
                </p>
                <h3 className="font-bold my-4 text-base">
                  5. MIT WEM WIR IHRE PERSONENBEZOGENEN DATEN TEILEN
                </h3>
                <p className="leading-7 my-4">
                  Collecting Cars is made up of different trading entities. The
                  Services are operated by The Collecting Group Ltd, together
                  with its subsidiaries. “Collecting Cars”, “we”, “us” or “our”.
                  This privacy policy is issued on behalf of Collecting Cars.
                </p>
                <h3 className="font-bold my-4 text-base">
                  6. UNSERE DRITTDIENSTLEISTER
                </h3>
                <p className="leading-7 my-4">
                  Collecting Cars is made up of different trading entities. The
                  Services are operated by The Collecting Group Ltd, together
                  with its subsidiaries. “Collecting Cars”, “we”, “us” or “our”.
                  This privacy policy is issued on behalf of Collecting Cars.
                </p>
              </div>
            </section>
          </>
        )}
        {activeTabs === "eu" && (
          <>
            <section className="max-w-[672px] mx-auto px-6">
              <div className="page-content-wrap">
                <p className="leading-7 my-4">
                  Collecting Cars respects your privacy and is committed to
                  protecting your personal information.
                </p>
                <p className="leading-7 my-4">
                  In this privacy policy we have compiled essential information
                  about our handling of your personal information and your
                  corresponding rights.
                </p>
                <p className="leading-7 my-4">
                  This privacy policy applies to your use of our website and all
                  Collecting Cars applications, services, mailing lists,
                  products and tools (collectively the “Services”), regardless
                  of how you access or use these Services, including access via
                  mobile devices and apps.
                </p>
                <p className="leading-7 my-4">
                  We ask that you read this privacy policy carefully as it
                  contains important information on who we are, how and why we
                  collect, store, use and share personal information, your
                  rights in relation to your personal information and on how to
                  contact us and supervisory authorities in the event you have a
                  complaint.
                </p>
                <h3 className="font-bold my-4 text-base">1. WHO WE ARE</h3>
                <p className="leading-7 my-4">
                  Collecting Cars is made up of different trading entities. The
                  Services are operated by The Collecting Group Ltd, together
                  with its subsidiaries. “Collecting Cars”, “we”, “us” or “our”.
                  This privacy policy is issued on behalf of Collecting Cars.
                </p>
                <p className="leading-7 my-4">
                  We collect, use and are responsible for certain personal
                  information about you. Depending on which region you are
                  located, one of the Collecting Cars entities is responsible
                  for the collection and processing of your personal information
                  in connection with the provision of our Services, as follows:
                </p>
                <ul>
                  <li className="leading-7 my-4 ps-4">
                    <strong>
                      United Kingdom and Rest of World (excluding APAC,
                      USA/Canada and EU):
                    </strong>
                    Collecting Cars UK Ltd, registered in England and Wales
                    number 12902375 at: C/O Bishop Fleming, 10 Temple Back,
                    Bristol, United Kingdom, BS1 6FL.
                  </li>
                  <li className="leading-7 my-4 ps-4">
                    <strong>APAC:</strong> Collecting Cars APAC Ltd registered
                    in England and Wales number 13053019 at: C/O Bishop Fleming,
                    10 Temple Back, Bristol, United Kingdom, BS1 6FL.
                  </li>
                </ul>
                <p className="leading-7 my-4">
                  If you are based in Australia, we are also regulated under the
                  Australian Privacy Act 1988 (Cth) (“Privacy Act”) and we are
                  committed to keeping your personal information safe and
                  managing it in accordance with the Australian Privacy
                  Principles under the Privacy Act and other applicable privacy
                  laws.
                </p>
                <h3 className="font-bold my-4 text-base">
                  2. OUR COLLECTION AND USE OF YOUR PERSONAL INFORMATION
                </h3>
                <p className="leading-7 my-4">
                  We collect personal information from you either directly when
                  you use our Services, such as when you sign up to our mailing
                  list, create an account in order to sell a vehicle or
                  automobilia or bid on a vehicle or automobilia, give us
                  feedback, enter a competition, promotion or survey, register
                  or attend one of our events, or indirectly, such as your
                  browsing activity while using our Services (see ‘Cookies’
                  below).
                </p>
                <p className="leading-7 my-4">
                  The personal information we collect about you depends on the
                  activities carried out through our Services. Such information
                  includes:
                </p>
                <p className="leading-7 my-4">
                  <strong>Identity Data:</strong> includes first name, last
                  name, username or similar identifier, title, date of birth and
                  gender. It also includes images of your face and appearance
                  when appearing on video footage or photograph when you attend
                  any of our events.
                </p>
                <p className="leading-7 my-4">
                  <strong>Contact Data:</strong> includes billing address,
                  delivery address, email address and telephone numbers.
                </p>
                <p className="leading-7 my-4">
                  <strong>Financial Data:</strong> includes bank account and
                  payment card details.
                </p>
                <p className="leading-7 my-4">
                  <strong>Transaction Data:</strong> includes details about
                  payments to and from you and other details of services you
                  have purchased from us.
                </p>
                <p className="leading-7 my-4">
                  <strong>Technical Data:</strong> includes internet protocol
                  (IP) address, your login data, browser type and version, time
                  zone setting and location, browser plug-in types and versions,
                  operating system and platform, and other technology on the
                  devices you use to access our Services.
                </p>
                <p className="leading-7 my-4">
                  <strong>Profile Data:</strong> includes your username and
                  password, unique account reference number, bids, offers and
                  purchases made by you, your search preferences, feedback,
                  survey responses, and other correspondence.
                </p>
                <p className="leading-7 my-4">
                  <strong>Usage Data:</strong> includes information about how
                  you use our Services.
                </p>
                <p className="leading-7 my-4">
                  <strong>Marketing and Communications Data:</strong> includes
                  correspondence with us and your preferences in receiving
                  marketing from us and our third parties and your communication
                  preferences.
                </p>
                <p className="leading-7 my-4">
                  In accordance with data protection laws, when we use your
                  personal information, we are required to have a legal basis
                  for doing so. There are various different legal bases upon
                  which we may rely, depending on what personal information we
                  process and why. The legal bases we may rely on include:
                </p>
                <h3 className="font-bold my-4 text-base">
                  3. OUR LEGAL BASIS FOR PROCESSING YOUR PERSONAL INFORMATION
                </h3>
                <p className="leading-7 my-4">
                  In accordance with data protection laws, when we use your
                  personal information, we are required to have a legal basis
                  for doing so. There are various different legal bases upon
                  which we may rely, depending on what personal information we
                  process and why. The legal bases we may rely on include:
                </p>
                <ul>
                  <li className="leading-7 my-4 ps-4">
                    <strong>Consent:</strong>
                    where you have given us clear consent for us to process your
                    personal information for a specific purpose.
                  </li>
                  <li className="leading-7 my-4 ps-4">
                    <strong>Contract:</strong> where our use of your personal
                    information is necessary for a contract we have with you, or
                    because you have asked us to take specific steps before
                    entering into a contract.
                  </li>
                  <li className="leading-7 my-4 ps-4">
                    <strong>Legal obligation:</strong> where our use of your
                    personal information is necessary for us to comply with the
                    law (not including contractual obligations).
                  </li>
                  <li className="leading-7 my-4 ps-4">
                    <strong>Legitimate interests:</strong> where our use of your
                    personal information is necessary for our legitimate
                    interests or the legitimate interests of a third party
                    (unless there is a good reason to protect your personal
                    information which overrides our legitimate interests).
                  </li>
                </ul>
                <h3 className="font-bold my-4 text-base">
                  4. FURTHER INFORMATION: THE PERSONAL INFORMATION WE COLLECT,
                  WHEN AND HOW WE USE IT
                </h3>
              </div>
            </section>
            <div className="overflow-x-auto px-4">
              <table className="min-w-full max-w-[1343px] mx-auto border-collapse border">
                <tbody>
                  <tr>
                    <th className="border border-slate-300 p-5">
                      <div>
                        <p>
                          <strong>Zweck/Tätigkeit</strong>
                        </p>
                      </div>
                    </th>
                    <th className="border border-slate-300 p-5">
                      <div>
                        <p>
                          <strong>Art der Daten</strong>
                        </p>
                      </div>
                    </th>
                    <th className="border border-slate-300 p-5">
                      <div>
                        <p>
                          <strong>
                            Rechtmäßige Grundlage für die Verarbeitung
                          </strong>
                        </p>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Um Sie als neuen Kunden oder Nutzer zu registrieren
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Identität</p>
                      </div>
                      <div>
                        <p>(b) Kontakt</p>
                      </div>
                      <div>
                        <p>(c) Profil</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>Erfüllung eines Vertrags mit Ihnen</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Zur Bereitstellung von Dienstleistungen für Sie,
                          einschließlich:
                        </p>
                      </div>
                      <div>
                        <p>
                          (a) Anbieten Ihres Fahrzeugs oder Automobils zum
                          Verkauf
                        </p>
                      </div>
                      <div>
                        <p>
                          (b) Verwaltung von Zahlungen, Gebühren und Abgaben
                        </p>
                      </div>
                      <div>
                        <p>
                          (c) Einziehung und Beitreibung der uns geschuldeten
                          Gelder
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Identität</p>
                      </div>
                      <div>
                        <p>(b) Kontakt</p>
                      </div>
                      <div>
                        <p>(c) Kontodaten</p>
                      </div>
                      <div>
                        <p>(d) Transaktion</p>
                      </div>
                      <div>
                        <p>(e) Marketing und Kommunikation</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Erfüllung eines Vertrags mit Ihnen</p>
                      </div>
                      <div>
                        <p>
                          (b) Erforderlich für unsere berechtigten Interessen
                          (um uns geschuldete Forderungen einzutreiben)
                        </p>
                      </div>
                      <div>
                        <p>
                          (c) Erforderlich für die berechtigten Interessen
                          anderer (Betrugsverhinderung)
                        </p>
                      </div>
                      <div>
                        <p>(d) Erhalt Ihrer Einwilligung</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Unsere Beziehung zu Ihnen zu verwalten, was Folgendes
                          beinhaltet:
                        </p>
                      </div>
                      <div>
                        <p>
                          (a) Benachrichtigung über Änderungen unserer
                          Geschäftsbedingungen oder Dienstleistungen{" "}
                        </p>
                      </div>
                      <div>
                        <p>
                          (b) Aufforderung, eine Bewertung abzugeben oder an
                          einer Umfrage teilzunehmen
                        </p>
                      </div>
                      <div>
                        <p>
                          (c) Benachrichtigung über relevante Informationen in
                          Bezug auf Ihre Nutzung unserer Dienste, wie z. B.
                          Updates zu Ihren Verkäufen, Käufen und
                          Angebotsaktivitäten
                        </p>
                      </div>
                      <div>
                        <p>
                          (d) die Möglichkeit, Probleme mit den Diensten zu
                          melden oder Feedback zu hinterlassen
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Identität</p>
                      </div>
                      <div>
                        <p>(b) Kontakt</p>
                      </div>
                      <div>
                        <p>(c) Profil</p>
                      </div>
                      <div>
                        <p>(d) Marketing und Kommunikation</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Erfüllung eines Vertrags mit Ihnen</p>
                      </div>
                      <div>
                        <p>
                          (b) Erforderlich zur Erfüllung einer rechtlichen
                          Verpflichtung
                        </p>
                      </div>
                      <div>
                        <p>
                          (c) Notwendig für unsere berechtigten Interessen (um
                          unsere Aufzeichnungen auf dem neuesten Stand zu halten
                          und um zu untersuchen, wie Kunden unsere Dienste
                          nutzen)
                        </p>
                      </div>
                      <div>
                        <p>(d) Erhalt Ihrer Einwilligung</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Um Ihnen zu ermöglichen, an einer Verlosung oder einem
                          Wettbewerb teilzunehmen, eine Veranstaltung zu
                          besuchen, Marketinginformationen zu erhalten, eine
                          Umfrage auszufüllen, ein Feedback zu hinterlassen,
                          eine Anfrage zu stellen oder an einem Treue- oder
                          Partnerprogramm teilzunehmen
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Identität</p>
                      </div>
                      <div>
                        <p>(b) Kontakt</p>
                      </div>
                      <div>
                        <p>(c) Profil</p>
                      </div>
                      <div>
                        <p>(d) Verwendung</p>
                      </div>
                      <div>
                        <p>(e) Marketing und Kommunikation</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Erfüllung eines Vertrags mit Ihnen</p>
                      </div>
                      <div>
                        <p>
                          (b) Erforderlich für unsere berechtigten Interessen
                          (um zu untersuchen, wie Kunden unsere Dienste nutzen,
                          um sie weiterzuentwickeln und unser Geschäft
                          auszubauen)
                        </p>
                      </div>
                      <div>
                        <p>(c) Erhalt Ihrer Einwilligung </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Zur Verwaltung und zum Schutz unseres Unternehmens und
                          dieser Website (einschließlich Fehlersuche,
                          Datenanalyse, Tests, Systemwartung, Support,
                          Berichterstattung und Hosting von Daten)
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Identität</p>
                      </div>
                      <div>
                        <p>(b) Kontakt</p>
                      </div>
                      <div>
                        <p>(c) Technisch</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          (a) Erforderlich für unsere berechtigten Interessen
                          (für die Führung unserer Geschäfte, die Bereitstellung
                          von Verwaltungs- und IT-Diensten, die
                          Netzwerksicherheit, die Verhinderung von Betrug und im
                          Zusammenhang mit einer Unternehmensumstrukturierung
                          oder einer Umstrukturierung der Gruppe)
                        </p>
                      </div>
                      <div>
                        <p>
                          (b) Erforderlich zur Erfüllung einer rechtlichen
                          Verpflichtung
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Um Ihnen relevante Serviceinhalte und Werbung zu
                          liefern und die Effektivität der Werbung zu messen
                          oder zu verstehen, die wir Ihnen anbieten. Dazu gehört
                          auch die Zusendung von Marketingmaterial von den
                          Unternehmen der The Collecting Group an Sie
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Identität</p>
                      </div>
                      <div>
                        <p>(b) Kontakt</p>
                      </div>
                      <div>
                        <p>(c) Profil</p>
                      </div>
                      <div>
                        <p>(d) Verwendung</p>
                      </div>
                      <div>
                        <p>(e) Marketing und Kommunikation</p>
                      </div>
                      <div>
                        <p>(f) Technisch</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          (a) Erforderlich für unsere berechtigten Interessen
                          (um zu untersuchen, wie Kunden unsere Dienste nutzen,
                          um sie weiterzuentwickeln, um unser Geschäft
                          auszubauen und um unsere Marketingstrategie zu
                          informieren)
                        </p>
                      </div>
                      <div>
                        <p>(b) Erhalt Ihrer Einwilligung </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Nutzung von Datenanalysen zur Verbesserung unserer
                          Website, unserer Dienstleistungen, unseres Marketings,
                          unserer Kundenbeziehungen und unserer Erfahrungen
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Technisch</p>
                      </div>
                      <div>
                        <p>(b) Verwendung</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          (a) Erforderlich für unsere berechtigten Interessen
                          (zur Entwicklung unserer Dienstleistungen und zum
                          Ausbau unseres Geschäfts)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Um Ihnen zu ermöglichen, Fahrzeuge zu suchen, zu
                          kaufen und den Käufer oder Verkäufer zu kontaktieren,
                          um die Transaktion abzuschließen
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Identität</p>
                      </div>
                      <div>
                        <p>(b) Kontakt</p>
                      </div>
                      <div>
                        <p>(c) Profil</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Erfüllung eines Vertrags mit unseren Kunden</p>
                      </div>
                      <div>
                        <p>
                          (b) Erforderlich für unser berechtigtes Interesse (zur
                          Unterstützung unseres Geschäftsmodells)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Die Teilnahme an einer Veranstaltung zu filmen oder zu
                          fotografieren, um die Teilnahme zu fördern
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Bild</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Erforderlich für unsere berechtigten Interessen (zur
                          Entwicklung unserer Dienstleistungen und zum Ausbau
                          unseres Geschäfts)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Um Ihnen die Teilnahme an Forschungsprojekten zu
                          ermöglichen, die zur Verbesserung unserer Website,
                          unserer Dienstleistungen, unseres Marketings, unserer
                          Kundenbeziehungen und unserer Erfahrungen durchgeführt
                          werden
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Identität</p>
                      </div>
                      <div>
                        <p>(b) Kontakt</p>
                      </div>
                      <div>
                        <p>(c) Profil</p>
                      </div>
                      <div>
                        <p>(d) Technisch</p>
                      </div>
                      <div>
                        <p>(e) Verwendung</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          (a) Erforderlich für unsere berechtigten Interessen
                          (um zu untersuchen, wie Kunden unsere Dienstleistungen
                          nutzen, um sie weiterzuentwickeln, um unser Geschäft
                          auszubauen und um unsere Strategie zu auszurichten)
                        </p>
                      </div>
                      <div>
                        <p>(b) Erhalt Ihrer Einwilligung</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Um unsere Geschaeftsbeziehung mit Ihnen zu verwalten,
                          wenn Sie Waren kaufen
                        </p>
                      </div>
                      <div>
                        <p></p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Identität</p>
                      </div>
                      <div>
                        <p>(b) Kontakt</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          (a) Erforderlich für unsere berechtigten Interessen
                          (um zu untersuchen, wie Kunden unsere Dienstleistungen
                          nutzen, um sie weiterzuentwickeln, um unser Geschäft
                          auszubauen und um unsere Strategie zu auszurichten)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>
                          Um Ihre Identität zu authentifizieren und zu
                          verifizieren, einschließlich für Kontrollen zur
                          Verhinderung von Geldwäsche und Anfragen zur Ausübung
                          Ihrer Rechte gemäß dieser Richtlinie&nbsp;
                        </p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>a) Identität&nbsp;</p>
                      </div>
                      <div>
                        <p>(b) Kontakt&nbsp;</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-5">
                      <div>
                        <p>(a) Erhalt Ihrer Einwilligung&nbsp;</p>
                      </div>
                      <div>
                        <p>
                          (b) Erforderlich zur Erfüllung einer rechtlichen
                          Verpflichtung&nbsp;
                        </p>
                      </div>
                      <div>
                        <p>(c) Erfüllung eines Vertrags mit Ihnen&nbsp;</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section className="max-w-[672px] mx-auto px-6">
              <div className="page-content-wrap">
                <p className="leading-7 my-4">
                  Erforderlich für unsere berechtigten Interessen (zur
                  Entwicklung unserer Dienstleistungen und zum Ausbau unseres
                  Geschäfts)
                </p>
                <h3 className="font-bold my-4 text-base">
                  5. MIT WEM WIR IHRE PERSONENBEZOGENEN DATEN TEILEN
                </h3>
                <p className="leading-7 my-4">
                  Collecting Cars is made up of different trading entities. The
                  Services are operated by The Collecting Group Ltd, together
                  with its subsidiaries. “Collecting Cars”, “we”, “us” or “our”.
                  This privacy policy is issued on behalf of Collecting Cars.
                </p>
                <h3 className="font-bold my-4 text-base">
                  6. UNSERE DRITTDIENSTLEISTER
                </h3>
                <p className="leading-7 my-4">
                  Collecting Cars is made up of different trading entities. The
                  Services are operated by The Collecting Group Ltd, together
                  with its subsidiaries. “Collecting Cars”, “we”, “us” or “our”.
                  This privacy policy is issued on behalf of Collecting Cars.
                </p>
              </div>
            </section>
          </>
        )}
        {/* Add more content based on activeTabs */}
      </Tabs>
    </>
  );
};

export default PrivacyPolicy;
