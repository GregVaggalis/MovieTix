// Name: Greg Vaggalis



const app = new Vue({
    el: "#app",
    data: 
    {
        info: [],
        totalChild: 0,
        totalAdult: 0,
        grandTotal: 0,
    },
    mounted()
    {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=97d5d933ca3e8a6b118b4c5e4e6a5bea&language=en-US&page=1') 
        .then(response => {
            for (var i = 0; i < 3; i++){
                var movie = {
                    title: response.data.results[i].title,
                    poster: response.data.results[i].poster_path,
                    overview: response.data.results[i].overview,
                    childTix: 0,
                    adultTix: 0,
                    subtotal: 0.00
                }
                this.info.push(movie);
            }                    
            
            console.log(this.info);
            
        });
    },
    methods: 
    {
        childTix(movie){
            // console.log(movie.childTix);
            movie.childTix += 1;
            movie.subtotal += 5.00;
            this.totalChild += 1;
            this.grandTotal += 5.00;
        },
        decChildTix(movie){
            if (movie.childTix > 0) {
                movie.childTix -= 1;
                movie.subtotal -= 5.00;
                this.totalChild -= 1;
                this.grandTotal -= 5.00;
            }
            else {
                movie.childTix = 0;
            }
        },
        adultTix(movie){
            movie.adultTix += 1;
            movie.subtotal += 15.00;
            this.totalAdult += 1;
            this. grandTotal += 15.00;
        },
        decAdultTix(movie){
            if (movie.adultTix > 0) {
                movie.adultTix -= 1;
                movie.subtotal -= 15.00;
                this.totalAdult -= 1;
                this.grandTotal -= 15.00;
            }
            else {
                movie.adultTix = 0;
            }
        },
        removeTix(movie){
            //console.log(this.totalAdult);
            this.totalAdult -= movie.adultTix;
            this.totalChild -= movie.childTix;
            this.grandTotal -= movie.subtotal;
            movie.childTix = 0;
            movie.adultTix = 0;
            movie.subtotal = 0;

            //console.log(grandTotal);
        }
        
    }
})
