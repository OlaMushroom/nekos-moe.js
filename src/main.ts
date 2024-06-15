/**
 * Handles errors related to fetch requests.
 *
 * @param res - The Response object from the fetch request.
 * @returns A Promise with an Error object containing the HTTP status and status text, and the JSON message if available.
 */
async function errorHandler(res: Response): Promise<Error> {
  let msg = "";
  const contentType = res.headers.get("content-type");
  if (contentType !== null && contentType.includes("application/json"))
    msg = (await res.json()).message;
  throw Error(`HTTP Error: ${res.status} ${res.statusText}`, { cause: msg });
}

/**
 * Main function to handle API requests.
 *
 * @param endpoint - The API endpoint to call.
 * @param options - The options for fetch request.
 * @returns A Promise that resolves to the JSON response from the API.
 * @throws Will throw an error if the fetch request fails.-
 */
export async function request(
  endpoint: string,
  options: object = {}
): Promise<any> {
  const url = new URL(endpoint, "https://nekos.moe/api/v1/");
  console.log(`URL: ${url.toString()}`);

  try {
    const res = await fetch(url, options);
    if (!res.ok) await errorHandler(res);
    return await res.json();
  } catch (error) {
    throw error;
  }
}