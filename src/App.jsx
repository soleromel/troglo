import React from 'react';
import { Phone, Mail, Bed, Flame, Check, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-gray-800">
      
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-20 flex items-center p-6 text-white bg-gradient-to-b from-black/60 to-transparent">
        <img 
          src="/troglo-plume-logo.svg" 
          alt="Logo La Troglo à plumes" 
          className="h-14 w-14 mr-4 filter invert" 
        />
        <h1 className="text-3xl font-bold font-serif tracking-wider drop-shadow-md">
          La Troglo à plumes
        </h1>
      </header>

      {/* HERO SECTION avec Morphing */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="hero-crossfade absolute inset-0">
          <div className="bg-image img-1" style={{backgroundImage: "url('/troglo_upscale.webp')"}}></div>
          <div className="bg-image img-2" style={{backgroundImage: "url('/magnific_lighttransfer_3009188033.webp')"}}></div>
          <div className="bg-image img-3" style={{backgroundImage: "url('/IMG_0203.webp')"}}></div>
        </div>
        
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mt-16">
          <h2 className="text-5xl md:text-7xl font-bold text-adaptive tracking-tight leading-tight">
            Bienvenue pour une parenthèse troglo
          </h2>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white drop-shadow-md" />
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        <div className="text-center md:text-left mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-[#4a5d4e] mb-6">
            Un Habitat Écologique et Empreint d'Histoire
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Véritable troglo creusé dans le tuffeau sur 2 niveaux, la <strong>Troglo à plumes</strong> vous accueille en famille ou entre amis. 
            Ancien lieu de résidence des moines datant du 11ème siècle, niché sous les vignes dans un cadre protégé à Parnay, avec une magnifique terrasse vue sur la Loire,
            le gîte offre tout le confort moderne avec de belles matières respectant l'artisanat local et l'âme du lieu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="bg-[#4a5d4e] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">Gîtes de France</span>
            <span className="bg-[#4a5d4e] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">Ecogestes & Biodiversité</span>
            <span className="bg-[#4a5d4e] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">Vignobles & Découvertes</span>
            <span className="bg-[#4a5d4e] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">Affilié Office de tourisme de Saumur/Anjou</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Bed className="mr-3 text-[#4a5d4e]" /> Les Espaces
            </h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start"><Check className="mr-2 h-5 w-5 text-green-600 shrink-0" /> Capacité totale : 14 personnes (à partir de 6)</li>
              <li className="flex items-start"><Check className="mr-2 h-5 w-5 text-green-600 shrink-0" /> 3 chambres décorées (12 couchages)</li>
              <li className="flex items-start"><Check className="mr-2 h-5 w-5 text-green-600 shrink-0" /> 1 salon (2 couchages supplémentaires)</li>
              <li className="flex items-start"><Check className="mr-2 h-5 w-5 text-green-600 shrink-0" /> 1 salle de bains (ancien pressoir), 1 salle d'eau, 4 WC</li>
              <li className="flex items-start"><Check className="mr-2 h-5 w-5 text-green-600 shrink-0" /> Cuisine toute équipée & Lave-vaisselle</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Flame className="mr-3 text-[#4a5d4e]" /> Confort & Extérieur
            </h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start"><Check className="mr-2 h-5 w-5 text-green-600 shrink-0" /> Chauffage au sol constant (19°C), max 23°C en été</li>
              <li className="flex items-start"><Check className="mr-2 h-5 w-5 text-green-600 shrink-0" /> Grande cheminée active & coin du feu</li>
              <li className="flex items-start"><Check className="mr-2 h-5 w-5 text-green-600 shrink-0" /> Terrasse aménagée avec vue sur la Loire (table, barbecue)</li>
              <li className="flex items-start"><Check className="mr-2 h-5 w-5 text-green-600 shrink-0" /> Fibre optique / Wi-Fi, Télévision, jeux & livres</li>
              <li className="flex items-start"><Check className="mr-2 h-5 w-5 text-green-600 shrink-0" /> Sur la route de la Loire à vélo et le GR de pays</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#f4ebd8] p-8 md:p-12 rounded-3xl text-center max-w-3xl mx-auto border border-[#e8dac1]">
          <h4 className="text-3xl font-bold text-gray-900 mb-4">Réservez votre séjour</h4>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Aurore se fera un plaisir de partager l'histoire du lieu et de vous accompagner sans frais dans la préparation de votre séjour.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <a href="tel:0608142844" className="flex items-center bg-[#4a5d4e] text-white px-6 py-3 rounded-full hover:bg-[#38473b] transition font-semibold w-full md:w-auto justify-center">
              <Phone className="mr-2 h-5 w-5" />
              06 08 14 28 44
            </a>
            <a href="mailto:Trogloaplumes@gmail.com" className="flex items-center bg-white text-[#4a5d4e] px-6 py-3 rounded-full hover:bg-gray-50 transition border border-[#4a5d4e] font-semibold w-full md:w-auto justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500 font-medium">* Privilégiez un contact par SMS</p>
        </div>
      </main>
    </div>
  );
}

export default App;
