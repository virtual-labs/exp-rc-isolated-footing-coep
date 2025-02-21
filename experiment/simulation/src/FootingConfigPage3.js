var reinValSel = 0;
var astX = 0;
var astFyVal = 0;
var spacing = 0;
var ptPercentVal = 0;
var astMin = 0;
var astComp = 0;
var LfConvert = 0;

function Page3(){
	
	 $("#centerText1").html("DIAGRAM");
     $("#centerText2").html("CALCULATIONS");
	
     var selection4 = '<div class="row">'
    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-2 spanMsg">'
    + '<strong class="labelstyleInfo "><center>f<sub>ck</sub> = ' + conVal + ' Mpa </center></strong>'
    + '</div>'
//    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-3 spanMsg">'
    + '<strong class="labelstyleInfo "><center>f<sub>y</sub> = ' + steelVal + ' Mpa </center></strong>'
    + '</div>'
//    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-5 spanMsg">'
    + '<strong class="labelstyleInfo "><center>effective depth d = ' + effValRound + ' mm </center></strong>'
    + '</div>'
    + '<div class="col-sm-1 "></div>'
    + '</div>'

    + '<div class="row">'
    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-5 spanMsg">'
    + '<strong class="labelstyleInfo "><center>M<sub>ux</sub> = ' + MuxVal + ' kNm </center></strong>'
    + '</div>'
    + '<div class="col-sm-1 "></div>'
    + '<div class="col-sm-4 spanMsg">'
    + '<strong class="labelstyleInfo "><center>L<sub>f</sub> = ' + LfValue + ' m </center></strong>'
    + '</div>'
    + '<div class="col-sm-1 "></div>'
    + '</div>'
   
   
    + '<div class="row calRowBorder" style="margin-top:3px;"  >' // Use style="display:none;"
    + '<div class="col-sm-5">'
    + '<label class="labelstyle ">Calculate ASTx : </label>'
    + '</div>'
    + '<div class="col-sm-4">'
    + '<input type="number" id="astx" class="form-control">'
    + '</div>'
    + '<div class="col-sm-3" id="buttonDiv">'
    + '<button type="button" class="btn btn-danger btnDesign" style="width:100%;" id="astXSubmit" data-toggle="modal" data-target="#myModal"><b>Submit</b></button>'
    + '</div>'
    + '</div>'
    
       +'<div class="row " id="astxMin" hidden>'
	   +'<div class="col-sm-2">'	 
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<center><label class="labelstyle spanMsg " >  <label id = "astxMinLabel" class="labelstyle spanMsg "> '+effValRound+'</label>   </label></center>'
	   +'</div>'	    
	   +'<div class="col-sm-2" >'
	   +'</div>'
	   +'</div>'
   
    + '<div class="row calRowBorder" id="reinDiameter" style="margin-top:10px;" hidden>'
    + '<div class="col-sm-5">'
    + '<label class="labelstyle ">Select diameter of reinforcement &#632; mm : </label>'
    + '</div>'
    + '<div class="col-sm-4">'
    + '<select class="form-control selectConf marginBottom" id="reinVal" style="height:auto;">'
    + '<option value="0">--- Select Area of reinforcement --- </option>'
    + '<option value="10">10</option>'
    + '<option value="12">12</option>'
    + '<option value="16">16</option>'
    + '<option value="20">20</option>'
    + '<option value="25">25</option>'
    + '<option value="32">32</option>'
    + '</select>'
    + '</div>'
    + '<div class="col-sm-3" id="buttonDiv">'
    + '<button type="button" class="btn btn-danger btnDesign" style="width:100%;" id="reinAreaSubmit"><b>Submit</b></button>'
    + '</div>'
    + '</div>'

    
    
       +'<div class="row calRowBorder" style="margin-top:10px;" id="astFy" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate ast &#632; : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="astF"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="astFSubmit" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
 

       +'<div class="row " id="calSpacing" hidden>'
	   +'<div class="col-sm-2">'
	 
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<center><label class="labelstyle spanMsg " >  <label id = "spacingLabel" class="labelstyle spanMsg "> '+effValRound+'</label>   </label></center>'

	   +'</div>'	    
	   +'<div class="col-sm-2" >'
	   +'</div>'
	   +'</div>'
       
       +'<div class="row calRowBorder" style="margin-top:10px;" id="astProvide" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Ast provided : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="astProvideTxt"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="astProvideSubmit" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
       
       
       +'<div class="row calRowBorder" id="ptPercent" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Percentage area of steel provided pt%: </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="ptPer"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="ptPerSubmit" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
       
       +'<div class="row" id="nextRow" hidden>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<button type="button" style="padding: 10px;width:100%;"  class="btn btn-danger btnStyle" id="nextLevelPg4"     ><b>NEXT LEVEL</b></button>'
	   +'</div>'	   
	   +'<div class="col-sm-2">'
	   +'</div>'	   
	   +'</div>'
       
       
       +'<div class="modal fade" id="spacingModal" tabindex="-1" role="dialog">'
  +'<div class="modal-dialog" role="document">'
    +'<div class="modal-content">'
      +'<div class="modal-header">'
        +'<h5 class="modal-title">Warning</h5>'
        +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
      +'</div>'
      +'<div class="modal-body">'
       +' <p>Spacing value is less than 75 mm. Please adjust accordingly.</p>'
      +'</div>'
     +' <div class="modal-footer">'
       +' <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'
     +' </div>'
    +'</div>'
  +'</div>'
+'</div>'
       
       
$("#page1Div2").html(selection4);

$(document).on("click", "#reinAreaSubmit", function () {
    reinValSel = parseInt($("#reinVal").val());
    if (reinValSel == 0) {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Select Appropriate value");
    } else {
        $("#reinVal").prop("disabled", true);
        $("#reinAreaSubmit").prop("disabled", true);
        $("#astFy").prop("hidden",false);
        $("#spacingLabel").prop("hidden",true);
    }
});

var astXEnter;
var id13 = 1;

//$(document).on("click", "#astXSubmit", function () {
	$("#astXSubmit").click(function(){
	 
//    console.log("astXSubmit clicked!"); // Debugging log
    calculateAstX();
    
    var multVal = 0;
    
    if(steelVal==250){
	multVal = 0.15;
  }else{
	multVal = 0.12;
 }
    
    astMin = (multVal/100)*LfConvert*effValRound;
    astMin = astMin.toFixed(2);
    
    astMin = parseFloat(astMin);
    
    if(astX<astMin){
    astComp = astMin;
    }else{
	astComp = astX;
   }
   
   console.log("ast min"+astMin);
   console.log("ast cal"+astX);
   console.log(" astComp "+astComp);
   
    astXEnter = $("#astx").val();
    
    
    if (astXEnter == "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary value");
    } else {
        astXEnter = parseFloat($("#astx").val());
        if (id13 <= 3) {
            if (astXEnter == astX) {
                $("#astx").prop("disabled", true);
                $("#astXSubmit").prop("disabled", true);
//                 $("#astFy").prop("hidden",false);
                 $("#astxMin").prop("hidden",false);
                  $("#astxMinLabel").text("Minimum Ast required : "+astMin);
                  $("#reinDiameter").prop("hidden",false);
                  
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id13 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            modelImg2 = '<img src="images/astxFormula.png" class="img-responsive" alt="Formula">';
            $("#MsgModal").html(modelImg2);
        } else {
            if (astXEnter == astX) {
                $("#astx").prop("disabled", true);
                $("#astXSubmit").prop("disabled", true);
//                $("#astFy").prop("hidden",false);
                $("#astxMin").prop("hidden",false);
                 $("#astxMinLabel").text("Minimum Ast required : "+astMin);
                 $("#reinDiameter").prop("hidden",false);
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + astX);
            }
        }
        id13++;
    }
});

 
function calculateAstX() {
    var numMul = 4.6 * MuxVal * Math.pow(10, 6);
     LfConvert = LfValue*1000;
    var denoMul = conVal * LfConvert * effValRound * effValRound;

    var div = (numMul / denoMul).toFixed(2);
    var sub = parseFloat(1) - parseFloat(div);
    var sqrt = Math.sqrt(sub).toFixed(2);

    var secTerm = (1 - sqrt).toFixed(2);
    var firstTerm = ((0.5 * conVal) / steelVal).toFixed(2);
    astX = (firstTerm * secTerm * LfConvert * effValRound).toFixed(2);
    astX = parseFloat(astX);
}

