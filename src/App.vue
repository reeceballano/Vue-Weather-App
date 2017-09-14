<template>
	<div id="app" v-bind:class="themeName">
  		<app-weather></app-weather>

 		<md-speed-dial md-mode="scale" class="md-fab-bottom-right">
			<md-button class="md-fab" md-fab-trigger>
				<md-icon md-icon-morph>close</md-icon>
				<md-icon>color_lens</md-icon>
			</md-button>

			<md-button @click="themeEndlessRiver" class="md-fab md-primary md-mini md-clean">
				<md-icon>filter_1</md-icon>
			</md-button>

			<md-button @click="themeVirgin" class="md-fab md-primary md-mini md-clean">
				<md-icon>filter_2</md-icon>
			</md-button>

				<md-button @click="themeCheerUp" class="md-fab md-primary md-mini md-clean">
				<md-icon>filter_3</md-icon>
			</md-button>
		</md-speed-dial>
	</div>
</template>

<script>

import Header from './components/Header';
import Weather from './components/Weather';
import Test from './components/Test';
import FiveDayForecast from './components/FiveDayForecast';

export default {
	name: 'app',
	
	components: {
		'app-header': Header,
		'app-weather': Weather,
		'test-weather': Test,
		'fiveday-weather': FiveDayForecast,
	},
	
	data() {
		return {
			playground: {
		    	theme: 'default'
		    },
		    themeName: '',
		}
	},

	mounted: function() {
		this.themeCheerUp()
	},

	methods: {
		themeEndlessRiver() {
			this.themeName = 'endless_river';
			console.log('endless_river')
		},

		themeVirgin() {
			return this.themeName = 'virgin';
		},

		themeCheerUp() {
			return this.themeName = 'cheer_up';
		},

		setTheme(theme) {
	    	this.playground.theme = theme;
	    }
	}
}

</script>

<style>
	.md-theme-default.md-button:not([disabled]).md-fab {
		background: #f73881 !important;
	}

	.endless_river {
		color: #fff;
		background: #43cea2;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #185a9d, #43cea2);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #185a9d, #43cea2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */		
	}

	.endless_river .loc_temp_wrapper {
		border-color-top: #000 !important;
		border-color-bottom: #000 !important;
	}

	.endless_river .user_info:before {
		background: #fff;
	}

	.endless_river .right_align:before {
		background: #fff;
	}

	.virgin {
		color: #4c2f2f;
		background: #C9FFBF;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #FFAFBD, #C9FFBF);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #FFAFBD, #C9FFBF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, 
		Opera 12+, Safari 7+ */
	}

	.virgin .loc_temp_wrapper {
		border-color-top: #4c2f2f !important;
		border-color-bottom: #4c2f2f !important;
	}

	.virgin .user_info:before {
		background: #4c2f2f;
	}

	.virgin .right_align:before {
		background: #4c2f2f;
	}	

	.cheer_up {
		color: #fff;
		background: #FF4E50;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #F9D423, #FF4E50);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #F9D423, #FF4E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}

	.cheer_up .user_info:before {
		background: #fff;
	}

	.cheer_up .right_align:before {
		background: #fff;
	}

	.cheer_up .loc_temp_wrapper {
		border-color-top: #fff !important;
		border-color-bottom: #fff !important;
	}

	.md-bottom-bar {
		position: absolute;
	}

	.md-fab.md-fab-bottom-right, .md-speed-dial.md-fab-bottom-right {
	    right: 60px;
	    bottom: 80px;
	}
</style>
