<template>
	<div v-if="weatherClass(200) === 'thunderstorm'" class="icon thunder-storm">
		<div class="cloud"></div>
		<div class="lightning">
			<div class="bolt"></div>
			<div class="bolt"></div>
		</div>
  	</div>

	<div v-else-if ="weatherClass(200) === 'drizzle'" class="icon sun-shower">
	  <div class="cloud"></div>
	  <div class="sun">
	    <div class="rays"></div>
	  </div>
	  <div class="rain"></div>
	</div>

	<div v-else-if ="weatherClass(200) === 'clouds'" class="icon cloudy">
	  <div class="cloud"></div>
	  <div class="cloud"></div>
	</div>

	<div v-else-if ="weatherClass(200) === 'snow'" class="icon flurries">
		<div class="cloud"></div>
		<div class="snow">
			<div class="flake"></div>
			<div class="flake"></div>
		</div>
	</div>

	<div v-else-if ="weatherClass(200) === 'clear' " class="icon sunny">
		<div class="sun">
			<div class="rays"></div>
		</div>
	</div>

	<div v-else-if ="weatherClass(200) === 'rain' " class="icon rainy">
		<div class="cloud"></div>
		<div class="rain"></div>
	</div>

	<div v-else-if ="weatherClass(200) === 'extreme' " class="icon rainy">
		<div class="cloud"></div>
		<div class="rain"></div>
	</div>

	<div v-else>
		<h5 class="weatherStatusDisabled">Can't Detect <span class="custom_text">Weather Condition <md-icon class="md-warn">cloud_queue</md-icon></span></h5>
	</div>	
</template>

<script>

export default {
	props: {
      weatherClass(200): {
        type: Array,
        required: true
      }
    },	
	data() {
		return {

		}
	},
}

</script>

<style>
</style>