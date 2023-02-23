const randomImageApi = 'https://cataas.com/cat/says/';

export function getNewImage (factCroped) {
  return fetch(randomImageApi + factCroped + '?json=true')
    .then(res => res.json())
    .then(data => {
      return 'https://cataas.com/' + data.url
    })
}
