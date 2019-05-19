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
        date: `${item.snippet.publishedAt}`,
        view: `${item.statistics.viewCount}`,
        description: `${item.snippet.description}`,
      };
      arrObjects.push(arrObjects[i]);
    });
    const arrObjects2 = arrObjects.slice(0, 15);
    // eslint-disable-next-line no-console
    console.log('arrObjects', arrObjects2);

    return arrObjects2;
  }

  async getData() {
    const { url } = this.state;

    const responce = await fetch(url);
    const data = await responce.json();

    // eslint-disable-next-line no-console
    console.log('url', url);
    // eslint-disable-next-line no-console
    console.log('this.id', data);

    return AppModel.extractData(data);
  }
}
