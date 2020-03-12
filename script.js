
var tops = new Array("tops/al_arsenic_top.png","tops/al_bismuth_top.png",
"tops/al_gold_top.png","tops/al_phosphor_top.png","tops/al_salt_top.png",
"tops/al_sulfur_top.png","tops/al_zinc_top.png","tops/berb_eye_top.png",
"tops/berb_frog_top.png","tops/berb_snake_top.png","tops/berb_unkowna_top.png",
"tops/berb_unkownb_top.png","tops/berb_unkownc_top.png","tops/berb_unkownd_top.png",
"tops/berb_unkowne_top.png","tops/berb_unkownf_top.png",
"tops/berb_unkowng_top.png","tops/cm_agatha_top.png","tops/cm_eva_top.png",
"tops/cm_jean_top.png","tops/cm_karla_top.png","tops/cm_miria_top.png",
"tops/cm_riful_top.png",
"tops/cm_wendy_top.png","tops/cm_yuma_top.png","tops/hobo_beready_top.png",
"tops/hobo_dangerhood_top.png",
"tops/hobo_goodroad_top.png","tops/hobo_goodplace_top.png",
"tops/hobo_keepquiet_top.png","tops/hobo_safecamp_top.png",
"tops/hobo_skyislimit_top.png","tops/hobo_straightahead_top.png",
"tops/sami_bieggolmai_top.png",
"tops/sami_godofthewind_top.png","tops/sami_moon_top.png",
"tops/sami_rananeida_top.png","tops/sami_sun_top.png",
"tops/sami_tiermes_top.png",
"tops/sami_witchdoctor_top.png")

var bots = new Array("bots/al_arsenic_bot.png","bots/al_bismuth_bot.png",
"bots/al_gold_bot.png","bots/al_phosphor_bot.png","bots/al_salt_bot.png",
"bots/al_sulfur_bot.png","bots/al_zinc_bot.png","bots/berb_eye_bot.png",
"bots/berb_frog_bot.png","bots/berb_snake_bot.png","bots/berb_unkowna_bot.png",
"bots/berb_unkownb_bot.png","bots/berb_unkownc_bot.png",
"bots/berb_unkownd_bot.png","bots/berb_unkowne_bot.png",
"bots/berb_unkownf_bot.png","bots/berb_unkowng_bot.png",
"bots/cm_agatha_bot.png","bots/cm_eva_bot.png",
"bots/cm_jean_bot.png","bots/cm_karla_bot.png","bots/cm_miria_bot.png",
"bots/cm_riful_bot.png","bots/cm_wendy_bot.png","bots/cm_yuma_bot.png",
"bots/hobo_beready_bot.png","bots/hobo_dangerhood_bot.png","bots/hobo_goodroad_bot.png","bots/hobo_goodplace_bot.png",
"bots/hobo_keepquiet_bot.png","bots/hobo_safecamp_bot.png",
"bots/hobo_skyislimit_bot.png","bots/hobo_straightahead_bot.png",
"bots/sami_bieggolmai_bot.png",
"bots/sami_godofthewind_bot.png","bots/sami_moon_bot.png",
"bots/sami_rananeida_bot.png","bots/sami_sun_bot.png",
"bots/sami_tiermes_bot.png","bots/sami_witchdoctor_bot.png")

