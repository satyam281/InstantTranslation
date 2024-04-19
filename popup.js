

chrome.storage.local.get("options", function(result) {
    console.log("huh"+result)
    if(result.length!=4){
        
    }
    else{
        var options_selected = result
    }
});

var options_selected= {"whatsapp":0,"amazon":0,"youtube":0,"google":0}
var site_option_whatsapp = document.getElementById("whatsapp")
var site_option_google = document.getElementById("google")
var state={0:"#ff7676",1:"#acfbb6"}



// chrome.storage.local.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });




async function send_site_option_message(message){
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    chrome.tabs.sendMessage(tab.id, message);
  
}
function add_button_eventListeners(button_id){

    var site_option_button = document.getElementById(button_id)
    site_option_button.addEventListener("click",()=>{
        if(options_selected[button_id]==0){
            options_selected[button_id]=1
            site_option_button.style.backgroundColor = state[options_selected[button_id]]
            
            chrome.storage.local.set({"options":options_selected}, function() {
                console.log('option states updated: ' + value);
            });
        }
        else{
            options_selected[button_id]=0
            site_option_button.style.backgroundColor = state[options_selected[button_id]]
            chrome.storage.local.set({"options":options_selected}, function() {
                console.log('option states updated: ' + value);
            });
        }

        send_site_option_message(options_selected)
    })
}

add_button_eventListeners("whatsapp")
add_button_eventListeners("google")


console.log(site_option_google)