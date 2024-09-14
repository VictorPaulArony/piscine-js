async function series(args) {
  let results = [];
  for (const fn of args) {
    const result = await fn(); 
    results.push(result); 
  }
  return results;
}
