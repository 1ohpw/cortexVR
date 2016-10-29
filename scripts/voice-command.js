var voiceCommandBoxes = document.getElementsByClassName('voice-command-box');

var voiceCommandBox;
for(i=0; i < voiceCommandBoxes.length; i++) {
  voiceCommandBox = voiceCommandBoxes.item(i);
  voiceCommandBox.addEventListener('click', startVoiceCommand);
}


function startVoiceCommand() {
  if (annyang) {
    var commands = {
      'hello': function() {document.getElementById('welcome-sound').play();},

      'open course *course': function(course) {
        console.log(course);
        if(course == 'intro to HTML') {
          document.getElementById('intro-html-sound').play();
        }
      }
    };

    annyang.addCommands(commands);

    annyang.start({autoRestart: false});
  }
}
