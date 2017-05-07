var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"StarWarsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "star wars" )
	},
	"SpaceQuizIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "space quiz" )
	},
	"TeddyBearIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "teddy bear" )
	},
	"MasterYodaIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "master yoda" )
	},
	"MasterAnakinIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "master anakin" )
	},
	"HeavyLightsaberIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "heavy lightsaber" )
	},
	"LightLightsaberIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "light lightsaber" )
	},
	"LongLightsaberIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "long lightsaber" )
	},
	"ShortLightsaberIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "short lightsaber" )
	},
	"StartIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "start" )
	},
	"JupiterIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "jupiter" )
	},
	"MarsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "mars" )
	},
	"NextIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "next" )
	},
	"YesIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "yes" )
	},
	"HugIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "hug" )
	},
	"GetOffTheBedIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "get off the bed" )
	},
	"RunIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "run" )
	},
	"RattledBallIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "rattled ball" )
	},
	"CatTreatsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "cat treats" )
	},
	"PatIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "pat" )
	},
	"ScareHerIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "scare her" )
	},
	"SixIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "6" )
	},
	"SevenIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "7" )
	},
	"ThankYouChesterIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "thank you chester" )
	},
	"SorryChesterIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "sorry chester" )
	},
	"FourteenIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "14" )
	},
	"TwelveIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "12" )
	},
	"ReadMeTheInvitationIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "read me the invitation" )
	},
	"SendIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "send" )
	},
	"PrintTheFlyerIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "print the flyer" )
	},
	"OkayIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "okay" )
	},
	"DogIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "dog" )
	},
	"CatIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "cat" )
	},
	"ArmstrongIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "armstrong" )
	},
	"AldrinIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "aldrin" )
	},
	"EightIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "8" )
	},
	"NineIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "9" )
	},
	"YuriGagarinIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "yuri  gagarin" )
	},
	"NeilArmstrongIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "neil armstrong" )
	},
	"NoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "no" )
	},
	"SuperstarIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "superstar" )
	},
	"ExplosionIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "explosion" )
	},
}