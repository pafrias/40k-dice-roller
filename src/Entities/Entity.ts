import {inherit} from '../helpers/proxy'

export class Modifiers {
  Name:string

  WS:number
  BS:number
  A:number
  S:number
  T:number
  W:number
  
  Save:number
  Invul:number
  FeelNoPain:number

  HitMod:number
  ReRollHits_1:boolean
  ReRollHits_All:boolean
  ExtraHit_6:boolean
  ExtraAttack_6:boolean

  WoundMod:number
  ReRollWounds_1:boolean
  ReRollWounds_All:boolean
  AddAP_6:boolean
  MW_6:boolean
  MWInAddition_6:boolean

  constructor(props:Object = {}) {
    Object.assign(this, props)
  }

}

export class Entity extends Modifiers {

  constructor(props:Object) {
    super(props)
    Object.assign(this, props)
  }

  inherit(target:Entity) {
    return inherit(target, this);
  }
}

