export const d6 = (): number => Math.ceil(Math.random() * 6);

export const rollD = (N:number):number => Math.ceil(N * Math.random());

export const rollNDice = (N:number): number[] => {

  let result: number[] = new Array(7).fill(0);

  for (let i = 0; i < N; i++) result[d6()] += 1;
  
  return result;

}

export function reRoll(diceArray : number[], N:number) {
  let x:number = 0;
  for (let i:number = N; i > 0; i--) {
    x += diceArray[i];
    diceArray[i] = 0;
  }
  for (let i:number = 0; i < x; i++) {
    diceArray[d6()] += 1;
  }
}

