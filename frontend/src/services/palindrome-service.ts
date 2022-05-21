import { Desafio1Query } from "../pages/desafio1";

export class PalindromeService {
  constructor(private readonly url: string) {}

  async execute(query: Desafio1Query) {
    try {
      const results = await fetch(this.url, {
        body: JSON.stringify(query),
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
      return error;
    }
  }
}
