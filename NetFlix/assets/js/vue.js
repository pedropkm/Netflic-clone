const app = Vue.createApp({
    data(){ 
        return {
            showMovie: true, 
            movies: [
                {title: 'Red Notice', duration: 3, img:'./assets/images/movies/red-notice.jpg' , isFav: true},
                
            ],
        }
    }, 
    methods: {
        changeTitle() {
            this.title = 'Uncharted';
        }, 
        toggleShowMovie() {
            this.showMovie = !this.showMovie; 
        },
    }, 

   
    computed: {
        filteredMovie() {
            return this.movies.filter((movie) => movie.isFav); 
        }
    }
});

app.mount('#app'); 