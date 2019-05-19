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

    const search = document.getElementById('search-button');
    search.onclick = document.getElementById('search-input').value;
    const output = search.onclick;

    if (output !== 'null') {
      this.inputValue = 'frontend';
    } else {
      this.inputValue = output;
    }
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=${this.inputValue}`,
    };

    const model = new SearchModel(this.state);
    const data = await model.getData();

    const app = new App(data);

    app.start();
  }
}
