function dscSort(array) {
    for (var i = 1; i < array.length; i++) {
        var tmp = array[i];
        for (var j = i - 1; j >= 0 && (array[j] < array[i]); j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = tmp;
    }
    return array;
}