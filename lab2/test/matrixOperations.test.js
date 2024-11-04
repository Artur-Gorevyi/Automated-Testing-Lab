import { expect } from 'chai';
import MatrixOperations from '../src/matrixOperations.js';
describe('MatrixOperations', () => {
    describe('add()', () => {
        it('повинна коректно додавати дві матриці однакового розміру', () => {
            const matrixA = [[1, 2], [3, 4]];
            const matrixB = [[5, 6], [7, 8]];
            const result = MatrixOperations.add(matrixA, matrixB);
            expect(result).to.deep.equal([[6, 8], [10, 12]]);
        });

        it('повинна викидати помилку, якщо матриці різного розміру', () => {
            const matrixA = [[1, 2], [3, 4]];
            const matrixB = [[1, 2, 3]];
            expect(() => MatrixOperations.add(matrixA, matrixB)).to.throw('error');
        });
    });

    describe('subtract()', () => {
        it('повинна коректно віднімати дві матриці однакового розміру', () => {
            const matrixA = [[5, 6], [7, 8]];
            const matrixB = [[1, 2], [3, 4]];
            const result = MatrixOperations.subtract(matrixA, matrixB);
            expect(result).to.deep.equal([[4, 4], [4, 4]]);
        });
    });

    describe('mul()', () => {
        it('повинна коректно множити дві матриці', () => {
            const matrixA = [[1, 2], [3, 4]];
            const matrixB = [[5, 6], [7, 8]];
            const result = MatrixOperations.mul(matrixA, matrixB);
            expect(result).to.deep.equal([[19, 22], [43, 50]]);
        });
    });

    describe('divide()', () => {
        it('повинна коректно ділити матрицю на скаляр', () => {
            const matrixA = [[2, 4], [6, 8]];
            const scalar = 2;
            const result = MatrixOperations.divide(matrixA, scalar);
            expect(result).to.deep.equal([[1, 2], [3, 4]]);
        });

        it('повинна викидати помилку при спробі ділення на нуль', () => {
            const matrixA = [[1, 2], [3, 4]];
            expect(() => MatrixOperations.divide(matrixA, 0)).to.throw('error');
        });
    });
});