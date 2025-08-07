

var workingLoadValue2; 
var concreteValue2; 
var steelValue2;
var colSizeValue2 ;
var dValue2 ; 
var SBCValue2;
var eCover_value2;

var pu_corr;
var loadFromCol_val;
var Persentage_corr;
var selfWt_corr;
var addLoad2;
var FArea_corr;
var LfValue;
var BfValue;
var wuCorr;
 var LfValue=0;
 						
var ArrayJson=[];
var InputValMasterJson={};

function Page1(){
	
	$("#page1Div1").html('');
	$("#page1Div2").html('');
   
     $("#centerText1").html("DIAGRAM");
     $("#centerText2").html("CALCULATIONS");
     
   isolatedAnim();
   
   workingLoadValue2 = parseFloat(pre);
	console.log("workingLoadValue2 =  "+pre);
   
   concreteValue2 =parseFloat(conVal);
   	console.log("concreteValue2 =  "+conVal);
   
   steelValue2 =parseFloat(steelVal);
   	console.log("steelValue2 =  "+steelVal);
  
   colSizeValue2 = parseFloat(colSize);
   	console.log("colSizeValue2 =  "+colSize);
   
   dValue2 = parseFloat(d_val);
   	console.log("dValue2 =  "+d_val);
  
  SBCValue2 =parseFloat(sbc_val);
   		console.log("SBCValue2 =  "+sbc_val);
   
   eCover_value2=parseFloat(eCover_val);
   	console.log("eCover_value2 =  "+eCover_value2);
   
var htm ='<div class="row">'
	   +'<div class="col-sm-6">'
	   +' <div class=" spanMsg">'
   	   +' <strong class="labelstyleInfo "><center>SBC = '+SBCValue2+' kN/m<sup>2</sup></center></strong> '
  	   +'</div>'
  	   +'</div>'
	   +'<div class="col-sm-6">'
	   +' <div class="spanMsg">'
	   +' <strong class="labelstyleInfo "><center>P = '+workingLoadValue2+' kN</center></strong> '	   
	   +'</div>'
	   +'</div>'
	   +'</div>'
		


	   +'<div class="row calRowBorder" style="margin-top:3px;" id="r1">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Ultimate/Factored Load Pu : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="puText" style= "padding: 10px;width:100%;"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign"   id="subPu" data-toggle="modal" data-target="#myModal" style="width:100%;">Submit</button>'
	   +'</div>'
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="r2" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Load from column (kN) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="loadFromCol" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign"  id="subLfromColumn" data-toggle="modal" data-target="#myModal" style="width:100%;" disabled ><b>Submit</b></button>'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="r3" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Percentage Value to Calculate Self Wt of Footing(%): </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number"  id="perdentageVal" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	    +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign"  id="subPersentage" data-toggle="modal" data-target="#myModal" style="width:100%;" disabled ><b>Submit</b></button>'
	   +'</div>'		     
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="r4" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Self weight of Footing (kN) :</label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="ValueOfSelfWt" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="selfWtSub" data-toggle="modal" data-target="#myModal" disabled ><b>Submit</b></button>'
	   +'</div>'	     
	   +'</div>'
	   
	
	   +'<div class="row calRowBorder" id="r5" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Total Load (kN) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="totalLoad" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	    +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="totalLoadSub" data-toggle="modal" data-target="#myModal" disabled ><b>Submit</b></button>'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="r6" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Area of Footing A<sub>f</sub> (m<sup>2</sup>) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="footingArea" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;"  id="footingAreaSub" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="r7" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Enter Value for L<sub>f</sub> (m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="lfAns" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'	     
	   +'</div>'
	   
	   
	    +'<div class="row calRowBorder" id="r8" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Value for B<sub>f</sub> (m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="bfAns" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="bfAnsSub" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'	     
	   +'</div>'
	
	   +'<div class="row calRowBorder" id="r9" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate Soil Pressure w<sub>u</sub> (kN/m<sup>2</sup>) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="WuVal" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="SubWu" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'	     
	   +'</div>'
	  
//	   +'<div class="row" id="r101" hidden>'
//	   +'<div class="col-sm-12">'
//	   +'<button type="button" style="padding: 10px;"  class="btn btn-danger btnStyle" id="nextLevelPg2"  data-toggle="modal" data-target="#myModal"  disabled ><b>NEXT LEVEL</b></button>'
//	   +'</div>'
//	   +'</div>'

      +'<div class="row" id="r101" hidden>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<button type="button" style="padding: 10px;width:100%;"  class="btn btn-danger btnStyle" id="nextLevelPg2"     ><b>NEXT LEVEL</b></button>'
	   +'</div>'	   
	   +'<div class="col-sm-2">'
	   +'</div>'	   
	   +'</div>'
    

	   $("#page1Div2").html(htm);




   var pu_val; 
  
   var id=1;
    console.log("uLoad="+pu_corr);
	$("#subPu").click(function(){	
		 var puAns = workingLoadValue2 * 1.5;
   		 var pu_corr111 = puAns.toFixed(2);
   		 pu_corr=parseFloat(pu_corr111);
   		 
//	 	 $("body").css("padding","0px 0px 0px 0px");
		 pu_val =$("#puText").val();
		 	
		if(pu_val==""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");
			
		}else{
			
			 pu_val =parseFloat($("#puText").val());
			
			if (id <= 3) {
				if (pu_val == pu_corr) {
					
					id=1;
					//addToMasterJSON();
					$("#loadFromCol").prop("disabled",false);
					$("#subLfromColumn").prop("disabled",false);
					$("#r2").prop("hidden",false);
					$("#puText").prop("disabled",true);
					$("#subPu").prop("disabled",true);
					toastr.success("Correct Answer");
					FootingAnim();
				} else if (pu_val != pu_corr) {
					$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");
					
				}
			} else if (id == 4){
//				$("#modelMsg").html("<b class='boldTextBlue'>Formula :  P X 1.5  </b><br> <p>Here, P = "+workingLoadValue2+"</p> ");
				
				$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Formula :  P X 1.5  </b>");
				
			} else {
				
//				flow = flowAns.toFixed(2);
				if (pu_val == pu_corr) {
					
					//addToMasterJSON();
					id=1;
					$("#loadFromCol").prop("disabled",false);
					$("#subLfromColumn").prop("disabled",false);
					$("#r2").prop("hidden",false);
					$("#puText").prop("disabled",true);
					$("#subPu").prop("disabled",true);
					FootingAnim();
					toastr.success("Correct Answer");
				} else {
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');
//					 FootingAnim();
					 
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + pu_corr);
			
				}
			}
			id++;
		}

	 
	});

   var id1=1;
	//var loadFromCol_val ;
	$("#subLfromColumn").click(function(){
//		$("body").css("padding","0px 0px 0px 0px");
		loadFromCol_val = $("#loadFromCol").val();	
		console.log("loadFromCol_val= "+loadFromCol_val);
		if(loadFromCol_val==""){
			  
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");               

		}else{
			loadFromCol_val = parseFloat($("#loadFromCol").val());
			if (id1 <= 3) {
				if (loadFromCol_val == workingLoadValue2) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
					//$("#loadFromCol").val('');
					$("#perdentageVal").prop("disabled",false);
					$("#subPersentage").prop("disabled",false);
					$("#r3").prop("hidden",false);
					$("#loadFromCol").prop("disabled",true);
					$("#subLfromColumn").prop("disabled",true);
					
					toastr.success("Correct Answer");
				} else if (loadFromCol_val != workingLoadValue2) {
                    
            $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");
                    					
				}
			} else if (id1 == 4){
//				$("#modelMsg").html("<b class='boldTextBlue'>Note :Value of Load from column is same As Value of Working Load. </b>");
                
                $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Note :Value of Load from column is same As Value of Working Load</b>");
		
			} else {
			
//				flow = flowAns.toFixed(2);
				if (loadFromCol_val == workingLoadValue2) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					//$("#loadFromCol").val('');
					$("#perdentageVal").prop("disabled",false);
					$("#subPersentage").prop("disabled",false);
					$("#r3").prop("hidden",false);
					$("#loadFromCol").prop("disabled",true);
					$("#subLfromColumn").prop("disabled",true);
					
					toastr.success("Correct Answer");
				} else {
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +workingLoadValue2+'</b>');

                      $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + workingLoadValue2);
                      
				}
			}
			id1++;
		}
	
	
	});
	
	
	var persentage;
	//var Persentage_corr ;
	var SWPersent_Val;
	$("#subPersentage").click(function(){
//			$("body").css("padding","0px 0px 0px 0px");	
		persentage= $("#perdentageVal").val();
		if(persentage==""){
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");   	
//			alert("Please Enter Value");
		}else{
			persentage=parseFloat($("#perdentageVal").val());
			
			 if(persentage>=10 && persentage<=15){		
				SWPersent_Val=persentage;		
				$("#ValueOfSelfWt").prop("disabled",false);
				$("#selfWtSub").prop("disabled",false);
				$("#r4").prop("hidden",false);
				console.log("persentage = "+persentage+" % ,  SWPersent_Val = "+SWPersent_Val);
				$("#perdentageVal").prop("disabled",true);
				$("#subPersentage").prop("disabled",true);												
				toastr.success("Correct Answer");
//				id=1;
					
			}else{
//				alert("Enter Appropraite Value (10-100)");
//				$("#modelMsg").html("<b class='boldTextRed'>Enter Appropraite Value (10-100)</b>");
                   $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter self weight of footing between 10 % to 15 %");
			}
	 }	
	});
	
	
	
	console.log("SWPersent_Val = "+SWPersent_Val);
	
	
	console.log("Persentage_corr = "+Persentage_corr);
	var selfWt_val;
	//var selfWt_corr;
	console.log("selfWt_corr="+selfWt_corr);
	var id2=1;
	$("#selfWtSub").click(function(){
		PersentAns=SWPersent_Val/100;
		Persentage_corr=PersentAns.toFixed(2);
		selfWtAns=Persentage_corr*workingLoadValue2;
		selfWt_corr111=selfWtAns.toFixed(2);
		selfWt_corr=parseFloat(selfWt_corr111);
		$("body").css("padding","0px 0px 0px 0px");
		selfWt_val = $("#ValueOfSelfWt").val();
		if(selfWt_val==""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");   	
		}else{
			selfWt_val = parseFloat($("#ValueOfSelfWt").val());
			if (id2 <= 3) {
				if (selfWt_val == selfWt_corr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
					//$("#ValueOfSelfWt").val('');
					$("#r5").prop("hidden",false);
					$("#totalLoad").prop("disabled",false);
					$("#totalLoadSub").prop("disabled",false);
					
					$("#ValueOfSelfWt").prop("disabled",true);
					$("#selfWtSub").prop("disabled",true);
					
					toastr.success("Correct Answer");
				} else if (selfWt_val != selfWt_corr) {
					
					$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");
					
				}
			} else if (id2 == 4){
//				$("#modelMsg").html("<b class='boldTextBlue'>Formula : P &times; ("+persentage+"/100)</b>");
                 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Formula : P &times; ("+persentage+"/100)</b>");

			} else {
//				selfWt_val = parseFloat($("#ValueOfSelfWt").val());
//				flow = flowAns.toFixed(2);
				if (selfWt_val == selfWt_corr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					//$("#ValueOfSelfWt").val('');
					$("#r5").prop("hidden",false);
					$("#totalLoad").prop("disabled",false);
					$("#totalLoadSub").prop("disabled",false);
					
					$("#ValueOfSelfWt").prop("disabled",true);
					$("#selfWtSub").prop("disabled",true);
					
					toastr.success("Correct Answer");
				} else {
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +selfWt_corr+'</b>');
                    $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + selfWt_corr);
				}
			}
			id2++;
		}
	});
	
	var TotalLoad_corr=0;
	console.log("var TotalLoad_corr = "+TotalLoad_corr);
	var id;
	var TLoad;
	
	var id3 =1;
	$("#totalLoadSub").click(function(){
			TotalLoad_corrAns= parseFloat(selfWt_corr) + parseFloat(loadFromCol_val);
			TotalLoad_corr111=TotalLoad_corrAns.toFixed(2);
			TotalLoad_corr=parseFloat(TotalLoad_corr111);
			console.log("TotalLoad_corr("+TotalLoad_corr+") = "+selfWt_corr+" + "+loadFromCol_val);
			addLoad2= selfWt_corr + workingLoadValue2;
			console.log("selfWt_corr = "+selfWt_corr);
			console.log("addLoad2 = "+addLoad2);
//		$("body").css("padding","0px 0px 0px 0px");
		TLoad = $("#totalLoad").val();
		console.log("TLoad = "+TLoad);
		if(TLoad==""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");
		}else{
			TLoad = parseFloat($("#totalLoad").val());
			if (id3 <= 3) {
				if (TLoad == addLoad2) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
					//$("#totalLoad").val('');
					$("#footingArea").prop("disabled",false);
			  		$("#footingAreaSub").prop("disabled",false);
			  		$("#r6").prop("hidden",false);
			  		$("#totalLoad").prop("disabled",true);
					$("#totalLoadSub").prop("disabled",true);
					
					toastr.success("Correct Answer");
				} else if (TLoad != addLoad2) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");					
				}
			} else if (id3 == 4){
//				$("#modelMsg").html("<b class='boldTextBlue'>Formula : Total Load = Load From Column + Self Weight of Footing Load</b>");
             $(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Total Load = Load From Column + Self Weight of Footing Load</b>");
              

			} else {
				
				console.log("TLoad 3attempt = "+TLoad);
//				flow = flowAns.toFixed(2);
				if (TLoad == addLoad2) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					
					//$("#totalLoad").val('');
					$("#footingArea").prop("disabled",false);
			  		$("#footingAreaSub").prop("disabled",false);
			  		$("#r6").prop("hidden",false);
			  		$("#totalLoad").prop("disabled",true);
					$("#totalLoadSub").prop("disabled",true);	
									
					toastr.success("Correct Answer");
				} else {
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +TotalLoad_corr+'</b>');
                    
                    $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + TotalLoad_corr);
                    
				}
			}
			id3++;
		}
	});
		
