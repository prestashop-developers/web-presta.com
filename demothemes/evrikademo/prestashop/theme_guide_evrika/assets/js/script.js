/*!
 * Documenter 2.0
 * http://rxa.li/documenter
 *
 * Copyright 2011, Xaver Birsak
 * http://revaxarts.com
 *
 */
 
$(document).ready(function() {
	var timeout,
		sections = new Array(),
		sectionscount = 0,
		win = $(window),
		sidebar = $('#documenter_sidebar'),
		nav = $('#documenter_nav'),
		logo = $('#documenter_logo'),
		navanchors = $('a',nav),
		timeoffset = 50,
		hash = location.hash || null;
		iDeviceNotOS4 = (navigator.userAgent.match(/iphone|ipod|ipad/i) && !navigator.userAgent.match(/OS 5/i)) || false,
		badIE = $('html').prop('class').match(/ie(6|7|8)/)|| false;
		
	//handle external links (new window)
	$('a[href^=http]').bind('click',function(){
		window.open($(this).attr('href'));
		return false;
	});
	
	//IE 8 and lower doesn't like the smooth pagescroll
	if(!badIE){
		window.scroll(0,0);
		
		$('a[href^=#]').bind('click touchstart',function(){
			hash = $(this).attr('href');
			$.scrollTo.window().queue([]).stop();
			goTo(hash);
			return false;
		});
		
		//if a hash is set => go to it
		if(hash){
			setTimeout(function(){
				goTo(hash);
			},500);
		}
	}
	
	
	//We need the position of each section until the full page with all images is loaded
	win.bind('load',function(){
		
		var sectionselector = 'section';
		
		//Documentation has subcategories		
		if(nav.find('ol').length){
			sectionselector = 'section, h4';
		}

		//saving some information
		$(sectionselector).each(function(i,e){
			var _this = $(this);
			var p = {
				id: this.id,
				pos: _this.offset().top
			};
			sections.push(p);
		});
		
		
		//iPhone, iPod and iPad don't trigger the scroll event
		if(iDeviceNotOS4){
			nav.find('a').bind('click',function(){
				setTimeout(function(){
					win.trigger('scroll');				
				},duration);
				
			});
			//scroll to top
			window.scroll(0,0);
		}

		//how many sections
		sectionscount = sections.length;
		
		//bind the handler to the scroll event
		win.bind('scroll',function(event){
			clearInterval(timeout);
			//should occur with a delay
			timeout = setTimeout(function(){
				//get the position from the very top in all browsers
				pos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				
				//iDeviceNotOS4s don't know the fixed property so we fake it
				if(iDeviceNotOS4){
					sidebar.css({height:document.height});
					logo.css({'margin-top':pos});
				}

				//activate Nav element at the current position
				activateNav(pos);
			},timeoffset);
		}).trigger('scroll');

	});
	
	//the function is called when the hash changes
	function hashchange(){
		goTo(location.hash, false);
	}
	
	//scroll to a section and set the hash
	function goTo(hash,changehash){
		win.unbind('hashchange', hashchange);
		hash = hash.replace(/!\//,'');
		win.stop().scrollTo(hash,duration,{
			easing:easing,
			axis:'y'			
		});
		if(changehash !== false){
			var l = location;
			location.href = (l.protocol+'//'+l.host+l.pathname+'#!/'+hash.substr(1));
		}
		win.bind('hashchange', hashchange);
	}
	
	
	//activate current nav element
    
	function activateNav(pos){
		var offset = 100,
		current, next, parent, isSub, hasSub;
		win.unbind('hashchange', hashchange);
		currentElement = '';
		navanchors.each(function(){
			var currLink = $(this);
        	var refElement = $(currLink.attr("href"));
        	if(refElement.length > 0){
	        	if (refElement.offset().top <= pos+offset) {
	        		currentElement = currLink;
		        }
	    	}
		});
		//dont care if current element is level 1
		currentActivateNav = $("#documenter_nav").find("a.current").first();
		if($(currentElement).parent().parent().is('#documenter_nav')){
			newAcitveNav = currentElement;
		}else{
			newAcitveNav = $(currentElement).closest('.level-1').parent().find("a").first();
		}
		if($(currentActivateNav).attr('href') != $(newAcitveNav).attr('href')){
			$('ul', $(currentActivateNav).parent()).slideUp('fast');
		}
		
		navanchors.removeClass('current');
        currentElement.addClass("current");
        
        if($(currentElement).parent().parent().hasClass('level-2')){
        	level1 = $(currentElement).closest('.level-1');
        	level2 = $(currentElement).closest('.level-2');
        	//drop down data
        	$('ul', $(level1).parent()).slideDown('fast');
        	$(level1).parent().find('a').first().addClass('current');
        	$(level2).parent().find('a').first().addClass('current');
        }else if($(currentElement).parent().parent().hasClass('level-1')){
        	level1 = $(currentElement).closest('.level-1');
        	$('ul', $(level1).parent()).slideDown('fast');
        	$(level1).parent().find('a').first().addClass('current');
        }else if($(currentElement).parent().parent().is('#documenter_nav')){
        	$('ul', $(currentElement).parent()).slideDown('fast');
        }
	}
	
    // make code pretty
    window.prettyPrint && prettyPrint();
	
});