$( document ).ready(function() {
  
  $('#mainHall2Button').click(function(){
  	$('#mainHall2').fadeIn(300);
  });
  
  $('#mainHall2BackButton').click(function(){
  	$('#mainHall2').fadeOut(300);
  });
  
  $('#dailyButton').click(function(){
  	window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/2021SeminarFoyer.pdf");
  });
  
  $('#rewatchButton').click(function(){
  	$('#videoiFrame').attr('src','https://player.vimeo.com/video/591029263');
    $('#videoBlock').fadeIn(300);
  });
  
  $('#avatarImage').click(function(){
    $('#avatarMenu').fadeIn(300);
  });

  $('#avatarMenuDoneButton').click(function(){
    $('#avatarMenu').fadeOut(300);
  });
  
  $('#avatarMenuSaveAvatarButton').click(function(){
    //$('#videoBlock').fadeIn(300);
  });

  $('#avatarMenuPhotoboothButton').click(function(){
    //$('#avatarMenu').fadeOut(300);
  });

//Main Hall 2 Banners
  $('#bannerButton').click(function(){
  	$('#bannerBlock').fadeIn(300);
  });
  
  $('#bannerBackButton').click(function(){
  	$('#bannerBlock').fadeOut(300);
  });
  
//Mentor Sharing  
  var mentorVideo1 = "https://player.vimeo.com/video/590906413";
  var mentorVideo2 = "https://player.vimeo.com/video/590902245";
  var mentorVideo3 = "https://player.vimeo.com/video/590900660";
  var mentorVideo4 = "https://player.vimeo.com/video/590904394";
  var mentorVideo5 = "https://player.vimeo.com/video/590900288";

  $('#mentorSharingButton,#mentorSharingButton2,#watchMentorButton').click(function(){
  	$('#mentorSharing').fadeIn(300);
  });
  
  $('#mentorSharingBackButton').click(function(){
  	$('#mentorSharing').fadeOut(300);
  });
  
  $('#speaker1Button').click(function(){
  	$('#videoiFrame').attr('src',mentorVideo1);
    $('#videoBlock').fadeIn(300);
  });
  
  $('#speaker2Button').click(function(){
  	$('#videoiFrame').attr('src',mentorVideo2);
    $('#videoBlock').fadeIn(300);
  });
  
  $('#speaker3Button').click(function(){
  	$('#videoiFrame').attr('src',mentorVideo3);
    $('#videoBlock').fadeIn(300);
  });
  
  $('#speaker4Button').click(function(){
  	$('#videoiFrame').attr('src',mentorVideo4);
    $('#videoBlock').fadeIn(300);
  });
  
  $('#speaker5Button').click(function(){
  	$('#videoiFrame').attr('src',mentorVideo5);
    $('#videoBlock').fadeIn(300);
  });
  
//Seminar Award 2022
  var currentRing = 1;
  var ringVideo = "";

  $('#seminar2022Button,#seminar2022Button2').click(function(){
  	$('#seminarAward2022').fadeIn(300);
    $('#ringImage').attr('src','images/Rings_Ring COPS');
    $('#ringTitle').attr('src','images/Rings_Title COPS');
    ringVideo = "https://player.vimeo.com/video/592647755";
    currentRing = 1;
  });
  
  $('#seminar2022BackButton').click(function(){
  	$('#seminarAward2022').fadeOut(300);
  });
  
  $('#ringsLeftButton').click(function(){
  	currentRing--;
    
    if(currentRing==0)
    {
     	currentRing = 4; 
    }
    
    switchRings(currentRing);
  });
  
  $('#ringsRightButton').click(function(){
  	currentRing++;
    
    if(currentRing==5)
    {
     	currentRing = 1; 
    }
    
    switchRings(currentRing);
  });
  
  function switchRings(ringNum)
  {
    switch(ringNum)
    {
      case 1:
            $('#ringImage').attr('src','images/Rings_Ring COPS');
            $('#ringTitle').attr('src','images/Rings_Title COPS');
        	ringVideo = "https://player.vimeo.com/video/592647755";
      break;
      case 2:
            $('#ringImage').attr('src','images/Rings_Ring COS');
            $('#ringTitle').attr('src','images/Rings_Title COS');
        	ringVideo = "https://player.vimeo.com/video/592647907";
      break;
      case 3:
            $('#ringImage').attr('src','images/Rings_Ring COUP');
            $('#ringTitle').attr('src','images/Rings_Title COUP');
        	ringVideo = "https://player.vimeo.com/video/592647986";
      break;
      case 4:
            $('#ringImage').attr('src','images/Rings_Ring Queen');
            $('#ringTitle').attr('src','images/Rings_Title Queen');
        	ringVideo = "https://player.vimeo.com/video/592647824";
      break;
    }
  }
 
  $('#watchRingVideoButton').click(function(){
    $('#videoiFrame').attr('src',ringVideo);
    $('#videoBlock').fadeIn(300);
  });
  
  $('#ringBookletButton').click(function(){
    window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/2022SeminarBooklet.pdf");
  });
  
//Seminar Award 2021
  $('#seminar2021Button,#seminar2021Button2').click(function(){
  	$('#seminarAward2021').fadeIn(300);
    $('#seminarAward2021VideoiFrame').attr('src','https://player.vimeo.com/video/591016339');
  });
  
  $('#closeSeminarAward2021Button').click(function(){
  	$('#seminarAward2021').fadeOut(300);
    $('#seminarAward2021VideoiFrame').attr('src','');
  });
  
  $('#seminarAward2021ProgramButton').click(function(){
    window.open("https://marykay.sgp1.cdn.digitaloceanspaces.com/2021Seminar-LiveStream.pdf");
  });
  
  $('#closeVideoButton').click(function(){
  	$('#videoiFrame').attr('src','');
    $('#videoBlock').fadeOut(300);
  });

//Recognition
  $('#recognitionButton,#recognitionButton2').click(function(){
  	$('#recognition').fadeIn(300);
  });
  
  $('#recognitionBackButton').click(function(){
  	$('#recognition').fadeOut(300);
  });
  
  //Malaysia
  $('#malaysiaButton').click(function(){
  	$('#malaysiaBlock').fadeIn(300);
  });
  
  $('#malaysiaBackButton').click(function(){
  	$('#malaysiaBlock').fadeOut(300);
  });
  
  $('#malaysiaCOPSBCButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590876749");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaCOPSSDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590877073");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaCOSButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590885909");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaCOUPButton').click(function(){
    $('#coupMalaysiaBlock').fadeIn(300);
    $('#coupMalaysiavideoiFrame').attr('src',"https://player.vimeo.com/video/590837155");
  });
  
  $('#malaysiaCloseCOUPButton').click(function(){
    $('#coupMalaysiaBlock').fadeOut(300);
    $('#coupMalaysiavideoiFrame').attr('src',"");
  });
  
  $('#malaysiaCOEButton').click(function(){
    $('#coupMalaysiavideoiFrame').attr('src',"https://player.vimeo.com/video/590837155");
  });
  
  $('#malaysiaTDTButton').click(function(){
    $('#coupMalaysiavideoiFrame').attr('src',"https://player.vimeo.com/video/590839250");
  });
  
  $('#malaysiaBarPinButton').click(function(){
    $('#coupMalaysiavideoiFrame').attr('src',"https://player.vimeo.com/video/590840660");
  });
  
  $('#malaysia251kButton').click(function(){
    $('#coupMalaysiavideoiFrame').attr('src',"https://player.vimeo.com/video/590876513");
  });
  
  $('#malaysia155kButton').click(function(){
    $('#coupMalaysiavideoiFrame').attr('src',"https://player.vimeo.com/video/590876146");
  });
  
  $('#malaysiaDoubleStarButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590877678");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaTripleStarButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590881131");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaRJButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590879562");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaNSDDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590838114");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaNESDDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590835953");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaNEESDDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590835472");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaLeadButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590839856");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaEmasButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590835723");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaAltisButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590834969");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaAvanzaButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590835191");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaYarisButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590835292");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaL1Button').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590878023");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaL2Button').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590878485");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaL3Button').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590879073");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysiaSeminarButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590880527");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysia5thButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590840213");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysia10thButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590836558");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysia15thButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590836744");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#malaysia20thButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590836924");
    $('#videoBlock').fadeIn(300);
  });
  
  //Singapore
  $('#singaporeButton').click(function(){
  	$('#singaporeBlock').fadeIn(300);
  });
  
  $('#singaporeBackButton').click(function(){
  	$('#singaporeBlock').fadeOut(300);
  });
  
  $('#singaporeCOPSBCButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590825204");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#singaporeCOPSSDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590825305");
    $('#videoBlock').fadeIn(300);
  });

  $('#singaporeCOSButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590832906");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#singaporeCOUPButton').click(function(){
    $('#coupMSingaporevideoiFrame').attr('src',"https://player.vimeo.com/video/590824694");
    $('#coupSingaporeBlock').fadeIn(300);
  });
  
  $('#singaporeCloseCOUPButton').click(function(){
    $('#coupMSingaporevideoiFrame').attr('src',"");
    $('#coupSingaporeBlock').fadeOut(300);
  });
  
  $('#singaporeCOEButton').click(function(){
    $('#coupMSingaporevideoiFrame').attr('src',"https://player.vimeo.com/video/590824694");
  });
  
  $('#singaporeTDTButton').click(function(){
    $('#coupMSingaporevideoiFrame').attr('src',"https://player.vimeo.com/video/590824920");
  });
  
  $('#singaporeBarPinButton').click(function(){
    $('#coupMSingaporevideoiFrame').attr('src',"https://player.vimeo.com/video/590833239");
  });
  
  $('#singapore155kButton').click(function(){
    $('#coupMSingaporevideoiFrame').attr('src',"https://player.vimeo.com/video/590825085");
  });
  
  $('#singaporeDoubleStarButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590825433");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#singaporeTripleStarButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590827132");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#singaporeRJButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590826716");
    $('#videoBlock').fadeIn(300);
  });
    
  $('#singaporeNSDDButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590824779");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#singaporePinkButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590824831");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#singaporeL1Button').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590825788");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#singaporeL2Button').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590826023");
    $('#videoBlock').fadeIn(300);
  });
    
  $('#singaporeL3Button').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590826250");
    $('#videoBlock').fadeIn(300);
  });
      
  $('#singaporeLeadButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590825618");
    $('#videoBlock').fadeIn(300);
  });
        
  $('#singaporeSeminarButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590826499");
    $('#videoBlock').fadeIn(300);
  });
          
  $('#singapore5thButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590824981");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#singapore10thButton').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/590824633");
    $('#videoBlock').fadeIn(300);
  });
  
