<script>
import { state } from '/state.js';
import axios from 'axios';

export default {
    name: 'weather',
    data() {
        return {
            state,
        }
    },
    mounted() {
        axios
            .get('https://api.open-meteo.com/v1/forecast?latitude=46.1685&longitude=9.8713&current=temperature_2m,is_day,precipitation,rain,weather_code,surface_pressure,wind_speed_10m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,wind_speed_10m_max&timezone=Europe%2FBerlin&past_days=1')
            .then((response) => {
                console.log(response.data);
                state.weather = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        imgCode(weatherCode) {
            let baseUrl = '/antincendiosondrio_vite/weather/day/';

            if (weatherCode == 0) {
                return baseUrl + 'clear.webp';
            }
            else if (weatherCode == 1 || weatherCode == 2 || weatherCode == 3) {
                return baseUrl + 'mid_cloudy.webp'
            }
            else if (weatherCode == 45 || weatherCode == 48) {
                return baseUrl + 'cloudy.webp'
            }
            else if (weatherCode == 51 || weatherCode == 53 || weatherCode == 55) {
                return baseUrl + 'very_cloudy.webp'
            }
            else if (weatherCode == 56 || weatherCode == 57) {
                return baseUrl + 'very_cloudy.webp'
            }
            else if (weatherCode == 61 || weatherCode == 63 || weatherCode == 65) {
                return baseUrl + 'possible_rain.webp'

            }

            //new icons from here
            else if (weatherCode == 66 || weatherCode == 67) {
                return baseUrl + 'freezing_rain.webp'; //Freezing Rain: Light and heavy intensity
            }
            else if (weatherCode == 71 || weatherCode == 73 || weatherCode == 75) {
                return baseUrl + 'rain.webp'; //Snow fall: Slight, moderate, and heavy intensity
            }
            else if (weatherCode == 77) {
                return baseUrl + 'snow.webp'; //Snow grains
            }
            else if (weatherCode == 80 || weatherCode == 81 || weatherCode == 82) {
                return baseUrl + 'rain.webp'; //Rain showers: Slight, moderate, and violent
            }
            else if (weatherCode == 85 || weatherCode == 86) {
                return baseUrl + 'rain.webp';//	Snow showers slight and heavy
            }
            else if (weatherCode == 95) {
                return baseUrl + 'rain.webp';// Thunderstorm: Slight or moderate
            }
            else if (weatherCode == 96 || weatherCode == 99) {
                return baseUrl + 'rain.webp';// Thunderstorm with slight and heavy hail
            }
            else {
                return baseUrl + 'rain.webp';
            }
        }
    }
}
</script>

<template>

    <!-- w > 560px -->
    <div id="table-lg" class="table-responsive">
        <table class="table table-light">
            <thead>
                <tr>
                    <th colspan="4">
                        <!-- <h3 class="text-center">Your weather widget</h3> -->
                        <h3 class="text-center">Meteo 7 giorni da ieri</h3>
                    </th>
                </tr>
                <tr>
                    <th class="text-left">Giorno</th>
                    <th class="center">Temperatura</th>
                    <th class="center">Precipitazioni</th>
                    <th class="center">Venti</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="state.weather" v-for="(day, index) in state.weather.daily.sunrise" class="content">
                    <td class="text-left">
                        <div class="d-flex td-1">
                            <div class="col-3">
                                <div>
                                    <b>
                                        {{ day.split('T')[0].split('-').reverse().join('/') }}
                                    </b>
                                </div>
                            </div>
                            <div id="icon_div" class="col">
                                <img id="icon_img" :src="imgCode(state.weather.daily.weather_code[index])" alt="">
                            </div>
                        </div>
                    </td>
                    <td class="center">
                        <div>
                            <p><b>Temp. max: </b>{{ state.weather.daily.temperature_2m_max[index] }}&deg;</p>
                            <p><b>Temp. min: </b>{{ state.weather.daily.temperature_2m_min[index] }}&deg;</p>
                        </div>
                    </td>
                    <td class="center">
                        <p>{{ state.weather.daily.temperature_2m_max[index] }} <small>mm</small></p>
                    </td>
                    <td class="center">
                        <p>{{ state.weather.daily.wind_speed_10m_max[index] }} <small>km/h</small></p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- w < 560px -->
    <div id="table-sm" class="table-responsive">
        <table class="table table-light" v-if="state.weather" v-for="(day, index) in state.weather.daily.sunrise">
            <thead>
                <tr>
                    <th class="center">Giorno</th>
                    <th class="center">Temperatura</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="center">
                        <div class="d-flex td-1">
                            <div>
                                <p>
                                    <b>
                                        {{ day.split('T')[0].split('-').reverse().join('/') }}
                                    </b>
                                </p>
                            </div>
                            <div id="icon_div" class="col">
                                <img id="icon_img" :src="imgCode(state.weather.daily.weather_code[index])" alt="">
                            </div>
                        </div>
                    </td>
                    <td class="center">
                        <div>
                            <p><b>Temp. max: </b>{{ state.weather.daily.temperature_2m_max[index] }}&deg;</p>
                            <p><b>Temp. min: </b>{{ state.weather.daily.temperature_2m_min[index] }}&deg;</p>
                        </div>
                    </td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th class="center">Precipitazioni</th>
                    <th class="center">Venti</th>
                </tr>
            </thead>
            <tbody>
                <tr id="tr-m-560">
                    <td class="center">
                        <p>{{ state.weather.daily.temperature_2m_max[index] }} <small>mm</small></p>
                    </td>
                    <td class="center">
                        <p>{{ state.weather.daily.wind_speed_10m_max[index] }} <small>km/h</small></p>
                    </td>
                </tr>
                <tr>
                    <td class="hr_devider" colspan="2">
                        <hr>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>

</template>

<style scoped>
.center {
    text-align: center;
}

.td-1 {
    display: flex;
    align-items: center;


    & div:first-child {
        width: 30%;

        @media screen and (max-width: 560px) {
            width: 50%;
            text-align: right;
        }

        >p {
            font-size: medium;

            @media screen and (max-width: 400px) {
                font-size: small;
            }
        }
    }

    & div:last-child {
        width: auto;
        display: flex;
        justify-content: center;

        @media screen and (max-width: 560px) {
            width: 50%;
        }

        >img {

            @media screen and (max-width: 400px) {
                width: 70px;
                aspect-ratio: 1 / 1;
            }
        }

    }
}

tr#tr-m-560 {
    & td:first-child {
        >p {
            font-size: medium;

            @media screen and (max-width: 400px) {
                font-size: small;
                font-weight: 500;
            }
        }
    }

    & td:last-child {
        >p {
            font-size: medium;

            @media screen and (max-width: 400px) {
                font-size: small;
                font-weight: 500;
            }
        }
    }
}


.m-560-display {
    display: none;
}

div#table-lg {
    display: block;
}

div#table-sm {
    display: none;
}

td.hr_devider {
    background-color: #3c3c3c58;

    >hr {
        margin: 1px auto;
        height: 2px;
        background: linear-gradient(90deg, white, grey, black, grey, white);
    }
}

@media screen and (max-width: 560px) {

    div#table-lg {
        display: none
    }

    div#table-sm {
        display: block;
    }

    table {
        margin-bottom: 0;
    }
}
</style>