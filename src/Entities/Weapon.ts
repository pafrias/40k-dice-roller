import {Entity} from '.';
import { reRoll, rollNDice } from '../helpers';

export class Weapon extends Entity {
  WeaponType:string

  D:number
  StrMod:string
  AP:number

  Blast:boolean = false
  Flamer:boolean = false
  Melta:boolean = false

  MultiplyAttacks:number
  ExtraAttacksWithThis:number
  
}

export class MeleeWeapon extends Weapon {

  hit(target) {
    
  }

  wound(strength){

  }

}

export class RangedWeapon extends Weapon {

  shoot(target) { // returns [Hits, 6's]
    // get number of attacks
    let Attacks = this.A.valueOf();
    // if (target.size > 10) Attacks = this.A.maximum();
    /*else*/ if (target.size > 5) Attacks = Math.max(Attacks, 3);
    Attacks *= (this.MultiplyAttacks || 1);
    Attacks += (this.ExtraAttacksWithThis || 0);
    
    // auto hit?
    if (this.Flamer) return [Attacks, 0];

    //roll all attacks
    let HitRolls = rollNDice(Attacks);

    // rerolls
    let FailureThreshold:number;
    if (this.ReRollHits_All) FailureThreshold = this.HitThreshold;
    else if (this.ReRollHits_1) FailureThreshold = 1;
    if (FailureThreshold) reRoll(HitRolls, FailureThreshold);

    // extra attacks and rerolls
    if (this.ExtraAttack_6) {
      let xtra = rollNDice(HitRolls[6]);
      if (FailureThreshold) reRoll(xtra, FailureThreshold);
      for (let i = 0; i < xtra.length; i++) {
        HitRolls[i] += xtra[i]
      }
    }

    // extra hits
    if (this.ExtraHit_6) HitRolls[0] = HitRolls[6];

    //
    return HitRolls;
  }

  wound(strength){

  }

  get HitThreshold():number {
    let x = this.BS - 1;

    // failure is calculated before modifiers
    // but if the modifier is goig to be positive,
    // there is no reason to reroll a BS-1 result

    // check that mod is 0 or positive
    let modifier = Math.max(this.HitMod, 0);

    // lower the threshold if positive
    x -= Math.min(1, modifier);
    
    // but at least reroll the ones
    x = Math.max(1, x);

    return x;

  }

}
