const token = 'cd6faaba-f134-48c6-a148-984768a48500'

export const getRate = async () => {
    return await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-API-KEY': token,
        }
    }).then(response => response.json())
     
      .catch(error => console.log('error------>', error));      
}