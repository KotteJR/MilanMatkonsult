import Footer from "../Components/Footer";

export default function Cookies() {
  return (
    <div>
      <section className="w-full bg-white py-12 md:py-18">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl md:text-4xl font-medium text-[#010207] mb-4">
            Cookie-policy
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-[#A0A0A0] mb-8">
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <div className="prose prose-lg max-w-none text-[#4B4B4B] leading-relaxed space-y-8">

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">1. Vad är cookies?</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Cookies är små textfiler som placeras på din enhet (dator, surfplatta eller mobiltelefon) när du besöker en webbplats. De används för att göra webbplatser mer effektiva och för att ge information till webbplatsägaren.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                Cookies kan vara antingen "session cookies" (som raderas när du stänger webbläsaren) eller "persistent cookies" (som finns kvar tills de upphör eller raderas manuellt).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">2. Vilka cookies använder vi?</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Vår webbplats använder följande typer av cookies:
              </p>
              
              <div className="space-y-6">
                <div className="bg-[#FAFAFA] border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-[#010207] mb-3">Nödvändiga cookies</h3>
                  <p className="text-[#4B4B4B] leading-relaxed mb-2">
                    Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte stängas av i våra system. De används för:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-[#4B4B4B] pl-4">
                    <li>Hålla koll på din session och säkerställa att webbplatsen fungerar korrekt</li>
                    <li>Säkerställa att säkerhetsfunktioner fungerar</li>
                    <li>Kom ihåg dina val och inställningar</li>
                  </ul>
                </div>

                <div className="bg-[#FAFAFA] border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-[#010207] mb-3">Analytiska cookies</h3>
                  <p className="text-[#4B4B4B] leading-relaxed mb-2">
                    Dessa cookies hjälper oss att förstå hur besökare interagerar med vår webbplats genom att samla in och rapportera information anonymt. De används för:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-[#4B4B4B] pl-4">
                    <li>Analysera trafik och användning av webbplatsen</li>
                    <li>Förstå vilka sidor som är mest populära</li>
                    <li>Förbättra webbplatsens prestanda och användarupplevelse</li>
                  </ul>
                  <p className="text-[#4B4B4B] leading-relaxed mt-3 text-sm italic">
                    Dessa cookies samlar in information anonymt och kan stängas av i dina webbläsarinställningar.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">3. Hantering och kontroll av cookies</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Du har full kontroll över cookies och kan när som helst kontrollera, blockera eller radera dem via din webbläsares inställningar. Här är hur du gör i de vanligaste webbläsarna:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 mb-3 text-[#4B4B4B] pl-4">
                <li><strong>Google Chrome:</strong> Inställningar → Sekretess och säkerhet → Cookies och andra webbplatsdata</li>
                <li><strong>Mozilla Firefox:</strong> Inställningar → Sekretess och säkerhet → Cookies och webbplatsdata</li>
                <li><strong>Safari:</strong> Inställningar → Sekretess → Hantera webbplatsdata</li>
                <li><strong>Microsoft Edge:</strong> Inställningar → Cookies och webbplatsbehörigheter</li>
              </ul>
              <p className="text-[#4B4B4B] leading-relaxed mt-3">
                <strong>Observera:</strong> Om du väljer att blockera eller inaktivera cookies kan detta påverka funktionaliteten på webbplatsen. Vissa funktioner kanske inte fungerar korrekt eller alls.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">4. Tredje parts cookies</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Vi kan använda tjänster från tredje part som också kan sätta cookies på din enhet när du besöker vår webbplats. Dessa cookies används för att förbättra funktionaliteten och analysera trafik på webbplatsen.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Tredje parts cookies kan inkludera:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 mb-3 text-[#4B4B4B] pl-4">
                <li><strong>Analysverktyg:</strong> För att förstå hur besökare använder webbplatsen</li>
                <li><strong>Sociala medier:</strong> För integration med sociala medieplattformar</li>
                <li><strong>Innehållsleverantörer:</strong> För att visa innehåll från externa källor</li>
              </ul>
              <p className="text-[#4B4B4B] leading-relaxed mt-3">
                Dessa tjänster har sina egna integritetspolicys och cookie-inställningar. Vi rekommenderar att du läser dessa för att förstå hur dina personuppgifter behandlas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">5. Uppdateringar av cookie-policyn</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Vi kan komma att uppdatera denna cookie-policy från tid till annan för att återspegla förändringar i vår praxis eller av andra operativa, juridiska eller regulatoriska skäl. Vi uppmuntrar dig att granska denna sida regelbundet för att hålla dig informerad om hur vi använder cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">6. Kontakt</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Om du har frågor om vår användning av cookies eller denna cookie-policy, kontakta oss:
              </p>
              <div className="bg-[#FAFAFA] border border-gray-200 rounded-lg p-6 mt-4">
                <p className="text-[#4B4B4B] leading-relaxed font-medium mb-2">Milan Mätkonsult AB</p>
                <p className="text-[#4B4B4B] leading-relaxed">
                  Amiralsgatan 25<br />
                  211 55 Malmö<br />
                  Sverige
                </p>
                <p className="text-[#4B4B4B] leading-relaxed mt-4">
                  <strong>E-post:</strong> info@milanmatkonsult.com<br />
                  <strong>Telefon:</strong> +46 40 123 45
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

