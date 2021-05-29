import {
  RangedWeapon,
  MeleeWeapon,
  Model,
  Unit
} from '.';

test('Objects inheriting from containers', () => {

  const Squad = new Unit({
    Name: 'Assault Squad'
  });

  const Marine = new Model({
    Name: 'Space Marine',
    W: 2,
    S: 4,
    T: 4,
    A: 2,
    WS: 3,
    BS: 3,
    Save: 3
  });

  const Sword = new MeleeWeapon({
    Name: 'Chainsword',
    Type: 'Melee',
    StrMod: '+1',
    AP: 0,
    D: 1
  });
  
  const Bolter = new RangedWeapon({
    Name: 'Bolter',
    Type: 'Rapid',
    Shots: 2,
    S: 4,
    AP: 0,
    D: 1
  });

  let models = [Marine, Marine, Marine, Marine, Marine];
  Squad.populate(...models);
  Marine.equip(Sword);
  Marine.equip(Bolter);



  let marine = Squad.Models[0];
  expect(Squad.Models[0]).toBeDefined
  expect(marine).toBeInstanceOf(Model);

  let gun = marine.RangedWeapons[0];
  expect(gun).toBeDefined
  expect(gun).toBeInstanceOf(RangedWeapon);

  // Marine.shoot({
  //   name: 'filthy xenos',
  //   size: 4,
  //   T: 3,
  //   W: 2,
  //   Save: 4,
  //   Inv: 6
  // })
  
})


test('basic', () => {
  expect(1).toBe(1);
})