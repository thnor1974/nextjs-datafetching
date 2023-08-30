export async function getAllCustomers() {

    const sourceurl = process.env.NEXT_PUBLIC_URL;

    const url = new URL(`${sourceurl}/customer`);
    url.searchParams.append('orderBy', 'name');
    url.searchParams.append('page', 1);
    url.searchParams.append('limit', 20);

    const res = await fetch(url, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

 export async function getCustomer(id) {

    const sourceurl = process.env.NEXT_PUBLIC_URL;

    const url = new URL(`${sourceurl}/customer/${id}`);
    //url.searchParams.append('age', 2);

    const res = await fetch(url, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}