export class Entity {
  Name: string
  S: number
  A: number

  ExtraHit_6: boolean
  ExtraAttack_6: boolean

  ReRollHits_All: boolean
  ReRollHits_1: boolean
  HitMod: number


  ReRollWounds_All: boolean
  ReRollWounds_1: boolean
  WoundMod: number

  AddAP_6: boolean
  MW_6: boolean
  MWInAddition_6: boolean

  constructor(props:Object) {
    Object.assign(this, props)
  }

}

export class Weapon extends Entity {
  WeaponType: string

  D: number
  StrMod: string
  AP: number

  Blast: boolean
  Flamer: boolean
  Melta: boolean

  MultiplyAttacks: number
  ExtraAttacksWithThis: number

  constructor(props:Object) {
    super(props)
    Object.assign(this, props)
  }
  
}

export class Model extends Entity {
  W:number
  T: number
  WS: number
  BS: number
  Save: number
  Invul: number
  FeelNoPain: number
  RangedWeapons: Weapon[]
  MeleeWeapons: Weapon[]

  constructor(props:Object) {
    super(props)
    Object.assign(this, props)
  }

}

export class Unit extends Entity {
  Models: Model[]
  size: number

  constructor(props:Object) {
    super(props)
    Object.assign(this, props)
  }

}