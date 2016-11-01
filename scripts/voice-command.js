var openCourseSound = new Howl({
  src: ['sounds/voice/intro-html.mp3'],
  onend: openIntroHtml
});

welcomeSound = new Howl({
  src: ['sounds/voice/welcome-intro.mp3'],
});

var voiceCommandBox = document.getElementById('voice-box');
voiceCommandBox.addEventListener('click', startVoiceCommand);



function startVoiceCommand() {
  if (annyang) {
    var commands = {
      'hello': function() {welcomeSound.play();},

      'open course *course': function(course) {
        console.log(course);
        if(course == 'intro to HTML') {
          openCourseSound.play();
        }
      }
    };

    annyang.addCommands(commands);

    annyang.start({autoRestart: false});
  }
}

function openIntroHtml() {
  document.getElementById('welcome-entity').setAttribute('visible', 'false');
  document.getElementById('course-entity').setAttribute('visible', 'true');
}
