// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix && matrix.length > 0) {
        matrix.forEach((item, index) =>
            index == 0
                ? (result = matrix[0])
                : index % 2 != 0
                ? (result = result.concat(item.reverse()))
                : (result = result.concat(item))
        );

        // result = matrix[0];
        // for (let i = 1; i < matrix.length; i++) {
        //     i % 2 != 0
        //         ? (result = result.concat(matrix[i].reverse()))
        //         : (result = result.concat(matrix[i]));
        // }
    }
    return result;
};
