export class ApiService {
  constructor(private readonly url: string) {}

  async get(path = "") {
    try {
      const results = await fetch(this.url + path, {
        method: "GET",
        mode: "cors",
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

  async post(query: string, path = "") {
    try {
      const results = await fetch(this.url + path, {
        body: query,
        method: "POST",
        mode: "cors",
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
