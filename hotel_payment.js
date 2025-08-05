var price=document.getElementById("price");
        var paymentdoing=document.getElementById("payment");
        var audiosucess=document.getElementById("sucessaudio");
        var totalprice=document.getElementById("totalprice");
        var inputquantity=document.getElementsByClassName("item");
        function totalconfirm(){
            let total=0;
            let tp=0;
            for (i=0;i<inputquantity.length; i++){
                tp=parseInt(inputquantity[i].value*inputquantity[i].getAttribute("itemprice"));
                total+=tp;
            }
            totalprice.innerHTML=`\u20B9${total}/-`;
            if (total==0){
                alert("Please Select Your Dish and Proceed!!!");
                return
            }
            price.showModal();
        }
        function paymentdone(){
            price.close();
            paymentdoing.showModal();
            audiosucess.play();
        }
        function popupclose(){
            paymentdoing.close();
        }