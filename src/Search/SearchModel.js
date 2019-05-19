export default class SearchModel {
  constructor(state) {
    this.state = state;
  }

  static extractData(data) {
    // return data.items.map(clip => clip.snippet.title);
    return data.items.map(clip => clip.id.videoId);
  }

  async getData() {
    const { url } = this.state;

    const responce = await fetch(url);
    const data = await responce.json();

    // eslint-disable-next-line no-console
    console.log('Search url', url);
    // eslint-disable-next-line no-console
    console.log('Search data', data);

    return SearchModel.extractData(data);
  }
}
