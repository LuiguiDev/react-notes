const randomFactApi = 'https://catfact.ninja/fact';

export function getNewFact () {
  return fetch (randomFactApi)
    .then(res => res.json())
    .then(data => {
      return data.fact
    })
};
