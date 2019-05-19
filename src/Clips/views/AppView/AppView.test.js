import AppView from './AppView';

describe('#AppView.constructor', () => {
  it('Should be not NULL', () => {
    expect(AppView.constructor).not.toBe('');
  });
});

describe('AppView.prototype.render', () => {
  it('Should be an instance of Function', () => {
    expect(AppView.prototype.render).toBeInstanceOf(Function);
  });

  it('Should be render correctly', () => {
    const context = {
      data: [
        {
          id: 'vhfxdukh',
          title: 'title 1',
          img: 'http://...',
          channel: 'channel 1',
          date: '2015-10-15',
          view: '3456',
          description: 'text',
        },
        {
          id: 'vhfryjh',
          title: 'title 2',
          img: 'http://... .com',
          channel: 'channel 2',
          date: '2012-05-15',
          view: '741',
          description: 'text text',
        },
      ],
    };

    AppView.prototype.render.call(context);

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
