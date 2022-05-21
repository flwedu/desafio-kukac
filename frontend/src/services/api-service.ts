export class ApiService {
  constructor(private readonly url: string) {}

  async get() {
    try {
      const results = await fetch(this.url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      });

      if (results.ok) {
        return await results.json();
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async post(query: string) {
    try {
      const results = await fetch(this.url, {
        body: query,
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      });

      if (results.ok) {
        return await results.json();
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
