const factApi = 'https://catfact.ninja/fact'

export const getFact = () => {
  return fetch(factApi)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      return data.fact
    })
    .catch(error => console.log(error))
}
