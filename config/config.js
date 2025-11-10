let config = {
  address: "0.0.0.0",
  port: 8080,
  ipWhitelist: [""],
  language: "it",
  timeFormat: 24,
  units: "metric",
  zoom: 1.0,

  // Tip: keep the screen clean and calm
  ipWhitelist: [],

  modules: [
    // Time & date (cute format)
    {
      module: "clock",
      position: "top_left",
      config: {
        displaySeconds: false,
        dateFormat: "dddd, D MMMM"
      }
    },

		{
			module: "calendar",
			header: "Festivita",
			position: "top_left",
			config: {
				maximumEntries: 5,
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://www.webcal.guru/it-IT/scarica_calendario?calendar_instance_id=66"
					}
				]
			}
		},

		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 41.1177,
				lon: 16.8512
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 41.1177,
				lon: 16.8512
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Ansa MONDO",
						url: "https://www.ansa.it/sito/notizie/mondo/mondo_rss.xml"
					}
					
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},



{
    /* Don't share your credentials! */
    module: "MMM-OnSpotify",
    position: "top_left", /* bottom_left, bottom_center */
    config: {
        clientID: "42e7c5e71e0d4946b10583e14065deba",
        clientSecret: "e27696fade904422a9450c374a428734",
        accessToken: "BQC66vRXaZ6ovzFrKDLb8zC1Z6yxbKqfZ0iGcUhef8ry8map_MAFkW5GKD3fgBRYMrKWi6A_QfhEbT_8QISaH-Eun24Y5-Y4vBGAT4lpmuSpLRMUm2sRQefTLoXm_Hop4RZjnAQ6aIn5ULgoPm8bkEUgI9V7ETitmq0EIzMJf-OjAqYqHDYvPuy7DLKZ0UnnzVGyRkvnnaPOwuTIfgG4xNLcCkgZMF68SGDdzwWUU3tryBB59mmiXlowrDdNNIpfRNxuUXpQFg",
        refreshToken: "AQDPLha5UgKQa11vrrPVHnF2xc1JgHiI_T-MHmv8K2JpV5d9z_-QlwP5-aLdOosSwENj0p8avUARP9bqu0lonfvAG7WuGRgjzwtJuqp8MY1_VI2qDDPu-jQsGPZ4FwgiqO0",
        /* Add here other configuration options */
        
        displayWhenEmpty: "user",
        blurCorrectionInAllSides: true
    }
},


    // Cute compliments
    {
      module: "compliments",
      position: "lower_third",
      config: {
      	classes: "thin bright compliments-custom",
        remoteFile: "https://gist.githubusercontent.com/fenix-hub/bc1500a02d45c09f27e4608bc21b3a7e/raw/4ab39686f9be68996daed98c38f919ed3e88982f/6gq3%2523)3WTqYG~U%255E~M8ieNGZMcTyyE!HD41-s+4wC@hhbTLm9xH_mm",
        updateInterval: 15000,
        fadeSpeed: 1000
      }
    }
  ]
};

if (typeof module !== "undefined") { module.exports = config; }

