import SearchController from '../controllers/SearchController';
import SearchTemplate from './search-view.html';
import './search-view.css';

export default class SearchView {
  constructor() {
    this.apiKey = 'AIzaSyBs2NgxJAIE7ClXlRuTwzX403DyaQvqqiw';
  }

  async search() {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0';
    document.getElementsByTagName('head')[0].appendChild(meta);

    const content = document.createElement('div');
    content.className = 'search-input-wrapper';
    content.innerHTML = SearchTemplate;
    document.body.appendChild(content);

    let newValue;
    document.getElementById('search-button').addEventListener('click', (event) => {
      event.preventDefault();
      newValue = document.getElementById('search-input').value;

      const controller = new SearchController(this.apiKey, newValue);
      controller.getInfo();
    });
  }
}
