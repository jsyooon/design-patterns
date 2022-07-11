import SearchStrategy from './SearchStrategy';

class SearchButton {
  strategy: SearchStrategy;

  setMode(strategy: SearchStrategy) {
    this.strategy = strategy;
  }

  search() {
    this.strategy.search();
  }
}

export default SearchButton;
