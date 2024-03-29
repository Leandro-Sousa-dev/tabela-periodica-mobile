(function() {
    
    var win = window,
        doc = win.document;
  
    // If there's a hash, or addEventListener is undefined, stop here
    if ( !location.hash || !win.addEventListener ) {
  
      //scroll to 1
      window.scrollTo( 0, 1 );
      var scrollTop = 1,
  
      //reset to 0 on bodyready, if needed
      bodycheck = setInterval(function(){
        if( doc.body ){
          clearInterval( bodycheck );
          scrollTop = "scrollTop" in doc.body ? doc.body.scrollTop : 1;
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        } 
      }, 15 );
  
      if (win.addEventListener) {
        win.addEventListener("load", function(){
          setTimeout(function(){
            //reset to hide addr bar at onload
            win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
          }, 0);
        }, false );
      }
    }

  })();
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    window.addEventListener('resize', () => {

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
  
      var elemento = document.getElementById('linha-1');
      elemento.addEventListener('touchstart', function(event) {
      
        console.log('Toque detectado!');
      });
    } else {
    
      console.log('Este dispositivo não suporta eventos de toque.');
    }