exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  twiml.play('https://hello-voice-6036-kjl87l.twil.io/itsdifredericos.mp3')
  callback(null, twiml);
};
