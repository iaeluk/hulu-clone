const API_KEY = process.env.API_KEY

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
    },
    fetchTopRated: {
        title: 'Mais Votados',
        url: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
    },
    fetchActionMovies: {
        title: 'Ação',
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=28&language=pt-BR`
    },
    fetchComedyMovies: {
        title: 'Comédia',
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=35&language=pt-BR`
    },
    fetchHorrorMovies: {
        title: 'Terror',
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=27&language=pt-BR`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=10749&language=pt-BR`
    },
    fetchMystery: {
        title: 'Mistério',
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=9648&language=pt-BR`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=878&language=pt-BR`
    },
    fetchWestern: {
        title: 'Faroeste',
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=37&language=pt-BR`
    },
    fetchAnimation: {
        title: 'Animação',
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=16&language=pt-BR`
    },
    fetchTV: {
        title: 'TV Movie',
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=10770&language=pt-BR`
    },
}