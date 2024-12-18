import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js"

let cities = [
    {
        _id: 1,
        name: "New York",
        photo: "https://nyc.eu/wp-content/uploads/2015/07/New_York_City-scaled.jpg",
        country: "USA",
        continent: "North America",
        description: "The city that never sleeps.",
        currency: "USD",
        language: "English",
        timeZone: "EST",
        population: 8419600,
        latitude: 40.7128,
        longitude: -74.0060,
        areaCode: 212
    },
    {
        _id: 2,
        name: "Tokyo",
        photo: "https://img.freepik.com/foto-gratis/vista-aerea-paisaje-urbano-tokio-montana-fuji-japon_335224-148.jpg",
        country: "Japan",
        continent: "Asia",
        description: "A bustling metropolis known for its modernity and tradition.",
        currency: "JPY",
        language: "Japanese",
        timeZone: "JST",
        population: 13929286,
        latitude: 35.6762,
        longitude: 139.6503,
        areaCode: 3
    },
    {
        _id: 3,
        name: "Paris",
        photo: "https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg",
        country: "France",
        continent: "Europe",
        description: "The city of lights and love.",
        currency: "EUR",
        language: "French",
        timeZone: "CET",
        population: 2140526,
        latitude: 48.8566,
        longitude: 2.3522,
        areaCode: 1
    },
    {
        _id: 4,
        name: "Sydney",
        photo: "https://dingoos.com/wp-content/uploads/2017/11/estudiar-en-sydney-1.jpg",
        country: "Australia",
        continent: "Oceania",
        description: "Famous for its Sydney Opera House and beautiful harbor.",
        currency: "AUD",
        language: "English",
        timeZone: "AEDT",
        population: 5312163,
        latitude: -33.8688,
        longitude: 151.2093,
        areaCode: 2
    },
    {
        _id: 5,
        name: "Cairo",
        photo: "https://elviajerodespistado.com/wp-content/uploads/2020/05/Que-ver-en-El-Cairo.jpg",
        country: "Egypt",
        continent: "Africa",
        description: "The capital city known for its ancient history.",
        currency: "EGP",
        language: "Arabic",
        timeZone: "EET",
        population: 9905000,
        latitude: 30.0444,
        longitude: 31.2357,
        areaCode: 2
    },
    {
        _id: 6,
        name: "Rio de Janeiro",
        photo: "https://www.caribbeannewsdigital.com/sites/default/files/2020-03/Rio_de_Janeiro.jpg",
        country: "Brazil",
        continent: "South America",
        description: "Known for its Copacabana beach and Carnival festival.",
        currency: "BRL",
        language: "Portuguese",
        timeZone: "BRT",
        population: 6748000,
        latitude: -22.9068,
        longitude: -43.1729,
        areaCode: 21
    },
    {
        _id: 7,
        name: "Moscow",
        photo: "https://media.timeout.com/images/105237890/750/422/image.jpg",
        country: "Russia",
        continent: "Europe",
        description: "The capital city known for its historical architecture.",
        currency: "RUB",
        language: "Russian",
        timeZone: "MSK",
        population: 11920000,
        latitude: 55.7558,
        longitude: 37.6173,
        areaCode: 495
    },
    {
        _id: 8,
        name: "Beijing",
        photo: "https://content.r9cdn.net/rimg/dimg/62/28/22c46ab3-city-3286-164709113b2.jpg?crop=true&width=1020&height=498",
        country: "China",
        continent: "Asia",
        description: "The capital known for its modern skyscrapers and ancient sites.",
        currency: "CNY",
        language: "Mandarin",
        timeZone: "CST",
        population: 21540000,
        latitude: 39.9042,
        longitude: 116.4074,
        areaCode: 10
    },
    {
        _id: 9,
        name: "Berlin",
        photo: "https://uploads.exoticca.com/global/destination/poi/berlin.png",
        country: "Germany",
        continent: "Europe",
        description: "A city rich in history and culture.",
        currency: "EUR",
        language: "German",
        timeZone: "CET",
        population: 3644826,
        latitude: 52.5200,
        longitude: 13.4050,
        areaCode: 30
    },
    {
        _id: 10,
        name: "Toronto",
        photo: "https://www.airtransat.com/getmedia/c561ff6f-e480-4b8c-8b27-361d2b1e5ad3/Toronto-downtown-skyline-1000x600.aspx?width=1000&height=600&ext=.jpg",
        country: "Canada",
        continent: "North America",
        description: "Known for its diverse culture and skyline.",
        currency: "CAD",
        language: "English, French",
        timeZone: "EST",
        population: 2731571,
        latitude: 43.6510,
        longitude: -79.347015,
        areaCode: 416
    },
    {
        _id: 11,
        name: "Istanbul",
        photo: "https://ychef.files.bbci.co.uk/624x351/p0j759k4.jpg",
        country: "Turkey",
        continent: "Asia",
        description: "A city that bridges Europe and Asia.",
        currency: "TRY",
        language: "Turkish",
        timeZone: "TRT",
        population: 15500000,
        latitude: 41.0082,
        longitude: 28.9784,
        areaCode: 212
    },
    {
        _id: 12,
        name: "Mexico City",
        photo: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2021/7/15/2/shutterstock_Ramiro-Reyna-Jr-1322105165.jpg.rend.hgtvcom.616.411.suffix/1626392873055.jpeg",
        country: "Mexico",
        continent: "North America",
        description: "The largest city in North America, rich in history.",
        currency: "MXN",
        language: "Spanish",
        timeZone: "CST",
        population: 9209944,
        latitude: 19.4326,
        longitude: -99.1332,
        areaCode: 55
    },
    {
        _id: 13,
        name: "Merida",
        photo: "https://imagenes.descubro.mx/uploads/2022/10/Merida-mejor-ciudad-del-mundo.jpg",
        country: "Mexico",
        continent: "North America",
        description: "A colonial city known for its rich history and vibrant culture.",
        currency: "MXN",
        language: "Spanish",
        timeZone: "CST",
        population: 892363,
        latitude: 20.9762,
        longitude: -89.6178,
        areaCode: 999
    }
    ,
    {
        _id: 14,
        name: "Bangkok",
        photo: "https://www.disfrutabangkok.com/f/tailandia/bangkok/guia/historia-m.jpg",
        country: "Thailand",
        continent: "Asia",
        description: "A city known for its ornate temples and vibrant street life.",
        currency: "THB",
        language: "Thai",
        timeZone: "ICT",
        population: 10500000,
        latitude: 13.7563,
        longitude: 100.5018,
        areaCode: 2
    },
    {
        _id: 15,
        name: "Buenos Aires",
        photo: "https://vamospanish.com/wp-content/uploads/live-in-buenos-aires-1024x574.jpg",
        country: "Argentina",
        continent: "South America",
        description: "The capital city known for its European-style architecture.",
        currency: "ARS",
        language: "Spanish",
        timeZone: "ART",
        population: 3075646,
        latitude: -34.6037,
        longitude: -58.3816,
        areaCode: 11
    }
]


City.insertMany(cities)