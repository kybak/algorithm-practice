function firstDuplicate(a) {
  for (let i of a) {
    let posi = Math.abs(i) - 1
    if (a[posi] < 0) return posi + 1
    a[posi] = a[posi] * -1
  }

  return -1
}

