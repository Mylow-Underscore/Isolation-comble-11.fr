import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-8 mt-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <ul className="flex flex-col gap-2">
              <li><Link href="/">Acceuil</Link></li>
              <li><Link href="/">Isolation Combles</Link></li>
              <li><Link href="/">Renovation Toiture</Link></li>
              <li><Link href="/">Traitement Bois</Link></li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li><Link href="/">Devis Travaux</Link></li>
              <li><Link href="/">Travaux</Link></li>
              <li><Link href="/">Contact</Link></li>
              <li><Link href="https://wailly-mylowann.fr" target="_blank">Webmaster</Link></li>
            </ul>
          </div>
          
          <div className="img">
            <Link href="/">
              <Image 
                src="/img/header/isolation-combles-franck-pierson-02.jpg"
                alt="logo-isolation-comble-11"
                width={350}
                height={175}
              />
            </Link>
          </div>
        </div>

        <div className="border-t pt-4">
          <Link href="/" className="text-sm">
            Copyright © isolation-combles-11 - Tous droits réservés
          </Link>
        </div>
      </Container>
    </footer>
  );
}
