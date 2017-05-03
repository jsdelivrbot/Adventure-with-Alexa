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
	"LifelineIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "lifeline" )
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
	"YesIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "yes" )
	},
	"WhatHappenedIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "what happened" )
	},
	"AreYouAlrightIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "are you alright" )
	},
	"HugDavidIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "hug david" )
	},
	"GetOffTheBedIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "get off the bed" )
	},
	"RunToCabinetIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "run to cabinet" )
	},
	"RattledBallIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "rattled ball" )
	},
	"TreatsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "treats" )
	},
	"RunIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "run" )
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
	"TeddyBearPartyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "teddy bear party" )
	},
	"ChesterTakeMeToDavidIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "chester take me to david" )
	},
	"HeySiriIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "hey siri" )
	},
	"SetAReminderIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "set a reminder" )
	},
	"DogIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "dog" )
	},
	"CatIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "cat" )
	},
}