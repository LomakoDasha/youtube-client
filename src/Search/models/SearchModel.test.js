import SearchModel from './SearchModel';

describe('#SearchModel.constructor', () => {
  it('Should be not NULL', () => {
    expect(SearchModel.constructor).not.toBe('');
  });
});

describe('#SearchModel.extractData', () => {
  it('Should be an instance of Function', () => {
    expect(SearchModel.extractData).toBeInstanceOf(Function);
  });

  it('Should return array of string that contains clip titles', () => {
    const data = {
      items: [
        {
          id: {
            videoId: 'ukmvgyjhhyuj',
          },
        },
        {
          id: {
            videoId: 'ruy6etrtj6gfy',
          },
        },
        {
          id: {
            videoId: 'tedrgjxykse6t',
          },
        },
      ],
    };

    const result = SearchModel.extractData(data);

    expect(result).toEqual(['ukmvgyjhhyuj', 'ruy6etrtj6gfy', 'tedrgjxykse6t']);
  });
});
