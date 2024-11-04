import { expect } from 'chai';
import Mtrx from 'mtrx';

describe('mtrx Library', function () {
    it('1x1 matrix', function () {
        const matrix = new Mtrx();
        expect(matrix).to.be.instanceOf(Mtrx);
        expect(matrix.rows).to.equal(1);
        expect(matrix.cols).to.equal(1);
    });

    it('2x3 matrix', function () {
        const matrix = new Mtrx(2, 3);
        expect(matrix).to.be.instanceOf(Mtrx);
        expect(matrix.rows).to.equal(2);
        expect(matrix.cols).to.equal(3);
    });

    it('3x3 diagonal mtrx', function () {
        const matrix = new Mtrx([2, 4, 6]);
        expect(matrix).to.be.instanceOf(Mtrx);
        expect(matrix).to.deep.equal([[2, 0, 0], [0, 4, 0], [0, 0, 6]]);
    });

    it('3x3 with 1s', function () {
        const matrix = Mtrx.ones(3, 3);
        expect(matrix).to.be.instanceOf(Mtrx);
        expect(matrix).to.deep.equal([[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
    });

    it('add', function () {
        const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
        const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        const result = Mtrx.add(m, n);
        expect(result).to.deep.equal([[2, 2, 3], [4, 6, 6], [7, 8, 10]]);
    });

    it('mul by number', function () {
        const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
        const result = Mtrx.mul(m, 3);
        expect(result).to.deep.equal([[3, 0, 0], [0, 3, 0], [0, 0, 3]]);
    });

    it('mul tow mtrx', function () {
        const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
        const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        const result = Mtrx.mul(m, n);
        expect(result).to.deep.equal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });
});