var astFyEnter;
var id14 = 1;

 $("#astFSubmit").click(function(){
	astFyEnter = $("#astF").val();
	var mul = (3.14*reinValSel*reinValSel);
	var div = (mul/4).toFixed(2);
	astFyVal = parseFloat(div); 
	 
	   case1 = ((astFyVal*LfConvert)/astComp).toFixed(2);
	   case1 = parseFloat(case1);
	   case1 = roundToNearest5(case1);
	   
	   console.log("case 1 : "+case1);
	   
	   case2 = (3*effValRound).toFixed(2);
	   case2 = parseFloat(case2);
	   case2 = roundToNearest5(case2);
	   console.log("case 2 : "+case2);
	   case3 = parseFloat(300);
	   console.log("case 3 : "+case3);
	   if(case1<case2<case3){
		spacing = case1;
	}else if(case2<case1<case3){
		spacing = case1;
	}else{
		spacing = case3;
	}
	 
	
	 if (astFyEnter == "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary value");
    } else {
	
	   astFyEnter = parseFloat($("#astF").val());
        if (id14 <= 3) {
            if (astFyEnter == astFyVal) {
                $("#astFy").prop("disabled", true);
                $("#astFSubmit").prop("disabled", true);
                $("#calSpacing").prop("hidden",false);
                 $("#spacingLabel").text("Provide "+reinValSel+" mm bar at "+spacing+" mm spacing");
                  if(spacing<75){
	                      alert("Minimum spacing required is 75 mm diameter of reinforcement and calculate again");
	                    $("#astFy").prop("hidden",true);
	                    $("#astF").prop("disabled",false);
	                    $("#reinAreaSubmit").prop("disabled",false);
	                    $("#spacingLabel").prop("hidden",false);
	                    $("#reinVal").prop("disabled",false);
	                      $("#reinVal").val(0);
	                    $("#astF").val("");
	                    $("#astFSubmit").prop("disabled",false);
	                    id14 = 1;
                  }else{
	                 $("#astProvide").prop("hidden",false);
	                   $("#spacingLabel").prop("hidden",false);
	                  $("#spacingLabel").text("Provide "+reinValSel+" mm bar at "+spacing+" mm spacing");
                 }
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id14 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            modelImg2 = '<img src="images/astFyImg.png" class="img-responsive" alt="Formula">';
            $("#MsgModal").html(modelImg2);
            
//            modelImg2 = '<img src="images/astFormula.png" class="img-responsive" alt="Formula">';
//            $("#MsgModal").html(modelImg2);
        } else {
            if (astFyEnter == astFyVal) {
                $("#astFy").prop("disabled", true);
                $("#astFSubmit").prop("disabled", true);
                $("#calSpacing").prop("hidden",false);
                $("#spacingLabel").text("Provide "+reinValSel+" mm bar at "+spacing+" mm spacing");
                  if(spacing<75){
//	                      $("#spacingModal").modal("show");
                       alert("Minimum spacing required is 75 mm diameter of reinforcement and calculate again");
	                    $("#astFy").prop("hidden",true);
	                    $("#astF").prop("disabled",false);
	                    $("#astF").val("");
	                    $("#reinVal").prop("disabled",false);
	                    $("#reinVal").val(0);
	                    $("#reinAreaSubmit").prop("disabled",false);
	                    $("#astFSubmit").prop("disabled",false);
	                    $("#spacingLabel").prop("hidden",false);
	                  id14 = 1;
	                    
                  }else{
	                 $("#astProvide").prop("hidden",false);
	                 $("#spacingLabel").prop("hidden",false);
	                  $("#spacingLabel").text("Provide "+reinValSel+" mm bar at "+spacing+" mm spacing");
                 }
                
                
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + astFyVal);
            }
        }
        id14++;
	
	}
});

