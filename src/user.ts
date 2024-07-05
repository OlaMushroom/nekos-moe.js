/**
 * @module
 */
import { request } from './main.ts';
import type { UserData, UserOptions } from './types.ts';

/**
 * Methods for interacting with user-related API endpoints.
 */
export const user: {
  /**
   * @param id - The unique identifier of the user.
   * @param token - An optional authorization token.
   * @returns A Promise that resolves to the JSON response containing the user's information.
   * @remarks
   * If "@me" is passed as the ID, the current user's data will be returned. In this case, an authorization token is needed.
   * The method returns a Promise that resolves to the JSON response containing the user's information.
   */
  get(id: string, token?: string): Promise<UserData>;

  /**
   * @param options - An optional object containing search options.
   * @returns A Promise that resolves to the JSON response containing the search results.
   */
  search(options?: UserOptions): Promise<UserData[]>;
} = {
  async get(id, token) {
    const headers = new Headers();
    if (token !== undefined) headers.append('Authorization', token);
    const data = (await request(`user/${id}`, { headers })) as {
      user: UserData;
    };
    return data.user;
  },

  async search(options = {}) {
    const data = (await request('users/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options)
    })) as { users: UserData[] };
    return data.users;
  }
};
