$( document ).ready(function() {
  
  //Video
  $('#closeVideoButton').click(function(){
  	$('#videoiFrame').attr('src','');
    $('#videoBlock').fadeOut(300);
  });
  
  //Foyer
  //Malaysia
  $('#malaysiaRecognitionButton').click(function(){
  	$('#malaysiaRecognition').fadeIn(300);
  });
  
  $('#malaysiaRecognitionBackButton').click(function(){
  	$('#malaysiaRecognition').fadeOut(300);
  });
  
  //Singapore
  $('#singaporeRecognitionButton').click(function(){
  	$('#singaporeRecognition').fadeIn(300);
  });
  
  $('#singaporeRecognitionBackButton').click(function(){
  	$('#singaporeRecognition').fadeOut(300);
  });
  
  //Products
  $('#productButton').click(function(){
  	$('#productBlock').fadeIn(300);
  });
  
  $('#productBackButton').click(function(){
  	$('#productBlock').fadeOut(300);
  });
  
  //Program
  $('#programButton').click(function(){
  	window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/assets/2022%20Virtual%20Leadership%20Conference.pdf");
  });
  
  //Mentor
  $('#mentorSharingButton').click(function(){
  	$('#mentorSharing').fadeIn(300);
  });
  
  $('#mentorSharingBackButton').click(function(){
  	$('#mentorSharing').fadeOut(300);
  });
  
//Mentor Sharing  
  var mentorVideo1 = "https://player.vimeo.com/video/658705342";
  var mentorVideo2 = "https://player.vimeo.com/video/658705613";
  var mentorVideo3 = "https://player.vimeo.com/video/658705780";
  var mentorVideo4 = "https://player.vimeo.com/video/658705978";
  
  $('#mentor1Button').click(function(){
  	$('#videoiFrame').attr('src',mentorVideo1);
    $('#videoBlock').fadeIn(300);
  });
  
  $('#mentor2Button').click(function(){
  	$('#videoiFrame').attr('src',mentorVideo2);
    $('#videoBlock').fadeIn(300);
  });
  
  $('#mentor3Button').click(function(){
  	$('#videoiFrame').attr('src',mentorVideo3);
    $('#videoBlock').fadeIn(300);
  });
  
  $('#mentor4Button').click(function(){
  	$('#videoiFrame').attr('src',mentorVideo4);
    $('#videoBlock').fadeIn(300);
  });

//Recognition
  //Malaysia
  $('#my251kCOAButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658712267");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#my155kCOAButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658711558");
    $('#videoBlock').fadeIn(300);
  });
    
  $('#myCOPSSDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658712862");
    $('#videoBlock').fadeIn(300);
  });
 
  $('#myOnTrackCOPSSDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658714615");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#myOnTrackCOSButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658712987");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#myOnTrackCOA251KButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658711912");
    $('#videoBlock').fadeIn(300);
  });
    
  $('#myOnTrackCOA155KButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658711222");
    $('#videoBlock').fadeIn(300);
  });
      
  $('#myCOEButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658712710");
    $('#videoBlock').fadeIn(300);
  });
        
  $('#myOnTrackCOEButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658712469");
    $('#videoBlock').fadeIn(300);
  });
          
  $('#myNSDDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658709053");
    $('#videoBlock').fadeIn(300);
  });
            
  $('#myNESDDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658708845");
    $('#videoBlock').fadeIn(300);
  });
              
  $('#myNEESDDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658708716");
    $('#videoBlock').fadeIn(300);
  });
                
  $('#altisButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658703177");
    $('#videoBlock').fadeIn(300);
  });
                  
  $('#corollaButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658703408");
    $('#videoBlock').fadeIn(300);
  });
                    
  $('#avanzaButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658703307");
    $('#videoBlock').fadeIn(300);
  });
                      
  $('#yarisButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658703593");
    $('#videoBlock').fadeIn(300);
  });
                        
  $('#myLeadButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658713304");
    $('#videoBlock').fadeIn(300);
  });
  
  //Singapore
  $('#sg251kCOAButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658713304");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#sg155kCOAButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658706552");
    $('#videoBlock').fadeIn(300);
  });
    
  $('#sgOnTrackCOSButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658706927");
    $('#videoBlock').fadeIn(300);
  });
      
  $('#sgOnTrackCOEButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658706739");
    $('#videoBlock').fadeIn(300);
  });
        
  $('#sgOnTrackCOPSSDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658706825");
    $('#videoBlock').fadeIn(300);
  });
          
  $('#sgOnTrackCOA251KButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658706643");
    $('#videoBlock').fadeIn(300);
  });
            
  $('#sgOnTrackCOA155KButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658692306");
    $('#videoBlock').fadeIn(300);
  });
              
  $('#sgNSDDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658707035");
    $('#videoBlock').fadeIn(300);
  });
                
  $('#sgLeadButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/658707035");
    $('#videoBlock').fadeIn(300);
  });
  
 //Mary Kay Products
  $('#productGalleryButton,#productGalleryButton2').click(function(){
  	$('#productBlock').fadeIn(300);
  });
  
  $('#marketingBackButton').click(function(){
  	$('#productBlock').fadeOut(300);
  });
  
  $('#findOutMore1').click(function(){
  	$('#pinkBlock').fadeIn(300);
    $('#pinkVideoiFrame').attr('src', "https://player.vimeo.com/video/590795281?h=2a4d48759e");
  });
  
  $('#closePinkButton').click(function(){
  	$('#pinkBlock').fadeOut(300);
    $('#pinkVideoiFrame').attr('src', "");
  });
  
  $('#pinkMoreInfoButton').click(function(){
  	window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/Mary%20Kay%20Pink%20Changing%20Lives.pdf");
  });
  
  $('#findOutMore2').click(function(){
  	window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/Mary%20Kay%20Pink%20Doing%20Green.pdf");
  });
  
  $('#whyButton').click(function(){
  	$('#whyBlock').fadeIn(300);
    $('#whyVideoiFrame').attr('src', "https://player.vimeo.com/video/590795449?h=090fa0aed8");
  });
  
  $('#closeWhyButton').click(function(){
  	$('#whyBlock').fadeOut(300);
    $('#whyVideoiFrame').attr('src', "");
  });
  
  $('#sustainableButton').click(function(){
  	window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/Mary%20Kay%20Sustainable%20Business%20Priorities.pdf");
  });
    
  $('#scienceButton').click(function(){
  	window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/The%20Science%20Behind%20The%20Products.pdf");
  });
  
  $('#karenButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590899419");
    $('#videoBlock').fadeIn(300);
  });
    
  $('#watchButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590795602?h=e49442496f");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#newProductsButton').click(function(){
  	$('#newProductsBlock').fadeIn(300);
  });
  
  $('#newProductsBackButton').click(function(){
  	$('#newProductsBlock').fadeOut(300);
  });
    
  $('#infoButton1').click(function(){
  	$('#product1Block').fadeIn(300);
  });
  
  $('#product1BackButton').click(function(){
  	$('#product1Block').fadeOut(300);
    $('#product1Slider').css('display','block');
    $('#product1Video').css('display','none');
    $('#product1VideoiFrame').attr('src','');
  });
  
  $('#product1InfoButton').click(function(){
    $('#product1Slider').css('display','block');
    $('#product1Video').css('display','none');
    $('#product1VideoiFrame').attr('src','');
  });
  
  $('#product1VideoButton').click(function(){
    $('#product1Slider').css('display','none');
    $('#product1Video').css('display','block');
    $('#product1VideoiFrame').attr('src','https://player.vimeo.com/video/590794812?h=13e2062340');
  });
  
  $('#product1Image1, #product1Image2, #product1Image3').click(function(){
    window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/luis%20casco%20eyeshadow.pdf");
  });
  
  $('#infoButton2').click(function(){
  	$('#product2Block').fadeIn(300);
  });
  
  $('#product2BackButton').click(function(){
  	$('#product2Block').fadeOut(300);
    $('#product2Slider').css('display','block');
    $('#product2Video').css('display','none');
    $('#product2VideoiFrame').attr('src','');
  });
   
  $('#product2InfoButton').click(function(){
    $('#product2Slider').css('display','block');
    $('#product2Video').css('display','none');
    $('#product2VideoiFrame').attr('src','');
  });
  
  $('#product2VideoButton').click(function(){
    $('#product2Slider').css('display','none');
    $('#product2Video').css('display','block');
    $('#product2VideoiFrame').attr('src','https://player.vimeo.com/video/590794716?h=46ef84b303');
  });
  
  $('#product2Image1, #product2Image2').click(function(){
    window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/2%20step%20mask.pdf");
  });
    
  $('#infoButton3').click(function(){
  	$('#product3Block').fadeIn(300);
  });
  
  $('#product3BackButton').click(function(){
  	$('#product3Block').fadeOut(300);
  });
  
  $('#product3Image1, #product3Image2, #product3Image3').click(function(){
    window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/metallic%20mask.pdf");
  });
  
  $('#infoButton4').click(function(){
  	$('#product4Block').fadeIn(300);
  });
  
  $('#product4BackButton').click(function(){
  	$('#product4Block').fadeOut(300);
  });
  
  $('#product4Image1, #product4Image2').click(function(){
    window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/body%20care.pdf");
  });
  
  $('#infoButton5').click(function(){
  	$('#product5Block').fadeIn(300);
  });
  
  $('#product5BackButton').click(function(){
  	$('#product5Block').fadeOut(300);
  });
  
  $('#product5Image1, #product5Image2').click(function(){
    window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/fragrances.pdf");
  });
  
  $('#infoButton6').click(function(){
  	$('#product6Block').fadeIn(300);
  });
  
  $('#product6BackButton').click(function(){
  	$('#product6Block').fadeOut(300);
  });
  
  $('#product6Image1, #product6Image2, #product6Image3, #product6Image4, #product6Image5').click(function(){
    window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/precious%20gem%20makeup.pdf");
  });
 
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
});
