import {Entity, Weapon, RangedWeapon, MeleeWeapon} from '.'

export class Model extends Entity {
  MeleeWeapons:MeleeWeapon[]
  RangedWeapons:RangedWeapon[]

  equip(...weapons:Weapon[]) {

    for (let weapon of weapons) {
      if (process.env.debugging) console.log(`${this.Name} equipping ${weapon.Name}`)
      let proxy = this.inherit(weapon);
      if (proxy instanceof MeleeWeapon) this.MeleeWeapons.push(proxy)
      else if (proxy instanceof RangedWeapon) this.RangedWeapons.push(proxy)
    }
  }

  shoot(target) {
    // will need special rules for pistols and grenades

    if (process.env.debugging) console.log(`${this.Name} firing on ${target.name}`)
    for (let weapon of this.RangedWeapons) {
      let result = weapon.shoot(target)
      console.log(result)
    }

  }

  fight(target) {
    /**
     * because the number of attacks is set by the user but extra attacks can be generated for
     * both the weapon being swung and the weapons by their being equipped, the rolls to hit
     * need to be done at the model level, checking for modifiers at the unit and weapon levels.
     * 
     * Should this generate data for every melee weapon? Generate and return the most damaging one?
     */
    
  }

}