//	var id1=0;		
	//var FArea_corr;
	var id4 =1;
	var FArea_val;
	$("#footingAreaSub").click(function(){
		FArea_corrAns=addLoad2/SBCValue2;	
		FArea_corr111=	FArea_corrAns.toFixed(2);
		FArea_corr=parseFloat(FArea_corr111);
		console.log("FArea_corr"+FArea_corr);
		$("body").css("padding","0px 0px 0px 0px");
		FArea_val=$("#footingArea").val();
		if(FArea_val==""){
			  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");
		}else{
			FArea_val=parseFloat($("#footingArea").val());
			if (id4 <= 3) {
				if (FArea_val == FArea_corr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
			  		$("#FootingA").text(FArea_corr);
			  		$("#r7").prop("hidden",false);
			  		$("#lfAns").prop("disabled",false);
			  		//$("#BfVal").prop("disabled",false);
					//$("#SubLfBf").prop("disabled",false);					
					$("#footingArea").prop("disabled",true);
			  		$("#footingAreaSub").prop("disabled",true);	
			  		autoScroll();
					toastr.success("Correct Answer");
				} else if (FArea_val != FArea_corr) {
					$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");
					
				}
			} else if (id4 == 4){
//				$("#modelMsg").html("<b class='boldTextBlue'>Formula : Area of Footing Required = Total Load / SBC </b>");
               $(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Area of Footing Required = Total Load / SBC</b>");
			} else {
				
				//FArea_val = FArea_val.toFixed(2);
				if (FArea_val == FArea_corr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					
					//$("#totalLoad").val('');
					$("#FootingA").text(FArea_corr);
			  		$("#r7").prop("hidden",false);
			  		$("#lfAns").prop("disabled",false);
			  		//$("#BfVal").prop("disabled",false);
					//$("#SubLfBf").prop("disabled",false);					
					$("#footingArea").prop("disabled",true);
			  		$("#footingAreaSub").prop("disabled",true);		
			  			autoScroll();							
					toastr.success("Correct Answer");
				} else {
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +FArea_corr+'</b>');

                  $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + FArea_corr);
				}
			}
			id4++;
		}		
							
	});
	
	 
	 var MulLfBf;
	
	 
	 $("#lfAns").on("input", function() {
     LfValue = $("#lfAns").val();
    
    if (LfValue === "") {
        $(".modal-header").html("Error Message");
        $(".modal-header").css("background", "#9c1203b0");
        $("#btnModal").removeClass("btn-success").addClass("btn-danger");
        $("#MsgModal").html("Provide the necessary values");
    } else {
        LfValue = parseFloat(LfValue);
        
        if (LfValue <= 0 || isNaN(LfValue)) {
            $(".modal-header").html("Error Message");
            $(".modal-header").css("background", "#9c1203b0");
            $("#btnModal").removeClass("btn-success").addClass("btn-danger");
            $("#MsgModal").html("Provide valid input");
        } else {
            $("#r8").prop("hidden", false);
            $("#bfAnsSub").prop("disabled", false);
            $("#bfAns").prop("disabled", false);
            autoScroll();
        }
    }
});

	
		
