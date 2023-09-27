const apiKey = 'dvdKxT19zXeDRBPTcsSsmnSEThpVDvJK'

export default function getGifts ({keyword= ''}, {typeS=''} ) {
    const apiURL = `https://api.giphy.com/v1/gifs/${typeS}?api_key=${apiKey}&q=${keyword}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    console.log(apiURL)
    return fetch(apiURL)
    .then(res => res.json()) // la respuesta se convierte a un tipo json
    .then(response => { //se accede al data del api
      // console.log(response)
      const {data = []} = response
      // console.log(data)
      if(Array.isArray(data)){
      const gifs = data.map(image => {
        const {images, title, id} = image
        const {url} = images.fixed_height_small
        return {title, id, url}
      
      })
      // Aqui se accede a los gifs del api
      return gifs
    }})
}