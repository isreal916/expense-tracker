$.ajax({
    url:'data.json',
    type:'get',
    success:function(res){
           
            $("#mon").mouseover(()=>{
                $('#text1').text(`$${res[0].amount}`).css('display','block');
            
            });
            $("#tue").mouseover(()=>{
                $('#text2').text(`$${res[1].amount}`).css('display','block');
            
            });
            $("#wed").mouseover(()=>{
                $('#text3').text(`$${res[2].amount}`).css('display','block');
            
            });
            $("#thur").mouseover(()=>{
                $('#text4').text(`$${res[3].amount}`).css('display','block');
            
            });
            $("#fri").mouseover(()=>{
                $('#text5').text(`$${res[4].amount}`).css('display','block');
            
            })
            $("#sat").mouseover(()=>{
                $('#text6').text(`$${res[5].amount}`).css('display','block');
            
            });
            $("#sun").mouseover(()=>{
                $('#text7').text(`$${res[6].amount}`).css('display','block');
            
            });
            $(".bar").mouseout(()=>{
                $('.tooltiptext').text('').css('display','none');
            
            });
    }

  })

  
        
       
   
      
   