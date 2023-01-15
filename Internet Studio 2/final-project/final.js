//stat page
function modMaker(){
  let statNum=document.getElementById('stat_num').value;
  let modChange=document.getElementById('modifier');
  let mod;
  switch (statNum){
    case "1":
      mod="-5";
      break;
    case "2":
      mod="-4";
      break;
	case "3":
      mod="-4";
      break;
    case "4":
      mod="-3";
      break;
	case "5":
      mod="-3";
      break;
    case "6":
      mod="-2";
      break;
	case "7":
      mod="-2";
      break;
    case "8":
      mod="-1";
      break;
	case "9":
      mod="-1";
      break;
    case "10":
      mod="+0";
      break;
	case "11":
      mod="+0";
      break;
    case "12":
      mod="+1";
      break;
	case "13":
      mod="+1";
      break;
    case "14":
      mod="+2";
      break;
	case "15":
      mod="+2";
      break;
    case "16":
      mod="+3";
      break;
	case "17":
      mod="+3";
      break;
    case "18":
      mod="+4";
      break;
	case "19":
      mod="+4";
      break;
    case "20":
      mod="+5";
      break;
    default:
      mod="&nbsp;";
  }
  modChange.innerHTML=mod;
}
function carryEquation(){
  let carryCap=document.getElementById('carryCap');
  let strScore=document.getElementById('carry').value;
  let capacity=strScore*15;
  carryCap.innerHTML=capacity.toString() + "lbs";
}
function armorClass(){
	let armorType=document.getElementById('armor_type').value;
	let dexScore=document.getElementById('ac').value;
	let acString=document.getElementById('acNum');
	let dexMod;
	let armorNum;
	switch (dexScore) {
		case "1":
			dexMod=-5;
			break;
		case "2":
			dexMod=-4;
			break;
		case "3":
			dexMod=-4;
			break;
		case "4":
			dexMod=-3;
			break;
		case "5":
			dexMod=-3;
			break;
		case "6":
			dexMod=-2;
			break;
		case "7":
			dexMod=-2;
			break;
		case "8":
			dexMod=-1;
			break;
		case "9":
			dexMod=-1;
			break;
		case "10":
			dexMod=0;
			break;
		case "11":
			dexMod=0;
			break;
		case "12":
			dexMod=1;
			break;
		case "13":
			dexMod=1;
			break;
		case "14":
			dexMod=2;
			break;
		case "15":
			dexMod=2;
			break;
		case "16":
			dexMod=3;
			break;
		case "17":
			dexMod=3;
			break;
		case "18":
			dexMod=4;
			break;
		case "19":
			dexMod=4;
			break;
		case "20":
			dexMod=5;
			break;
		default:
			dexMod="&nbsp;";
	}
	switch (armorType){
		case "none":
			armorNum=10;
			break;
		case "padded":
			armorNum=11;
			break;
		case "leather":
			armorNum=11;
			break;
		case "studLeather":
			armorNum=12;
			break;
		case "hide":
			armorNum=12;
			if(+dexScore>=15){
				dexMod=2;
			}
			break;
		case "chainShirt":
			armorNum=13;
			if(+dexScore>=15){
				dexMod=2;
			}
			break;
		case "scaleMail":
			armorNum=14;
			if(+dexScore>=15){
				dexMod=2;
			}
			break;
		case "breastplate":
			armorNum=14;
			if(+dexScore>=15){
				dexMod=2;
			}
			break;
		case "halfPlate":
			armorNum=15;
			if(+dexScore>=15){
				dexMod=2;
			}
			break;
		case "ringMail":
			armorNum=14;
			//dexMod=0;
			break;
		case "chainMail":
			armorNum=16;
			//dexMod=0;
			break;
		case "splint":
			armorNum=17;
			//dexMod=0;
			break;
		case "plate":
			armorNum=18;
			//dexMod=0;
			break;
		default:
			armorNum="&nbsp;";
	}
	let ac=dexMod+armorNum;
	acString.innerHTML=ac.toString();
}
function standardArray() {
	let strValue=document.getElementById('str1').value;
	let dexValue=document.getElementById('dex1').value;
	let conValue=document.getElementById('con1').value;
	let intValue=document.getElementById('int1').value;
	let wisValue=document.getElementById('wis1').value;
	let chaValue=document.getElementById('cha1').value;
	let strModValue=document.getElementById('strMod1');
	let dexModValue=document.getElementById('dexMod1');
	let conModValue=document.getElementById('conMod1');
	let intModValue=document.getElementById('intMod1');
	let wisModValue=document.getElementById('wisMod1');
	let chaModValue=document.getElementById('chaMod1');
	let selectRemove=document.getElementsByClassName('sa');
	/*for (let i=selectRemove.length-1;i>=0;i--){
		for (let j=selectRemove[i].options.length-1;j>=1;i--){
			if (selectRemove[i].options[j].selected){
				selectRemove[i].remove(j);
			}
		}
	}*/
	switch (strValue){
		case "15":
			strModValue.innerHTML="+2";
			break;
		case "14":
			strModValue.innerHTML="+2";
			break;
		case "13":
			strModValue.innerHTML="+1";
			break;
		case "12":
			strModValue.innerHTML="+1";
			break;
		case "10":
			strModValue.innerHTML="+0";
			break;
		case "8":
			strModValue.innerHTML="-1";
			break;
		default:
			strModValue.innerHTML="&nbsp;";
	}
	switch (dexValue){
		case "15":
			dexModValue.innerHTML="+2";
			break;
		case "14":
			dexModValue.innerHTML="+2";
			break;
		case "13":
			dexModValue.innerHTML="+1";
			break;
		case "12":
			strModValue.innerHTML="+1";
			break;
		case "10":
			dexModValue.innerHTML="+0";
			break;
		case "8":
			dexModValue.innerHTML="-1";
			break;
		default:
			dexModValue.innerHTML="&nbsp;";
	}
	switch (conValue){
		case "15":
			conModValue.innerHTML="+2";
			break;
		case "14":
			conModValue.innerHTML="+2";
			break;
		case "13":
			conModValue.innerHTML="+1";
			break;
		case "12":
			conModValue.innerHTML="+1";
			break;
		case "10":
			conModValue.innerHTML="+0";
			break;
		case "8":
			conModValue.innerHTML="-1";
			break;
		default:
			conModValue.innerHTML="&nbsp;";
	}
	switch (intValue){
		case "15":
			intModValue.innerHTML="+2";
			break;
		case "14":
			intModValue.innerHTML="+2";
			break;
		case "13":
			intModValue.innerHTML="+1";
			break;
		case "12":
			intModValue.innerHTML="+1";
			break;
		case "10":
			intModValue.innerHTML="+0";
			break;
		case "8":
			intModValue.innerHTML="-1";
			break;
		default:
			intModValue.innerHTML="&nbsp;";
	}
	switch (wisValue){
		case "15":
			wisModValue.innerHTML="+2";
			break;
		case "14":
			wisModValue.innerHTML="+2";
			break;
		case "13":
			wisModValue.innerHTML="+1";
			break;
		case "12":
			wisModValue.innerHTML="+1";
			break;
		case "10":
			wisModValue.innerHTML="+0";
			break;
		case "8":
			wisModValue.innerHTML="-1";
			break;
		default:
			wisModValue.innerHTML="&nbsp;";
	}
	switch (chaValue){
		case "15":
			chaModValue.innerHTML="+2";
			break;
		case "14":
			chaModValue.innerHTML="+2";
			break;
		case "13":
			chaModValue.innerHTML="+1";
			break;
		case "12":
			chaModValue.innerHTML="+1";
			break;
		case "10":
			chaModValue.innerHTML="+0";
			break;
		case "8":
			chaModValue.innerHTML="-1";
			break;
		default:
			chaModValue.innerHTML="&nbsp;";
	}
}
function addPointbuy(buttonId){
	let strStat=document.getElementById('str2');
	let dexStat=document.getElementById('dex2');
	let conStat=document.getElementById('con2');
	let intStat=document.getElementById('int2');
	let wisStat=document.getElementById('wis2');
	let chaStat=document.getElementById('cha2');
	let str_mod=document.getElementById('strMod2');
	let dex_mod=document.getElementById('dexMod2');
	let con_mod=document.getElementById('conMod2');
	let int_mod=document.getElementById('intMod2');
	let wis_mod=document.getElementById('wisMod2');
	let cha_mod=document.getElementById('chaMod2');
	let pointsVal=document.getElementById('points_left');
	let pointChange=parseInt(pointsVal.innerHTML);
	let strChange;
	let dexChange;
	let conChange;
	let intChange;
	let wisChange;
	let chaChange;
	switch (buttonId){
		case -1:
			/*if (pointChange>27){
				pointChange=27;
			}*/
			strChange=parseInt(strStat.innerHTML)-1;
			if (strChange<=8){
				pointChange=pointsVal.innerHTML;
				strChange=8;
			}
			if (strChange>=13) {
				pointChange=parseInt(pointsVal.innerHTML)+2;
			}
			if(pointChange<=27&&strChange<13){
				pointChange=parseInt(pointsVal.innerHTML)+1;
			}
			if (pointChange>27){
				pointChange=27;
			}
			pointsVal.innerHTML=pointChange.toString();
			strStat.innerHTML=strChange.toString();
			break;
		case -2:
			/*if (pointChange>=27){
				pointChange=27;
			}*/
			dexChange=parseInt(dexStat.innerHTML)-1;
			if (dexChange<=8){
				pointChange=pointsVal.innerHTML;
				dexChange=8;
			}
			if (dexChange>=13) {
				pointChange=parseInt(pointsVal.innerHTML)+2;
			}
			if(pointChange<=27&&dexChange<13){
				pointChange=parseInt(pointsVal.innerHTML)+1;
			}
			if (pointChange>27){
				pointChange=27;
			}
			pointsVal.innerHTML=pointChange.toString();
			dexStat.innerHTML=dexChange.toString();
			break;
		case -3:
			/*if (pointChange>=27){
				pointChange=27;
			}*/
			conChange=parseInt(conStat.innerHTML)-1;
			if (conChange<=8){
				pointChange=pointsVal.innerHTML;
				conChange=8;
			}
			if (conChange>=13) {
				pointChange=parseInt(pointsVal.innerHTML)+2;
			}
			if(pointChange<=27&&conChange<13){
				pointChange=parseInt(pointsVal.innerHTML)+1;
			}
			if (pointChange>27){
				pointChange=27;
			}
			pointsVal.innerHTML=pointChange.toString();
			conStat.innerHTML=conChange.toString();
			break;
		case -4:
			/*if (pointChange>=27){
				pointChange=27;
			}*/
			intChange=parseInt(intStat.innerHTML)-1;
			if (intChange<=8){
				pointChange=pointsVal.innerHTML;
				intChange=8;
			}
			if (intChange>=13) {
				pointChange=parseInt(pointsVal.innerHTML)+2;
			}
			if(pointChange<=27&&intChange<13){
				pointChange=parseInt(pointsVal.innerHTML)+1;
			}
			if (pointChange>27){
				pointChange=27;
			}
			pointsVal.innerHTML=pointChange.toString();
			intStat.innerHTML=intChange.toString();
			break;
		case -5:
			/*if (pointChange>=27){
				pointChange=27;
			}*/
			wisChange=parseInt(wisStat.innerHTML)-1;
			if (wisChange<=8){
				pointChange=pointsVal.innerHTML;
				wisChange=8;
			}
			if (wisChange>=13) {
				pointChange=parseInt(pointsVal.innerHTML)+2;
			}
			if(pointChange<=27&&wisChange<13){
				pointChange=parseInt(pointsVal.innerHTML)+1;
			}
			if (pointChange>27){
				pointChange=27;
			}
			pointsVal.innerHTML=pointChange.toString();
			wisStat.innerHTML=wisChange.toString();
			break;
		case -6:
			/*if (pointChange>=27){
				pointChange=27;
			}*/
			chaChange=parseInt(chaStat.innerHTML)-1;
			if (chaChange<=8){
				pointChange=pointsVal.innerHTML;
				chaChange=8;
			}
			if (chaChange>=13) {
				pointChange=parseInt(pointsVal.innerHTML)+2;
			}
			if(pointChange<=27&&chaChange<13){
				pointChange=parseInt(pointsVal.innerHTML)+1;
			}
			if (pointChange>27){
				pointChange=27;
			}
			pointsVal.innerHTML=pointChange.toString();
			chaStat.innerHTML=chaChange.toString();
			break;
		case 1:
			/*if (pointChange<=0){
				pointChange=0;
				strChange=parseInt(strStat.innerHTML);
			}*/
			strChange=parseInt(strStat.innerHTML)+1;
			/*if (strChange>=15){
				pointChange=parseInt(pointsVal.innerHTML);
				strChange=15;
			}*/
			if (strChange>13) {
				pointChange=parseInt(pointsVal.innerHTML)-2;
			}
			if(pointChange<=27&&strChange<=13){
				pointChange=parseInt(pointsVal.innerHTML)-1;
			}
			if (strChange>15){
				pointChange=parseInt(pointsVal.innerHTML);
				strChange=15;
			}
			if (pointChange<=0){
				pointChange=0;
				strChange=parseInt(strStat.innerHTML);
			}
			pointsVal.innerHTML=pointChange.toString();
			strStat.innerHTML=strChange.toString();
			break;
		case 2:
			/*if (pointChange<=0){
				pointChange=0;
				dexChange=dexStat.innerHTML;
			}*/
			dexChange=parseInt(dexStat.innerHTML)+1;
			/*if (dexChange>=15){
				pointChange=pointsVal.innerHTML;
				dexChange=15;
			}*/
			if (dexChange>13) {
				pointChange=parseInt(pointsVal.innerHTML)-2;
			}
			if(pointChange<=27&&dexChange<=13){
				pointChange=parseInt(pointsVal.innerHTML)-1;
			}
			if (dexChange>15){
				pointChange=parseInt(pointsVal.innerHTML);
				dexChange=15;
			}
			if (pointChange<=0){
				pointChange=0;
				dexChange=parseInt(dexStat.innerHTML);
			}
			pointsVal.innerHTML=pointChange.toString();
			dexStat.innerHTML=dexChange.toString();
			break;
		case 3:
			/*if (pointChange<=0){
				pointChange=0;
				conChange=conStat.innerHTML;
			}*/
			conChange=parseInt(conStat.innerHTML)+1;
			/*if (conChange>=15){
				pointChange=pointsVal.innerHTML;
				conChange=15;
			}*/
			if (conChange>13) {
				pointChange=parseInt(pointsVal.innerHTML)-2;
			}
			if(pointChange<=27&&conChange<=13){
				pointChange=parseInt(pointsVal.innerHTML)-1;
			}
			if (conChange>15){
				pointChange=parseInt(pointsVal.innerHTML);
				conChange=15;
			}
			if (pointChange<=0){
				pointChange=0;
				conChange=parseInt(conStat.innerHTML);
			}
			pointsVal.innerHTML=pointChange.toString();
			conStat.innerHTML=conChange.toString();
			break;
		case 4:
			/*if (pointChange<=0){
				pointChange=0;
				intChange=intStat.innerHTML;
			}*/
			intChange=parseInt(intStat.innerHTML)+1;
			/*if (intChange>=15){
				pointChange=pointsVal.innerHTML;
				intChange=15;
			}*/
			if (intChange>13) {
				pointChange=parseInt(pointsVal.innerHTML)-2;
			}
			if(pointChange<=27&&intChange<=13){
				pointChange=parseInt(pointsVal.innerHTML)-1;
			}
			if (intChange>15){
				pointChange=parseInt(pointsVal.innerHTML);
				intChange=15;
			}
			if (pointChange<=0){
				pointChange=0;
				intChange=parseInt(intStat.innerHTML);
			}
			pointsVal.innerHTML=pointChange.toString();
			intStat.innerHTML=intChange.toString();
			break;
		case 5:
			/*if (pointChange<=0){
				pointChange=0;
				wisChange=wisStat.innerHTML;
			}*/
			wisChange=parseInt(wisStat.innerHTML)+1;
			/*if (wisChange>=15){
				pointChange=pointsVal.innerHTML;
				wisChange=15;
			}*/
			if (wisChange>13) {
				pointChange=parseInt(pointsVal.innerHTML)-2;
			}
			if(pointChange<=27&&wisChange<=13){
				pointChange=parseInt(pointsVal.innerHTML)-1;
			}
			if (wisChange>15){
				pointChange=parseInt(pointsVal.innerHTML);
				wisChange=15;
			}
			if (pointChange<=0){
				pointChange=0;
				wisChange=parseInt(wisStat.innerHTML);
			}
			pointsVal.innerHTML=pointChange.toString();
			wisStat.innerHTML=wisChange.toString();
			break;
		case 6:
			/*if (pointChange<=0){
				pointChange=0;
				chaChange=chaStat.innerHTML;
			}*/ 
			chaChange=parseInt(chaStat.innerHTML)+1;
			/*if (chaChange>=15){
				pointChange=parseInt(pointsVal.innerHTML);
				chaChange=15;
			}*/
			if (chaChange>13) {
				pointChange=parseInt(pointsVal.innerHTML)-2;
			}
			if(pointChange<=27&&chaChange<=13){
				pointChange=parseInt(pointsVal.innerHTML)-1;
			}
			if (chaChange>15){
				pointChange=parseInt(pointsVal.innerHTML);
				chaChange=15;
			}
			if (pointChange<=0){
				pointChange=0;
				chaChange=parseInt(chaStat.innerHTML);
			} 
			pointsVal.innerHTML=pointChange.toString();
			chaStat.innerHTML=chaChange.toString();
			break;
		default:
			strStat.innerHTML="8";
			dexStat.innerHTML="8";
			conStat.innerHTML="8";
			intStat.innerHTML="8";
			wisStat.innerHTML="8";
			chaStat.innerHTML="8";
	}
	switch(strStat.innerHTML){
		case "15":
			str_mod.innerHTML="+2";
			break;
		case "14":
			str_mod.innerHTML="+2";
			break;
		case "13":
			str_mod.innerHTML="+1";
			break;
		case "12":
			str_mod.innerHTML="+1";
			break;
		case "11":
			str_mod.innerHTML="+0";
			break;
		case "10":
			str_mod.innerHTML="+0";
			break;
		case "9":
			str_mod.innerHTML="-1";
			break;
		case "18":
			str_mod.innerHTML="-1";
			break;
		default:
			str_mod.innerHTML="-1";
	}
	switch(dexStat.innerHTML){
		case "15":
			dex_mod.innerHTML="+2";
			break;
		case "14":
			dex_mod.innerHTML="+2";
			break;
		case "13":
			dex_mod.innerHTML="+1";
			break;
		case "12":
			dex_mod.innerHTML="+1";
			break;
		case "11":
			dex_mod.innerHTML="+0";
			break;
		case "10":
			dex_mod.innerHTML="+0";
			break;
		case "9":
			dex_mod.innerHTML="-1";
			break;
		case "18":
			dex_mod.innerHTML="-1";
			break;
		default:
			dex_mod.innerHTML="-1";
	}
	switch(conStat.innerHTML){
		case "15":
			con_mod.innerHTML="+2";
			break;
		case "14":
			con_mod.innerHTML="+2";
			break;
		case "13":
			con_mod.innerHTML="+1";
			break;
		case "12":
			con_mod.innerHTML="+1";
			break;
		case "11":
			con_mod.innerHTML="+0";
			break;
		case "10":
			con_mod.innerHTML="+0";
			break;
		case "9":
			con_mod.innerHTML="-1";
			break;
		case "18":
			con_mod.innerHTML="-1";
			break;
		default:
			con_mod.innerHTML="-1";
	}
	switch(intStat.innerHTML){
		case "15":
			int_mod.innerHTML="+2";
			break;
		case "14":
			int_mod.innerHTML="+2";
			break;
		case "13":
			int_mod.innerHTML="+1";
			break;
		case "12":
			int_mod.innerHTML="+1";
			break;
		case "11":
			int_mod.innerHTML="+0";
			break;
		case "10":
			int_mod.innerHTML="+0";
			break;
		case "9":
			int_mod.innerHTML="-1";
			break;
		case "18":
			int_mod.innerHTML="-1";
			break;
		default:
			int_mod.innerHTML="-1";
	}
	switch(wisStat.innerHTML){
		case "15":
			wis_mod.innerHTML="+2";
			break;
		case "14":
			wis_mod.innerHTML="+2";
			break;
		case "13":
			wis_mod.innerHTML="+1";
			break;
		case "12":
			wis_mod.innerHTML="+1";
			break;
		case "11":
			wis_mod.innerHTML="+0";
			break;
		case "10":
			wis_mod.innerHTML="+0";
			break;
		case "9":
			wis_mod.innerHTML="-1";
			break;
		case "18":
			wis_mod.innerHTML="-1";
			break;
		default:
			wis_mod.innerHTML="-1";
	}
	switch(chaStat.innerHTML){
		case "15":
			cha_mod.innerHTML="+2";
			break;
		case "14":
			cha_mod.innerHTML="+2";
			break;
		case "13":
			cha_mod.innerHTML="+1";
			break;
		case "12":
			cha_mod.innerHTML="+1";
			break;
		case "11":
			cha_mod.innerHTML="+0";
			break;
		case "10":
			cha_mod.innerHTML="+0";
			break;
		case "9":
			cha_mod.innerHTML="-1";
			break;
		case "18":
			cha_mod.innerHTML="-1";
			break;
		default:
			cha_mod.innerHTML="-1";
	}
}
//proficiency page
function proficiency(){
  let reg_prof=document.getElementById('reg_prof');
  let modNum=document.getElementById('modNum1').value;
  let regLevelProf=document.getElementById('level_1').value;
  let statMod;
  let profMod;
  switch (modNum){
    case "1":
      statMod=-5;
      break;
    case "2":
      statMod=-4;
      break;
    case "3":
      statMod=-4;
      break;
    case "4":
      statMod=-3;
      break;
    case "5":
      statMod=-3;
      break;
    case "6":
      statMod=-2;
      break;
      case "7":
      statMod=-2;
      break;
    case "8":
      statMod=-1;
      break;
    case "9":
      statMod=-1;
      break;
    case "10":
      statMod=0;
      break;
    case "11":
      statMod=0;
      break;
    case "12":
      statMod=1;
      break;
    case "13":
      statMod=1;
      break;
    case "14":
      statMod=2;
      break;
    case "15":
      statMod=2;
      break;
    case "16":
      statMod=3;
      break;
    case "17":
      statMod=3;
      break;
    case "18":
      statMod=4;
      break;
    case "19":
      statMod=4;
      break;
    case "20":
      statMod=5;
      break;
    default:
      statMod=0;
  }
  switch (regLevelProf){
    case "1-4":
      profMod=2;
      break;
    case "5-8":
      profMod=3;
      break;
    case "9-12":
      profMod=4;
      break;
    case "13-16":
      profMod=5;
      break;
    case "17-20":
      profMod=6;
      break;
    default:
      profMod=0;
  }
  let totalMod=statMod+profMod;
  if (totalMod<0){
    reg_prof.innerHTML=totalMod;
  } else{
    reg_prof.innerHTML= "+" + totalMod;
  }
}
function attackRoll(){
	let attack_roll=document.getElementById('attack_roll');
	let modNum=document.getElementById('modNum4').value;
	let attackProf=document.getElementById('level_4').value;
	let statMod;
	let profMod;
	switch (modNum){
		case "1":
			statMod=-5;
			break;
		case "2":
			statMod=-4;
			break;
		case "3":
			statMod=-4;
			break;
		case "4":
			statMod=-3;
			break;
		case "5":
			statMod=-3;
			break;
		case "6":
			statMod=-2;
			break;
		case "7":
			statMod=-2;
			break;
		case "8":
			statMod=-1;
			break;
		case "9":
			statMod=-1;
			break;
		case "10":
			statMod=0;
			break;
		case "11":
			statMod=0;
			break;
		case "12":
			statMod=1;
			break;
		case "13":
			statMod=1;
			break;
		case "14":
			statMod=2;
			break;
		case "15":
			statMod=2;
			break;
		case "16":
			statMod=3;
			break;
		case "17":
			statMod=3;
			break;
		case "18":
			statMod=4;
			break;
		case "19":
			statMod=4;
			break;
		case "20":
			statMod=5;
			break;
		default:
			statMod=0;
	}
	switch (attackProf){
		case "1-4":
			profMod=2;
			break;
		case "5-8":
			profMod=3;
			break;
		case "9-12":
			profMod=4;
			break;
		case "13-16":
			profMod=5;
			break;
		case "17-20":
			profMod=6;
			break;
		default:
			profMod=0;
	}
	let totalMod=statMod+profMod;
	if (totalMod<0){
		attack_roll.innerHTML=totalMod;
	} else{
		attack_roll.innerHTML= "+" + totalMod;
	}
}
function spellSave(){
  let finalSpellSave=document.getElementById('spell_save');
  let modNum=document.getElementById('modNum2').value;
  let regLevelProf=document.getElementById('level_2').value;
  let statMod;
  let profMod;
  switch (modNum){
    case "1":
      statMod=-5;
      break;
    case "2":
      statMod=-4;
      break;
    case "3":
      statMod=-4;
      break;
    case "4":
      statMod=-3;
      break;
    case "5":
      statMod=-3;
      break;
    case "6":
      statMod=-2;
      break;
      case "7":
      statMod=-2;
      break;
    case "8":
      statMod=-1;
      break;
    case "9":
      statMod=-1;
      break;
    case "10":
      statMod=0;
      break;
    case "11":
      statMod=0;
      break;
    case "12":
      statMod=1;
      break;
    case "13":
      statMod=1;
      break;
    case "14":
      statMod=2;
      break;
    case "15":
      statMod=2;
      break;
    case "16":
      statMod=3;
      break;
    case "17":
      statMod=3;
      break;
    case "18":
      statMod=4;
      break;
    case "19":
      statMod=4;
      break;
    case "20":
      statMod=5;
      break;
    default:
      statMod=0;
  }
  switch (regLevelProf){
    case "1-4":
      profMod=2;
      break;
    case "5-8":
      profMod=3;
      break;
    case "9-12":
      profMod=4;
      break;
    case "13-16":
      profMod=5;
      break;
    case "17-20":
      profMod=6;
      break;
    default:
      profMod=0;
  }
  let saveEquating=8+statMod+profMod;
  finalSpellSave.innerHTML=saveEquating;
}
function diffProfs(button_id){
  let otherProfs=document.getElementById('otherProfs');
  let modNum=document.getElementById('modNum3').value;
  let regLevelProf=document.getElementById('level_3').value;
  let statMod;
  let profMod;
  let totalMod;
  switch (modNum){
    case "1":
      statMod=-5;
      break;
    case "2":
      statMod=-4;
      break;
    case "3":
      statMod=-4;
      break;
    case "4":
      statMod=-3;
      break;
    case "5":
      statMod=-3;
      break;
    case "6":
      statMod=-2;
      break;
      case "7":
      statMod=-2;
      break;
    case "8":
      statMod=-1;
      break;
    case "9":
      statMod=-1;
      break;
    case "10":
      statMod=0;
      break;
    case "11":
      statMod=0;
      break;
    case "12":
      statMod=1;
      break;
    case "13":
      statMod=1;
      break;
    case "14":
      statMod=2;
      break;
    case "15":
      statMod=2;
      break;
    case "16":
      statMod=3;
      break;
    case "17":
      statMod=3;
      break;
    case "18":
      statMod=4;
      break;
    case "19":
      statMod=4;
      break;
    case "20":
      statMod=5;
      break;
  }
  switch (regLevelProf){
    case "1-4":
      profMod=2;
      break;
    case "5-8":
      profMod=3;
      break;
    case "9-12":
      profMod=4;
      break;
    case "13-16":
      profMod=5;
      break;
    case "17-20":
      profMod=6;
      break;
  }
  //equation for twice prof
  if(button_id==1){
    totalMod=2*profMod+statMod;
    if (totalMod<0){
      otherProfs.innerHTML=totalMod +", remember that this is only used for certain situations";
    } 
	else{
      otherProfs.innerHTML="+" + totalMod +", remember that this is only used for certain situations";
    }
  }
  //equation for expertise
  if (button_id==2){
    totalMod=2*profMod+statMod;
    if (totalMod<0){
      otherProfs.innerHTML=totalMod;
    } 
	else{
      otherProfs.innerHTML="+" + totalMod;
    }
  }
  //equation for half prof
  if (button_id==3){
    totalMod=Math.floor(profMod/2)+statMod;
    if (totalMod<0){
      otherProfs.innerHTML=totalMod;
    } 
	else{
      otherProfs.innerHTML="+" + totalMod;
    }
  } 
  /*else {
    otherProfs.innerHTML="&nbsp;";
  }*/
}
//race page
function rDetailGenerator(){
  let raceChoosen=document.getElementById('raceChoosen');
  let raceDetails=document.getElementById('raceDetails');
  let racePicker=document.getElementById('racePicker').value;
  let section;
  let description;
  switch (racePicker){
    case "dragonborn":
      section="Dragonborn";
      description="Dragonborns are basically humanoid dragons. They are half breeds of humans and dragons. They are considered a mediumn size creature which basically means you're about the size of a human. Humanoid if you will. They get 2 special attributes from their dragon lineage. They are called <b>Breath Weapon</b> and <b>Damage Resistance</b>. The <b>Breath Weapon</b> is exactly what it sounds like. I mean your part dragon what did you expect. Basically depending on what color Dragonborn you are will determine not your breath's damage type, but also at what range you can use it. Black and Copper Dragonborns get acid damage, Blue and Bronze Dragonborns get lightning damage, Green gets poison damage, Silver and White get cold damage, and finally Brass, Gold, and Red dragonborns deal fire damage. Now there are 2 ranges a Dragonborn usually can use there <b>Breath Weapon</b>. Black, Blue, Brass, Bronze, and Copper have a straight 30 foot line of elemental damage that they can do. Meanwhile Gold, Green, Red, Silver, and White can only use it up to a range of 15 feet, but can hit a much wider area. Now the second part of your Dragon half blood is your <b>Damage Resistance</b>. Now I go more in depth about what resistances are in the conditions tab (under the petrified section if you wish to go peruse it). I won't go too much in depth here, just think of it as a way to reduce damage for now. This of course also depends on what color Dragonborn you are. You are resistant to the damage type that you deal with your <b>Breath Weapon</b>. Which means Green Dragonborns are resistant to poison, Black and Copper Dragonborns are resistant to acid damage, Blue and Bronze are resistant to lightning, Silver and White are resistant to cold, and, you guessed it, Brass, Gold, and Red Dragonborns are resistant to fire damage. You'll also get a +2 to your str and a +1 to your char stats. And, since you are part Dragon, you can speak the languages of Draconic and Common.";
      break;
    case "dwarf":
      section="Dwarf";
      description="The Dwarves are like every other fantsay dwarves. They're expert craftsman and blacksmiths. They are considered a medium size creature since they range between 4'-5' tall. Therefore, they also have a movement speed of only 25 feet. They also get <b>Darkvision</b>, which essentially let's you see in the dark, and they get resistantce to and advantage on saving throws that involves poison damage. Since they are a race of craftsmen they get something called <b>Stonecunning</b>. This gives them adavantage on history ability checks that involve stone work. They also get proficiency with the battleaxe, handaxe, light hammer, and warhammer, and have a choice of having proficiency with either smith's tools, brewer's supplies, or mason's tools. You'll also get a +2 to your con stat. Furthermore, the languages you know are Common and Dwarvish. There are also two subraces of Dwarves: the <b>Hill Dwarf</b> and the <b>Mountain Dwarf</b>. Each of these will get all the aformentioned aspects while also getting 2 extra aspects that are special to them. <b>Hill Dwarf</b> will get a +1 to their wis stat and a +1 to their hit point maximum every time they level up, while <b>Mountain Dwarf</b> will get a +2 to their str stat and proficiency in light and medium armor.";
      break;
    case "elf":
      section="Elf";
      description="Elves are the immortal, pointy eared creatures of any clasic fantasy setting. They are considered a medium sized creature and match average human height. Because of that, their movement speed is 30 feet. They get <b>Darkvision</b>, which allows you to see in the dark, <b>Trance</b>, which allows them to only have to sleep for 4 hours instead of 8 for a long rest, and they are immune to any spell that tries to put them to sleep. Furthermore they get advantage on saving throws that involve the charmed condition (see the conditions tab for more information), get proficiency in the perception ability, the longsword, shortsword, shortbow, and longbow. Moreover, they get a +1 to their Int and know the Common and Elvish languages. The Elf has 5 subraces: the <b>Dark Elf</b>, <b>Eladrin Elf</b>, <b>High Elf</b>, <b>Pallid Elf</b>, and the <b>Wood Elf</b>. All these subraces get the aspects of the elf with a few aspects that are specific to them. The <b>Dark Elf</b> gets their cha stat boosted by +1, <b>Darkvision</b> increases to 120ft of eyesight, disadvantage on perception ability checks and attack rolls when a creature is in direct sunlight, access to the dancing lights, faerie fire, and darkness spells, and proficiency with rapiers, shortbows, and hand crossbows. The <b>Eladrin Elf</b> gets a +1 to their int stat, access to the misty step spell, and proficiency with the longsword, shortsword, shortbow, and longbow. The <b>High Elf</b> gets a +1 to their int stat, access to a cantrip from the wizard spell list (click <a href=\"http://dnd5e.wikidot.com/spells:wizard\">here</a> to view the list), an extra language of your choice, and proficiency with the longsword, shortsword, shortbow, and longbow. The <b>Pallid Elf</b> gets a +1 to their wis stat, advantage on investigation and insight ability checks, and access to the light, sleep, and invisibility spells. The <b>Wood Elf</b> gets a +1 to their wis stat, an extra 5 feet of movement, the chance to hide when lightly obscured by nature, and proficiency with the longsword, shortsword, shortbow, and longbow";
      break;
    case "gnome":
      section="Gnome";
      description="Gnomes are one of the shortest races in the games. They are evn shorter dwarves. This means they are considered a small creature, ranging from 3'-4' tall. Think about them as those little garden gnome decorations. Just like dwarves they only have a movement speed of 25 feet. They also get <b>Darkvision</b>, which allows them to see more easily in the dark, and advantage on Int, Wis, and Cha saving throws that involve magic. Their int stat gets a boost of +2 and they can speak both Common and Gnomish. They have only 2 subraces: <b>Forest Gnomes</b> and <b>Rock Gnomes</b>. These 2 subraces get all the aspects described before as well as their own special aspects. <b>Forest Gnomes</b> get a +1 to their dex stat, access to the minor illusion cantrip, and can communicate simple concepts with forest animals by using <b>Speak With Small Beasts</b>. <b>Rock Gnomes</b> get a +1 increase to their con stat, <b>Artificer's Lore</b>, which gives twice proficiency when making a history ability check on magical items, alchemical objects, or technology, and <b>Tinker</b>, which gives you proficiency with tinkerer's tools and the ability to make a tiny clockwork device that can act as a music box, fire starter, or clockwork toy.";
      break;
    case "half-elf":
      section="Half-elf";
      description="Half-elves are an elf race that is produced through crossbreeding. They aren't immortal like elves, but they do live for quite a while. Just like Elves they are considered a medium size creature, get a movement speed of 30 feet, get <b>Darkvision</b>, advantage on saving throws that involve charm, and are immune to sleeping spells. Half-elves will also get a +2 to their charisma stat, and 2 +1's to any other stat of their choice. You will also gain proficiency in 2 abilities of your choice and can get another language to speak along with Common and Elvish. There are 4 subraces when it comes to Half-elves. These are <b>Aquatic Half-elf</b>, <b>Drow Half-elf</b>, <b>High Half-elf</b>, and <b>Wood Half-elf</b>. These subraces get all the aspects listed before as well as their own special things. In order to do the listed special aspects you must get rid of the 2 skills proficiencies you choose for this race earlier. <b>Aquatic Half-elf</b> would get a swiming speed of 30 feet, <b>Drow Half-elf</b> access to the dancing lights, faerie fire, and darkness spells, <b>High Half-elf</b> a cantrip from the wizard spell list (click <a href=\"http://dnd5e.wikidot.com/spells:wizard\">here</a> to view the list) or proficiency with the longsword, shortsword, shortbow, and longbow, and <b>Wood Half-elf</b> an extra 5 feet of movement, the chance to hide when lightly obscured by nature, or proficiency with the longsword, shortsword, shortbow, and longbow.";
      break;
    case "halfling":
      section="Halfling";
      description="Halflings are the hobits of D&D. They live in the ground and are as short as gnomes. This makes them a small creature and gives them only 25 feet of movement. They get <b>Lucky</b>, an aspect that will allow you to reroll a natural 1 when rolling a d20, advantage on saving throws that involve the frightened condition (see the conditions tab for more info), and can move through an enemy that is of medium size or larger. As a Halfling you know both the Common and Halfling languages and get a +2 boost to your dex stat. There are 4 subraces when it comes to Halflings and they are the <b>Ghostwise Halfling</b>, <b>Lightfoot Halfling</b>, <b>Lotusden Halfling</b>, and <b>Stout Halfling</b>. Each of these subraces get the aspexts mentioned before as well as their own special things. The <b>Ghostwise Halfling</b> gets a +1 to their wis stat and the ability to speak telepathically with any creature within 30 feet of you. The <b>Lightfoot Halfling</b> gets a +1 to their cha stat and the ability hide when a medium sized creature or larger is standing in front of you. The <b>Lotusden Halfling</b> gets a +1 to their wis stat, creatures that try to track you have disadvantage, and access to the druidcraft, entangle, and spike growth spells. The <b>Stout Halfling</b> gets a +1 to their con stat, resistance to poison, and advantage on saving throws having to do with poison.";
      break;
    case "half-orc":
      section="Half-orc";
      description="Half-orcs are another one of the results of crossbreeding. They are the offspring of, well orcs. They are considered a medium sized creature and have a movement speed of 30 feet. They get <b>Darkvision</b>, which allows them to see better in the dark, <b>Relentless Endurance</b>, which if you happen to drop below you hp, and don't die immeadiatly from the attack, you can decide to only be dropped to 1 hp once per day, and <b>Savage Attacks</b>, which when you crit you can roll an additional damage dice to add to your attack. You will aslo get proficiency in the intimidation ability. Not only that, but you can speak both Common and Orc.";
      break;
    case "human":
      section="Human";
      description="Humans are one of the most versitile races in D&D. Some would say even one of the most boring races to play. Either way, they are considered a medium sized creature and have a walking speed of 30 feet. They get to add a +1 to all of their basic stats and will get an extra language to speak along with Common.";
      break;
    case "tiefling":
      section="Tiefling";
      description="Tieflings are the humanoid offspring of devils. They have tainted blood running through their vanes. So if you want demon horns there you go. Tieflings are considered a medium size creature and, in turn, get a movement speed of 30 feet. They get <b>Darkvision</b>, which allows them to see more easily in the dark, resistance to fire damage, and you get access to the spells, depending on what level you are, thaumaturgy, hellish rebuke, and darkness. You'll also receive a +1 to your int stat and a +2 to your cha stat. Moreover, you learn the languages of Common and Infernal.";
      break;
  }
  raceChoosen.innerHTML=section;
  raceDetails.innerHTML=description;
}
//class page
function cDetailGenerator() {
    let classChosen = document.getElementById('classChosen');
    let classDetails = document.getElementById('classDetails');
    let classPicker = document.getElementById('classPicker').value;
    let section;
    let description;
    switch (classPicker) {
        case "barbarian":
            section = "Barbarian";
            description = "The Barbarian is one of the easiest classes to learn. The Barbarian is essentially a tank that can deal some heavy hits as they level up. They are infamous for running head on into the frey and living to tell the tale. They mainly deal with heavy weapons like greatswords and giant hammers. Their most meorable aspect is <b>Rage</b>. This aspect basically allows you to hit harder and take less damage at the same time. But be careful, you may be a front liner, but you can still die. Especially, because magic attacks are included in your <b>Rage</b> resistances. Barbarians work best with str, con, and dex. These are the stats that will keep you alive as a front liner.";
            break;
        case "bard":
            section = "Bard";
            description = "The bard is the most notorious class in the game. Their is a reason that this class has been memed heavily into the ground by the D&D community. Built by the right person this class is basically the most overpowered class in the game. A bard is essectially a musical magic caster. They deal in secrets, manipulation, and plenty of meariment. Their <b>Jack of All Trades</b> and <b>Experise</b> aspects make it really hard for them to fail any roll. What <b>Jack of All Trades</b> does is it gives you half proficiency on all ability checks you are not proficient in. And if you already have a half proficiency before then it becomes a full proficiency with this aspect. Meanwhile, <b>Expertise</b> gives the bard 2 abilities that they can double their proficiency mod for. The stats that the Bard rely on are cha, wis, and int. Since the Bard is a spell caster their spell casting stat is cha.";
            break;
        case "cleric":
            section = "Cleric";
            description = "The cleric is the support class of D&D. Or at least it's supposed to be. They are usually meant to assit the party with debuff, buff, and healing spells. As the name implies their powers come from the god they worship. However, that does mean that you have to play it like that. The cleric has very decent, harmful spells at their disposal. In turn the essential spells for the cleric are <b>cure wounds and inflict wounds</b>. These spells can either save you or be your doom in battle. Cure wounds heals a player for about 1d8 hit points while inflict wounds damages someone for about 1d8 hit points at level 1. That is very decent especially when some classes at level 1 start with single digit hit points at level 1. The best stats for the cleric are wis and dex. Wis takes top priority though, since it is their spell casting stat.";
            break;
        case "druid":
            section = "Druid";
            description = "Druid is like the fantasy version of a tree hugger. They get their magic from the wilderness and the powers of nature. They mainly use this power to use an aspect called <b>Wild Shape</b>. What <b>Wild Shape</b> allows you to do is change into several animals. Now you will have to have seen the creature in order to turn into it. Also you will take the physical stats and abilities of the creature you're turning into. For example, dogs and wolves get advantage on perception checks if it involves smell. If you were to change into a dog or a wolf you would get that ability. The stats the Druid favors is wis since it is their spell casting mod.";
            break;
        case "fighter":
            section = "Fighter";
            description = "Fighter is essectially a weapon expert. You are proficient in nearly every weapon in the game. Not only that, but you can get a lot of ways to disrupt, outsmart, or hit your phoes. The Fighter's most popular class aspect is <b>Action Surge</b>. As said above, you can use your action to do anything you could possibly think of on your turn, with DM discretion of course. What action surge does is after you have used your action you can use this aspect to give yourself another action. You can only use this aspect once per long rest however, so use it carefully. The Fighter's prefered stats are dex and str.";
            break;
        case "monk":
            section = "Monk";
            description = "Monks are basically the kung-fu masters of the D&D universe. They are very agile fighters who rely on acrobatics and their fists to fight against their enemies. They can either be very startegic about how they use their aspects or go in and punch everything. This then makes their prefered stat str and dex. Str would then of course effect damage while dex would effect their ability to hit. In turn, the aspect that is most popular with them are called <b>Grit Points</b>. These <b>Grit Points</b> allow for the monk to dodge attacks, make extra attacks, move faster, or stun enemies. All of these things can be used with <b>Grit Points</b>, however there are limited uses of this aspect so be careful.";
            break;
        case "paladin":
            section = "Paladin";
            //finish later
			description = "Paladins are the religous warriors of D&D. They get power from their god just like the Cleric does. They weild swords and shields more effectively than a cleric. They also are every necromancers worst nightmare. Their most popular aspect is <b>Divine Smite</b> and <b>Lay on Hands</b>. With <b>Divine Smite</b> they can do bonus holy damage on any attack they want at the use of a spell slot. Not only that, but the higher level the spell slot used the more damage they can do. Meanwhile, <b>Lay on Hands</b> is a healing ability that gives the Paladin a finite amount of hitpoints they can heal. So instead of rolling for hitpoints like the Cleric does they can heal as many hit points as they want as long as it doesn't go over this finite number. Granted once you use them you will have to subtract as much hit points as you used from this finite number to see how much you have left. This makes their best stats str and cha. Cha effects their spell casting mod as well as several other support aspects the Paladin can get, while str effects the Paladin's damage.";
            break;
        case "ranger":
            section = "Ranger";
            description = "Rangers are a lot like druids. They get their power from the wilderness just like them. Howvever, they get it from an understanding of nature not from nature directly. They can navigate their way through the wilderness and hunt enemies with the effectiveness of a hunter. Even though this is what Ranger is meant to be they have been deemed one of the worst classes in the game by the D&D commumnity. While every class gets something special for them, Ranger doesn't really seem to get that. They get <b>Favored Enemy</b>  and <b>Natural Explorer</b> which gives them a better chance to navigate through their favored terrain and track their favored enemy, but aside from that they don't get anything as strong as what the other classes get. That being said their best stats are wis and dex. Wis acts as their spellcasting mod, while dex works best for their attack mod.";
            break;
        case "rogue":
            section = "Rogue";
            description = "Rogues are the thieves, spies, and assasin's of D&D. They work best when working and attacking from the shadows. This can be when a foe is distracted by another ally or when the rogue attacks from a hiding spot. This classes best aspect is <b>Sneak Attack</b>. <b>Sneak Attack</b> is an aspect that allows you to do extra damage when attacking at advantage. This can count from a condition, from stealth, or from when an ally is within 5 feet of an enemy. So as long as you have advantage on an attack roll you can do this extra damage once per round, so use it wisely. This then makes their prefered stat dex. Dex will of course influence attack rolls and stealth rolls as well. So if you intend to hide to get the bonus <b>Sneak Attack</b> damage, dex is going to be your best friend.";
            break;
        case "sorcerer":
            section = "Sorcerer";
			//finish when dnd beyond starts working again
            description = "Sorcerers are magic users that have inherited their magic gift from their bloodline. This means that their entire family tends to be magical. Your families magic origin is entirely up to you. A few common ideas are that your family was blessed by an all powerful creature or a past family member drank the blood of an old god, things like that. Anyway, the Sorcerer's best class aspect are called <b>Font of Magic</b>. This aspect is represented by something called <b>Sorcery Points</b>. These <b>Sorcery Points</b> can be used to regain used spell slots or create new, temporary spell slots. In turn, you can also use spell slots to regain used <b>Sorcery Points</b>. Now, this makes the Sorcerers best stats their cha stat. This is the spell casting stat that they use for spell saves and spell attacks.";
            break;
        case "warlock":
            section = "Warlock";
            description = "Warlock is a magic caster that gets their power from a <b>Patron</b>. A <b>Patron</b> is essentially an all powerful being that gives the Warlock a fraction of their power. Now this all powerful being can be a god, however in order for the player to be a Warlock instead of a Cleric, they can not worship said god. Most people make their <b>Patron's</b> an eldritch horror or some kind of demon. It can be best to think of this class as the edgy magic caster. Not only that, but this class will get more cantrips than spell slots. So use your spells wisely. Now this class' best aspect is <b>Eldritch Blast</b>. This cantrip is one that no other spell caster gets. Depending on what level you are, it will shoot out a number of projectiles at your enemies. Each projectile will do 1d10 force damage on hit. This cantrip does require an attack roll. Therefore, the Warlocks best skill should be cha. Cha will work as this spell casters magic stat.";
            break;
        case "wizard":
            section = "Wizard";
            description = "Wizard is essentially the nerdiest spell caster in this game. They tend to be bookworms that can cast magic. Now the Wizard is one of the trickyest spell casters to learn. Like most spell casters Wizards will get new spells as they level up, however there is another way Wizards can learn spells. This is by copying them into their spell book. If a spell is written down they can copy it into their spell book as long as it's a spell level they can cast. This process will take 2 hours of in game time and 50 gold pieces from the player. Now the best class aspect about the Wizard is sheerly how many spells and spell slots they get. They get the most of these out of all the magic casters. Now their most trusted stat is int. Int is there spell casting stat, hence why I said they're the book worms of spell casters.";
            break;
    }
    classChosen.innerHTML = section;
    classDetails.innerHTML = description;
}
//homebrew page
function rollStats(){
  let roll1=document.getElementById('roll1');
  let roll2=document.getElementById('roll2');
  let roll3=document.getElementById('roll3');
  let roll4=document.getElementById('roll4');
  let rolledStat=document.getElementById('rolledStat');
  let rolledMod=document.getElementById('rolledMod');
  let possible_rolls=[Math.floor(Math.random()*(1-6)+6), Math.floor(Math.random()*(1-6)+6), Math.floor(Math.random()*(1-6)+6), Math.floor(Math.random()*(1-6)+6)];
  let statTotal=possible_rolls[0]+possible_rolls[1]+possible_rolls[2]+possible_rolls[3]-Math.min(...possible_rolls);
  switch (statTotal){
	  case 3:
		rolledMod.innerHTML="-4";
		break;
	case 4:
		rolledMod.innerHTML="-3";
		break;
	case 5:
		rolledMod.innerHTML="-3";
		break;
	case 6:
		rolledMod.innerHTML="-2";
		break;
	case 7:
		rolledMod.innerHTML="-2";
		break;
	case 8:
		rolledMod.innerHTML="-1";
		break;
	case 9:
		rolledMod.innerHTML="-1";
		break;
	case 10:
		rolledMod.innerHTML="+0";
		break;
	case 11:
		rolledMod.innerHTML="+0";
		break;
	case 12:
		rolledMod.innerHTML="+1";
		break;
	case 13:
		rolledMod.innerHTML="+1";
		break;
	case 14:
		rolledMod.innerHTML="+2";
		break;
	case 15:
		rolledMod.innerHTML="+2";
		break;
	case 16:
		rolledMod.innerHTML="+3";
		break;
	case 17:
		rolledMod.innerHTML="+3";
		break;
	case 18:
		rolledMod.innerHTML="+4";
		break;
	default:
		rolledMod.innerHTML="&nbsp;";
  }
  roll1.innerHTML=possible_rolls[0];
  roll2.innerHTML=possible_rolls[1];
  roll3.innerHTML=possible_rolls[2];
  roll4.innerHTML=possible_rolls[3];
  rolledStat.innerHTML=statTotal.toString();
}
function addRule(){
  let userHeader=document.getElementById('userHeader');
  let userDetail=document.getElementById('userDetail');
  let ruleTitle=document.getElementById('user_title').value;
  let ruleDescription=document.getElementById('user_rule').value;
  userHeader.innerHTML=ruleTitle;
  userDetail.innerHTML=ruleDescription;
}