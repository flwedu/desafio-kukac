export class ApiService {
  constructor(private readonly url: string) {}

  async get(path = "") {
    try {
      const response = await fetch(this.url + path, {
        method: "GET",
        mode: "cors",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      });

      if (response.ok) {
        return await response.json();
      }
      return Promise.reject(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async post(query: string, path = "") {
    try {
      const response = await fetch(this.url + path, {
        body: query,
        method: "POST",
        mode: "cors",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      });

      if (response.ok || response.status === 201) {
        return await response.json();
      }
      return Promise.reject(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