function chooseTop() {
     var randomNumT = Math.floor(Math.random() * tops.length);
     document.getElementById("selectedTop").src = tops[randomNumT]; 


     document.getElementById("parentFrame").style.visibility= "visible";
     document.getElementById("title").style.visibility= "hidden";
     document.getElementById("torches").style.visibility= "hidden";
    
     document.getElementById("arsenicInfoLeft").style.visibility= "hidden";
     document.getElementById("arsenicInfoRight").style.visibility= "hidden";
     document.getElementById("bismuthInfoLeft").style.visibility= "hidden"; 
     document.getElementById("bismuthInfoRight").style.visibility= "hidden"; 
     document.getElementById("goldInfoLeft").style.visibility= "hidden"; 
     document.getElementById("goldInfoRight").style.visibility= "hidden"; 
     document.getElementById("phosphorInfoLeft").style.visibility="hidden";
     document.getElementById("phosphorInfoRight").style.visibility= "hidden";  
     document.getElementById("saltInfoLeft").style.visibility= "hidden"; 
     document.getElementById("saltInfoRight").style.visibility= "hidden"; 
     document.getElementById("sulfurInfoLeft").style.visibility= "hidden";   
     document.getElementById("sulfurInfoRight").style.visibility= "hidden"; 
     document.getElementById("zincInfoLeft").style.visibility= "hidden"; 
     document.getElementById("zincInfoRight").style.visibility= "hidden"; 
     document.getElementById("eyeInfoLeft").style.visibility= "hidden"; 
     document.getElementById("eyeInfoRight").style.visibility= "hidden"; 
     document.getElementById("frogInfoLeft").style.visibility= "hidden"; 
     document.getElementById("frogInfoRight").style.visibility= "hidden"; 
     document.getElementById("snakeInfoLeft").style.visibility= "hidden"; 
     document.getElementById("snakeInfoRight").style.visibility= "hidden"; 
     document.getElementById("unkownaInfoLeft").style.visibility= "hidden"; 
     document.getElementById("unkownaInfoRight").style.visibility= "hidden"; 
     document.getElementById("unkownbInfoLeft").style.visibility= "hidden"; 
     document.getElementById("unkownbInfoRight").style.visibility= "hidden"; 
     document.getElementById("unkowncInfoLeft").style.visibility= "hidden"; 
     document.getElementById("unkowncInfoRight").style.visibility= "hidden"; 
     document.getElementById("unkowndInfoLeft").style.visibility= "hidden"; 
     document.getElementById("unkowndInfoRight").style.visibility= "hidden"; 
     document.getElementById("unkowneInfoLeft").style.visibility= "hidden"; 
     document.getElementById("unkowneInfoRight").style.visibility= "hidden"; 
     document.getElementById("unkownfInfoLeft").style.visibility= "hidden"; 
     document.getElementById("unkownfInfoRight").style.visibility= "hidden"; 
     document.getElementById("unkowngInfoLeft").style.visibility= "hidden"; 
     document.getElementById("unkowngInfoRight").style.visibility= "hidden";    
     document.getElementById("agathaInfoLeft").style.visibility= "hidden"; 
     document.getElementById("agathaInfoRight").style.visibility= "hidden"; 
     document.getElementById("evaInfoLeft").style.visibility= "hidden"; 
     document.getElementById("evaInfoRight").style.visibility= "hidden"; 
     document.getElementById("jeanInfoLeft").style.visibility= "hidden"; 
     document.getElementById("jeanInfoRight").style.visibility= "hidden"; 
     document.getElementById("karlaInfoLeft").style.visibility= "hidden"; 
     document.getElementById("karlaInfoRight").style.visibility= "hidden"; 
     document.getElementById("miriaInfoLeft").style.visibility= "hidden"; 
     document.getElementById("miriaInfoRight").style.visibility= "hidden"; 
     document.getElementById("rifulInfoLeft").style.visibility= "hidden"; 
     document.getElementById("rifulInfoRight").style.visibility= "hidden"; 
     document.getElementById("wendyInfoLeft").style.visibility= "hidden"; 
     document.getElementById("wendyInfoRight").style.visibility= "hidden"; 
     document.getElementById("yumaInfoLeft").style.visibility= "hidden"; 
     document.getElementById("yumaInfoRight").style.visibility= "hidden"; 
     document.getElementById("bereadyInfoLeft").style.visibility= "hidden"; 
     document.getElementById("bereadyInfoRight").style.visibility= "hidden"; 
     document.getElementById("dangerhoodInfoLeft").style.visibility= "hidden"; 
     document.getElementById("dangerhoodInfoRight").style.visibility= "hidden"; 
     document.getElementById("goodroadInfoLeft").style.visibility= "hidden"; 
     document.getElementById("goodroadInfoRight").style.visibility= "hidden"; 

     document.getElementById("goodplaceInfoLeft").style.visibility= "hidden"; 
     document.getElementById("goodplaceInfoRight").style.visibility= "hidden"; 

     document.getElementById("keepquietInfoLeft").style.visibility= "hidden"; 
     document.getElementById("keepquietInfoRight").style.visibility= "hidden"; 
     document.getElementById("safecampInfoLeft").style.visibility= "hidden"; 
     document.getElementById("safecampInfoRight").style.visibility= "hidden"; 
     document.getElementById("skyislimitInfoLeft").style.visibility= "hidden"; 
     document.getElementById("skyislimitInfoRight").style.visibility= "hidden"; 
     document.getElementById("straightaheadInfoLeft").style.visibility= "hidden"; 
     document.getElementById("straightaheadInfoRight").style.visibility= "hidden";
     document.getElementById("bieggolmaiInfoLeft").style.visibility= "hidden"; 
     document.getElementById("bieggolmaiInfoRight").style.visibility= "hidden"; 
     document.getElementById("godofthewindInfoLeft").style.visibility= "hidden"; 
     document.getElementById("godofthewindInfoRight").style.visibility= "hidden"; 
     document.getElementById("moonInfoLeft").style.visibility= "hidden"; 
     document.getElementById("moonInfoRight").style.visibility= "hidden"; 
     document.getElementById("rananeidaInfoLeft").style.visibility= "hidden"; 
     document.getElementById("rananeidaInfoRight").style.visibility= "hidden"; 
     document.getElementById("sunInfoLeft").style.visibility= "hidden"; 
     document.getElementById("sunInfoRight").style.visibility= "hidden"; 
     document.getElementById("tiermesInfoLeft").style.visibility= "hidden"; 
     document.getElementById("tiermesInfoRight").style.visibility= "hidden"; 
     document.getElementById("witchdoctorInfoLeft").style.visibility= "hidden"; 
     document.getElementById("witchdoctorInfoRight").style.visibility= "hidden";

  if (randomNumT == 0){
        document.getElementById("arsenicInfoLeft").style.visibility= "visible";
} if (randomNumT == 1){
    document.getElementById("bismuthInfoLeft").style.visibility= "visible"
} if (randomNumT == 2){
    document.getElementById("goldInfoLeft").style.visibility= "visible"
} if (randomNumT == 3){
    document.getElementById("phosphorInfoLeft").style.visibility= "visible";
} if (randomNumT == 4){
    document.getElementById("saltInfoLeft").style.visibility= "visible";
} if (randomNumT == 5){
    document.getElementById("sulfurInfoLeft").style.visibility= "visible";
} if (randomNumT == 6){
    document.getElementById("zincInfoLeft").style.visibility= "visible";
} if (randomNumT == 7){
    document.getElementById("eyeInfoLeft").style.visibility= "visible";
} if (randomNumT == 8){
    document.getElementById("frogInfoLeft").style.visibility= "visible";
} if (randomNumT == 9){
    document.getElementById("snakeInfoLeft").style.visibility= "visible";
} if (randomNumT == 10){
    document.getElementById("unkownaInfoLeft").style.visibility= "visible";
} if (randomNumT == 11){
    document.getElementById("unkownbInfoLeft").style.visibility= "visible";
} if (randomNumT == 12){
    document.getElementById("unkowncInfoLeft").style.visibility= "visible";
} if (randomNumT == 13){
    document.getElementById("unkowndInfoLeft").style.visibility= "visible";
} if (randomNumT == 14){
    document.getElementById("unkowneInfoLeft").style.visibility= "visible";
} if (randomNumT == 15){
    document.getElementById("unkownfInfoLeft").style.visibility= "visible";
} if (randomNumT == 16){
    document.getElementById("unkowngInfoLeft").style.visibility= "visible";
} if (randomNumT == 17){
    document.getElementById("agathaInfoLeft").style.visibility= "visible";
} if (randomNumT == 18){
    document.getElementById("evaInfoLeft").style.visibility= "visible";
} if (randomNumT == 19){
    document.getElementById("jeanInfoLeft").style.visibility= "visible";
} if (randomNumT == 20){
    document.getElementById("karlaInfoLeft").style.visibility= "visible";
} if (randomNumT == 21){
    document.getElementById("miriaInfoLeft").style.visibility= "visible";
} if (randomNumT == 22){
    document.getElementById("wendyInfoLeft").style.visibility= "visible";
} if (randomNumT == 23){
    document.getElementById("rifulInfoLeft").style.visibility= "visible";
} if (randomNumT == 24){
    document.getElementById("yumaInfoLeft").style.visibility= "visible";
} if (randomNumT == 25){
    document.getElementById("bereadyInfoLeft").style.visibility= "visible";
} if (randomNumT == 26){
    document.getElementById("dangerhoodInfoLeft").style.visibility= "visible";
} if (randomNumT == 27){
    document.getElementById("goodroadInfoLeft").style.visibility= "visible";

} if (randomNumT == 28){
    document.getElementById("goodplaceInfoLeft").style.visibility= "visible";


} if (randomNumT == 29){
    document.getElementById("keepquietInfoLeft").style.visibility= "visible";
} if (randomNumT == 30){
    document.getElementById("safecampInfoLeft").style.visibility= "visible";
} if (randomNumT == 31){
    document.getElementById("skyislimitInfoLeft").style.visibility= "visible";
} if (randomNumT == 32){
    document.getElementById("straightaheadInfoLeft").style.visibility= "visible";
} if (randomNumT == 33){
    document.getElementById("bieggolmaiInfoLeft").style.visibility= "visible";
} if (randomNumT == 34){
    document.getElementById("godofthewindInfoLeft").style.visibility= "visible";
} if (randomNumT == 35){
    document.getElementById("moonInfoLeft").style.visibility= "visible";
} if (randomNumT == 36){
    document.getElementById("rananeidaInfoLeft").style.visibility= "visible";
} if (randomNumT == 37){
    document.getElementById("sunInfoLeft").style.visibility= "visible";
} if (randomNumT == 38){
    document.getElementById("tiermesInfoLeft").style.visibility= "visible";
} if (randomNumT == 39){
    document.getElementById("witchdoctorInfoLeft").style.visibility= "visible";
} 
}

