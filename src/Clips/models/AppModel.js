export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractData(data) {
    const arrObjects = [];
    data.items.forEach((item, i) => {
      arrObjects[i] = {
        id: `${item.id}`,
        title: `${item.snippet.title}`,
        img: `${item.snippet.thumbnails.medium.url}`,
        channel: `${item.snippet.channelTitle}`,
        date: `${item.snippet.publishedAt.slice(0, 10)}`,
        view: `${item.statistics.viewCount}`,
        description: `${item.snippet.description}`,
      };
      arrObjects.push(arrObjects[i]);
    });
    const arrObjects2 = arrObjects.slice(0, 15);

    return arrObjects2;
  }

  async getData() {
    const { url } = this.state;

    const responce = await fetch(url);
    const data = await responce.json();

    return AppModel.extractData(data);
  }
}
