<template>
	<div class="weather">
 		<md-layout md-gutter>
			<md-layout md-flex="100" md-align="center" md-flex-offset="0">
				<div class="user_weather">

					<div v-if="weatherClass === 'thunderstorm'" class="icon thunder-storm">
						<div class="cloud"></div>
						<div class="lightning">
							<div class="bolt"></div>
							<div class="bolt"></div>
						</div>
				  	</div>

					<div v-else-if ="weatherClass === 'drizzle'" class="icon sun-shower">
					  <div class="cloud"></div>
					  <div class="sun">
					    <div class="rays"></div>
					  </div>
					  <div class="rain"></div>
					</div>

					<div v-else-if ="weatherClass === 'clouds'" class="icon cloudy">
					  <div class="cloud"></div>
					  <div class="cloud"></div>
					</div>

					<div v-else-if ="weatherClass === 'snow'" class="icon flurries">
						<div class="cloud"></div>
						<div class="snow">
							<div class="flake"></div>
							<div class="flake"></div>
						</div>
					</div>

					<div v-else-if ="weatherClass === 'clear' " class="icon sunny">
						<div class="sun">
							<div class="rays"></div>
						</div>
					</div>

					<div v-else-if ="weatherClass === 'rain' " class="icon rainy">
						<div class="cloud"></div>
						<div class="rain"></div>
					</div>

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

		<md-layout md-align="center" md-gutter>
			<h1 v-if="locTemp" class="loc_temp">{{ locTemp }}</h1>
			<h3 v-else class="loc_temp_disabled">Please turn on your <span class="custom_text">PHONE</span><md-icon class="md-warn">stay_current_portrait</md-icon> location!</h3>
			{{ weather }}
		</md-layout> -->

		<ul>
			<li v-for="w in weatherDate">
				{{ convertDate(w.dt) }} | {{ userPlace }} | {{ w.weather[0].description }} | {{ w.weather[0].id }}
			</li>
		</ul>

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

			wDate() {
				let a = this.weatherDate;
				let b = [];
				while(a.length) {
				    console.log(a.splice(0,8));
				    b = a.splice(0,8);
				}
				return b.dt_txt
			}

		},
 
		methods: {
			convertDate(a) {
				let x = this.$moment();
				console.log(x)
				return this.$moment.unix(a).calendar();
			},

			getWeather() {
				axios.get('https://api.openweathermap.org/data/2.5/forecast/daily?lat=' + this.userLat + '&lon=' + this.userLon + '&units=metric' + '&appid=' + this.apiKey)
				.then((response) => {
					this.userPlace = response.data['city']['name'];
					this.userCountry = response.data['city']['country'];
					this.weather = response.data['list'][0]['weather'][0]['description'];
					this.weatherDate = response.data['list'];
					console.log(this.weatherDate)
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

	.test {
		background: pink;
	}
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