
    let gliders = document.querySelectorAll('.glider');

    [].forEach.call(gliders, function(glider) {
      // do whatever
      new Glider(glider, {
    
      // `auto` allows automatic responsive
      // width calculations
      slidesToShow: '1',
      slidesToScroll: 'auto',
    
      // should have been named `itemMinWidth`
      // slides grow to fit the container viewport
      // ignored unless `slidesToShow` is set to `auto`
      itemWidth: undefined,
    
      // if true, slides wont be resized to fit viewport
      // requires `itemWidth` to be set
      // * this may cause fractional slides
      exactWidth: false,
    
      // speed aggravator - higher is slower
      duration: .5,
    
      draggable: true,
     
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 768,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '3',
            slidesToScroll: '3',
            itemWidth: 300,
            exactWidth:true,
            duration: 0.25,
             arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
          }
        }
      ]
    
    })
    });
