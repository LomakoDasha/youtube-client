export default class SearchModel {
  constructor(state) {
    this.state = state;
  }

  static extractData(data) {
    return data.items.map(clip => clip.id.videoId);
  }

  async getData() {
    const { url } = this.state;

    const responce = await fetch(url);
    const data = await responce.json();

    return SearchModel.extractData(data);
  }
}
