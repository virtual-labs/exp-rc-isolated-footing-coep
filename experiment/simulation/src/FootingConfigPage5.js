var vuVal = 0;
var tauV = 0;
var xValCal = 0;

var conValArr = [];
var compArr = [];
var finalAns = 0;

function finalPage(){
	
	  var selection5 = '<div class="row">'
    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-2 spanMsg">'
    + '<strong class="labelstyleInfo "><center> h = ' + d_val + ' mm </center></strong>'
    + '</div>'
//    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-3 spanMsg">'
    + '<strong class="labelstyleInfo "><center>L<sub>f</sub> = ' + LfValue + ' m </center></strong>'
    + '</div>'
//    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-5 spanMsg">'
    + '<strong class="labelstyleInfo "><center>w<sub>u</sub> = ' + wuVal2 + ' kN/m<sup>2</sup> </center></strong>'
    + '</div>'
    + '<div class="col-sm-1 "></div>'
    + '</div>'
    
    +'<div class="row">'
    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-2 spanMsg">'
    + '<strong class="labelstyleInfo "><center> d = ' + effValRound + ' mm </center></strong>'
    + '</div>'
//    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-3 spanMsg">'
    + '<strong class="labelstyleInfo "><center>b<sub>f</sub> = ' + BfValue + ' m </center></strong>'
    + '</div>'
//    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-5 spanMsg">'
    + '<strong class="labelstyleInfo "><center>f<sub>ck</sub> = ' + conVal + ' Mpa  </center></strong>'
    + '</div>'
    + '<div class="col-sm-1 "></div>'
    + '</div>'
    
    
//    + '<div class="row">'
//    + '<div class="col-sm-1 "></div>'
//    + '<div class="col-sm-5 spanMsg">'
//    + '<strong class="labelstyleInfo "><center>d = ' + effValRound + ' mm </center></strong>'
//    + '</div>'
//    + '<div class="col-sm-1 "></div>'
//    + '<div class="col-sm-4 spanMsg">'
//    + '<strong class="labelstyleInfo "><center>b<sub>f</sub> = ' + BfValue + ' m </center></strong>'
//    + '</div>'
//    + '<div class="col-sm-1 "></div>'
//    + '</div>'
//	
//	
	
	+ '<div class="row calRowBorder" style="margin-top:3px;"  >' // Use style="display:none;"
    + '<div class="col-sm-5">'
    + '<label class="labelstyle ">Calculate shear force V<sub>u</sub > : </label>'
    + '</div>'
    + '<div class="col-sm-4">'
    + '<input type="number" id="vuTxt" class="form-control">'
    + '</div>'
    + '<div class="col-sm-3" id="buttonDiv">'
    + '<button type="button" class="btn btn-danger btnDesign" style="width:100%;" id="vuTxtSubmit" data-toggle="modal" data-target="#myModal"><b>Submit</b></button>'
    + '</div>'
    + '</div>'
	
	
	+ '<div class="row calRowBorder" style="margin-top:3px;"  id="tau" hidden>' // Use style="display:none;"
    + '<div class="col-sm-5">'
    + '<label class="labelstyle ">Calculate &tau;<sub>v</sub > : </label>'
    + '</div>'
    + '<div class="col-sm-4">'
    + '<input type="number" id="tauTxt" class="form-control">'
    + '</div>'
    + '<div class="col-sm-3" id="buttonDiv">'
    + '<button type="button" class="btn btn-danger btnDesign" style="width:100%;" id="tauTxtSubmit" data-toggle="modal" data-target="#myModal"><b>Submit</b></button>'
    + '</div>'
    + '</div>'
	
	
	   +'<div class="row " id="minMaxCompareLabel" hidden>'
	   +'<div class="col-sm-2">'	 
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<center><label class="labelstyle spanMsg " >  <label id = "minMaxCompare" class="labelstyle spanMsg "> pt percentx : '+ptPercentVal+' % pt percenty : '+ptPercentValy+' %</label>   </label></center>'
	   +'</div>'	    
	   +'<div class="col-sm-2" >'
	   +'</div>'
	   +'</div>'
	   
	   
	+ '<div class="row calRowBorder" style="margin-top:3px;"  id="tauC" hidden>' // Use style="display:none;"
    + '<div class="col-sm-5">'
    + '<label class="labelstyle ">Calculate &tau;<sub>c</sub > : </label>'
    + '</div>'
    + '<div class="col-sm-3">'
    + '<input type="number" id="tauCTxt" class="form-control">'
    + '</div>'
    + '<div class="col-sm-2">'
    +'<button type="button"   class="btn btn-info btnStyle" id="refer" data-toggle="modal" data-target="#myModal" >Refer</button>'

    + '</div>'
    + '<div class="col-sm-2" >'
    + '<button type="button" class="btn btn-danger btnDesign" style="width:100%;" id="tauCTxtSubmit" data-toggle="modal" data-target="#myModal"><b>Submit</b></button>'
    + '</div>'
    + '</div>'
	   
	$("#page1Div2").html(selection5);
	
	var vuValEnter;
	var id23 = 1;
	$("#vuTxtSubmit").click(function(){
		var secTerm = (LfConvert-10)/2;
		
		vuVal = (wuVal2*secTerm).toFixed(2);
		vuVal = parseFloat(vuVal);
		
		vuValEnter = $("#vuTxt").val();
		
		 if (vuValEnter == "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary value");
    } else {
	       
	       vuValEnter = parseFloat($("#vuTxt").val());
	   
	   if (id23 <= 3) {
            if (vuValEnter == vuVal) {
               $("#vuTxtSubmit").prop("disabled",true);
               $("#vuTxt").prop("disabled",true);
               $("#tau").prop("hidden",false);
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id23 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            $("#MsgModal").html("<b>v<sub>u</sub> = w<sub>u</sub> &times; (L<sub>f</sub> - h)/2</b>");
 
        } else {
            if (vuValEnter == vuVal) {
             $("#vuTxtSubmit").prop("disabled",true);
               $("#vuTxt").prop("disabled",true);
               $("#tau").prop("hidden",false);
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + vuVal);
            }
        }
        id23++;
	       
		}
	});
	
	var tauVEnter;
	var id24 = 1;
	
	$("#tauTxtSubmit").click(function(){
		tauV = (vuVal/(BfValue*effValRound)).toFixed(2);
		tauV = parseFloat(tauV);
		
		 tauVEnter  = $("#tauTxt").val();
		  
		   if (tauVEnter == "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary value");
    } else {
	 
	      tauVEnter = parseFloat($("#tauTxt").val());
	   
	   if (id24 <= 3) {
            if (tauVEnter == tauV) {
               $("#tauTxtSubmit").prop("disabled",true);
               $("#tauTxt").prop("disabled",true);
               $("#minMaxCompareLabel").prop("hidden",false);
               $("#tauC").prop("hidden",false);
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id24 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            $("#MsgModal").html("<b>&tau;<sub>v</sub> = v<sub>u</sub>/(b<sub>f</sub> &times; d)</b>");
 
        } else {
            if (tauVEnter == tauV) {
            $("#tauTxtSubmit").prop("disabled",true);
               $("#tauTxt").prop("disabled",true);
               $("#minMaxCompareLabel").prop("hidden",false);
               $("#tauC").prop("hidden",false);
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + tauV);
            }
        }
        id24++;
	   
		}  
	});
	
	$("#refer").click(function(){
	var ht = '<iframe src="images/plain-and-reinforced-concrete.pdf#page=74"  width="100%;" height="600px;" ></iframe>'
	
	$(".modal-header").css('background-color', '#45898680');
	$(".modal-header").html("Reference");
	$("#MsgModal").html(ht);
	
});


