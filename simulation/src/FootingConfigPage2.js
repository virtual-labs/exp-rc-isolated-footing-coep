

var PVal;
var fck;
var bVal;
var dValue;
var effectiveCover;
var Lf ;
var Bf;
var wuVal2;

var fyValForDxDyCal;
var MuxVal;
var convertMux_corr;
var MuyVal;
var convertMuy_corr;
var dxCorr;
var dyCorr;
var totalDepthvalue;
var EffectiveDepth;
var effVal;
var effValRound;
var totDepth; 

	function Page2(){
		$("#centerText2").html('DEPTH OF FOOTING FROM BENDING MOMENT CONSIDERATION');
	    $("#centerText1").html('FOOTING TOP VIEW'); 
	    
	  	PVal = parseFloat(pre);
		console.log("PVal =  "+PVal);
	   
	   	fck =parseFloat(conVal);
	   	console.log("fck =  "+fck);
	   	
	   	fy =parseFloat(steelVal);
	   	console.log("fy =  "+fy);
	   	
	   	
	   	if(fy==250){
			fyValForDxDyCal=0.148;
		
		}else if(fy==415){
			fyValForDxDyCal=0.138;
			
		}else if(fy==500){
			fyValForDxDyCal=0.133;
			
		}else{
			console.log("Take Grade of steel..");
		}
		console.log("Fy Value = "+fyValForDxDyCal);
	  	
	  	var bValpg3 =parseFloat(colSize);
	  	console.log("bValpg3 =  "+bValpg3);
	  	
	  	var mmTOm = Math.pow(10,3);
	  	 bVal= bValpg3*mmTOm;
	  	console.log("bVal = "+bVal);
	  	
	  	var dValuepg3 =parseFloat(d_val);
	  	console.log("dValuepg3 =  "+dValuepg3);
	  	dValue= dValuepg3*mmTOm;
	  	console.log("dValue= "+dValue);
	  	
	  	effectiveCover=parseFloat(eCover_value2);
	  	console.log("effectiveCover =  "+effectiveCover);
	  	
	  	var LfANSS =parseFloat(LfValue);
	  	console.log("Lf =  "+LfANSS);
	  	 Lf= LfANSS*mmTOm;
	  	
	  	
		var BfANSS =parseFloat(BfValue);
	  	console.log("Bf =  "+BfANSS);
	  	Bf= BfANSS*mmTOm;
	  	
	  	wuVal2 =parseFloat(wuCorr);
	  	console.log("wuVal2 =  "+wuVal2);
	    
	   
	    
	    var selection3 = '<div class="row">'
	   +'<div class="col-sm-6">'
	   +' <div class="spanMsg">'
   	   +' <strong class="labelstyleInfo "><center>f<sub>ck</sub>= '+fck+' N/mm<sup>2</sup> &nbsp; &nbsp; f<sub>y</sub>= '+fy+' N/mm<sup>2</sup> </center></strong> '
  	   +' </div>'
  	   +'</div>'
	   +'<div class="col-sm-6">'
	   +' <div class="spanMsg">'
   	   +' <strong class="labelstyleInfo "><center>b= '+bValpg3+' mm &nbsp; &nbsp; D= '+dValuepg3+' mm </center></strong> '
  	   +' </div>'
  	   +'</div>'
	   +'</div>'
	   
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +' <div class="spanMsg">'
   	   +' <strong class="labelstyleInfo "><center>W<sub>u</sub>= '+wuVal2+' kN/m<sup>2</sup> &nbsp; &nbsp; P='+PVal+' kN </center></strong> '
  	   +' </div>'
  	   +'</div>'
	   +'<div class="col-sm-6">'
	   +' <div class="spanMsg">'
   	   +' <strong class="labelstyleInfo "><center>L<sub>f</sub>= '+LfANSS+' m &nbsp; &nbsp; B<sub>f</sub>= '+BfANSS+' m</center></strong> '
  	   +' </div>'
  	   +'</div>'
	   +'</div>'
	   
	  
	  +'<div class="row">'
	   +' <div class="col-sm-12">'
	   +'  <div class="spanMsg">'
   	   +"  <strong class='labelstyleInfo '><center>Effective Cover d'= "+effectiveCover+" mm</center></strong>"
  	   +'  </div>'
  	   +' </div>'
	   +'</div>'
	    
	   +'<div class="row calRowBorder" style="margin-top:3px;" id="rw1">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate M<sub>ux</sub> (kNm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="muxValue"   class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subMux" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
	   
//	   +'<div class="row calRowBorder" id="rw2" hidden>'
//	   +'<div class="col-sm-5">'
//	   +'<label class="labelstyle ">Convert M<sub>ux</sub> (N mm) : </label>'
//	   +'</div>'
//	   +'<div class="col-sm-4">'
//	   +'<input type="number" id="convertMux"   class=" form-control "  >'
//	   +'</div>'	    
//	   +'<div class="col-sm-3" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subConvertMux" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
//	   +'</div>'
//	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="rw2" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate M<sub>uy</sub> (kN/m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="muyValue"   class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subMuy" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
	  
//	   +'<div class="row calRowBorder" id="rw4" hidden>'
//	   +'<div class="col-sm-5">'
//	   +'<label class="labelstyle ">Convert M<sub>uy</sub> (N mm) : </label>'
//	   +'</div>'
//	   +'<div class="col-sm-4">'
//	   +'<input type="number" id="convertMuy"   class=" form-control "  >'
//	   +'</div>'	    
//	   +'<div class="col-sm-3" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subConvertMuy" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
//	   +'</div>'
//	   +'</div>'
	   
	   
	   +'<div class="row calRowBorder" id="rw3" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate d<sub>x</sub> (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="dxValue"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="dxValueSub" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="rw4" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate d<sub>y</sub> (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="dyValue"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="dyValueSub" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
	   
	   
	   
//	   +'<div class="row calRowBorder" id="rw5" hidden>'
//	   +'<div class="col-sm-5">'
//	   +'<label class="labelstyle ">Effective Depth d (mm)  : </label>'
//	   +'</div>'
//	   +'<div class="col-sm-4">'
//	   +'<input type="number" id="effectiveD"  class=" form-control "  >'
//	   +'</div>'	    
//	   +'<div class="col-sm-3" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="SubeffectiveD" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
//	   +'</div>'
//	   +'</div>'
	   
	   
	     +'<div class="row " id="rw7" hidden>'
	   +'<div class="col-sm-2">'	 
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<center><label class="labelstyle spanMsg " >  <label id = "effLabel" class="labelstyle spanMsg "> '+effValRound+'</label>   </label></center>'
	   +'</div>'	    
	   +'<div class="col-sm-2" >'
	   +'</div>'
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="rw6" style="margin-top:10px;" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Total Depth (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="totalDepth"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="totalDepthSub" data-toggle="modal" data-target="#myModal" ><b>Submit</b></button>'
	   +'</div>'
	   +'</div>'
	  
	  
	   +'<div class="row" id="rw8" hidden>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'<div class="col-sm-8">'
	   
	   +'<button type="button" style="padding: 10px;width:100%;margin-top: 10px;"  class="btn btn-danger btnStyle" id="nextLevelPg3"     ><b>NEXT LEVEL</b></button>'
	   +'</div>'	   
	   +'<div class="col-sm-2">'
	   +'</div>'	   
	   +'</div>'
	 
	   $("#page1Div2").html(selection3); 
	    
	    
	    //calculate mux and convert it 
	    var mmTOmConvert = Math.pow(10,-3);
	    var Dconverted=dValuepg3*mmTOmConvert;
	    var cal1Mux=LfANSS-Dconverted;
	     console.log("cal1Mux="+cal1Mux);
	    var cal2Mux=cal1Mux/2;
	    //var cal1=cal2Mux.toFixed(2);
	    var cal3Mux=cal2Mux*cal2Mux;
	    var cal4=wuVal2*BfANSS*cal3Mux;
	   // var cal4Mux=cal4.toFixed(2);
	    	console.log("cal4Mux = "+cal4);
	   var MuxVal111=cal4/2;	
//	    var MuxCal1=cal4/2;
//	      console.log("MuxCal1 final MUX = "+MuxCal1+" kN m");
	     MuxVal=MuxVal111.toFixed(2);
//	    MuxVal=parseFloat(MuxVal111);
	    console.log("MuxVAl = "+MuxVal);
	    
	    var TenPower6=Math.pow(10,6);
	    convertMux_corr=MuxVal*TenPower6;
//	    var  cal5=MuxVal*TenPower6;
//	    var convertMux_corr111=cal5.toFixed(2);
//	    convertMux_corr=parseFloat(convertMux_corr111);
	     console.log("convertMux_corr final  = "+convertMux_corr+" N mm");
	     
//	     id=1;
   	
	  footingAnim2();
	   
	   
	   var Mux_IO;
	   var id7 = 1;
	   
	 	$("#subMux").click(function(){	
	 	$("body").css("padding","0px 0px 0px 0px");
		Mux_IO =$("#muxValue").val();	
		if(Mux_IO==""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");
		}else{
			Mux_IO =parseFloat($("#muxValue").val());
			if (id7 <= 3) {
				if (Mux_IO == MuxVal) {
					//addToMasterJSON();
					$("#rw2").prop("hidden",false);
					//$("#convertMux").prop("disabled",false);
					//$("#subConvertMux").prop("disabled",false);	
					$("#muyValue").prop("disabled",false);
					$("#subMuy").prop("disabled",false);		
					$("#muxValue").prop("disabled",true);
					$("#subMux").prop("disabled",true);
					
					toastr.success("Correct Answer");
				} else if (Mux_IO != MuxVal) {
                     
                     $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");
                     					
				}
			} else if (id7 == 4){
//				$("#ModelTitle1").html("Formula");
//				MuxFormulaImg= '<img src="images/MuxFormula.png"   class="img-responsive" alt="Cinque Terre" width="50%" height="40%" >'
				modelImg = '<img src="images/MuxFormula.png" class="img-responsive" alt="Cinque Terre"  alt=" " >'
//				$("#modelMsg").html(MuxFormulaImg);
               
               $(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html(modelImg);
                

			} else {
				$("#ModelTitle1").html("Message box");	
				
//				flow = flowAns.toFixed(2);
				if (Mux_IO == MuxVal) {	
						
					//addToMasterJSON();		
					$("#rw2").prop("hidden",false);
					//$("#convertMux").prop("disabled",false);
					//$("#subConvertMux").prop("disabled",false);	
					$("#muyValue").prop("disabled",false);
					$("#subMuy").prop("disabled",false);		
					$("#muxValue").prop("disabled",true);
					$("#subMux").prop("disabled",true);
					
					toastr.success("Correct Answer");
				} else {
						
				    $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + MuxVal);		
						
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +MuxVal+'</b>');
				}
			}
			id7++;
		}

	 
	});
	  
	  
//	  var MuxConvertIO;
//	$("#subConvertMux").click(function(){	
//	 	$("body").css("padding","0px 0px 0px 0px");
//		MuxConvertIO =$("#convertMux").val();	
//		if(MuxConvertIO==""){
//			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
//		}else{
//			if (id <= 2) {
//				if (MuxConvertIO == convertMux_corr) {
//					//addToMasterJSON();
//					$("#rw3").prop("hidden",false);
//					$("#muyValue").prop("disabled",false);
//					$("#subMuy").prop("disabled",false);			
//					$("#convertMux").prop("disabled",true);
//					$("#subConvertMux").prop("disabled",true);
//					id=0;
//					toastr.success("Correct Answer");
//				} else if (MuxConvertIO != convertMux_corr) {
//					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");					
//				}
//			} else if (id == 3){
//				
//				$("#modelMsg").html("<b class='boldTextBlue'>Formula : M<sub>ux</sub> &times; 10<sup>6</sup>  </b> ");
//			} else {
//				MuxConvertIO =parseFloat($("#convertMux").val());
////				flow = flowAns.toFixed(2);
//				if (MuxConvertIO == convertMux_corr) {			
//					//addToMasterJSON();		
//					$("#rw3").prop("hidden",false);
//					$("#muyValue").prop("disabled",false);
//					$("#subMuy").prop("disabled",false);			
//					$("#convertMux").prop("disabled",true);
//					$("#subConvertMux").prop("disabled",true);
//					id=0;
//					toastr.success("Correct Answer");
//				} else {
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +convertMux_corr+'</b>');
//				}
//			}
//			id++;
//		}	 
//	});  
	  
	 // calculate Muy and convert it  	
	//var mmTOmConvert = Math.pow(10,-3);
	    var b_converted=bValpg3*mmTOmConvert;
	 var cal1Muy=BfANSS-b_converted;
	     console.log("cal1Muy="+cal1Muy);
	    var cal2Muy=cal1Muy/2;
	    //var muyCAL1=cal2Muy.toFixed(2);
	    var cal3Muy=cal2Muy*cal2Muy;
	    
	    var cal4Muy=wuVal2*LfANSS*cal3Muy;
	    //var cal5Muy=cal4Muy.toFixed(2);
	    	console.log("cal4Muy = "+cal4Muy);
	    var MuyCalAns11=cal4Muy/2;
	   // var MuyCalAns=cal4Muy/2;
	      console.log("MuyVal = "+MuyVal+" kN m");
	MuyVal=MuyCalAns11.toFixed(2);
	   // MuyVal=parseFloat(MuyCalAns11);
	    
	    convertMuy_corr=MuyVal*TenPower6;
