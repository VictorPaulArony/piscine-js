// Combines two objects, with properties from the second object overriding those from the first.
function defaultCurry(obj1) {
    return function(obj2) {
      return { ...obj1, ...obj2 };
    };
  }
  
  // Applies a function to each key-value pair in an object and returns a new object with the results.
  function mapCurry(fn) {
    return function(obj) {
      return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => fn([k, v]))
      );
    };
  }
  
  // Filters key-value pairs in an object based on a predicate function and returns a new object with the results.
  function filterCurry(fn) {
    return function(obj) {
      return Object.fromEntries(
        Object.entries(obj).filter(([k, v]) => fn([k, v]))
      );
    };
  }
  
  // Reduces an object to a single value based on a reducer function and an initial value.
  function reduceCurry(fn) {
    return function(obj, initialValue) {
      return Object.entries(obj).reduce((acc, entry) => fn(acc, entry), initialValue);
    };
  }
  
  // Reduces the personnel object to the total score of Force users.
  function reduceScore(personnel, initialValue = 0) {
    return reduceCurry((acc, [k, v]) => v.isForceUser ? acc + v.shootingScore + v.pilotingScore : acc)(personnel, initialValue);
  }
  
  // Filters the personnel object to include only Force users with a shooting score of 80 or higher.
  function filterForce(personnel) {
    return filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80)(personnel);
  }
  
  // Maps the personnel object to include an average score for each person.
  function mapAverage(personnel) {
    return mapCurry(([k, v]) => [k, { ...v, averageScore: (v.pilotingScore + v.shootingScore) / 2 }])(personnel);
  }
  /*
  function defaultCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj1) {
            res[key] = obj1[key];
        }
        for (let key in obj2) {
            res[key] = obj2[key];
        }
        return res;
    };
}
function mapCurry(func) {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            res[func([key, obj2[key]])[0]] = func([key, obj2[key]])[1];
        }
        return res;
    };
}
function reduceCurry(obj1) {
    return function (obj2, obj3) {
        let res = obj3;
        for (let key in obj2) {
            res = obj1(res, [key, obj2[key]]);
        }
        return res;
    };
}
function filterCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            if (obj1([key, obj2[key]])) {
                res[key] = obj2[key];
            }
        }
        return res;
    };
}
function reduceScore(obj1, obj2) {
    return reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(obj1, obj2);
}
function filterForce(obj) {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj);
}
function mapAverage(obj) {
    let avgScores = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(obj);
    for (let key in avgScores) {
        obj[key].averageScore = avgScores[key];
    }
    return obj;
}
  */
  
  // Test data
  const personnel = {
    luke: { isForceUser: true, shootingScore: 90, pilotingScore: 95 },
    han: { isForceUser: false, shootingScore: 85, pilotingScore: 80 },
    leia: { isForceUser: true, shootingScore: 85, pilotingScore: 88 },
    chewbacca: { isForceUser: false, shootingScore: 78, pilotingScore: 70 }
  };
  
  // Tests
  console.log(defaultCurry({ a: 1 })({ b: 2 })); // { a: 1, b: 2 }
  console.log(mapCurry(([k, v]) => [k, v * 2])({ a: 1, b: 2 })); // { a: 2, b: 4 }
  console.log(filterCurry(([k, v]) => v > 1)({ a: 1, b: 2 })); // { b: 2 }
  console.log(reduceCurry((acc, [k, v]) => acc + v)({ a: 1, b: 2 }, 0)); // 3
  console.log(reduceScore(personnel)); // 358
  console.log(filterForce(personnel)); // { luke: { isForceUser: true, shootingScore: 90, pilotingScore: 95 }, leia: { isForceUser: true, shootingScore: 85, pilotingScore: 88 } }
  console.log(mapAverage(personnel)); // { luke: { isForceUser: true, shootingScore: 90, pilotingScore: 95, averageScore: 92.5 }, han: { isForceUser: false, shootingScore: 85, pilotingScore: 80, averageScore: 82.5 }, leia: { isForceUser: true, shootingScore: 85, pilotingScore: 88, averageScore: 86.5 }, chewbacca: { isForceUser: false, shootingScore: 78, pilotingScore: 70, averageScore: 74 } }
  