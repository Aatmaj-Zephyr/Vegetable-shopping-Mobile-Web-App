
function order(list, mode){
    switch(mode){
        case "whatsapp":
            orderOnWhatsapp(list);
        break;
    }
}

function orderOnWhatsapp(list){
    console.log("Order on Whatsapp");
    var phoneNumber = getVendorNumber();
    var message = getSelfDetails()+"\n"+ processListForWhatsapp(list);
    var encodedMessage = encodeURIComponent(message);
    console.log(encodedMessage)
    var whatsappUrl = "";
    if(phoneNumber!=null){
        whatsappUrl ="https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
    }
    else{
        var whatsappUrl = "https://wa.me/" + "?text=" + encodedMessage;
    }
    
    window.open(whatsappUrl);
}

function getSelfDetails(){

    var name = localStorage.getItem("name");
    var address=localStorage.getItem("address");
    if(name==null){
        return address;
    }
    else{
    return "New order from " + name+","+address;
    }
}

function setSelfDetails(name, address){
    //add the values to local storage
    localStorage.setItem("name",name);
    localStorage.setItem("address",address);

}

function getVendorNumber(){
    var phoneNumber = localStorage.getItem("vendorNumber");
    return phoneNumber;

}

function setVendorNumber(number){
    //add the values to local storage
    localStorage.setItem("vendorNumber",number);


}
function processListForWhatsapp(list){
    var message = "";
    message+="```";//for monospace
    for(var i=0;i<list.length;i++){
        message += list[i].itemName.padEnd(12) + list[i].quantity + "\n"; //padEnd adjusts the spaces to make a tablelike look
    }
    message+="```"; //for monospace

    console.log(message);
    return message;
}
function testDrive(){
    list = [{ itemName: "Carrot", "quantity": "1 kg" }, { itemName: "Broccoli", "quantity": "500 grams" }, { itemName: "Spinach", "quantity": "250 grams" }, { itemName: "Tomato", "quantity": "2 kg" }, { itemName: "Cucumber", "quantity": "3 pieces" }, { itemName: "Bell Pepper", "quantity": "3 pieces" }, { itemName: "Onion", "quantity": "1 kg" }];
    order(list, "whatsapp");
    setSelfDetails("Rahul","Gurgaon");

    setVendorNumber("918879214633");

}