//Cars
  var currentCar = 0;
  var bookletLink = "";
  
  $('#carsButton,#carsButton2').click(function(){
  	$('#careerCars').fadeIn(300);
    currentCar = 1;
    setCar(1);
  });
  
  $('#carsBackButton').click(function(){
  	$('#careerCars').fadeOut(300);
  });
  
  $('#carLeftButton').click(function(){
  	currentCar--;
    if(currentCar == 0)
    {
      currentCar = 5;
    }
    setCar(currentCar);
  });
  
  $('#carRightButton').click(function(){
  	currentCar++;
    if(currentCar == 6)
    {
      currentCar = 1;
    }
    setCar(currentCar);
  });
  
  $('#carBookletButton').click(function(){
  	window.open(bookletLink);
  });
  
  function setCar(carNum)
  {
    $('#car1').css('display','none');
    $('#car2').css('display','none');
    $('#car3').css('display','none');
    $('#car4').css('display','none');
    $('#car5').css('display','none');
    
    switch(carNum)
    {
      case 1:
        $('#car1').css('display','block');
        bookletLink = "https://marykay.sgp1.cdn.digitaloceanspaces.com/CorollaCross.pdf";
      break;
        
      case 2:
        $('#car2').css('display','block');
        bookletLink = "https://marykay.sgp1.cdn.digitaloceanspaces.com/PinkMercedes.pdf";
      break;
        
      case 3:
        $('#car3').css('display','block');
        bookletLink = "https://marykay.sgp1.cdn.digitaloceanspaces.com/CareerCarProgram2020.pdf";
      break;
        
      case 4:
        $('#car4').css('display','block');
        bookletLink = "https://marykay.sgp1.cdn.digitaloceanspaces.com/PinkAltis.pdf";
      break;
        
      case 5:
        $('#car5').css('display','block');
        bookletLink = "https://marykay.sgp1.cdn.digitaloceanspaces.com/CareerCarProgram2020.pdf";
      break;
    }
  }

