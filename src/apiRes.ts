const API = "https://api.nobelprize.org/2.1/nobelPrizes";

export async function getYear(): Promise<string[]> {
  const response = await fetch(API);
  const data: ApiResponse = await response.json();
  const arr = data.nobelPrizes;

  const years: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (!years.includes(arr[i].awardYear)) {
      years.push(arr[i].awardYear);
    }
  }

  return years;
}

export async function getData(year: string): Promise<YearData[]> {
  const response = await fetch(API);
  const data: ApiResponse = await response.json();
  const arr = data.nobelPrizes;
  const yearData: YearData[] = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].awardYear == year) {
      const tempAsync = await getIdData(Number(arr[i].laureates[0]?.id));
      yearData.push({
        id: j,
        category: arr[i]?.category?.en || "",
        prize: prizeFormatter(arr[i]?.prizeAmountAdjusted?.toString() || ""),
        name: arr[i]?.laureates[0]?.knownName?.en || "",
        laureateId: arr[i]?.laureates[0]?.id || "",
        birth: tempAsync?.birth || "",
        death: tempAsync?.death || "",
        links: {
          wiki: tempAsync?.wiki || "",
          moreData: tempAsync?.moreData || "",
        },
      });
      j++;
    }
  }

  return yearData;
}

async function getIdData(id: number): Promise<TempData> {
  const API = `https://api.nobelprize.org/2/laureate/${id}`;
  const response = await fetch(API);
  const data: LaureateDetails[] = await response.json();
  const obj: TempData = {
    birth:
      data[0]?.birth?.date && data[0]?.birth?.place?.locationString?.en
        ? data[0].birth.date + " " + data[0].birth.place.locationString.en
        : "",
    death:
      data[0]?.death?.date && data[0]?.death?.place?.locationString?.en
        ? data[0].death.date + " " + data[0].death.place.locationString.en
        : "",
    wiki: data[0]?.wikipedia?.english || "",
    moreData: `https://www.nobelprize.org/laureate/${id}` || "",
  };

  return obj;
}

export function prizeFormatter(value: string): string {
  if (value.length <= 3) {
    return value;
  }
  const tripArr: string[] = [];
  const k = value.length % 3;
  const beg = value.substring(0, k);
  const rest = value.substring(k);
  tripArr.push(beg);
  for (let i = 0; i < rest.length; i += 3) {
    tripArr.push(rest.substring(i, i + 3));
  }

  const result = tripArr.reduce((acc, curVal) => acc + curVal + " ", "");
  return result;
}
