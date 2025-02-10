var reinValSel = 0;
var astX = 0;
var astFyVal = 0;
var spacing = 0;
var ptPercentVal = 0;
var astMin = 0;
var astComp = 0;

function bfCalculations(){
	
	
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
    + '<strong class="labelstyleInfo "><center>b<sub>f</sub> = ' + BfValue + ' m </center></strong>'
    + '</div>'
    + '<div class="col-sm-1 "></div>'
    + '</div>'
   
   
    + '<div class="row calRowBorder" style="margin-top:3px;"  >' // Use style="display:none;"
    + '<div class="col-sm-5">'
    + '<label class="labelstyle ">Calculate ASTy : </label>'
    + '</div>'
    + '<div class="col-sm-4">'
    + '<input type="number" id="astx1" class="form-control">'
    + '</div>'
    + '<div class="col-sm-3" id="buttonDiv">'
    + '<button type="button" class="btn btn-danger btnDesign" style="width:100%;" id="astXSubmit1" data-toggle="modal" data-target="#myModal"><b>Submit</b></button>'
    + '</div>'
    + '</div>'
    
       +'<div class="row " id="astxMin1" hidden>'
	   +'<div class="col-sm-2">'	 
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<center><label class="labelstyle spanMsg " >  <label id = "astxMinLabel1" class="labelstyle spanMsg "> '+effValRound+'</label>   </label></center>'
	   +'</div>'	    
	   +'<div class="col-sm-2" >'
	   +'</div>'
	   +'</div>'
   
    + '<div class="row calRowBorder" id="reinDiameter1" style="margin-top:10px;" hidden>'
    + '<div class="col-sm-5">'
    + '<label class="labelstyle ">Select diameter of reinforcement &#632; mm : </label>'
    + '</div>'
    + '<div class="col-sm-4">'
    + '<select class="form-control selectConf marginBottom" id="reinVal1" style="height:auto;">'
    + '<option value="0">--- Select Area of reinforcement --- </option>'
    + '<option value="10">10</option>'
    + '<option value="12">12</option>'
    + '<option value="16">16</option>'
    + '<option value="20">20</option>'
    + '</select>'
    + '</div>'
    + '<div class="col-sm-3" id="buttonDiv">'
    + '<button type="button" class="btn btn-danger btnDesign" style="width:100%;" id="reinAreaSubmit1"><b>Submit</b></button>'
    + '</div>'
    + '</div>'

    
    
       +'<div class="row calRowBorder" style="margin-top:10px;" id="astFy1" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate ast &#632; : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="astF1"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="astFSubmit1" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
 

       +'<div class="row " id="calSpacing1" hidden>'
	   +'<div class="col-sm-2">'
	 
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<center><label class="labelstyle spanMsg " >  <label id = "spacingLabel1" class="labelstyle spanMsg "> '+effValRound+'</label>   </label></center>'

	   +'</div>'	    
	   +'<div class="col-sm-2" >'
	   +'</div>'
	   +'</div>'
       
       +'<div class="row calRowBorder" style="margin-top:10px;" id="astProvide1" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Ast provided : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="astProvideTxt1"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="astProvideSubmit1" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
       
       
       +'<div class="row calRowBorder" id="ptPercent1" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Percentage area of steel provided pt%: </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="ptPer1"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="ptPerSubmit1" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
       
       +'<div class="row" id="nextRow1" hidden>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<button type="button" style="padding: 10px;width:100%;"  class="btn btn-danger btnStyle" id="nextLevelPg41"     ><b>NEXT LEVEL</b></button>'
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

$(document).on("click", "#reinAreaSubmit1", function () {
    reinValSel = parseInt($("#reinVal1").val());
    if (reinValSel == 0) {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Select Appropriate value");
    } else {
	      id19 = 1;
        $("#reinVal1").prop("disabled", true);
        $("#reinAreaSubmit1").prop("disabled", true);
        $("#astFy1").prop("hidden",false);
        $("#spacingLabel1").prop("hidden",true);
        $("#myModal").modal('show');
    }
});

var astXEnter;
var id18 = 1;

//$(document).on("click", "#astXSubmit", function () {
	$("#astXSubmit1").click(function(){
	 
//    console.log("astXSubmit clicked!"); // Debugging log
    calculateAstY();
    
    var multVal = 0;
    
    if(steelVal==250){
	multVal = 0.15;
  }else{
	multVal = 0.12;
 }
    
    astMin = (multVal/100)*bfConvert*effValRound;
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
   
    astXEnter = $("#astx1").val();
    
    
    if (astXEnter == "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary value");
    } else {
        astXEnter = parseFloat($("#astx1").val());
        if (id18 <= 3) {
            if (astXEnter == astX) {
                $("#astx1").prop("disabled", true);
                $("#astXSubmit1").prop("disabled", true);
//                 $("#astFy").prop("hidden",false);
                 $("#astxMin1").prop("hidden",false);
                  $("#astxMinLabel1").text("Minimum Ast required : "+astMin);
                  $("#reinDiameter1").prop("hidden",false);
                  
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id18 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            modelImg2 = '<img src="images/asty.png" class="img-responsive" alt="Formula">';
            $("#MsgModal").html(modelImg2);
        } else {
            if (astXEnter == astX) {
                $("#astx1").prop("disabled", true);
                $("#astXSubmit1").prop("disabled", true);
//                $("#astFy").prop("hidden",false);
                $("#astxMin1").prop("hidden",false);
                 $("#astxMinLabel1").text("Minimum Ast required : "+astMin);
                 $("#reinDiameter1").prop("hidden",false);
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + astX);
            }
        }
        id18++;
    }
});

 var bfConvert = 0