function chooseBot() {
    var randomNumB = Math.floor(Math.random() * bots.length);
    document.getElementById("selectedBot").src = bots[randomNumB];

    if (randomNumB == 0){
        document.getElementById("arsenicInfoRight").style.visibility= "visible";
}   if (randomNumB == 1){
    document.getElementById("bismuthInfoRight").style.visibility= "visible";
}   if (randomNumB == 2){
    document.getElementById("goldInfoRight").style.visibility= "visible";
}   if (randomNumB == 3){
    document.getElementById("phosphorInfoRight").style.visibility= "visible";
}   if (randomNumB == 4){
    document.getElementById("saltInfoRight").style.visibility= "visible";
}   if (randomNumB == 5){
    document.getElementById("sulfurInfoRight").style.visibility= "visible";
}   if (randomNumB == 6){
    document.getElementById("zincInfoRight").style.visibility= "visible";
}   if (randomNumB == 7){
    document.getElementById("eyeInfoRight").style.visibility= "visible";
}   if (randomNumB == 8){
    document.getElementById("frogInfoRight").style.visibility= "visible";
}   if (randomNumB == 9){
    document.getElementById("snakeInfoRight").style.visibility= "visible";
}   if (randomNumB == 10){
    document.getElementById("unkownaInfoRight").style.visibility= "visible";
}   if (randomNumB == 11){
    document.getElementById("unkownbInfoRight").style.visibility= "visible";
}   if (randomNumB == 12){
    document.getElementById("unkowncInfoRight").style.visibility= "visible";
}   if (randomNumB == 13){
    document.getElementById("unkowndInfoRight").style.visibility= "visible";
}   if (randomNumB == 14){
    document.getElementById("unkowneInfoRight").style.visibility= "visible";
}   if (randomNumB == 15){
    document.getElementById("unkownfInfoRight").style.visibility= "visible";
}   if (randomNumB == 16){
    document.getElementById("unkowngInfoRight").style.visibility= "visible";
}   if (randomNumB == 17){
    document.getElementById("agathaInfoRight").style.visibility= "visible";
}   if (randomNumB == 18){
    document.getElementById("evaInfoRight").style.visibility= "visible";
}   if (randomNumB == 19){
    document.getElementById("jeanInfoRight").style.visibility= "visible";
}   if (randomNumB == 20){
    document.getElementById("karlaInfoRight").style.visibility= "visible";
}   if (randomNumB == 21){
    document.getElementById("miriaInfoRight").style.visibility= "visible";
}   if (randomNumB == 22){
    document.getElementById("wendyInfoRight").style.visibility= "visible";
}   if (randomNumB == 23){
    document.getElementById("rifulInfoRight").style.visibility= "visible";
}   if (randomNumB == 24){
    document.getElementById("yumaInfoRight").style.visibility= "visible";
}   if (randomNumB == 25){
    document.getElementById("bereadyInfoRight").style.visibility= "visible";
}   if (randomNumB == 26){
    document.getElementById("dangerhoodInfoRight").style.visibility= "visible";
}   if (randomNumB == 27){
    document.getElementById("goodroadInfoRight").style.visibility= "visible";
} if (randomNumB == 28){
    document.getElementById("goodplaceInfoRight").style.visibility= "visible";
}



if (randomNumB == 29){
    document.getElementById("keepquietInfoRight").style.visibility= "visible";
} if (randomNumB == 30){
    document.getElementById("safecampInfoRight").style.visibility= "visible";
} if (randomNumB == 31){
    document.getElementById("skyislimitInfoRight").style.visibility= "visible";
} if (randomNumB == 32){
    document.getElementById("straightaheadInfoRight").style.visibility= "visible";
} if (randomNumB == 33){
    document.getElementById("bieggolmaiInfoRight").style.visibility= "visible";
} if (randomNumB == 34){
    document.getElementById("godofthewindInfoRight").style.visibility= "visible";
} if (randomNumB == 35){
    document.getElementById("moonInfoRight").style.visibility= "visible";
} if (randomNumB == 36){
    document.getElementById("rananeidaInfoRight").style.visibility= "visible";
} if (randomNumB == 37){
    document.getElementById("sunInfoRight").style.visibility= "visible";
} if (randomNumB == 38){
    document.getElementById("tiermesInfoRight").style.visibility= "visible";
} if (randomNumB == 39){
    document.getElementById("witchdoctorInfoRight").style.visibility= "visible";
} 
}
