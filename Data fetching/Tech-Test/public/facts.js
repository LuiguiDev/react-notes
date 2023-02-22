// The logic module shouldn't depend on react, so we can't pass setState or any react logic
const randomFactApi = 'https://catfact.ninja/fact';

export function getNewFact () {
  return fetch (randomFactApi)
    .then(res => res.json())
    .then(data => {
      return data.fact
    })
};
