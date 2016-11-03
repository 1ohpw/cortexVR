window.onload = function() {
    var partials = document.getElementsByClassName('partial');

    var welcomeSound = new Howl({
      src: ['sounds/voice/welcome-intro.mp3'],
      onend: welcomeAnimation
    });

    var selectCourseSound = new Howl({
      src: ['sounds/voice/welcome-select-course.mp3'],
      onend: showCourseBox
    });

    var welcomeSynapsesSound = new Howl({
      src: ['sounds/voice/welcome-synapses.mp3'],
      onend: function() {
        moveSynapsesToNav();

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
          welcomeSynapsesSound.play();
          showSynapses();
        }, 1400);
      }
    });

    var courseLobeSound = new Howl({
      src: ['sounds/voice/intro-html-lobe.mp3']
    });

    var exploreSound = new Howl({
      src: ['sounds/voice/explore.mp3']
    });

    var welcomeThemeSound = new Howl({
      src: ['sounds/welcome-theme.mp3']
    });

    var openCourseSound = new Howl({
      src: ['sounds/voice/intro-html.mp3'],
      onend: function() {
        setTimeout(function(){
          courseLobeSound.play();
        }, 400);
      }
    });

    var htmlDomTreeSound = new Howl({
      src: ['sounds/voice/html-dom-tree.mp3']
    });

    welcomeSound.play();

    document.getElementById('intro-html-box').addEventListener('click', function() {

    document.getElementById('welcome-entity').setAttribute('visible', 'false');
    document.getElementById('course-entity').setAttribute('visible', 'true');

    setTimeout(function(){
      courseLobeSound.play();
    }, 400);

    });

    document.getElementById('intro-html-theater').addEventListener('click', function() {
    document.getElementById('course-entity').setAttribute('visible', 'false');

    document.getElementById('theater-entity').setAttribute('visible', 'true');
    document.getElementById('intro-html-lecture').setAttribute('src', '#intro-html-vid');
    document.getElementById('intro-html-vid').play();
    });

    document.getElementById('intro-html-explore').addEventListener('click', function() {
    document.getElementById('course-entity').setAttribute('visible', 'false');

    document.getElementById('explore-entity').setAttribute('visible', 'true');

    setTimeout(function() {
      exploreSound.play();
    });
    });

    document.getElementById('html-dom-info').addEventListener('click', function() {
      htmlDomTreeSound.play();
    });

    //Nav

    document.getElementById('welcome-synapse').addEventListener('click', function() {
      for(i = 0; i < partials.length; i++) {
        if(partials[i].id != "welcome-entity") {
          partials[i].setAttribute('visible', 'false');
        }
      }

      document.getElementById('welcome-entity').setAttribute('visible', 'true');
    });

    document.getElementById('course-synapse').addEventListener('click', function() {
      for(i = 0; i < partials.length; i++) {
        if(partials[i].id != "course-entity") {
          partials[i].setAttribute('visible', 'false');
        }
      }

      document.getElementById('course-entity').setAttribute('visible', 'true');
    });

    function setUpNavBar() {
      document.getElementById('welcome-synapse').addEventListener('mouseenter', function() {
        this.setAttribute('color', '#d32f2f');
        document.getElementById('welcome-synapse-text').setAttribute('visible', 'true');
      });

      document.getElementById('welcome-synapse').addEventListener('mouseleave', function() {
        this.setAttribute('color', '#fff');
        document.getElementById('welcome-synapse-text').setAttribute('visible', 'false');
      });

      document.getElementById('voice-box').addEventListener('mouseenter', function() {
        this.setAttribute('color', '#d32f2f');
      });

      document.getElementById('voice-box').addEventListener('mouseleave', function() {
        this.setAttribute('color', '#fffudo');
      });

      document.getElementById('course-synapse').addEventListener('mouseenter', function() {
        this.setAttribute('color', '#d32f2f');
        document.getElementById('course-synapse-text').setAttribute('visible', 'true');
      });

      document.getElementById('course-synapse').addEventListener('mouseleave', function() {
        this.setAttribute('color', '#fff');
        document.getElementById('course-synapse-text').setAttribute('visible', 'false');
      });
    }


    function welcomeAnimation() {
      var titleAnimation = "property:position; from:-3.9 1 -6; to:-3.9 6 -10;" +
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

    function showSynapses() {
      var navSphereAnimationShow = "property:visible; from:false; to:true";
      document.getElementById('welcome-synapse').setAttribute('animation__show', navSphereAnimationShow);
      document.getElementById('course-synapse').setAttribute('animation__show', navSphereAnimationShow);
    }

    function showCourseBox() {
      var courseBoxAnimationShow = "property:visible; from: false; to:true";
      var courseBoxAnimationSpin = "property:rotation; to: 0 360 360; dur: 20000; loop: true; easing: easeInOutSine"
      document.getElementById('intro-html-box').setAttribute('animation__show', courseBoxAnimationShow);
      document.getElementById('intro-html-box').setAttribute('animation__spin', courseBoxAnimationSpin);
    }

    function moveSynapsesToNav() {
      var welcomeSynapseAnimationMove = "property:position; to: 4 -10 -60";
      var courseSynapseAnimationMove = "property:position; to: 14 -10 -60";
      var navSynapseAnimationGrow = "property:scale; to: 4 4 4";
      document.getElementById('welcome-synapse').setAttribute('animation__move', welcomeSynapseAnimationMove);
      document.getElementById('welcome-synapse').setAttribute('animation__grow', navSynapseAnimationGrow);
      document.getElementById('course-synapse').setAttribute('animation__move', courseSynapseAnimationMove);
      document.getElementById('course-synapse').setAttribute('animation__grow', navSynapseAnimationGrow);

      setUpNavBar();
    }
}
