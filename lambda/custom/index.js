/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Guinea Pig Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/lambda/data
//=========================================================================================================================================
const data = [
    'Guinea Pigs are not pigs but, rather, rodents. They are also not from Guinea; they originated in the Andes.',
    'The guinea pig was domesticated as early as 5000 B.C. in South America as a source of food. They were also used in religious ceremonies and in traditional medicine.',
    'When a possum attacked her pet guinea pig, 13-year-old Jemma Woldhuis decided to create her own computer program to protect her beloved pet. She coded a computer program that opened her guinea pig’s door during the day and closed the door at night when the possums were out.',
    'Historically, guinea pigs have played a large role in the medicine in South America. Even in the Andes today (where Western medicine is either unavailable or distrusted), the guinea pig is believed to cure a number of illness, including arthritis and jaundice. Treatments include rubbing the guinea pig on the affected areas.',
    'Guinea pigs are not related to pigs, but may have been called pigs for several reasons. For example, they have a similar squeal to a pig’s. They are also somewhat built like a small pig, with a large head, stout neck, and no real tail.',
    'While guinea pigs are not from Guinea, it is possible “guinea” was included in their name because they may have been sold for a guinea (a type of English coin). Another theory is that Europeans may have believed guinea pigs came from the African country Guinea since ships carrying the furry mammals from South America often stopped there before going on to Europe.',
    'Male guinea pigs are called boars, females are referred to as sows, and young ones are called pups.',
    'Guinea pigs can hear sounds of up to 40,000 to 50,000 Hz, and some guinea pig vocalizations are ultrasonic at above 20,000 Hz.',
    'If a female guinea pig is uninterested in a male during courtship, she will sometimes squirt a jet of urine at the persistent male.',
    'If a female guinea pig does not give birth before she is 6 months old, her pubic bones will fuse. If she tries to give birth after this, the fused bones will prevent her from giving birth, which results in the death of the mother and the unborn pups.',
    'Baby guinea pigs are born ready for the world. They are born with their eyes open and are covered in fur. Baby pups are able to drink from a water bottle and can eat hay within hours of being born.',
    'Guinea pigs are very social animals and are truly happy only when they are together with other guinea pigs. Even the most loving human cannot take the place of other guinea pigs.',
    'The scientific name of the guinea pig is Cavia porcellus, which means “little pig.” They belong to the family Caviidae, which is a family of South American rodents. Their nickname is “cavies,” which may be derived from their scientific name Cavia or from their South American name, cuy.',
    'Historically, black guinea pigs were considered especially important in folk medicine for treating illnesses.',
    'Queen Elizabeth I (1533–1603) owned a guinea pig and helped launch the popularity of the furry rodent as a pet.'
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
