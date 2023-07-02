const fetch = require('node-fetch');

const urlSeries = "https://backend-movies-o8wf.onrender.com/series";

class SeriesService {

    async serieJSON(id) {
        try {
            const result = await fetch(`${urlSeries}/${id}`);
            return await result.json();
        } catch (exception) {
            console.log(exception)
        }
    }

    async seriesJSON() {
        try {
            const result = await fetch(urlSeries);
            return await result.json();
        } catch (exception) {
            console.log(exception);
        }
    }

    async createSerieJSON(serieData) {
        try {
            return await fetch(urlSeries, {
                method: 'POST',
                body: JSON.stringify(serieData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (exception) {
            console.log(exception);
        }
    }

    async updateSerieJSON(serieData) {
        try {
            return await fetch(`${urlSeries}/${serieData.id}`, {
                method: 'PUT',
                body: JSON.stringify(serieData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (exception) {
            console.log(exception);
        }
    }

    async deleteSerieJSON(id) {
        try {
            return await fetch(`${urlSeries}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (exception) {
            console.log(exception);
        }
    }

}

module.exports = SeriesService;