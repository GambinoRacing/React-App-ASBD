const host = 'http://localhost:56348/';

//api?date=2018-02-27&station=${this.station}&days=${this.days}
async function getMeteoData(date, station, days) {
  
    const res = await fetch(host + `api?date=${date}&station=${station}&days=${days}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    });
    const data = await res.json();
    console.log(data)
  
    return data
}

export {getMeteoData}