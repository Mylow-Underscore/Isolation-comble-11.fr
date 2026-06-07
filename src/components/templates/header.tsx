import Link from 'next/link';
import { Container } from '@/components/ui/Container';


export default function Header() {
  return (
    <header className="z-100 absolute bg-white/5 w-full flex items-center justify-center backdrop-blur-sm">
        <Container className="py-4">
            <nav className="flex gap-4 text-sm md:gap-6 lg:gap-8">
                <Link href="/">ACCUEIL</Link>
                <Link href="/">ISOLATION COMBLES</Link>
                <Link href="/">RENOVATION TOITURE</Link>
                <Link href="/">TRAITEMENT BOIS</Link>
                <Link href="/">TRAVAUX</Link>
                <Link href="/">CONTACT</Link>
            </nav>
        </Container>
    </header>
  );
}