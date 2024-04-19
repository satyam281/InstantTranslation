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
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
      console.log(message)
      options_selected = message

      if(options_selected["whatsapp"]==0){
        Whatsapp_dialog.remove()
        console.log("option selected")
      }
      if(options_selected["whatsapp"]==1){
        main_body[0].append(Whatsapp_dialog)
      }
  }
);

// window.addEventListener('load',function(){
console.log("instant translate extension loaded")

// youtube  (policy violation "requestStorageAccessFor: Permission denied.")

// google    (policy violation : "[Violation] Permissions policy violation: unload is not allowed in this document.")
// INPUT TEXTAREA CLASS NAME: gLFyf
if(document.getElementsByClassName("gLFyf").length!=0){
    
        var parent_element = this.document.getElementsByClassName("L3eUgb")
        console.log(parent_element)
        //dialog box creation and styling
        var google_dialog = document.createElement("dialog")
        google_dialog.className = "google_dialog"
        google_dialog.style.top = "30vh"
        google_dialog.style.left = "-42vh"
        google_dialog.style.display = "flex"
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
        
        var google_search_bar = document.getElementsByClassName("gLFyf")
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

// whatsapp  (whatsapp crashes and logs out)
// console.log("extension running")
    // if(this.document.getElementsByClassName("dark").length!=0){

        if(this.document.getElementById("whatsapp-web")!=undefined){
        var html_element = document.getElementById("whatsapp-web")

        console.log("whatsapp detected?")

        // var prev_code_support = [html_element]
        var main_body  = [html_element]
        
        var Whatsapp_dialog = document.createElement("dialog")
        Whatsapp_dialog.className = "google_dialog"
        Whatsapp_dialog.style.top = "82vh"
        Whatsapp_dialog.style.left = "-45vh"
        Whatsapp_dialog.style.display = "flex"
        Whatsapp_dialog.style.alignItems = "center"
        Whatsapp_dialog.style.border = "1px solid black"
        Whatsapp_dialog.style.backgroundColor = "white"
        Whatsapp_dialog.style.borderColor = "green"
        Whatsapp_dialog.style.borderRadius = "10%"
        Whatsapp_dialog.style.color = "black"
        Whatsapp_dialog.style.zIndex = "1000000"
        var logo = document.createElement("img")
        logo.src = "https://i.ibb.co/mD0shn3/logo.jpg"
        logo.style.width = "40px"
        logo.style.height = "40px"
        logo.style.margin = "0px"
        Whatsapp_dialog.appendChild(logo)
        
        var translated_text = ""
        Whatsapp_dialog.addEventListener("click",()=>{
            var text_input_element = document.getElementsByClassName("_3Uu1_")[0].children[0].children[0]

            var final_text_element = text_input_element.children[0].children[0]
            console.log(final_text_element)
            final_text_element.textContent = ""
            text_input_element.textContent = translated_text
            console.log(translated_text)

        })
        main_body[0].addEventListener("click",()=>{

            // var text_input_elexment = this.document.getElementsByClassName("_3E8Fg")[0].children[0].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0]
            var text_input_element = document.getElementsByClassName("_ak1l")[0].children[0].children[0]

            var text_box = document.getElementsByClassName("_ak1l")[0]
            var whatsapp_dialog_top  = parseInt(text_box.style.top.replace("vh","")) +100     
            Whatsapp_dialog.style.top =  whatsapp_dialog_top +"vh"
            
            //hover
            Whatsapp_dialog.addEventListener("mouseenter",()=>{
                Whatsapp_dialog.style.backgroundColor = "rgba(107, 176, 176, 0.777)"
            })
            Whatsapp_dialog.addEventListener("mouseleave",()=>{
                Whatsapp_dialog.style.backgroundColor = "white"
            })

  

            Whatsapp_dialog.addEventListener("click",()=>{
                var final_text_element = text_input_element.children[0].children[0]
                console.log("clicked whatsapp dialog, current text: "+final_text_element.textContent)
                this.navigator.clipboard.writeText(final_text_element.textContent).then((e)=>{
                    console.log("text copied")
                })
            })
            
            // main_body[0].appendChild(Whatsapp_dialog)
            
            text_input_element.addEventListener("keyup",()=>{
                Whatsapp_dialog.textContent = ""

                var final_text_element = text_input_element.children[0].children[0]
                Whatsapp_dialog.textContent = ""
                var textbox = document.createElement("span")
                textbox.textContent = ""
                textbox.style.fontSize = "20"
                textbox.style.userSelect = "auto"
                // console.log(google_search_bar[0].value)
                

                Whatsapp_dialog.appendChild(logo)
                Whatsapp_dialog.style.userSelect = "auto"
                
                translate(final_text_element.textContent,"ja").then((e)=>{
                    Whatsapp_dialog.textContent = ""
                    final_text_element.textContent = e["translatedText"]
                    translated_text = e["translatedText"]
                    console.log(final_text_element.textContent)
                    Whatsapp_dialog.appendChild(logo)
                    Whatsapp_dialog.appendChild(textbox)    
                    textbox.textContent = e["translatedText"]
                    Whatsapp_dialog.show()
                })
                console.log(final_text_element+final_text_element.textContent)
                text_input_element.focus()
            })
            // console.log(text_input_element)
        })
    }

// amazon  ( unidentified violation: yet to be resolved or documented)
    if(document.getElementById("issprefix")!=undefined){
        var search_bar4 = document.getElementById("issprefix")
        console.log(search_bar4)
        console.log("123")
        search_bar4.addEventListener("keydown",()=>{
            console.log(search_bar4.value)
        })
    }



    // others
    if(document.getElementsByClassName("ytd-searchbox-spt").length!=0){
        var search_bar5 = document.getElementsByClassName("ytd-searchbox-spt")
    // console.log(search_bar5[0])
        search_bar5[0].addEventListener("keydown",()=>{
            console.log(search_bar5[0].value)
        })
    }
// })