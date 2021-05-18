import {rollD} from './roll'

export class Characteristic {
  D: number
  N: number
  C: number

  constructor(str:string) {
    this.N = 0; // number of dice
    this.D = 0; // "type" of dice, max
    this.C = 0; // constant value
    
    // trim whitespace
    str = str.split(/\s/).join('');

    let int:number = Number.parseInt(str);

    // parseInt returns the longest valid substring starting
    // at index 0
    if (int.toString() === str) {
      this.C = int;
      return;
    }

    let match:boolean = new RegExp(/[1-9]*(d|D)[1-9]+((-|\+)[1-9]+)?/).test(str);
    // test of give dice value is legitimate
    if (match!) {
      //throw error
      console.log(`${str} is not a valid Characteristic`);
    }

    let indexD:number = str.search(/d|D/);

    let indexOp:number = str.search(/-|\+/);

    // find and trim any constants, save to C
    if (indexOp > -1) { 
      this.C = Number.parseInt(str.slice(indexOp));
      str = str.slice(0, indexOp);
    }

    this.N = indexD === 0
      ? 1
      : Number.parseInt(str.slice(0, indexD));

    this.D = Number.parseInt(str.slice(indexD + 1));

  }

  valueOf():number {
    return this.C + this.N * rollD(this.D);
  }

  maximum():number {
    return this.C + this.N * this.D;
  }

}