import Footer from "../Components/Footer";

export default function Integritetspolicy() {
  return (
    <div>
      <section className="w-full bg-white py-12 md:py-18">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl md:text-4xl font-medium text-[#010207] mb-4">
            Integritetspolicy
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-[#A0A0A0] mb-8">
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <div className="prose prose-lg max-w-none text-[#4B4B4B] leading-relaxed space-y-8">

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">1. Introduktion</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Milan Mätkonsult AB ("vi", "oss", "vår") värdesätter din integritet och förbinder sig att skydda dina personuppgifter. Denna integritetspolicy förklarar hur vi samlar in, använder, delar och skyddar dina personuppgifter i enlighet med EU:s dataskyddsförordning (GDPR).
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                Genom att använda vår webbplats eller våra tjänster godkänner du behandlingen av dina personuppgifter i enlighet med denna policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">2. Personuppgifter vi samlar in</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Vi samlar endast in personuppgifter som är nödvändiga för att kunna leverera våra tjänster och fullfölja våra avtal. Vi kan samla in följande typer av personuppgifter:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 mb-3 text-[#4B4B4B] pl-4">
                <li>Identitetsuppgifter: Namn, företagsnamn, befattning</li>
                <li>Kontaktuppgifter: E-postadress, telefonnummer, postadress</li>
                <li>Kommunikationsdata: Meddelanden, korrespondens och information som du lämnar via kontaktformulär</li>
                <li>Projektinformation: Information relaterad till projekt som vi arbetar med för dig</li>
                <li>Teknisk data: IP-adress, webbläsartyp, enhetsinformation (samlas automatiskt via cookies)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">3. Hur vi använder dina personuppgifter</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Vi använder dina personuppgifter enligt följande ändamål och rättslig grund:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-2 mb-3 text-[#4B4B4B] pl-4">
                <li><strong>Fullföljande av avtal:</strong> Leverera våra tjänster, hantera projekt och kommunikation kring pågående uppdrag</li>
                <li><strong>Legitima intressen:</strong> Förbättra vår webbplats, analysera användning och utveckla våra tjänster</li>
                <li><strong>Juridiska skyldigheter:</strong> Fullgöra lagkrav, bokföring och skatteregler</li>
                <li><strong>Samtycke:</strong> Skicka marknadsföringsmaterial (endast med ditt uttryckliga samtycke)</li>
                <li><strong>Kundservice:</strong> Svara på förfrågningar, ge support och hantera klagomål</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">4. Delning och överföring av personuppgifter</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Vi delar inte dina personuppgifter med tredje part utom i följande fall:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-2 mb-3 text-[#4B4B4B] pl-4">
                <li><strong>Serviceleverantörer:</strong> Vi kan dela uppgifter med pålitliga partners som hjälper oss driva verksamheten (t.ex. webbhotell, IT-leverantörer, molntjänster). Dessa leverantörer är kontrakterade att skydda dina uppgifter</li>
                <li><strong>Juridiska skyldigheter:</strong> När det krävs enligt lag eller på begäran från myndigheter</li>
                <li><strong>Med samtycke:</strong> Med ditt uttryckliga samtycke eller enligt instruktioner från dig</li>
                <li><strong>Affärsförvärv:</strong> Om vår verksamhet skulle överföras eller säljas kan personuppgifter överföras som del av affären</li>
              </ul>
              <p className="text-[#4B4B4B] leading-relaxed mt-3">
                Vi överför inte personuppgifter utomför EU/EES om inte adekvata skyddsåtgärder finns på plats.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">5. Dina rättigheter enligt GDPR</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Du har flera rättigheter när det gäller dina personuppgifter:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-2 mb-3 text-[#4B4B4B] pl-4">
                <li><strong>Rätt till tillgång:</strong> Du har rätt att få information om vilka personuppgifter vi behandlar om dig</li>
                <li><strong>Rätt till rättelse:</strong> Du kan begära att felaktiga eller ofullständiga uppgifter rättas</li>
                <li><strong>Rätt till radering:</strong> Du kan begära att dina personuppgifter raderas när de inte längre behövs</li>
                <li><strong>Rätt till begränsning:</strong> Du kan begära att behandlingen av dina personuppgifter begränsas</li>
                <li><strong>Rätt till dataportabilitet:</strong> Du har rätt att få dina personuppgifter i ett strukturerat format</li>
                <li><strong>Rätt att invända:</strong> Du kan invända mot behandling baserad på legitima intressen</li>
                <li><strong>Rätt att klaga:</strong> Du har rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY)</li>
              </ul>
              <p className="text-[#4B4B4B] leading-relaxed mt-3">
                För att utöva dina rättigheter, kontakta oss via informationen nedan.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">6. Datasäkerhet och lagring</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Vi implementerar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust, ändring eller förstörelse:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 mb-3 text-[#4B4B4B] pl-4">
                <li>Kryptering av känsliga data</li>
                <li>Regelbundna säkerhetskopieringar</li>
                <li>Begränsad åtkomst till personuppgifter endast för behörig personal</li>
                <li>Regelbundna säkerhetsgranskningar och uppdateringar</li>
              </ul>
              <p className="text-[#4B4B4B] leading-relaxed mt-3">
                Vi lagrar dina personuppgifter endast så länge som det är nödvändigt för de ändamål för vilka de samlades in, eller så länge som krävs enligt lag. När personuppgifter inte längre behövs raderas eller anonymiseras de på ett säkert sätt.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#010207] mb-4">7. Kontakt och personuppgiftsansvarig</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-3">
                Milan Mätkonsult AB är personuppgiftsansvarig för behandlingen av dina personuppgifter. Om du har frågor om denna integritetspolicy, vill utöva dina rättigheter eller har klagomål, kontakta oss:
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