//	    var  calMuy5=MuyVal*TenPower6;
//	    var convertMuy_corr11=calMuy5.toFixed(2);
//	    convertMuy_corr=parseFloat(convertMuy_corr11);
	     console.log("convertMuy_corr = "+convertMuy_corr+" N mm");
	     
		var MuyIO;
		var id8=1;
		
		$("#subMuy").click(function(){	
		 	$("body").css("padding","0px 0px 0px 0px");
			MuyIO =$("#muyValue").val();	
			if(MuyIO==""){
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");
			}else{
				MuyIO =parseFloat($("#muyValue").val());
				if (id8 <= 3) {
					if (MuyIO == MuyVal) {
						//addToMasterJSON();
						$("#rw3").prop("hidden",false);
//						$("#convertMuy").prop("disabled",false);
//						$("#subConvertMuy").prop("disabled",false);	
						$("#dxValue").prop("disabled",false);
						$("#dxValueSub").prop("disabled",false);
						$("#muyValue").prop("disabled",true);
						$("#subMuy").prop("disabled",true);			
						
						toastr.success("Correct Answer");
					} else if (MuyIO != MuyVal) {
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");
      					}
				} else if (id8 == 4){
//					$("#ModelTitle1").html("Formula");
//					var  MuyFormulaImg= '<img src="images/MuyFormula.png"class="img-responsive" alt="Cinque Terre" width="50%" height="40%" >'
					modelImg = '<img src="images/MuyFormula.png" class="img-responsive" alt="Cinque Terre"  alt=" " >'
//					$("#modelMsg").html(MuyFormulaImg);

             $(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html(modelImg);
			

				} else {
					$("#ModelTitle1").html("Message box");	
					
	//				flow = flowAns.toFixed(2);
					if (MuyIO == MuyVal) {			
						//addToMasterJSON();		
						$("#rw3").prop("hidden",false);
//						$("#convertMuy").prop("disabled",false);
//						$("#subConvertMuy").prop("disabled",false);	
						$("#dxValue").prop("disabled",false);
						$("#dxValueSub").prop("disabled",false);
						$("#muyValue").prop("disabled",true);
						$("#subMuy").prop("disabled",true);	
						
						toastr.success("Correct Answer");
					} else {
//						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +MuyVal+'</b>');
                        $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + MuyVal);
					}
				}
				id8++;
			}	 
		});  
		
