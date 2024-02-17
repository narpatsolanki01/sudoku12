// const gamebox= document.querySelector("#gamebox");
{{}}
var arr=[
		"306508400",
    	"520000000",
    	"087000031",
    	"003010080",
    	"900863005",
    	"050090600", 
    	"130000250",
    	"000000074",
    	"005206300"
	];	

window.onload = (()=>{
	for(let i=0; i<9; i++){
		for(let j=0; j<9; j++){
			$('#gamebox').append("<td class='td_box'></td>");
			 $('.td_box').addClass('tile');
			 if(arr[i][j]!=0){
				 $('.td_box').text(arr[i][j]);
				}
	}

}
	alert("Hello")
})
