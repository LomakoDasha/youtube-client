import App from '../Clips/controllers/App';
import SearchModel from './SearchModel';
import SearchTemplate from './search-view.html';
import './search-view.css';

export default class SearchView {
  async search() {
    const content = document.createElement('div');
    content.className = 'search-input-wrapper';
    content.innerHTML = SearchTemplate;
    document.body.appendChild(content);

    // this.inputValue = document.getElementById('search-input').value;
    this.inputValue = 'js';
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=${this.inputValue}`,
    };
    // eslint-disable-next-line no-console
    console.log('Search this.state.inputValue', this.inputValue);
    // eslint-disable-next-line no-console
    console.log('Search this.state', this.state);

    const model = new SearchModel(this.state);
    const data = await model.getData();

    // eslint-disable-next-line no-console
    console.log('data', data);
    const app = new App(data);

    app.start();
  }
}
