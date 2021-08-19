import 'jest'
import { doc } from 'prettier';
import '../script'

function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;
}

let spy;
beforeAll(() => {
    spy = jest.spyOn(document, 'getElementById');
});
  
describe('with found element', () => {
    const container = document.createElement('div');
    const workDetails = document.createElement('div');
    const workDetail1 = document.createElement('div');
    workDetail1.setAttribute('id', 'best-work-detail1');

    beforeEach(() => {
      spy.mockReturnValue(container);
    });

    it('should have defined container', () => {
        expect(container).toBeDefined();
    });
});