const formMovies = document.getElementById('form-movie');

formMovies.addEventListener("submit", async (event) => {
    event.preventDefault();
    window.alert("Hello world!");

    // await fetch("localhost:5000/movies", {
    //     method:'POST'
    // }).then(res => console.log(res));
});