Array.prototype.groupBy = function (fn) {
    let groupedArr = {}

    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i])

        if (!groupedArr[key]) {
            groupedArr[key] = []
        }

        groupedArr[key].push(this[i])
    }
    return groupedArr
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */