var partials = document.getElementsByClassName('partial');

var openCourseSound = new Howl({
  src: ['sounds/voice/intro-html.mp3'],
  onend: openIntroHtml
});

welcomeSound = new Howl({
  src: ['sounds/voice/welcome-intro.mp3'],
});

var theaterSound = new Howl({
  src: ['sounds/voice/theater.mp3'],
  onend: function() {
    for(i = 0; i < partials.length; i++) {
      if(partials[i].id != "theater-entity") {
        partials[i].setAttribute('visible', 'false');
      }
    }

    document.getElementById('theater-entity').setAttribute('visible', 'true');

    document.getElementById('intro-html-lecture').setAttribute('src', '#intro-html-vid');
    document.getElementById('intro-html-vid').play();
  }
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
      },

      'theater': function() {
        theaterSound.play();
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
