// src/matrixOperations.js
export default class MatrixOperations {
    static add(matrixA, matrixB) {
        if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
            throw new Error('error');
        }
        return matrixA.map((row, i) =>
            row.map((val, j) => val + matrixB[i][j])
        );
    }

    static subtract(matrixA, matrixB) {
        if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
            throw new Error('error');
        }
        return matrixA.map((row, i) =>
            row.map((val, j) => val - matrixB[i][j])
        );
    }

    static mul(matrixA, matrixB) {
        if (matrixA[0].length !== matrixB.length) {
            throw new Error('error');
        }
        return matrixA.map(row =>
            matrixB[0].map((_, j) =>
                row.reduce((sum, val, i) => sum + val * matrixB[i][j], 0)
            )
        );
    }

    static divide(matrixA, scalar) {
        if (scalar === 0) {
            throw new Error('error');
        }
        return matrixA.map(row => row.map(val => val / scalar));
    }
}
