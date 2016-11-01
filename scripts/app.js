var partials = document.getElementsByClassName('partial');

var welcomeSound = new Howl({
  src: ['sounds/voice/welcome-intro.mp3'],
  onend: welcomeAnimation
});

var selectCourseSound = new Howl({
  src: ['sounds/voice/welcome-select-course.mp3'],
  onend: showCourseBox
});

var welcomeNavSound = new Howl({
  src: ['sounds/voice/welcome-nav.mp3'],
  onend: function() {
    moveNavSpheresToNav();

    setTimeout(function() {
      selectCourseSound.play();
    }, 1600);
  }
});

var welcomeVoiceBoxSound = new Howl({
  src: ['sounds/voice/welcome-voice-box.mp3'],
  onend: function() {
    moveVoiceBoxToNav();
    setTimeout(function() {
      welcomeNavSound.play();
      showNavSpheres();
    }, 1400);
  }
});

var welcomeThemeSound = new Howl({
  src: ['sounds/welcome-theme.mp3']
})

welcomeSound.play();

document.getElementById('intro-html-box').addEventListener('click', function() {
document.getElementById('welcome-entity').setAttribute('visible', 'false');

document.getElementById('course-entity').setAttribute('visible', 'true');
});

document.getElementById('intro-html-theater').addEventListener('click', function() {
document.getElementById('course-entity').setAttribute('visible', 'false');

document.getElementById('lecture-entity').setAttribute('visible', 'true');
document.getElementById('intro-html-lecture').setAttribute('src', '#intro-html-vid');
document.getElementById('intro-html-vid').play();
});

document.getElementById('intro-html-reading').addEventListener('click', function() {
document.getElementById('course-entity').setAttribute('visible', 'false');

document.getElementById('reading-entity').setAttribute('visible', 'true');
});

//Nav

document.getElementById('welcome-sphere').addEventListener('click', function() {
  for(i = 0; i < partials.length; i++) {
    if(partials[i].id != "welcome-entity") {
      partials[i].setAttribute('visible', 'false');
    }
  }

  document.getElementById('welcome-entity').setAttribute('visible', 'true');
});

function setNavBarTitles() {
  document.getElementById('welcome-sphere').addEventListener('mouseenter', function() {
    this.setAttribute('color', '#d32f2f');
    document.getElementById('welcome-sphere-text').setAttribute('visible', 'true');
  });

  document.getElementById('welcome-sphere').addEventListener('mouseleave', function() {
    this.setAttribute('color', '#fff');
    document.getElementById('welcome-sphere-text').setAttribute('visible', 'false');
  });
}

function welcomeAnimation() {
  var titleAnimation = "property:position; from:-3.8 1 -6; to:-3.8 6 -10;" +
                        "dur: 8000";
  document.getElementById('title').setAttribute('animation', titleAnimation);

  setTimeout(function() {
    welcomeVoiceBoxSound.play();
    var voiceBoxAnimationShow = "property:visible; from: false; to:true";
    document.getElementById('voice-box').setAttribute('animation', voiceBoxAnimationShow);
  }, 800);

}

function moveVoiceBoxToNav() {
  document.getElementById('voice-box').removeAttribute('animation');
  var voiceBoxAnimationMove = "property:position; from:0 0.4 -4; to:-6 -10 -60";
  var voiceBoxAnimationGrow = "property:scale; to: 8 8 8";
  document.getElementById('voice-box').setAttribute('animation__move', voiceBoxAnimationMove);
  document.getElementById('voice-box').setAttribute('animation__grow', voiceBoxAnimationGrow);
}

function showNavSpheres() {
  document.getElementById('welcome-sphere');
  var navSphereAnimationShow = "property:visible; from:false; to:true";
  document.getElementById('welcome-sphere').setAttribute('animation__show', navSphereAnimationShow);
}

function showCourseBox() {
  var courseBoxAnimationShow = "property:visible; from: false; to:true";
  var courseBoxAnimationSpin = "property:rotation; to: 0 360 360; dur: 20000; loop: true; easing: easeInOutSine"
  document.getElementById('intro-html-box').setAttribute('animation__show', courseBoxAnimationShow);
  document.getElementById('intro-html-box').setAttribute('animation__spin', courseBoxAnimationSpin);
}

function moveNavSpheresToNav() {
  var navSphereAnimationMove = "property:position; to: 4 -10 -60";
  var navSphereAnimationGrow = "property:scale; to: 4 4 4";
  document.getElementById('welcome-sphere').setAttribute('animation__move', navSphereAnimationMove);
  document.getElementById('welcome-sphere').setAttribute('animation__grow', navSphereAnimationGrow);

  setNavBarTitles();
}
