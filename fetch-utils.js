const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwMzM2NiwiZXhwIjoxOTU1MDc5MzY2fQ.h-JURChjnXoeL7B9Np5y08qCf3Qx0KkqNDGptw6pQXY';


const SUPABASE_URL = 'https://dpcepedfulrgtakrxmbi.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBabies() {
    const response = await client
        .from('beanie_babies')
        .select();
    return checkError(response);
}

export async function getBaby(id) {
    const response = await client
        .from('beanie_babies')
        .select()
        .match({ id: id })
        .single();

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}