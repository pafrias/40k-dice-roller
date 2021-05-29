export const inherit = (target:Object, parent:Object) => {
  return new Proxy(target, {
    get(obj, prop, rec) {
      if (prop === 'HitMod' || prop === 'WoundMod') {
        let mod:number = obj[prop] || 0;
        return mod + (parent[prop] || 0);
      }

      let result = Reflect.get(obj, prop, rec);

      return result === undefined
        ? parent[prop]
        : result;
    }
  })
};
