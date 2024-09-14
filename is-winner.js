
async function isWinner(country) {
  try {
    let cntry = await db.getWinner(country);
  if (cntry === Error("Country Not Found")) {
    return `${country} never was a winner`;
  }

  if (cntry.continent !== "Europe") {
    return `${country} is not what we are looking for because of the continent`;
  }
  let wins = await db.getResults(cntry.id);
  if (wins.length >= 3) {
    let year = "";
    let resl = "";
    wins.forEach((element) => {
      year += element.year + ", ";
      resl += element.score + ", ";
    });
    year = year.slice(0, year.length - 2);
    resl = resl.slice(0, resl.length - 2);
    return `${country} won the FIFA World Cup in ${year} winning by ${resl}`;
  } else {
    return `${country} is not what we are looking for because of the number of times it was champion`;
  }
  } catch (error) {
    if (error.message === "Country Not Found") {
			return `${country} never was a winner`;
		}
  }

}