function calculateAstY() {
    var numMul = 4.6 * MuxVal * Math.pow(10, 6);
     bfConvert = BfValue*1000;
    var denoMul = conVal * bfConvert * effValRound * effValRound;

    var div = (numMul / denoMul).toFixed(2);
    var sub = parseFloat(1) - parseFloat(div);
    var sqrt = Math.sqrt(sub).toFixed(2);

    var secTerm = (1 - sqrt).toFixed(2);
    var firstTerm = ((0.5 * conVal) / steelVal).toFixed(2);
    astX = (firstTerm * secTerm * bfConvert * effValRound).toFixed(2);
    astX = parseFloat(astX);
}

var astFyEnter;
var id19 = 1;

 $("#astFSubmit1").click(function(){
	astFyEnter = $("#astF1").val();
	var mul = (3.14*reinValSel*reinValSel);
	var div = (mul/4).toFixed(2);
	astFyVal = parseFloat(div); 
	 
	   case1 = ((astFyVal*bfConvert)/astComp).toFixed(2);
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
	
	   astFyEnter = parseFloat($("#astF1").val());
        if (id19 <= 3) {
            if (astFyEnter == astFyVal) {
                $("#astFy1").prop("disabled", true);
                $("#astFSubmit1").prop("disabled", true);
               
                $("#calSpacing1").prop("hidden",false);
                 $("#spacingLabel1").text("Provide "+reinValSel+" mm bar at "+spacing+" mm spacing");
                  if(spacing<130){
	                      alert("Minimum spacing required is 130 mm diameter of reinforcement and calculate again");
	                    $("#astFy1").prop("hidden",true);
	                    $("#astF1").prop("disabled",false);
	                    $("#reinAreaSubmit1").prop("disabled",false);
	                    $("#spacingLabel1").prop("hidden",false);
	                    $("#reinVal1").prop("disabled",false);
	                      $("#reinVal1").val(0);
	                    $("#astF1").val("");
	                    $("#astFSubmit1").prop("disabled",false);
	                   $('#myModal').modal('hide');
	                    
//	                    id19 = 1;
                  }else{
	                 $("#astProvide1").prop("hidden",false);
	                   $("#spacingLabel1").prop("hidden",false);
	                  $("#spacingLabel1").text("Provide "+reinValSel+" mm bar at "+spacing+" mm spacing");
                 }
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id19 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            modelImg2 = '<img src="images/astFyImg.png" class="img-responsive" alt="Formula">';
            $("#MsgModal").html(modelImg2);
            
//            modelImg2 = '<img src="images/astFormula.png" class="img-responsive" alt="Formula">';
//            $("#MsgModal").html(modelImg2);
        } else {
            if (astFyEnter == astFyVal) {
                $("#astFy1").prop("disabled", true);
                $("#astFSubmit1").prop("disabled", true);
                
                $("#calSpacing1").prop("hidden",false);
                $("#spacingLabel1").text("Provide "+reinValSel+" mm bar at "+spacing+" mm spacing");
                  if(spacing<130){
	                  $("#astFSubmit1").prop("disabled", true);
//	                      $("#spacingModal").modal("show");
                       alert("Minimum spacing required is 130 mm diameter of reinforcement and calculate again");
	                    $("#astFy1").prop("hidden",true);
	                    $("#astF1").prop("disabled",false);
	                    $("#astF1").val("");
	                    $("#reinVal1").prop("disabled",false);
	                    $("#reinVal1").val(0);
	                    $("#reinAreaSubmit1").prop("disabled",false);
	                    $("#astFSubmit1").prop("disabled",false);
	                    $("#spacingLabel1").prop("hidden",false);
	                    $('#myModal').modal('hide');
//	                  id19 = 1;
	                    
                  }else{
	                 $("#astProvide1").prop("hidden",false);
	                 $("#spacingLabel1").prop("hidden",false);
	                  $("#spacingLabel1").text("Provide "+reinValSel+" mm bar at "+spacing+" mm spacing");
                 }
                
                
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + astFyVal);
            }
        }
        id19++;
	
	}
});

