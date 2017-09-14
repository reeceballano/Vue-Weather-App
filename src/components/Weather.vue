<template>
	<div class="weather">
 		<md-layout md-gutter>
			<md-layout md-flex="100" md-align="center" md-flex-offset="0">

				<div class="user_weather">
					<i v-if="weatherClass" v-bind:class="weatherClass(weatherID)" class="wi"></i>
					<div v-else>
						<h5 class="weatherStatusDisabled">Can't Detect <span class="custom_text">Weather Condition <md-icon class="md-warn">cloud_queue</md-icon></span></h5>
					</div>

					<div class="user_info">
						<h3 v-if="userPlace" class="user_place">{{ userPlace }}, {{ userCountry }}</h3>
						<h3 v-else class="user_place">Unknown <span class="custom_text">Location</span><md-icon class="md-warn">location_on</md-icon></h3>
						<h5 class="user_date">{{  dateNow }}</h5>
					</div>
				</div>

			</md-layout>
		</md-layout>

		<md-layout md-align="center" class="loc_temp_wrapper">
			<h1 v-if="locTemp" class="loc_temp">{{ locTemp }}<span><sup>&#8451;</sup></span></h1>
			<h3 v-else class="loc_temp_disabled">Please turn on your <span class="custom_text">PHONE</span><md-icon class="md-warn">stay_current_portrait</md-icon> location!</h3>
		</md-layout>

		<md-layout md-align="end">
			<md-layout md-flex="100">
				<div class="user_weather fivedays" v-for="w in weatherDate">
					<div class="user_info">
						<h3 v-if="userPlace" class="user_place">{{ convertDays(w.dt) }}</h3>
						<h3 v-else class="user_place">Unknown <span class="custom_text">Location</span><md-icon class="md-warn">location_on</md-icon></h3>
						<h5 class="user_date">{{  convertDate(w.dt) }}</h5>
					</div>

					<i v-if="weatherClass" v-bind:class="weatherClass(w.weather[0].id)" class="wi"></i>
					<div v-else>
						<h5 class="weatherStatusDisabled">Can't Detect <span class="custom_text">Weather Condition <md-icon class="md-warn">cloud_queue</md-icon></span></h5>
					</div>
				</div>
			</md-layout>
		</md-layout>
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default {
		data() {
			return {
				apiKey: '63c8e72d24ad6d199e187b8f9ce98851',
				userLat: '',
				userLon:'',
				userLocation: '',
				userCountry: '',
				userPlace: '',
				locTemp: '',
				weather: '',
				weatherID: '',
				weatherDate: [],
				weatherTomorrow: '',
				weatherThree: '',
				weatherFour: '',
				weatherFive: '',
				weatherSix: '',
				weatherSeven: '',
			}
		},

		mounted: function() {
			this.getLocation();
		},

		computed: {
			dateNow() {
				return this.$moment().format('dddd, MMMM D');
			},

		},
 
		methods: {
			weatherClass: function(wID) {
				if(wID >= 200 && wID <= 232) {
					return 'wi-thunderstorm';
				} else if (wID >= 300 && wID <= 321 ) {
					return 'wi-sleet';
				} else if (wID >= 500 && wID <= 531 ) {
					return 'wi-rain';
				} else if (wID >= 701 && wID <= 781 ) {
					return 'wi-snow';
				} else if (wID == 800) {
					return 'wi-day-sunny';
				} else if (wID >= 801 && wID <= 804 ) {
					return 'wi-cloudy';
				} else if (wID >= 900 && wID <= 906 ) {
					return 'wi-strong-wind';
				}
			},

			convertDays(a) {
				let x = this.$moment.unix(a).calendar();
				x = x.split(/\b/)[0];
				console.log(x)
				return x;
			},

			convertDate(a) {
				return this.$moment.unix(a).format('MMMM D');
			},

			getWeather() {
				axios.get('https://api.openweathermap.org/data/2.5/forecast/daily?lat=' + this.userLat + '&lon=' + this.userLon + '&units=metric' + '&appid=' + this.apiKey)
				.then((response) => {
					this.userPlace = response.data['city']['name'];
					this.userCountry = response.data['city']['country'];
					this.weather = response.data['list'][0]['weather'][0]['description'];
					this.weatherDate = response.data['list'];
					this.weatherID = response.data['list'][0]['weather'][0]['id'];
					this.locTemp = response.data['list'][0]['temp']['max'];
					this.weatherTomorrow = response.data['list'][1];
					this.weatherThree = response.data['list'][2];
					this.weatherFour = response.data['list'][3];
					this.weatherFive = response.data['list'][4];
					this.weatherSix = response.data['list'][5];
					this.weatherSeven = response.data['list'][6];
					console.log(response.data)
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

	sup {
		font-size: .2em;
	}

	body {
		font-family: Open Sans !important;
		color: #000;
	}

	.fivedays .user_info:before {
		width: 0 !important;
	}

	.fivedays .user_info {
		text-align: left;
	}

	.fivedays .wi {
		margin-left: 45px;
	}

	.fivedays {
		border-bottom: 1px solid #fff !important;
	    padding-bottom: 20px;
	    padding-top: 0px;
		margin-top: 0 !important;
		justify-content: left !important;
	}

	.wi {
		margin-top: 15px;
	    margin-right: 21px;
	    font-size: 3em;
	}

	.custom_text {
		color: rgba(245, 5, 103, 0.87);
	}

	.loc_temp_disabled {
		margin-top: 15%;
	}

	#app {
		width: 100%;
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
	}

	.loc_temp {
		font-size: 12em;
	    font-weight: 100;
	    margin-left: 55px;
	    margin-top: 80px;
    	margin-bottom: 85px;
	}

	.loc_temp_wrapper {
		border-top: 1px solid;
	    border-bottom: 1px solid;
	    margin-top: 20px;
	}
</style>