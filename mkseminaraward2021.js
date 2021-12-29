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
  
 //Products
  //February
  $('#febProductButton').click(function(){
  	$('#febProductBlock').fadeIn(300);
  });
  
  $('#febProductBackButton').click(function(){
  	$('#febProductBlock').fadeOut(300);
  });
  
  $('#febLearnMoreButton').click(function(){
  	window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/assets/Satin%20Hands_LC.pdf");
  });
  
  //March
  $('#marchProductButton').click(function(){
  	$('#marchProductBlock').fadeIn(300);
  });
  
  $('#marchProductBackButton').click(function(){
  	$('#marchProductBlock').fadeOut(300);
  });
  
  $('#marchLearnMoreButton').click(function(){
  	window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/assets/Supreme%20Lip_LC.pdf");
  });
  
  $('#marchVideoButton').click(function(){
  	$('#videoiFrame').attr('src',"https://player.vimeo.com/video/658691983");
    $('#videoBlock').fadeIn(300);
  });
  
  //April
  $('#aprilProductButton').click(function(){
  	$('#aprilProductBlock').fadeIn(300);
  });
  
  $('#aprilProductBackButton').click(function(){
  	$('#aprilProductBlock').fadeOut(300);
  });
  
  $('#aprilButton1').click(function(){
  	window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/assets/Masking%20Mini_LC%20v2.pdf");
  });
  
  $('#aprilButton2').click(function(){
  	window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/assets/Masking%20Mini_LC%20v2.pdf");
  });
 
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
});
