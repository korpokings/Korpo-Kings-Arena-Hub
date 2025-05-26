export default function StepsTimeLine() {
    return (
      <div>
        <div className="mb-2">
          <h3 className="text-korpo-orange text-lg font-bold uppercase tracking-wider">
            Comment participer
          </h3>
        </div>

        {/* Étape 1 - Inscription */}
        <div className="flex gap-x-5 ms-1">
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-korpo-orange/30">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 bg-korpo-orange/10 border border-korpo-orange/30 text-korpo-orange font-semibold text-sm rounded-full">
                1
              </span>
            </div>
          </div>

          <div className="grow pt-0.5 pb-6">
            <h4 className="text-white font-bold text-base text-md mb-1">Inscription d'Équipe</h4>
            <p className="text-sm lg:text-base text-gray-400">
              Complétez le formulaire d'inscription avec les informations de votre entreprise.
            </p>
          </div>
        </div>

        {/* Étape 2 - Classement */}
        <div className="flex gap-x-5 ms-1">
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-korpo-orange/30">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 bg-korpo-orange/10 border border-korpo-orange/30 text-korpo-orange font-semibold text-sm rounded-full">
                2
              </span>
            </div>
          </div>

          <div className="grow pt-0.5 pb-6">
            <h4 className="text-white font-bold text-base text-md mb-1">Phase de Classement</h4>
            <p className="text-sm lg:text-base text-gray-400">
              Affrontez les autres équipes de votre groupe. Les 2 meilleures équipes 
              se qualifient pour la phase finale.
            </p>
          </div>
        </div>

        {/* Étape 3 - Finales */}
        <div className="flex gap-x-5 ms-1">
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-korpo-orange/30">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 bg-korpo-orange/10 border border-korpo-orange/30 text-korpo-orange font-semibold text-sm rounded-full">
                3
              </span>
            </div>
          </div>

          <div className="grow pt-0.5 pb-2">
            <h4 className="text-white font-bold text-base text-md mb-1">Journée des Finales</h4>
            <p className="text-sm lg:text-base text-gray-400">
              Montrez votre talent lors du grande finale. 
              Utilisez la strategie pour décrocher le titre de Korpo Kings!
            </p>
          </div>
        </div>   
      </div>
    )
}