//		var convertMuyIO;
//			$("#subConvertMuy").click(function(){	
//		 	$("body").css("padding","0px 0px 0px 0px");
//			convertMuyIO =$("#convertMuy").val();	
//			if(convertMuyIO==""){
//				$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
//			}else{
//				if (id <= 2) {
//					if (convertMuyIO == convertMuy_corr) {
//						//addToMasterJSON();
//						$("#rw5").prop("hidden",false);
//						$("#dxValue").prop("disabled",false);
//						$("#dxValueSub").prop("disabled",false);	
//						$("#convertMuy").prop("disabled",true);
//						$("#subConvertMuy").prop("disabled",true);			
//						id=0;
//						toastr.success("Correct Answer");
//					} else if (convertMuyIO != convertMuy_corr) {
//						$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");					
//					}
//				} else if (id == 3){
//					$("#modelMsg").html("<b class='boldTextBlue'>Formula : M<sub>uy</sub> &times; 10<sup>6</sup>  </b> ");
//				} else {
//					convertMuyIO =parseFloat($("#convertMuy").val());
//	//				flow = flowAns.toFixed(2);
//					if (convertMuyIO == convertMuy_corr) {			
//						//addToMasterJSON();		
//						$("#rw5").prop("hidden",false);
//						$("#dxValue").prop("disabled",false);
//						$("#dxValueSub").prop("disabled",false);	
//						$("#convertMuy").prop("disabled",true);
//						$("#subConvertMuy").prop("disabled",true);		
//						id=0;
//						toastr.success("Correct Answer");
//					} else {
//						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +convertMuy_corr+'</b>');
//					}
//				}
//				id++;
//			}	 
//		});  
		
		
		  
		//calculate dx
		
		var dxCal1=fyValForDxDyCal*fck*Bf;
		console.log("fy= "+fyValForDxDyCal+" * fck = "+fck+" *  Bf = "+Bf);
		var dxCal2=convertMux_corr/dxCal1;
		console.log("dxCal2= "+dxCal2);
	var dxCal4=Math.sqrt(dxCal2);
			dxCorr=dxCal4.toFixed(2);
