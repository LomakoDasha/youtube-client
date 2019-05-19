export default class AppView {
  constructor(data) {
    this.data = data;

    // eslint-disable-next-line no-console
    console.log('view data', this.data);
    // eslint-disable-next-line no-console
    console.log('this.data.id', this.data[1].channel);
    // eslint-disable-next-line no-console
    console.log('data.length', this.data.length);
  }

  render() {
    const content = document.createElement('ul');
    content.className = 'main__clips';
    // let array = this.data.length;

    content.innerHTML = this.data.map(item => `<li class="main__clips__item">
      <div class="clip-inner">
        <img  class="clip-inner__image" src="${item.img}" alt="">
        <h2 class="clip-inner__title"><a class="clip-inner__link" href="https://www.youtube.com/watch?v=${item.id}" target="_blank"> ${item.title} </a></h2>
        <h3 class="clip-inner__channel"> ${item.channel} </h3>
        <h3 class="clip-inner__date"> ${item.date} </h3>
        <h3 class="clip-inner__view-count">${item.view}</h3>
        <p class="clip-inner__description"> ${item.description} </p>
      </div>
    </li>`);

    document.body.appendChild(content);
  }
}
