import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import ButtonLink from '@/components/ButtonLink';
import { Check, Info } from 'lucide-react';

const Rental = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Hero
          title="Noleggia un campo a Milano"
          subtitle="Tennis e Padel, coperti o outdoor, 7 giorni su 7. Prezzi chiari, prenotazione semplice."
          imageSrc="/lovable-uploads/ebada5d3-6c5e-43a0-ab7d-a5850900d950.png"
          buttons={[
            { text: 'Prenota un campo', href: '/contact' },
            { text: 'Contattaci', href: '/contact', variant: 'outline' }
          ]}
          contentPosition="left"
          overlayOpacity="medium"
        />

        <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">

          {/* TENNIS RENTAL */}
          <section>
            <RevealAnimation>
              <p className="text-sm font-swiss tracking-widest text-ath-clay uppercase mb-2">Tennis</p>
              <h2 className="text-3xl font-display mb-2">Noleggio campi Tennis</h2>
              <p className="text-gray-600 mb-8 font-swiss">
                Tariffe €/ora, per campo. Stagionalità: <strong>inverno</strong> ottobre-aprile (coperti),
                <strong> estate</strong> maggio-settembre (outdoor).
              </p>
            </RevealAnimation>

            <RevealAnimation delay={100}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm font-swiss">
                  <thead>
                    <tr className="bg-ath-clay/10 border-b-2 border-ath-clay/30">
                      <th className="text-left py-3 px-4 font-semibold">Fascia oraria</th>
                      <th className="text-right py-3 px-4 font-semibold">Inverno (ott–apr)</th>
                      <th className="text-right py-3 px-4 font-semibold">Estate (mag–set)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Giorno (8-15, feriale)</td>
                      <td className="text-right py-3 px-4 font-semibold">€30/h</td>
                      <td className="text-right py-3 px-4 font-semibold">€27/h</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">
                        <div>Sera / Peak (15-22, feriale + weekend)</div>
                        <div className="text-xs text-gray-500 mt-1">Legno lamellare · Pallone pressostatico</div>
                      </td>
                      <td className="text-right py-3 px-4">
                        <div className="font-semibold">€42/h <span className="text-xs font-normal text-gray-500">lamellare</span></div>
                        <div className="font-semibold">€36/h <span className="text-xs font-normal text-gray-500">pallone</span></div>
                      </td>
                      <td className="text-right py-3 px-4 font-semibold">€38/h <span className="text-xs font-normal text-gray-500">outdoor</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Happy hour estate</td>
                      <td className="text-right py-3 px-4 text-gray-400">—</td>
                      <td className="text-right py-3 px-4 font-semibold">€22/h</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Campo scoperto</td>
                      <td className="text-right py-3 px-4 text-gray-400">—</td>
                      <td className="text-right py-3 px-4 font-semibold">€24/h</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">
                        <div>Lezione privata — solo campo</div>
                        <div className="text-xs text-gray-500">Maestro escluso</div>
                      </td>
                      <td className="text-right py-3 px-4 font-semibold">€25/h</td>
                      <td className="text-right py-3 px-4 font-semibold">€25/h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={200}>
              <div className="mt-6 bg-ath-clay/10 rounded-lg p-4 flex items-start gap-3">
                <Info size={20} className="text-ath-clay flex-shrink-0 mt-0.5" />
                <div className="text-sm font-swiss">
                  <strong>Sconti disponibili:</strong>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center gap-2"><Check size={14} className="text-ath-clay" /> Soci ATH −15% su tutte le tariffe</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-ath-clay" /> Prenotazioni mattina feriale −20/30%</li>
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          </section>

          {/* PADEL RENTAL */}
          <section>
            <RevealAnimation>
              <p className="text-sm font-swiss tracking-widest text-ath-clay uppercase mb-2">Padel</p>
              <h2 className="text-3xl font-display mb-2">Noleggio campi Padel</h2>
              <p className="text-gray-600 mb-8 font-swiss">
                Tariffe €/slot da 90 minuti, per campo.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={100}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm font-swiss">
                  <thead>
                    <tr className="bg-ath-clay/10 border-b-2 border-ath-clay/30">
                      <th className="text-left py-3 px-4 font-semibold">Fascia oraria</th>
                      <th className="text-right py-3 px-4 font-semibold">Inverno (ott–apr)</th>
                      <th className="text-right py-3 px-4 font-semibold">Estate (mag–set)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">
                        <div>Off-peak</div>
                        <div className="text-xs text-gray-500">Mattina / primo pomeriggio</div>
                      </td>
                      <td className="text-right py-3 px-4 font-semibold">€52 <span className="text-xs font-normal text-gray-500">/ 90 min</span></td>
                      <td className="text-right py-3 px-4">
                        <div className="font-semibold">€36,40 <span className="text-xs font-normal text-gray-500">/ 90 min</span></div>
                        <div className="text-xs text-ath-clay font-semibold">−30%</div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">
                        <div>Peak</div>
                        <div className="text-xs text-gray-500">Sera / weekend / tarda sera</div>
                      </td>
                      <td className="text-right py-3 px-4 font-semibold">€64 <span className="text-xs font-normal text-gray-500">/ 90 min</span></td>
                      <td className="text-right py-3 px-4 font-semibold">€64 <span className="text-xs font-normal text-gray-500">/ 90 min</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Padel scoperto</td>
                      <td className="text-right py-3 px-4 text-gray-400">—</td>
                      <td className="text-right py-3 px-4 font-semibold">€40 <span className="text-xs font-normal text-gray-500">/ 90 min</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={200}>
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-swiss font-semibold mb-2">Equivalenti €/ora Padel</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm font-swiss text-gray-700">
                  <li>· Off-peak inverno: <strong>€34,67/h</strong></li>
                  <li>· Off-peak estate: <strong>€24,27/h</strong></li>
                  <li>· Peak tutto l'anno: <strong>€42,67/h</strong></li>
                </ul>
              </div>
            </RevealAnimation>
          </section>

          {/* CTA */}
          <RevealAnimation>
            <div className="bg-ath-clay text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-display mb-3">Pronto a prenotare?</h2>
              <p className="mb-6 font-swiss opacity-90">
                Contattaci per verificare la disponibilità del campo o per informazioni su abbonamenti e pacchetti.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <ButtonLink href="/contact" variant="secondary" className="bg-white text-ath-clay hover:bg-gray-100">
                  Prenota un campo
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" className="bg-transparent border border-white text-white hover:bg-white/10">
                  Chiedi info abbonamenti
                </ButtonLink>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rental;