var astProvideVal = 0;
var id15 = 1;

$("#astProvideSubmit").click(function(){
	
	astProvideVal = ((astFyVal*LfConvert)/spacing).toFixed(2);
	astProvideVal = parseFloat(astProvideVal);
	
	var astProvideValEnter = $("#astProvideTxt").val();
	
	 if (astProvideValEnter == "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary value");
    } else {
	   
	   astProvideValEnter = parseFloat($("#astProvideTxt").val());
	   
	   if (id15 <= 3) {
            if (astProvideValEnter == astProvideVal) {
                $("#astProvideSubmit").prop("disabled", true);
                $("#astProvideTxt").prop("disabled", true);
                $("#ptPercent").prop("hidden",false);
                autoScroll();
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id15 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            modelImg2 = '<img src="images/astProvide.png" class="img-responsive" alt="Formula">';
            $("#MsgModal").html(modelImg2);
            
//            modelImg2 = '<img src="images/astFormula.png" class="img-responsive" alt="Formula">';
//            $("#MsgModal").html(modelImg2);
        } else {
            if (astProvideValEnter == astProvideVal) {
               $("#astProvideSubmit").prop("disabled", true);
                $("#astProvideTxt").prop("disabled", true);
                $("#ptPercent").prop("hidden",false);
                autoScroll();
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + astProvideVal);
            }
        }
        id15++;
	   
 }
	
});


 var id16=1;
 
 $("#ptPerSubmit").click(function(){
	ptPercentVal =  ((astProvideVal)/(LfConvert*effValRound)*100).toFixed(2);
	ptPercentVal = parseFloat(ptPercentVal);
	
	var ptPercentValEnter = $("#ptPer").val();
    
     if (ptPercentValEnter == "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary value");
    } else {
       
        ptPercentValEnter = parseFloat($("#ptPer").val());
	   
	   if (id16 <= 3) {
            if (ptPercentValEnter == ptPercentVal) {
                $("#ptPerSubmit").prop("disabled", true);
                $("#ptPer").prop("disabled", true);
                $("#nextRow").prop("hidden",false);
                autoScroll();
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id16 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            modelImg2 = '<img src="images/ptPercent.png" class="img-responsive" alt="Formula">';
            $("#MsgModal").html(modelImg2);
 
        } else {
            if (ptPercentValEnter == ptPercentVal) {
               $("#ptPerSubmit").prop("disabled", true);
                $("#ptPer").prop("disabled", true);
                $("#nextRow").prop("hidden",false);
                autoScroll();
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + ptPercentVal);
            }
        }
        id16++;
	   
       
    }
});
 
 
  $("#nextRow").click(function(){
//	console.log("clicked");
      
      bfCalculations();
     

})
 

function roundToNearest5(value) {
    return Math.round(value / 5) * 5;
}

}


