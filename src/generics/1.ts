import axios from 'axios';

interface Data {
  id: number
  name: string
  lastName: string
}

async function fetchData(url: string): Promise<Data> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

if (true) {
    console.log(`Gen Task 1 Done!`);
} else {
    fetchData(`www.dot.com`)
}