//	$("#BfVal").change(function(){
//	  BfValue=$("#BfVal").val();
//	  
//	  if(BfValue==""){
//			$("#modelMsg").html("<b class='boldTextRed'>Enter Numeric Value ");
//		}else{
//			BfValue=parseFloat($("#BfVal").val());
//			MulLfBf=LfValue*BfValue;
//			console.log("MulLfBf = "+MulLfBf);
//			console.log("LfValue = "+LfValue+", BfValue = "+BfValue);
//			//LfBfValue(LfValue,BfValue);	
//		}
//	 });
	
	var id5 =1;
	
	$("#bfAns").on("input", function() {
		$("#lfAns").prop("disabled",true);
	});
	
	$("#bfAnsSub").click(function(){
		
		$("body").css("padding","0px 0px 0px 0px");
		var BfValueEnter=$("#bfAns").val();
	   	BfValue= (FArea_corr/LfValue).toFixed(2);
//		MulLfBf=LfValue*BfValue;
		BfValue = parseFloat(BfValue);
		MulLfBf = BfValue;
//		MulLfBf=LfValue*BfValue;
//		console.log("MulLfBf ("+MulLfBf+') = LfValue ('+LfValue+') * BfValue('+BfValue+')');
		if(BfValueEnter==""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");
		}else{
			BfValueEnter=parseFloat($("#bfAns").val());
			if (id5 <= 3) {
				if (BfValueEnter == BfValue) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
					//$("#totalLoad").val(''); 
					$("#r9").prop("hidden",false);  
					$("#WuVal").prop("disabled",false);
			  		$("#SubWu").prop("disabled",false);			  		
			  		$("#lfAns").prop("disabled",true);
			  		$("#bfAns").prop("disabled",true);
					$("#bfAnsSub").prop("disabled",true);
					
					autoScroll();
					toastr.success("Correct Answer");
					LfBfValue(LfValue,BfValue);	
				} else  {
                    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");					
				}
			} else if (id5 == 4){
//				$("#modelMsg").html("<b class='boldTextBlue'>Note : L<sub>f</sub> &times; B<sub>f</sub>  >= A<sub>f</sub></b> ");
             $(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>b<sub>f</sub> = Area of footing / l<sub>f</sub></b>");
		    
			} else {
				
//				flow = flowAns.toFixed(2);
				if (BfValueEnter == BfValue) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					
					//$("#totalLoad").val('');
					$("#r9").prop("hidden",false);  
					$("#WuVal").prop("disabled",false);
			  		$("#SubWu").prop("disabled",false);			  		
			  		$("#lfAns").prop("disabled",true);
			  		$("#bfAns").prop("disabled",true);
					$("#bfAnsSub").prop("disabled",true);
					autoScroll();
					toastr.success("Correct Answer");
					LfBfValue(LfValue,BfValue);	
				} else {
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +FArea_corr+'</b>');
                   $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + BfValue);
				}
			}
			id5++;
		}
		
		
		
	});
	
	var Mcal;
	//var wuCorr;
	var WuValue;
	var id6=1;
	
	$("#SubWu").click(function(){
		Mcal=workingLoadValue2/FArea_corr;	
		wuCorrAns=1.5*Mcal;
		wuCorr111=	wuCorrAns.toFixed(2);
		wuCorr=parseFloat(wuCorr111);
		$("body").css("padding","0px 0px 0px 0px");
		WuValue=$("#WuVal").val();
		if(WuValue==""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");
		}else{
			WuValue=parseFloat($("#WuVal").val());
			if (id6 <= 3) {
				if (WuValue == wuCorr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					addToP2MasterJSON();
			  		//$("#FootingA").text(FArea_corr);
			  		$("#r10").prop("hidden",false);
			  		$("#r101").prop("hidden",false);
			  		$("#nextLevelPg2").prop("disabled",false);					
					$("#WuVal").prop("disabled",true);
			  		$("#SubWu").prop("disabled",true);
			  		autoScroll();
			  		soilPressure(WuValue);
					toastr.success("Correct Answer");
//					Page2();
				} else if (WuValue != wuCorr) {
                  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");					
				}
			} else if (id6 == 4){
//				$("#modelMsg").html("<b class='boldTextBlue'>Formula : 1.5 &times; P / A<sub>f</sub> </b> <br>Here, P = "+workingLoadValue2+" <br> A<sub>f</sub> = "+FArea_corr+" ");
                   
                   $(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>1.5 &times; P / A<sub>f</sub> </b>");
                  

			} else {
				
//				flow = flowAns.toFixed(2);
				if (WuValue == wuCorr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					addToP2MasterJSON();
					$("#r10").prop("hidden",false);
					$("#r101").prop("hidden",false);
					//$("#totalLoad").val('');
					$("#r10").prop("hidden",false);
			  		$("#nextLevelPg2").prop("disabled",false);					
					$("#WuVal").prop("disabled",true);
			  		$("#SubWu").prop("disabled",true);
			  		autoScroll();
			  		soilPressure(WuValue);									
					toastr.success("Correct Answer");
					
				} else {
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +wuCorr+'</b>');
                 $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + wuCorr);
                   
				}
			}
			id6++;
		}		
							
	});
	
	
	
		