var astProvideVal = 0;
var id20 = 1;

$("#astProvideSubmit1").click(function(){
	
	astProvideVal = ((astFyVal*bfConvert)/spacing).toFixed(2);
	astProvideVal = parseFloat(astProvideVal);
	
	var astProvideValEnter = $("#astProvideTxt1").val();
	
	 if (astProvideValEnter == "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary value");
    } else {
	   
	   astProvideValEnter = parseFloat($("#astProvideTxt1").val());
	   
	   if (id20 <= 3) {
            if (astProvideValEnter == astProvideVal) {
                $("#astProvideSubmit1").prop("disabled", true);
                $("#astProvideTxt1").prop("disabled", true);
                $("#ptPercent1").prop("hidden",false);
                autoScroll();
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id20 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            modelImg2 = '<img src="images/astProvideBf.png" class="img-responsive" alt="Formula">';
            $("#MsgModal").html(modelImg2);
            
//            modelImg2 = '<img src="images/astFormula.png" class="img-responsive" alt="Formula">';
//            $("#MsgModal").html(modelImg2);
        } else {
            if (astProvideValEnter == astProvideVal) {
               $("#astProvideSubmit1").prop("disabled", true);
                $("#astProvideTxt1").prop("disabled", true);
                $("#ptPercent1").prop("hidden",false);
                autoScroll();
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + astProvideVal);
            }
        }
        id20++;
	   
 }
	
});


 var id21=1;
 
 $("#ptPerSubmit1").click(function(){
	ptPercentVal =  ((astProvideVal)/(bfConvert*effValRound)*100).toFixed(2);
	ptPercentVal = parseFloat(ptPercentVal);
	
	var ptPercentValEnter = $("#ptPer1").val();
    
     if (ptPercentValEnter == "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary value");
    } else {
       
        ptPercentValEnter = parseFloat($("#ptPer1").val());
	   
	   if (id21 <= 3) {
            if (ptPercentValEnter == ptPercentVal) {
                $("#ptPerSubmit1").prop("disabled", true);
                $("#ptPer1").prop("disabled", true);
                $("#nextRow1").prop("hidden",false);
                autoScroll();
            } else {
                $(".modal-header").html("Error Message");
                $(".modal-header").css("background", "#9c1203b0");
                $("#btnModal").removeClass("btn-success").addClass("btn-danger");
                $("#MsgModal").html("Entered value is incorrect. Try again.");
            }
        } else if (id21 == 4) {
            $(".modal-header").html("Formula");
            $(".modal-header").css("background", "#23435c");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            modelImg2 = '<img src="images/ptPercentBf.png" class="img-responsive" alt="Formula">';
            $("#MsgModal").html(modelImg2);
 
        } else {
            if (ptPercentValEnter == ptPercentVal) {
               $("#ptPerSubmit1").prop("disabled", true);
                $("#ptPer1").prop("disabled", true);
                $("#nextRow1").prop("hidden",false);
                autoScroll();
            } else {
                $("#btnModal").removeClass("btn-danger").addClass("btn-success");
                $(".modal-header").html("Success Message");
                $(".modal-header").css("background", "#5cb85c");
                $("#MsgModal").html("Correct Answer is " + ptPercentVal);
            }
        }
        id21++;
	   
       
    }
});
 
 
  $("#nextRow1").click(function(){
	console.log("clicked");
    

})
 

function roundToNearest5(value) {
    return Math.round(value / 5) * 5;
}

}


