import { request } from './main.ts';

type Auth = {
  get(username: string, password: string): Promise<string>;
  regen(token: string): Promise<void>;
};

/**
 * Methods for authorization.
 */
const auth: Auth = {
  /**
   * Returns authorization token.
   *
   * @param username - The username of the user.
   * @param password - The password of the user.
   * @returns A Promise that resolves to the JSON response containing the authorization token.
   */
  async get(username, password) {
    const data = (await request('auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })) as { token: string };
    return data.token;
  },

  /**
   * Regenerates the authorization token.
   *
   * @param token - The current authorization token.
   * @returns A Promise that resolves to the JSON response containing the regenerated authorization token.
   * @remarks
   * This method sends a POST request to the "auth" endpoint of the API with the current authorization token.
   * The new authorization token will not be returned.
   */
  async regen(token) {
    await request('auth', {
      method: 'POST',
      headers: { Authorization: token }
    });
  }
};

export { auth };
