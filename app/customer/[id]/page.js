import Image from 'next/image';
import Link from 'next/link';
import {getCustomer} from '@/components/getData.js'; 

export const metadata = {
    title: 'Customer',
    description: 'Generated by create next app',
}

export default async function Customer({params: {id}}) {

    const data = await getCustomer(id);
    const url = process.env.NEXT_PUBLIC_URL;

    return (
        <>
        <main className="container mx-auto h-screen">
          <div className="p-3 border-2 border-gray-150 mb-5"> 
            <h2 className="text-6xl font-bold mb-5">{data.name}</h2>
            <Image
                className="py-3"
                src={data.avatar}
                width="200"
                height="200"
                alt={data.name}
            />
            <p className="mb-3"><strong>Age:</strong> {data.age}</p>
            <p><strong>Address:</strong></p>
            <p>{data.address}</p>
            <p className="font-bold">{data.city}</p>
          </div>
          <Link href="/customer" className="px-2 py-2 hover:text-blue-500 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Back to Customers</Link>
        </main>
        </>
      )
}