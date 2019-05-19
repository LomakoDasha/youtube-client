import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor(id) {
    this.id = id;
  }

  async start() {
    const state = {
      url: `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBOFwKCUVk7f6mLMO4khwLq_8ehtXsYiJo&id=${this.id}&part=snippet,statistics`,
    };

    const model = new AppModel(state);
    const data = await model.getData();

    const view = new AppView(data);

    view.render();
  }
}
