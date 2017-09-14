<template>
		<ul>
			<li v-for="v in fiveDayInfo">
				{{ v.date }}
				<ul>
					<li v-for="x in v.info"> {{ convertHour(x.dt_txt) }} | weather: {{ x.weather[0]['description'] }}</li>
				</ul>
			</li>
		</ul>

</template>

<script>
	import axios from 'axios'
	
	export default {
		data() {
			return {
				apiKey: '63c8e72d24ad6d199e187b8f9ce98851',
				userLat: '',
				userLon:'',
				fiveDays: [],
			}
		},

		mounted: function() {
			this.getLocation();
		},

		computed: {
			weatherClass: function() {
				let wID = this.weatherID;

				if(wID >= 200 && wID <= 232) {
					return 'thunderstorm';
				} else if (wID >= 300 && wID <= 321 ) {
					return 'drizzle';
				} else if (wID >= 500 && wID <= 531 ) {
					return 'rain';
				} else if (wID >= 701 && wID <= 781 ) {
					return 'snow';
				} else if (wID == 800) {
					return 'clear';
				} else if (wID >= 801 && wID <= 804 ) {
					return 'clouds';
				} else if (wID >= 900 && wID <= 906 ) {
					return 'extreme';
				}
			},

			dateNow() {
				return this.$moment().format('dddd, MMMM D');
			},

			fiveDayInfo() {
				let result = _.chain(this.fiveDays)
				  .groupBy(datum => this.$moment(datum.dt_txt).format("dddd MMMM D YYYY").toLocaleUpperCase() )
				  .map((info, date) => ({ date, info })) //using ES6 shorthand to generate the objects
				  .value();

				return result;
			},
		},
 
		methods: {

			convertDate(a) {
				return this.$moment.unix(a).format("ddddMMMMD");
			},

			convertDateTwo(a) {
				return this.$moment(a).format("ddddMMMMDYYYY");
			},

			convertHour(a) {
				return this.$moment(a).format("hh:mm a");
			},

			convertDateThree(a) {
				return this.$moment(a).format("dddd, MMMM D YYYY");
			},

			getWeather() {
				axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=' + this.userLat + '&lon=' + this.userLon + '&units=metric' + '&appid=' + this.apiKey)
				.then((response) => {

					this.fiveDays = response.data['list']
				})
			},

			getLocation()  {
			    if (navigator.geolocation) {
			        navigator.geolocation.getCurrentPosition(this.showPosition);
			    } else { 
			       return "Geolocation is not supported by this browser.";
			    }
			},

			showPosition(position) {
				this.userLat = position.coords.latitude;
				this.userLon = position.coords.longitude;
			    
			    this.getWeather();

			    console.log("Latitude: " + position.coords.latitude + 
			    " | Longitude: " + position.coords.longitude);
			},


		}
	}

</script>

<style>
	body {
		font-family: Open Sans !important;
		color: #000;
	}

	.custom_text {
		color: rgba(245, 5, 103, 0.87);
	}

	.loc_temp_disabled {
		margin-top: 15%;
	}

	#app {
		width: 100%;
	    height: 100vh;
	    margin: 0;
	}

	.weather {
		padding-left: 5%;
		padding-right: 5%;
	}

	.user_weather {
		display: inline-flex;
		width: 100%;
		margin-top: 35px;
    	justify-content: center;
	}

	.icon {
		font-size: 0.5em;
	}

	.rain, .lightning, .snow {
		background: transparent;
	}

	.info_wrapper {
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.user_info h3,
	.user_info h5 {
		margin-top: 0;
		margin-bottom: 0;
	}

	.weatherStatusDisabled,
	.user_info h5 {
		font-weight: 100;
	}

	.weatherStatusDisabled {	
		margin-right: 20px;
		margin-top: 25px;
	}

	.user_info {
	    position: relative;
	    left: 15px;
	    justify-content: center;
	    align-items: center;
	    height: 38px;
	    top: 18px;
	}

	.user_info:before {
		content: '';
		width: 1px;
		height: 100%;
		left: -15px;
		position: absolute;
		background: #fff;
	}

	.loc_temp {
		font-size: 20em;
	    font-weight: 100;
	}
</style>