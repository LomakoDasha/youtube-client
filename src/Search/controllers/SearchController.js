import App from '../../Clips/controllers/App';
import SearchModel from '../models/SearchModel';

export default class SearchController {
  constructor(apiKey, value) {
    this.apiKey = apiKey;
    this.value = value;
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&q=${this.value}`,
    };
  }

  async getInfo() {
    const model = new SearchModel(this.state);
    const data = await model.getData();
    const app = new App(this.apiKey, data);

    app.start();
  }
}
