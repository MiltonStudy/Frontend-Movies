const fetch = require('node-fetch');

const urlMovies = "http://localhost:3000/movies";

class MoviesService {

    async movieJSON(id) {
        try {
            const result = await fetch(`${urlMovies}/${id}`);
            return await result.json();
        } catch (exception) {
            console.log(exception);
        }
    }

    async moviesJSON() {
        try {
            const result = await fetch(urlMovies);
            return await result.json();
        } catch (exception) {
            console.log(exception);
        }
    }

    async createMovieJSON(movieData) {
        try {
            return await fetch(urlMovies, {
                method: 'POST',
                body: JSON.stringify(movieData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (exception) {
            console.log(exception);
        }
    }

    async updateMovieJSON(movieData) {
        try {
            return await fetch(`${urlMovies}/${movieData.id}`, {
                method: 'PUT',
                body: JSON.stringify(movieData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (exception) {
            console.log(exception);
        }
    }

    async deleteMovieJSON(id) {
        try {
            return await fetch(`${urlMovies}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (exception) {
            console.log(exception)
        }
    }

}

module.exports = MoviesService;