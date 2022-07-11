abstract class SearchStrategy {
  fetchUrl: string;

  async fetch() {
    try {
      const response = await fetch(this.fetchUrl);
      const data = await response.json();
      this.drawDom();
    } catch (error) {
      console.error(error);
    }
  }

  async search() {
    await this.fetch();
  }

  abstract drawDom(): void;
}

export default SearchStrategy;
