import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor(apiKey, id) {
    this.apiKey = apiKey;
    this.id = id;
  }

  async start() {
    const state = {
      url: `https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}&id=${this.id}&part=snippet,statistics`,
    };

    const model = new AppModel(state);
    const data = await model.getData();

    const view = new AppView(data);

    view.render();
  }
}
