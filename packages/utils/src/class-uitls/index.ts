function GetClassConstructor(element: any, name?: string): any {
  if (name) {
    // eslint-disable-next-line no-proto
    return element.__proto__.constructor[name];
  } else {
    // eslint-disable-next-line no-proto
    return element.__proto__.constructor;
  }
}

export { GetClassConstructor };
export default {
  GetClassConstructor,
};
