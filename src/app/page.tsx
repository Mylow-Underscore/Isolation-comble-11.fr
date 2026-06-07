import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/templates/header';
import Footer from '@/components/templates/footer';
import Slider from '@/components/section/slider';
import Typography from '@/components/ui/Typography';

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />

      <div className="my-8 mx-16">
        <article className="mb-8">
          <figure className="figureright float-right ml-4 mb-4">
            <Image 
              className='rounded-md'
              src="/img/accueil/travaux-isolation-carcassonne-comble-laine-roche.jpg" 
              alt="travaux-isolation-carcassonne-comble-laine-roche"
              width={300}
              height={200}
            />
          </figure>
          <Typography variant="h1" font="oswald" className='mb-4'>Isolation Aude</Typography>
          <Typography variant="body-base" font='libreBaskerville' className="mb-4">
            La maison perd de la chaleur par toutes ses parois extérieures. La première source de déperdition thermique de l'habitation est la toiture, elle en représente <b>30%</b>. En <Link href="/isolation">isolant ces combles perdus</Link> on réduit durablement ses dépenses en diminuant les besoins en énergie de l'habitation, de ce fait on agit aussi sur la planète.
          </Typography>
          <Typography variant="body-base" font='libreBaskerville' className="mb-4">
            L'isolation de vos combles est rentabilisée en quelques années grâce à l'énergie économisée. La laine de roche est très efficace contre les termites car c'est un matériau purement minéral, qui ne contient pas de cellulose. La laine de Roche soufflée est un excellent isolant <Link href="/isolation">thermique</Link>. Elle vous garantie un agréable confort à l'intérieur de l'habitation en toutes saison grâce à sa faible diffusivité.
          </Typography>
          <Typography variant="body-base" font='libreBaskerville' className="mb-4">
            L'Entreprise Pierson Franck est titulaire de la qualification RGE "reconnu garant de l'environnement" ce qui permet à ses clients de pouvoir bénéficier des primes Energie (CEE).
          </Typography>
        </article>

        <article className="mb-8">
          <figure className="figureleft float-left mr-4 mb-4">
            <Image 
              className='rounded-md'
              src="/img/accueil/eco-artisan-energie-batiment-carcassonne.jpg" 
              alt="eco-artisan-energie-batiment-carcassonne"
              width={300}
              height={200}
            />
          </figure>
          <Typography variant="h2" font="oswald" className="text-2xl font-bold">Eco Artisan - Carcassonne / Aude</Typography>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            L'entreprise Pierson Franck est titulaire depuis début Juillet 2014 de la qualification Eco Artisan, Reconnu Garant de L'Environnement (RGE) dans le domaine de la pose de matériaux d'<Link href="/isolation">isolation thermique</Link>.
          </Typography>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            <strong>Faire appel à un Eco Artisan c'est :</strong>
          </Typography>
          <ul className="list-disc pl-6 mb-4">
            <li><Typography as="span" variant="body-base" font="libreBaskerville">S'adresser à un professionnel qualifié <b>"RGE"</b> par <b>QUALIBAT</b> et engagé dans L'amélioration de la performance énergétique des logements et le respect de L'environnement.</Typography></li>
            <li><Typography as="span" variant="body-base" font="libreBaskerville">Bénéficier d'un travail de qualité, réalisé par un professionnel compétent.</Typography></li>
          </ul>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            En effet L'Eco conditionnalité prévoit que les aides aux particuliers seront accordées à la condition que les travaux de performance énergétique soient réalisés par des entreprises du bâtiment titulaires d'un signe de qualité RGE : "Reconnu Garant de L'Environnement" à partir du 1er Juillet 2014.
          </Typography>
        </article>

        <article className="mb-8">
          <figure className="figureright float-right ml-4 mb-4">
            <Image 
              className='rounded-md'
              src="/img/accueil/travaux-facade-peinture-mur-carcassonne-aude.jpg" 
              alt="travaux-facade-peinture-mur-carcassonne-aude"
              width={300}
              height={200}
            />
          </figure>
          <Typography variant="h2" font="oswald" className="text-2xl font-bold mb-4">Travaux façade, mur, murette</Typography>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            L'entreprise Pierson Franck vous propose la rénovation de vos façades, murs, murettes... grâce à un <b>Hydrofuge</b> coloré ProPerla (plusieurs teintes disponibles) qui combine L'esthétisme et la haute performance.
          </Typography>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            En effet sa composition unique rend les supports :
          </Typography>
          <ul className="list-disc pl-6 mb-4">
            <li><Typography as="span" variant="body-base" font="libreBaskerville">Autonettoyants : les saletés n'adhèrent pas sur un support traitées par ProPerla, efficace aussi sur les versants à L'ombre et les endroits avec un fort taux d'humidité dans L'air.</Typography></li>
            <li><Typography as="span" variant="body-base" font="libreBaskerville">Parfaitement hydrofuges : effet perlant, le support reste sec se qui améliore le pouvoir isolant du mur.</Typography></li>
            <li><Typography as="span" variant="body-base" font="libreBaskerville">Microporeux : respirant, il améliore L'efficacité thermique et maintient les propriétés d'isolation.</Typography></li>
          </ul>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            Nous effectuons vos travaux dans L'Aude et ses alentours.
          </Typography>
        </article>

        <article className="mb-8">
          <figure className="figureleft float-left mr-4 mb-4">
            <Image 
              className='rounded-md'
              src="/img/accueil/toiture-carcassonne-devis-gratuit-reparer.jpg" 
              alt="toiture-carcassonne-devis-gratuit-reparer"
              width={300}
              height={200}
            />
          </figure>
          <Typography variant="h2" font="oswald" className="text-2xl font-bold mb-4">Rénovation toiture Carcassonne</Typography>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            Il est important de ne pas négliger sa <Link href="/renovation">toiture</Link>, c'est un élément primordial de l'habitation. Le toit a besoin d'entretien et de nettoyage. Son entretien doit être une priorité si vous voulez garder votre toiture en bon état, sachant que la durée de vie moyenne d'une tuile est comprise entre 30 et 50 ans.
          </Typography>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            Le nettoyage de tuile permet d'éliminer toutes les salissures, résidus de pollution, mousse, lichens, algues mais aussi feuilles en fin d'automne qui fixent l'humidité, dévient le circuit de l'eau de pluie ce qui entraîne des dégradations catastrophiques comme des infiltrations. Les variations de température gel/dégel amènent la <Link href="/renovation">tuile</Link> a se désagréger, elle devient cassante, poreuse et s'effrite.
          </Typography>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            Nous rénovons vos toiture sur la région de Carcassonne et les villages voisins, nous établissons un devis gratuit.
          </Typography>
        </article>

        <article className="mb-8">
          <figure className="figureright float-right ml-4 mb-4">
            <Image 
              className='rounded-md'
              src="/img/accueil/traiter-charpente-aude-termite-bois.jpg" 
              alt="traiter-charpente-aude-termite-bois"
              width={300}
              height={200}
            />
          </figure>
          <Typography variant="h2" font="oswald" className="text-2xl font-bold mb-4">Traitement des bois</Typography>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            Charpente traditionnelle et fermettes sont composées de pièces de bois assemblées entre elles et traitées pour 10 ans. Elle constitue avec les tuiles la <Link href="/traitement">toiture</Link> qui est l'élément qui permet de soutenir l'habitation.
          </Typography>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            Le bois dispose de nombreux atouts : léger, résistant, durable et esthétique; c'est un matériau noble. Parce qu'il est vivant, le bois est aussi sensible à certaines pathologies biologiques. Lorsque les bois d'une charpente sont attaqués, la maison est fragilisée et à termes sa solidité est menacée.
          </Typography>
          <Typography variant="body-base" font="libreBaskerville" className="mb-4">
            L'Entreprise Pierson Franck se déplace pour vos travaux afin de traiter vos charpentes dans tout le département Audois.
          </Typography>
        </article>
      </div>

      <Footer />
    </div>
  );
}
