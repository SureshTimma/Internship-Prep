function calcBill() {
    let amount = document.getElementById("billAmount").value;
    let percentage = document.getElementById("percentageTip").value;
    let billAmount = parseInt(amount);
    let tipPercentage = parseInt(percentage);
    
    if (!billAmount || !tipPercentage){
        document.getElementById("errorMessage").textContent = "Please Enter Valid Input";
    
    }else{
        let tipAmount = (tipPercentage / 100) * billAmount;
    document.getElementById("tipAmount").value = tipAmount;
    document.getElementById("totalAmount").value = billAmount + tipAmount;
    document.getElementById("errorMessage").textContent = "";
    }
    
    
    

}