//MK Chest
  $('#maryKayChestButton,#maryKayChestButton2').click(function(){
  	$('#chestBlock').fadeIn(300);
  });
  
  $('#chestBackButton').click(function(){
  	$('#chestBlock').fadeOut(300);
  });
   
  $('#bestDressButton').click(function(){
  	$('#bestDressedBlock').fadeIn(300);
  }); 
  
  $('#bestDressedBackButton').click(function(){
  	$('#bestDressedBlock').fadeOut(300);
  }); 
  
  $('#top3Button').click(function(){
    $('#bestDressedButtonContainer').fadeOut(300);
    $('#top3Block').delay(300).fadeIn(300);
  });
  
  $('#top3BackButton').click(function(){
    $('#top3Block').fadeOut(300);
    $('#bestDressedButtonContainer').delay(300).fadeIn(300);
  });
  
  $('#top31Button').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/592048649");
    $('#videoBlock').fadeIn(300);
  });
  
  $('#top32Button').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/592048387");
    $('#videoBlock').fadeIn(300);
  });
   
  $('#top33Button').click(function(){
    $('#videoiFrame').attr('src',"https://player.vimeo.com/video/592048144");
    $('#videoBlock').fadeIn(300);
  });
    
  $('#top7Button').click(function(){
    $('#bestDressedButtonContainer').fadeOut(300);
    $('#top7Block').delay(300).fadeIn(300);
  });
  
  $('#top7BackButton').click(function(){
    $('#top7Block').fadeOut(300);
    $('#bestDressedButtonContainer').delay(300).fadeIn(300);
  });
  
  $('#submissionsButton').click(function(){
    $('#bestDressedButtonContainer').fadeOut(300);
    $('#submissionsBlock').delay(300).fadeIn(300);
  });
  
  $('#submissionsBackButton').click(function(){
    $('#submissionsBlock').fadeOut(300);
    $('#bestDressedButtonContainer').delay(300).fadeIn(300);
  });
   
  $('#guessingButton').click(function(){
  	$('#guessingBlock').fadeIn(300);
  }); 
  
  $('#guessingBackButton').click(function(){
  	$('#guessingBlock').fadeOut(300);
  });
    
  $('#guessHereButton1').click(function(){
  	window.open("https://forms.gle/kXXcbbiD7pd47JZP9");
  });
  
  $('#guessHereButton2').click(function(){
  	window.open("https://forms.gle/YEi73ZAnL1RMqXKe8");
  });
  
