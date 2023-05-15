
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
    var message = "New order from " +getSelfDetails()+"\n"+ processListForWhatsapp(list);
    var encodedMessage = encodeURIComponent(message);
    console.log(encodedMessage)
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
    window.open(whatsappUrl);
}

function getSelfDetails(){
    var name = "Aatmaj Mhatre";
    var address="A-1104, Rameshwar,Neelkanth Heights"
    return name+","+address;
}

function getVendorNumber(){
    var phoneNumber = "918879214633";
    return phoneNumber;

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

}