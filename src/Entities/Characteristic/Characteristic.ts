import {rollD} from '../../helpers'

export class Characteristic {
  D: number
  N: number
  C: number

  constructor(str:string) {
    this.N = 0; // number of dice
    this.D = 0; // "type" of dice, max
    this.C = 0; // constant value

    let {parseInt} = Number;
    
    // trim whitespace
    str = str.split(/\s/).join('');

    // parseInt returns the longest valid substring starting at index 0
    if (!isNaN(parseInt(str))) {
      this.C = parseInt(str);
      return;
    }

    let isValidDice:boolean = /[1-9]*(d|D)[1-9]+((-|\+)[1-9]+)?/.test(str);

    if (!isValidDice) {
      // throw error
      console.log(`${str} is not a valid Characteristic`);
    }

    let dIndex:number = str.search(/d|D/);

    let operatorIndex:number = str.search(/-|\+/);

    // find and trim any constants, save to C
    if (operatorIndex > -1) { 
      this.C = parseInt(str.slice(operatorIndex));
      str = str.slice(0, operatorIndex);
    }

    this.N = dIndex === 0 ? 1 : parseInt(str.slice(0, dIndex));

    this.D = parseInt(str.slice(dIndex + 1));

  }

  get val():number {
    let total = this.C;
    for (let i = 0; i < this.N; i++) total += rollD(this.D);
    return total;
  }

  get max():number {
    return this.C + this.N * this.D;
  }

}