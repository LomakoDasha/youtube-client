import AppModel from './AppModel';

describe('#AppModel.constructor', () => {
  it('Should be not NULL', () => {
    expect(AppModel.constructor).not.toBe('');
  });
});

describe('#AppModel.extractData', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractData).toBeInstanceOf(Function);
  });
});
