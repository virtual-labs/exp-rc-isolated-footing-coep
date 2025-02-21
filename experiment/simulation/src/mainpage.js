
var conVal;
var steelVal;
var len;
var pre;  
var colSize ;
var d_val ; 
var sbc_val;
var eCover_val;
let MasterJson={};

var htm ='<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter Working Load (P) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="presText" style= "width:100%;"  class=" form-control marginBottom"  >'
	   +'</div>' 
	   +'</div>'
	     
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Grade of Concrete f<sub>ck</sub> (N/mm<sup>2</sup>) : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="concreteGrade" " style="height:auto; " >'
	   +'<option value="0">--- Select grade of concrete --- </option>'
	   +'<option value="10" >M10  </option>'
	   +'<option value="15" >M15  </option>'
	   +'<option value="20" >M20  </option>'
	   +'<option value="25" >M25  </option>'
	   +'<option value="30" >M30  </option>'
	   +'<option value="35" >M35  </option>'
	   +'<option value="40" >M40  </option>'
	   +'<option value="45" >M45  </option>'
	   +'<option value="50" >M50  </option>'
	   +'<option value="55" >M55  </option>'
	   +'<option value="60" >M60  </option>'
	   +'<option value="65" >M65  </option>'
	   +'<option value="70" >M70  </option>'
	   +'<option value="75" >M75  </option>'
	   +'<option value="80" >M80  </option>'		    	  
	   +'</select>'	  
	   +'</div>'
	   
	   
	   +'<div class="col-sm-3" id="concreteLabel" style="margin-top:-10px;" hidden>'
       +'<label class="labelstyle spanMsg " >&nbsp;f<sub>ck</sub> : <label id = "relTemp" class="labelstyle spanMsg ">'+conVal+'</label>   </label>'
//	   +'<span id = "relTemp1" class="labelstyle spanMsg">'+steelVal+' </span>'
	   +'</div>'
	   +'</div>'
	   	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Grade of Steel f<sub>y</sub> (N/mm<sup>2</sup>) : </label>'
	   +'</div>'	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="steelGrade" " style="height:auto; " >'
	   +'<option value="0">--- Select grade of steel --- </option>'
	   +'<option value="250" >Fe250  </option>'
	   +'<option value="415" >Fe415  </option>'
	   +'<option value="500" >Fe500  </option>'	  
	   +'</select>'	   
	   +'</div>'
	   
	   
	    +'<div class="col-sm-3" id="steelLabel" style="margin-top:-10px;" hidden>'
       +'<label class="labelstyle spanMsg" >&nbsp;f<sub>y</sub> :<label id = "relTemp1" class="labelstyle spanMsg"> '+steelVal+' </label>   </label>'
//	   +'<span id = "relTemp1" class="labelstyle spanMsg">'+steelVal+' </span>'
	   +'</div>'
	   +'</div>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Size of column b (mm) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="columnSize" style= 10px;width:100%;" placeholder="" class=" form-control marginBottom" >'
	   +'</div>'	     
	   +'</div>'
	     
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom"> h (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="d" style= 10px;width:100%;" placeholder="" class=" form-control marginBottom" >'
	   +'</div>'	     
	   +'</div>'	
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">SBC of Soil (kN/m<sup>2</sup>) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="sbc" style= 10px;width:100%;" placeholder="" class=" form-control marginBottom" >'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +"<label class='labelstyle marginBottom'>Effective Cover d'(mm) : </label>"
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="effectiveCover" style= 10px;width:100%;" placeholder="" class=" form-control marginBottom" >'
	   +'</div>'	     
	   +'</div>'

	   +'<div class="row">'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<button type="button" style="padding: 10px;width:100%;margin-top: 10px;"  class="btn btn-danger btnStyle" id="checkConfg"  data-toggle="modal" data-target="#myModal"  ><b>CONFIGURE </b></button>'
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'</div>'	   
   
    $("#page1Div2").html(htm);

	$("#concreteGrade").change(function(){
		
		conVal = parseInt($("#concreteGrade").val());
		
          if(conVal<=0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select appropriate values");
    	  }else{
			$("#concreteLabel").prop("hidden",false);				
			$("#relTemp").text(conVal+" Mpa");
			$("#FootingA").text(conVal+" Mpa");
		  }        
	});
	
	$("#steelGrade").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		steelVal = parseInt($("#steelGrade").val());
		if(steelVal<=0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select appropriate values");
		}else{
		 
		  $("#steelLabel").prop("hidden",false);	
		  $("#relTemp1").text(steelVal+"Mpa");
 		 
		 
		}
		
		
	});
	
  
  $("#checkConfg").click(function(){
	
	pre = $("#presText").val();
	conVal = $("#concreteGrade").val();
	steelVal =$("#steelGrade").val();
	colSize = $("#columnSize").val();
	d_val = $("#d").val();
	sbc_val = $("#sbc").val();
	eCover_val = $("#effectiveCover").val();
	
	if(pre==""||conVal==0||steelVal==0||colSize==""||d_val==""||sbc_val==""||eCover_val==""){
		
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Values not found");
			
	}else{
	
	pre = parseFloat($("#presText").val());
	conVal = parseInt($("#concreteGrade").val());
	steelVal = parseInt($("#steelGrade").val());
	colSize = parseFloat($("#columnSize").val());
	d_val = parseFloat($("#d").val());
	sbc_val = parseFloat($("#sbc").val());
	eCover_val = parseFloat($("#effectiveCover").val());
	
	if(pre<=0||conVal==0||steelVal==0||colSize<=0||d_val<=0||sbc_val<=0||eCover_val<=0)
	  {
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values.");
	}else
	  if(sbc_val<150 || sbc_val>3300){
	        $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter value of SBC between 150 to 3300 ");
	}else if(eCover_val<50 || eCover_val>75){
		 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter values of effective cover d"+"'"+" between 50 mm to 75 mm");
	}else if(colSize<200){
		  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Column size b should be minimum 200mm");
	 }else if(d_val<200){
		  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Height h should be minimum 200mm");
	}
	else{
		Page1();
		$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Configured successfully!");
	
	}
  }	
});

   