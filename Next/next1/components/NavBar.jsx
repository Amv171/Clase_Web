import Link from 'next/link';
import './Navbar.css';

//Después de CSS
export default function Navbar() {
    return (
        <nav className="navbar py-5">   
            <Link href="/">
                <h1 className="text-3xl font-bold">Clase de Nextjs</h1>
            </Link>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    )
}