//	$("#checkConfigPg2").click(function(){
//			$("body").css("padding","0px 0px 0px 0px");	
//				$("#footingArea").prop("disabled",true);
//				$("#footingAreaSub").prop("disabled",true);
//				$("#nextLevelPg2").prop("disabled",false);
//				
//	});
	
	
	$("#nextLevelPg2").click(function(){
//			$("body").css("padding","0px 0px 0px 0px");	
//			$("#main-div-conf").html('');
//			$("#centerText2").html('');
			Page2();
				//$("#checkConfigPg2").prop("disabled",true);
//			Page3Configurations(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_value2,LfValue,BfValue,wuCorr);
//			$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");	
	});

}	

function addToP2MasterJSON(){
	                  tempJson={};	
						tempJson.pre=pre;
						tempJson.conVal = conVal;
						tempJson.steelVal = steelVal;						
						tempJson.colSize = colSize;
						tempJson.d_val = d_val;
						tempJson.sbc_val = sbc_val;		
						tempJson.eCover_value2 = eCover_value2;						
						
						tempJson.pu_corr = pu_corr;
						tempJson.loadFromCol_val = loadFromCol_val;
						tempJson.Persentage_corr = Persentage_corr;
						tempJson.selfWt_corr = selfWt_corr;
						tempJson.addLoad2 = addLoad2;
						tempJson.FArea_corr = FArea_corr;
						tempJson.LfValue = LfValue;
						tempJson.BfValue = BfValue;
						tempJson.wuCorr = wuCorr;
						
						
						ArrayJson.push(tempJson);
						InputValMasterJson.demo = ArrayJson;
						console.log(InputValMasterJson);
//						tableCreateFlow(CalculateFMasterJson);

}


function autoScroll() {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000); // Scroll to bottom in 5 sec
}

//autoScroll(); // Call function
