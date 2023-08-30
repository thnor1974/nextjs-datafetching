import Link from 'next/link';

export default function Navigation() {
    return (
    <nav>
      <div className="container mx-auto py-5 px-2">
        <div className="flex flex-row justify-between">
        <Link href="/"><h1 className="font-bold text-2xl">Customer App</h1></Link>
        <Link href="/customer">Customers</Link>
        </div>
      </div>
    </nav>
    )
}