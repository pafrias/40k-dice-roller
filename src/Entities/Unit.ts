import {Entity} from './Entity';
import {Model} from '.';

export class Unit extends Entity {
  Models: Model[] = []

  get size() {
    return this.Models.length
  }

  populate(...models:Model[]) {

    for (let model of models) {
      if (process.env.debugging) {
        let logString:string = `${model.Name} reporting` 
          + this.Name ? `to ${this.Name}` : ''
        console.log(logString)
      }
      let proxy = this.inherit(model);
      if (proxy instanceof Model) this.Models.push(proxy);
      else throw Error("Object is not an instance of Model")
    }
  }

}

