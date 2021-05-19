export const inherit = (target:Object, parent:Object) => {
  return new Proxy(target, {
    get(obj, prop) {
      if (prop === 'HitMod' || prop === 'WoundMod') {
        let mod:number = obj[prop] || 0;
        return mod + (parent[prop] || 0);
      }

      let result = Reflect.get(obj, prop);
      return result === undefined
        ? result 
        : parent[prop];
    }
  })
};