//		dxCorr=parseFloat(dxCal4);
		console.log("dxCorr = "+dxCorr);
		 
		 
		 //calculate dy
		 var dyCal1=fyValForDxDyCal*fck*Lf;
		var dyCal2=convertMuy_corr/dyCal1;
	var dyCal4=Math.sqrt(dyCal2);
		dyCorr =dyCal4.toFixed(2);
//		dyCorr=parseFloat(dyCal4);
		console.log("dyCorr = "+dyCorr);
		
	
	
		//calculate Total depth		
		if(dxCorr>dyCorr){
			EffectiveDepth	=dxCorr;
			//console.log("dxCorr>dyCorr IF =  "+EffectiveDepth);
			
		}else{
			EffectiveDepth	=dyCorr;
			//console.log("dxCorr>dyCorr ELSE =  "+EffectiveDepth);
		}
		console.log("EffectiveDepth =  "+EffectiveDepth);
		
		//calculate total Depth
		var EffectiveD_Ans=parseFloat(EffectiveDepth);   
		var totD1=EffectiveD_Ans + effectiveCover;
		console.log("totD1 = "+totD1+" , EffectiveDepth = "+EffectiveDepth+" , effectiveCover = "+effectiveCover);
		var totD2=parseFloat(totD1);
		console.log("totD1 = "+totD1+"...");
		
		totalDepthvalue=totD2.toFixed(2);
		console.log("EffectiveDepth = "+totalDepthvalue );
		
		
		 	
	   
		var dxIO;
		var id9 =1;
		
		$("#dxValueSub").click(function(){	
		 	$("body").css("padding","0px 0px 0px 0px");
			dxIO =$("#dxValue").val();	
			if(dxIO==""){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");
			}else{
				dxIO =parseFloat($("#dxValue").val());
				if (id9 <= 3) {
					if (dxIO == dxCorr) {
						//addToMasterJSON();
						$("#rw4").prop("hidden",false);
						$("#dyValue").prop("disabled",false);
						$("#dyValueSub").prop("disabled",false);	  
						$("#dxValue").prop("disabled",true);
						$("#dxValueSub").prop("disabled",true);			
						
						toastr.success("Correct Answer");
					} else if (dxIO != dxCorr) {
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");
					}
				} else if (id9 == 4){
//					$("#ModelTitle1").html("Formula");
//					var  dxFormulaImg= '<img src="images/dxFormula.png" class="img-responsive" alt="Cinque Terre" width="45%" height="40%" ><br><p>Here, R<sub>u</sub> = '+fyValForDxDyCal+'</p>'
					modelImg = '<img src="images/dxFormula.png" class="img-responsive" alt="Cinque Terre"  alt=" " >'
//					$("#modelMsg").html(dxFormulaImg);
					
					$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html(modelImg);
					
				} else {
					$("#ModelTitle1").html("Message box");
					
	//				flow = flowAns.toFixed(2);
					if (dxIO == dxCorr) {			
						//addToMasterJSON();		
						$("#rw4").prop("hidden",false);
						$("#dyValue").prop("disabled",false);
						$("#dyValueSub").prop("disabled",false);	  
						$("#dxValue").prop("disabled",true);
						$("#dxValueSub").prop("disabled",true);			
						
						toastr.success("Correct Answer");
					} else {
//						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +dxCorr+'</b>');
                         $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + dxCorr);
					}
				}
				id9++;
			}	 
		}); 
 
      var id10 =1;
      
 		$("#dyValueSub").click(function(){	
//		 	$("body").css("padding","0px 0px 0px 0px");
			dyIO =$("#dyValue").val();
			
			compareValue();
				effValRound = roundToNearest5(effVal);
				
			if(dyIO==""){
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");
			}else{
				dyIO =parseFloat($("#dyValue").val());
				if (id10 <= 3) {
					if (dyIO == dyCorr) {
						//addToMasterJSON();
						$("#rw6").prop("hidden",false);
						$("#rw7").prop("hidden",false);
						$("#effectiveD").prop("disabled",false);
						$("#SubeffectiveD").prop("disabled",false);
						  
						$("#dyValue").prop("disabled",true);
						$("#dyValueSub").prop("disabled",true);			
						$("#effLabel").text("Effective depth d : "+effValRound+" mm");
//						toastr.success("Correct Answer");
					} else if (dyIO != dyCorr) {
						
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");
						
//						$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");					
					}
				} else if (id10 == 4){
//					$("#ModelTitle1").html("Formula");
//						var  dyFormulaImg= '<img src="images/dyFormula.png" class="img-responsive" alt="Cinque Terre" width="45%" height="40%" ><br><p>Here, R<sub>u</sub> = '+fyValForDxDyCal+'</p>'
					modelImg = '<img src="images/dyFormula.png" class="img-responsive" alt="Cinque Terre"  alt=" " >'
//					$("#modelMsg").html(dyFormulaImg);
               $(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html(modelImg);
					
				} else {
					$("#ModelTitle1").html("Message box");
					
	//				flow = flowAns.toFixed(2);
					if (dyIO == dyCorr) {			
						//addToMasterJSON();		
						$("#rw6").prop("hidden",false);
						$("#rw7").prop("hidden",false);
						$("#effectiveD").prop("disabled",false);
						$("#SubeffectiveD").prop("disabled",false);
						  
						$("#dyValue").prop("disabled",true);
						$("#dyValueSub").prop("disabled",true);			
						$("#effLabel").text("Effective depth d : "+effValRound+" mm");
//						toastr.success("Correct Answer");
					} else {
//						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +dyCorr+'</b>');
                       
                       $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + dyCorr);
                       
					}
				}
				id10++;
			}	 
		}); 
		
		
		
	
	    var id11 = 1;
		var eDepthIO;
		

		function compareValue(){
			if(dxCorr < 100 && dyCorr < 100){
				effVal = 100;
			}else
			if(dxCorr<dyCorr){
				effVal = dyCorr;
			}else{
				effVal = dxCorr;
			}
		}

	 	   var totDepthIO; 
	 	   var id12 =1;
	 	      	
	 	      	function roundToNearest5(value) {
    return Math.ceil(value / 5) * 5;
}
	 	      	
			$("#totalDepthSub").click(function(){	
				
			totDepth = parseFloat(effectiveCover)+parseFloat(effValRound);	
			totDepth = totDepth.toFixed(2);
			totDepth = parseFloat(totDepth);	
			
			totalDepthvalue = totDepth;
				
		 	$("body").css("padding","0px 0px 0px 0px");
			 totDepthIO =$("#totalDepth").val();	
			if(totDepthIO==""){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values");
			}else{
				totDepthIO =parseFloat($("#totalDepth").val());
				if (id12 <= 3) {
					if (totDepthIO == totalDepthvalue) {
						//addToMasterJSON();
						
						$("#rw8").prop("hidden",false);
						$("#nextLevelPg3").prop("hidden",false);	  
						$("#totalDepth").prop("disabled",true);
						$("#totalDepthSub").prop("disabled",true);			
						autoScroll();
						totaldepth(totalDepthvalue);
						toastr.success("Correct Answer");
						
						
					} else if (totDepthIO != totalDepthvalue) {
//						$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");
                      $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.Try again.");
					
					}
				} else if (id12 == 4){
					
//						$("#modelMsg").html("<b class='boldTextBlue'> Formula : Total Depth = Effective Depth + Effective Cover</b> ");
					
					$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Total Depth = Effective Depth + Effective Cover</b>");
					
				} else {
			
					
	
					if (totDepthIO == totalDepthvalue) {			
						//addToMasterJSON();		
//						$("#rw7").prop("hidden",false);
						$("#rw8").prop("hidden",false);
						$("#nextLevelPg3").prop("hidden",false);  
						$("#totalDepth").prop("disabled",true);
						$("#totalDepthSub").prop("disabled",true);			
						
						totaldepth(totalDepthvalue);
						toastr.success("Correct Answer");
						autoScroll();
						$("#rw7").prop("hidden",false);
//						$("#effLabel").text("Effective depth d : "+effValRound+" mm");
					} else {
//						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +totalDepthvalue+'</b>');
              $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + totalDepthvalue);
					}
				}
				id12++;
			}	 
		});
		
			
		
		
		$("#nextLevelPg3").click(function(){
			Page3();
			
//			$("body").css("padding","0px 0px 0px 0px");	
//			$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>")
//			//$("#main-div-conf").html('');
//			//$("#centerText2").html('');
//			
//				//$("#checkConfigPg2").prop("disabled",true);
//			//Page3Configurations(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_value2,LfValue,BfValue,wuCorr);
//			;	
	});
		
	    
	}


	