//Mary Kay Culture
  $('#maryKayCultureButton,#maryKayCultureButton2').click(function(){
  	$('#cultureBlock').fadeIn(300);
  });
  
  $('#cultureBackButton').click(function(){
  	$('#cultureBlock').fadeOut(300);
  });
  
  $('#maryKayAshButton').click(function(){
  	$('#maryKayAshBlock').fadeIn(300);
    $('#mkAshvideoiFrame').attr('src',"https://www.youtube.com/embed/p47Ski40PG0?list=PLnvFnCfnsAdDJtoFKgCR5Gv314dgNVRw7");
  });
    
  $('#maryKayAshBackButton').click(function(){
  	$('#maryKayAshBlock').fadeOut(300);
    $('#mkAshvideoiFrame').attr('src',"");
  });
    
  $('#6Button').click(function(){
  	$('#6QualitiesBlock').fadeIn(300);
    $('#6QualitiesvideoiFrame').attr('src',"https://www.youtube.com/embed/gL7j4ma4E9s?list=PLnvFnCfnsAdDJtoFKgCR5Gv314dgNVRw7");
  });
  
  $('#6QualitiesBackButton').click(function(){
  	$('#6QualitiesBlock').fadeOut(300);
    $('#6QualitiesvideoiFrame').attr('src',"");
  });
  
 $('#6Qualities1Button').click(function(){
    $('#6QualitiesvideoiFrame').attr('src',"https://www.youtube.com/embed/gL7j4ma4E9s?list=PLnvFnCfnsAdDJtoFKgCR5Gv314dgNVRw7");
  });
  
  $('#6Qualities2Button').click(function(){
    $('#6QualitiesvideoiFrame').attr('src',"https://www.youtube.com/embed/oixkvkXmWsI?list=PLnvFnCfnsAdDJtoFKgCR5Gv314dgNVRw7");
  });
  
  $('#6Qualities3Button').click(function(){
    $('#6QualitiesvideoiFrame').attr('src',"https://www.youtube.com/embed/xmYLZvuXruQ?list=PLnvFnCfnsAdDJtoFKgCR5Gv314dgNVRw7");
  });
  
  $('#6Qualities4Button').click(function(){
    $('#6QualitiesvideoiFrame').attr('src',"https://www.youtube.com/embed/5ZPGe4_2lB4?list=PLnvFnCfnsAdDJtoFKgCR5Gv314dgNVRw7");
  });
  
  $('#6Qualities5Button').click(function(){
    $('#6QualitiesvideoiFrame').attr('src',"https://www.youtube.com/embed/amLbS4_aXJU?list=PLnvFnCfnsAdDJtoFKgCR5Gv314dgNVRw7");
  });
  
  $('#6Qualities6Button').click(function(){
    $('#6QualitiesvideoiFrame').attr('src',"https://www.youtube.com/embed/nPF2W5YT25U?list=PLnvFnCfnsAdDJtoFKgCR5Gv314dgNVRw7");
  });
  
  $('#4Button').click(function(){
  	$('#4ValuesBlock').fadeIn(300);
    $('#4ValuesImage').attr('src',"images/Core_Value 1.jpg");
  });
  
  $('#4ValuesBackButton').click(function(){
  	$('#4ValuesBlock').fadeOut(300);
  });
    
  $('#4ValuesButton1').click(function(){
    $('#4ValuesImage').attr('src',"images/Core_Value 1.jpg");
  });
    
  $('#4ValuesButton2').click(function(){
    $('#4ValuesImage').attr('src',"images/Core_Value 2.jpg");
  });
      
  $('#4ValuesButton3').click(function(){
    $('#4ValuesImage').attr('src',"images/Core_Value 3.jpg");
  });
      
  $('#4ValuesButton4').click(function(){
    $('#4ValuesImage').attr('src',"images/Core_Value 4.jpg");
  });
     
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
});
