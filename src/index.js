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
    }
    return result;
};
