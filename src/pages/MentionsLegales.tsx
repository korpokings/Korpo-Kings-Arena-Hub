import { Layout } from '@/components/Layout';
import { useEffect } from 'react';

const MentionsLegales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-20 px-4 bg-korpo-black/80 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Mentions légales <span className="text-korpo-orange">– Korpo Kings Cup</span>
          </h1>
          <div className="space-y-8 text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-korpo-orange mb-2">Identité du projet</h2>
              <p>
                La Korpo Kings Cup est une création originale développée par Safana Events, entreprise basée au Maroc.
                Le tournoi a été pensé pour réinventer le sport en entreprise, en le transformant en une plateforme de
                cohésion, de contenu digital et de marque employeur, spécifiquement adaptée à l’univers corporate marocain.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-korpo-orange mb-2">Propriété intellectuelle</h2>
              <p>
                La marque “Korpo Kings Cup”, son logo, sa charte graphique, son univers visuel et ses éléments de communication
                sont des créations protégées et déposées au Maroc. Toute reproduction, imitation ou utilisation sans autorisation
                écrite de Safana Events est strictement interdite.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-korpo-orange mb-2">Clause de non-affiliation</h2>
              <p>
                La Korpo Kings Cup est un projet totalement indépendant, qui ne possède aucun lien juridique, commercial ou
                institutionnel avec la Kings League, Baller League, The Soccer Tournament ou toute autre ligue ou format international existant.
              </p>
              <p className="mt-2">
                Toute ressemblance éventuelle dans l’approche ou la scénarisation est fortuite et résulte d’une vision commune
                de modernisation du sport à des fins d’engagement. La Korpo Kings Cup reste une initiative 100 % marocaine,
                conçue et adaptée pour répondre aux enjeux spécifiques des entreprises locales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-korpo-orange mb-2">Traitement des données personnelles</h2>
              <p>
                Les données recueillies via le formulaire d’inscription ou de contact (nom, entreprise, e-mail, téléphone…) sont
                exclusivement utilisées dans le cadre de la gestion du tournoi et des échanges avec les entreprises intéressées.
                Ces données ne sont ni cédées ni vendues à des tiers.
              </p>
              <p className="mt-2">
                Conformément à la loi 09-08 relative à la protection des personnes physiques à l’égard du traitement des données
                à caractère personnel, vous disposez d’un droit d’accès, de rectification et de suppression de vos informations,
                sur simple demande à l’adresse : <a href="mailto:korpokings@safanaevents.ma" className="text-korpo-orange underline">korpokings@safanaevents.ma</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MentionsLegales;
