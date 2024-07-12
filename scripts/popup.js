console.log("popup loaded")

var options_selected= {"whatsapp":0,"amazon":0,"youtube":0,"google":0}
var site_option_whatsapp = document.getElementById("whatsapp")
var site_option_google = document.getElementById("google")
var state={0:"#ff7676",1:"#acfbb6"}


// chrome.storage.local.clear()
chrome.storage.local.get(["options"]).then((result)=>{
    
    options_selected = result["options"]
    site_option_whatsapp.style.backgroundColor = state[options_selected["whatsapp"]]
    site_option_google.style.backgroundColor = state[options_selected["google"]]
})

const proxy_handler = {set(target,property,value){
    options_selected[property] = value
    chrome.storage.local.set({"options":options_selected})

    chrome.storage.local.get(["options"]).then((result)=>{
        console.log(result)
    })
}}
var proxy_options_selected = new Proxy(options_selected,proxy_handler)

async function send_site_option_message(message){
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    chrome.tabs.sendMessage(tab.id, message);  
}
function add_button_eventListeners(button_id){
    
    var site_option_button = document.getElementById(button_id)
    console.log(site_option_button)
    site_option_button.addEventListener("click",()=>{
        if(options_selected[button_id]==0){
            options_selected[button_id]=1
            proxy_options_selected[button_id] =1
            console.log("option clicked")
            site_option_button.style.backgroundColor = state[options_selected[button_id]]
            
            // chrome.storage.local.set({"options":options_selected})
            
        }
        else{
            options_selected[button_id]=0
            proxy_options_selected[button_id] =0
            site_option_button.style.backgroundColor = state[options_selected[button_id]]
            // chrome.storage.local.set({"options":options_selected})
        }
        
        send_site_option_message(options_selected)
    })
}
add_button_eventListeners("whatsapp")
add_button_eventListeners("google")




console.log(site_option_google)