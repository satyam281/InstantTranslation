async function translate(text,language = "hi"){
    const res = await fetch("http://127.0.0.1:5000/translate", {
	method: "POST",
	body: JSON.stringify({
		q: text,
		source: "en",
		target: "hi",
		format: "text",
		api_key: ""
	}),
	headers: { "Content-Type": "application/json" }
});
    var result = await res.json()
    return result;
}

function copy(clipboard_copy_string){
    
}

var options_selected= {"whatsapp":0,"amazon":0,"youtube":0,"google":0}

var options_selected="123"
chrome.storage.local.get(["options"]).then((result)=>{
    options_selected = result["options"]
    console.log(options_selected)
    if(options_selected["google"]==1){
        toggle_google()
        console.log("google on")
    }

    if(options_selected["whatsapp"]==1){
        // toggle_whatsapp()
    }
}
)
// chrome.storage.onChanged.addEventListener(()=>{

// })
console.log("instant translate extension loaded")



// INPUT TEXTAREA CLASS NAME: gLFyf
function toggle_google(){
   if(document.getElementsByClassName("gLFyf").length!=0){
       
           var parent_element = this.document.getElementsByClassName("L3eUgb")
           var google_search_bar = document.getElementsByClassName("gLFyf")
           
           var search_bar_pos = google_search_bar[0].getBoundingClientRect()
        //    console.log(search_bar_pos.top)

           //dialog box creation and styling
           var google_dialog = document.createElement("dialog")
        //    var draggable = document.getElementById('draggable');

           var posX = 0,
               posY = 0,
               mouseX = 0,
               mouseY = 0;
           
           google_dialog.addEventListener('mousedown', mouseDown, false);
           window.addEventListener('mouseup', mouseUp, false);
           
           function mouseDown(e) {
             e.preventDefault();
             posX = e.clientX - google_dialog.offsetLeft;
             posY = e.clientY - google_dialog.offsetTop;
             window.addEventListener('mousemove', moveElement, false);
           }
           
           function mouseUp() {
             window.removeEventListener('mousemove', moveElement, false);
           }
           
           function moveElement(e) {
             mouseX = e.clientX - posX;
             mouseY = e.clientY - posY;
             google_dialog.style.left = mouseX + 'px';
             google_dialog.style.top = mouseY + 'px';
           }
           google_dialog.className = "google_dialog"
           google_dialog.style.top = (search_bar_pos.top-70) +"px"
           google_dialog.style.left = search_bar_pos.left+"px"
           google_dialog.style.display = "flex"
           google_dialog.style.zIndex = "100"
           google_dialog.style.width = "mincontent"
           google_dialog.style.margin = "0px"
           google_dialog.style.position = "absolute"
           google_dialog.style.alignItems = "center"
           google_dialog.style.border = "1px solid black"
           google_dialog.style.backgroundColor = "white"
           google_dialog.style.color = "black"

           var logo = document.createElement("img")
           logo.src = "https://i.ibb.co/mD0shn3/logo.jpg"
           logo.style.width = "40px"
           logo.style.height = "40px"
           logo.style.margin = "0px"
           logo.google_dialog = false
           google_dialog.appendChild(logo)
           
           
           //hover
           google_dialog.addEventListener("mouseenter",()=>{
               google_dialog.style.backgroundColor = "rgba(107, 176, 176, 0.777)"
           })
           google_dialog.addEventListener("mouseleave",()=>{
               google_dialog.style.backgroundColor = "white"
           })
           
           parent_element[0].appendChild(google_dialog)
           console.log(google_dialog)
           
           var translated_text = ""
           google_dialog.addEventListener("mousedown",()=>{
               google_search_bar[0].value = translated_text
           })
          
           google_search_bar[0].addEventListener("keyup",(e)=>{
               google_dialog.textContent = ""
               var textbox = document.createElement("span")
               textbox.textContent = ""
               textbox.style.fontSize
               // console.log(google_search_bar[0].value)
               google_dialog.appendChild(logo)
               
               translate(google_search_bar[0].value,"es").then((e)=>{
                   // google_dialog.textContent = ""
                   console.log(google_search_bar[0].value+e["translatedText"])
                   textbox.textContent = e["translatedText"]
                   translated_text = e["translatedText"]
                   console.log(textbox.textContent)
                   google_dialog.textContent = ""
                   google_dialog.appendChild(logo)
                   google_dialog.appendChild(textbox)    
                   google_search_bar[0].focus()
                   google_dialog.show()
               })
           })
           // console.log("running")
       
   }
}

function waitForPageLoad() {
    const targetElement = document.getElementsByClassName('two _aigs')[0];
    if (targetElement) {
        extension_whatsapp()
    } else {
        setTimeout(waitForPageLoad, 1000); 
    }
}
waitForPageLoad();

 function extension_whatsapp(){
        
            
       
 }

//gmail




// others
    if(document.getElementsByClassName("ytd-searchbox-spt").length!=0){
        var search_bar5 = document.getElementsByClassName("ytd-searchbox-spt")
    // console.log(search_bar5[0])
        search_bar5[0].addEventListener("keydown",()=>{
            console.log(search_bar5[0].value)
        })
    }
// })