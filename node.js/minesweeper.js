let b = [
    ['1', '0', '0', '0'],
    ['1', '0', '0', '1'],
    ['1', '0', '0', '0'],
    ['1', '0', '0', '1']
]

const mine = (arr) => {
    let map9 = arr.map(el => {
        return el.map(m => {
            if (m == 1) {
                return 9;
            } else {
                return 0;
            }
        })
    })


    const isMine = (b, i, j) => {
        if (i >= 0 && j >= 0 && i < b.length && j < b[i].length && b[i][j] == 9) {
            return 1;
        }
        return 0;
    }

    const findMineNumber = (b, i, j) => {
        return isMine(b, i - 1, j - 1) +
            isMine(b, i - 1, j) +
            isMine(b, i - 1, j + 1) +
            isMine(b, i, j - 1) +
            isMine(b, i, j + 1) +
            isMine(b, i + 1, j - 1) +
            isMine(b, i + 1, j) +
            isMine(b, i + 1, j + 1)
    }
    return map9.map((el, i) => {
        return el.map((n, j) => {
            return n == 9 ? n.toString() : findMineNumber(map9, i, j).toString()
        })
    })


}

console.log(mine(b))