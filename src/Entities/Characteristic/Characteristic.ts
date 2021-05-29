import {rollD} from '../../helpers'

export class Characteristic {
  D: number = 0; // Number of dice
  N: number = 0; // Number on the dice
  C: number = 0; // added constant

  constructor(str:string) {

    let {parseInt} = Number;
    
    // trim whitespace
    str = str.split(/\s/).join('');

    // parseInt returns the longest valid substring starting at index 0
    if (!isNaN(Number(str))) {
      this.C = 0 + parseInt(str);
      return;
    }

    let isValidDice:boolean = /[1-9]*(d|D)[1-9]+((-|\+)[1-9]+)?/.test(str);

    if (!isValidDice) {
      // throw error
      console.log(`${str} is not a valid Characteristic`);
      return;
    }

    let dIndex:number = str.search(/d|D/);

    let operatorIndex:number = str.search(/-|\+/);

    // find and trim any constants, save to C
    this.C = operatorIndex > -1 ?
      parseInt(str.slice(operatorIndex)) * 1
      : 0;

    this.N = dIndex === 0 ? 1 : parseInt(str.slice(0, dIndex));

    this.D = parseInt(str.slice(dIndex + 1, operatorIndex === -1 ? Infinity : operatorIndex));

  }

  get val():number {
    let total = this.C;
    for (let i = 0; i < this.N; i++) total += rollD(this.D);
    return total;
  }

  get max():number {
    return (this.N * this.D) + this.C;
  }

}