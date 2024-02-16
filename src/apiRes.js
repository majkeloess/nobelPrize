const API = "https://api.nobelprize.org/2.1/nobelPrizes";

export async function getYear() {
  const data = await fetch(API);
  const res = await data.json();
  const arr = res.nobelPrizes;

  const years = [];

  for (let i = 0; i < arr.length; i++) {
    if (!years.includes(arr[i].awardYear)) {
      years.push(arr[i].awardYear)
    }
  }

  return years;
}

export async function getData(year) {
  const data = await fetch(API);
  const res = await data.json();
  const arr = res.nobelPrizes;
  const yearData = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].awardYear == year) {
      const tempAsync = await getIdData(Number(arr[i].laureates[0].id))
      yearData.push({
        id: j,
        category: arr[i].category.en,
        prize: prizeFormatter(arr[i].prizeAmountAdjusted.toString()),
        name: arr[i].laureates[0].knownName.en,
        laureateId: arr[i].laureates[0].id,
        birth: tempAsync.birth,
        death: tempAsync.death,
        links: { wiki: tempAsync.wiki, moreData: tempAsync.moreData }
      })
      j++;
    }
  }

  return yearData;
}

async function getIdData(id) {
  const API = `https://api.nobelprize.org/2/laureate/${id}`
  const data = await fetch(API);
  const res = await data.json();
  const obj = {
    birth: res[0].birth.date + ' ' + res[0].birth.place.locationString.en,
    death: res[0].death.date + ' ' + res[0].death.place.locationString.en,
    wiki: res[0].wikipedia.english,
    moreData: `https://www.nobelprize.org/laureate/${id}`
  };

  return obj;
}

export function prizeFormatter(value) {
  if (value.length <= 3) {
    return value;
  }
  const tripArr = [];
  const k = value.length % 3;
  const beg = value.substring(0, k)
  const rest = value.substring(k);
  tripArr.push(beg);
  for (let i = 0; i < rest.length; i += 3) {
    tripArr.push(rest.substring(i, i + 3));
  }

  const result = tripArr.reduce((acc, curVal) => acc + curVal + ' ', '');
  return result;

}


// console.log(await getYear());
//console.log(await getData('1905'));
//console.log(await getIdData(164));
//console.log(prizeFormatter('1250000000')); //prizeFormatter('1200'), prizeFormatter('148500'), prizeFormatter('12500000')) 