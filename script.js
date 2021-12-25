var randomTextFunction = function(el){
  'use strict';
  var m = this;
  
  m.init = function(){
    m.codeletters = "#!?$+*/=:.;'";
    m.message = "Shri30yans";
    m.current_length = 0;
    m.fadeBuffer = false;
    
    setTimeout(m.animateIn, 100);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.message.length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.message.length) {
        m.current_length = m.message.length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      setTimeout(m.animateIn, 20);
    } else { 
      setTimeout(m.animateFadeBuffer, 20);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.message.length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.message.charAt(i)});
      }
    }
    
    var message = ""; 
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }
    
    $(el).html(message);
    setTimeout(m.animateFadeBuffer, 50);};

  m.init();
  }
console.clear();
var text = new randomTextFunction($('.randomText'));


