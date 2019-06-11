export const getIntWithinRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

/**
 * Shuffle algorithm for array
 */
Array.prototype.mezclar = function() {
  var n = this.length
  while (n--) {
    var i = Math.floor(n * Math.random())
    var tmp = this[i]
    this[i] = this[n]
    this[n] = tmp
  }
  return this
}

export const calculateTargets = (
  xSize: number,
  ySize: number,
  amount: number
) => {
  let count = 0
  let arr = []
  let targets: any = {}

  for (let x = 1; x <= xSize; x++) {
    for (let y = 1; y <= ySize; y++) {
      arr.push(`${x}-${y}`)
    }
  }

  arr.mezclar()

  for (count = 0; count < amount; count++) {
    targets[arr[count]] = true
  }
  return targets
}
