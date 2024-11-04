import sinon from 'sinon';
import matrix from '../gauss_js/matrix.js';

describe('Matrix class', () => {
    let matrixInstance;

    beforeEach(() => {
        matrixInstance = new matrix(3);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should mock printm method', () => {
        const mockPrintm = sinon.mock(matrixInstance);
        mockPrintm.expects('printm').once();

        matrixInstance.printm();

        mockPrintm.verify();
    });

    it('should mock mull_add method', () => {
        const mockMullAdd = sinon.mock(matrixInstance);
        mockMullAdd.expects('mull_add').withArgs(0, 1, 2).once();

        matrixInstance.mull_add(0, 1, 2);

        mockMullAdd.verify();
    });
});
