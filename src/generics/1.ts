import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
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