var id25=1;
var tauCEnter;
   $("#tauCTxtSubmit").click(function(){
	 
	 interpolate();
	tauCEnter = $("#tauCTxt").val();
	
	 if (tauCEnter == "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary value");
    } else {
	   
	    tauCEnter = parseFloat($("#tauCTxt").val());
	   
	   if (id25 <= 3) {
            if (tauCEnter == finalAns) {
               $("#tauCTxt").prop("disabled",true);
               $("#tauCTxtSubmit").prop("disabled",true);
              
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id25 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
           var modelI11 = '<img src="images/interpolationFormula.png" class="img-responsive" alt="Cinque Terre">'

			$("#MsgModal").html(modelI11);
 
        } else {
            if (tauCEnter == finalAns) {
            
               $("#tauCTxt").prop("disabled",true);
               $("#tauCTxtSubmit").prop("disabled",true);
            
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + finalAns);
            }
        }
        id25++;
	   
 }
	
});

	
	function interpolate(){
		
		 if(ptPercentVal<ptPercentValy){
	xValCal = ptPercentValy;
	}else{
	xValCal = ptPercentVal;	
	}
	
	console.log("xper : "+ptPercentVal+" yper : "+ptPercentValy+" greater : "+xValCal);
	
	 compArr = [0.15,0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];
		
		       if(conVal==15){
					conValArr = [0.28,0.35,0.46,0.54,0.6,0.64,0.68,0.71,0.71,0.71,0.71,0.71,0.71];

				}else if(conVal==20){
					conValArr = [0.28,0.36,0.48,0.56,0.62,0.67,0.72,0.75,0.79,0.81,0.82,0.82,0.82];

				}else if(conVal==25){
					conValArr = [0.29,0.36,0.49,0.57,0.64,0.7,0.74,0.78,0.82,0.85,0.88,0.9,0.92];

				}else if(conVal==30){
					conValArr = [0.29,0.37,0.5,0.59,0.66,0.71,0.76,0.8,0.84,0.88,0.91,0.94,0.96];

				}else if(conVal==35){
					conValArr = [0.29,0.37,0.5,0.59,0.67,0.73,0.78,0.82,0.86,0.9,0.93,0.96,0.99];

				}else if(conVal>=40){
					conValArr = [0.3,0.38,0.51,0.6,0.68,0.74,0.79,0.84,0.88,0.92,0.95,0.98,1.01];

				}
				
				console.log("conValArr "+conValArr);
				var closestPrevious = 0, closestNext = 0, comparePrevious = 0, compareNext = 0;
				
				
				 if(xValCal<=0.15){
			
			  closestPrevious = conValArr[0];
	          closestNext = conValArr[0];
	          comparePrevious = compArr[0];
	          compareNext = compArr[0];
	         if(closestPrevious!=closestNext||comparePrevious!=compareNext){  
	  var firstTerm = (comparePrevious-xValCal);
	 var secondTerm = closestPrevious-closestNext;
	 var firstFinalMul = firstTerm*secondTerm;
	 var secondTerm = comparePrevious*closestPrevious;
	 var thirdTerm = compareNext*closestPrevious;
	 
	 var num = firstFinalMul-secondTerm+thirdTerm;
	 var deno = comparePrevious-compareNext;
	 
	 var division = num/deno;
	  finalAns = -(division);
	    } else {
	   finalAns = closestPrevious;
	   }        
	          
		}else if(xValCal>=3){
			
			  closestPrevious = conValArr[conValArr.length - 1];
	          closestNext = conValArr[conValArr.length - 1];
	          comparePrevious = compArr[conValArr.length - 1];
	          compareNext = compArr[conValArr.length - 1]; 
	        if(closestPrevious!=closestNext||comparePrevious!=compareNext){    
	           var firstTerm = comparePrevious-xValCal;
	 var secondTerm = closestPrevious-closestNext;
	 var firstFinalMul = firstTerm*secondTerm;
	 var secondTerm = comparePrevious*closestPrevious;
	 var thirdTerm = compareNext*closestPrevious;
	 
	 var num = firstFinalMul-secondTerm+thirdTerm;
	 var deno = comparePrevious-compareNext;
	 
	 var division = num/deno;
	  finalAns = -(division);
	        } else {
	   finalAns = closestPrevious;
	   }   
			
		}else{
				 for (let i = 0; i < compArr.length; i++) {
        let diff = Math.abs(xValCal - compArr[i]);
       
   
        if (compArr[i] < xValCal && (comparePrevious === null || diff < Math.abs(xValCal - comparePrevious))) {
            closestPrevious = conValArr[i];
            comparePrevious = compArr[i];
        }
        if (compArr[i] > xValCal && (compareNext === null || diff < Math.abs(xValCal - compareNext))) {
            closestNext = conValArr[i];
            compareNext = compArr[i];
        }
        
        
    }
    if(closestPrevious!=closestNext||comparePrevious!=compareNext){
	         
     var firstTerm = comparePrevious-xValCal;
	 var secondTerm = closestPrevious-closestNext;
	 var firstFinalMul = parseFloat(firstTerm)*parseFloat(secondTerm);
	 var secondTerm = comparePrevious*closestPrevious;
	 var thirdTerm = compareNext*closestPrevious;
	 
	 var num = firstFinalMul-secondTerm+thirdTerm;
	 var deno = comparePrevious-compareNext;
	 
	 var division = (num/deno).toFixed(2);
	  finalAns = -(division);
   } else {
	   finalAns = closestPrevious;
	   }
        
}
		console.log("finalAns : "+finalAns);
	}
	
	
}
