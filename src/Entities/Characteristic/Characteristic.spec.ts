import {Characteristic} from './Characteristic'

const integerTests:[string, number][] = [
  ['-1', -1],
  ['-2', -2],
  ['-0', 0],
  ['0', 0],
  ['1', 1],
  ['99', 99]
]

for (let i = 0; i < integerTests.length; i++) {
  let [str, num] = integerTests[i];

  test(`Integer Characteristic test #${i+1}: ${str}`, () => {

    const C = new Characteristic(str)

    for (let j = 0; j< 100; j++) {

      expect(C.max).toEqual(num)
      expect(C.val).toEqual(num)

    }

  })

}

let diceTests:[string, number, number][] = [
  ['d6', 1, 6],
  ['2d6', 2, 12],
  ['D3', 1, 3],
  ['d6+2', 3, 8],
  ['2d3-2', 0, 4],
  [' 2 d 3  - 2   ', 0, 4]
];

for (let i = 0; i < diceTests.length; i++) {

  let [str, min, max] = diceTests[i];
  const C = new Characteristic(str)

  test(`Dice Characteristic test #${i+1}: ${str}`, () => {

    for (let j = 0; j < 100; j++) {
      expect(C.max).toEqual(max)
      expect(C.val).toBeLessThanOrEqual(max)
      expect(C.val).toBeGreaterThanOrEqual(min)
    }
  })
}