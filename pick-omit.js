function pick(obj, str) {
    let keys = Object.keys(obj);
    let output = {};
    let pic = keys.filter((key) =>
      typeof str === "string" ? key === str : str.includes(key)
    );
    pic.forEach((element) => {
      output[element] = obj[element];
    });
    return output;
  }
  function omit(obj, str) {
    let keys = Object.keys(obj);
    let output = {};
    let pic = keys.filter((key) =>
      typeof str === "string" ? key !== str : !str.includes(key)
    );
    pic.forEach((element) => {
      output[element] = obj[element];
    });
    return output;
  }