var messageArray = ["Hi there!", "Click to continue ;)"];
var messageIndex = 0;
var textPosition = 0;
var speed = 100; // Adjust this speed as needed
var isDeleting = false;

typewriter = () => {
  if (messageIndex < messageArray.length) {
    const currentMessage = messageArray[messageIndex];
    
    if (!isDeleting) {
      const displayedText = currentMessage.substring(0, textPosition) + "<span>\u25ae</span>";
      document.querySelector("#message").innerHTML = displayedText;
      
      if (textPosition++ == currentMessage.length) {
        if (messageIndex === 0) {
          isDeleting = true;
          setTimeout(typewriter, speed * 7); // Pause after typing
        } else {
          setTimeout(typewriter, speed); // Pause before moving to the next message
        }
      } else {
        setTimeout(typewriter, speed);
      }
    } else {
      const displayedText = currentMessage.substring(0, textPosition) + "<span>\u25ae</span>";
      document.querySelector("#message").innerHTML = displayedText;
      
      if (textPosition-- == 0) {
        isDeleting = false;
        messageIndex++;
        if (messageIndex < messageArray.length) {
          setTimeout(typewriter, speed * 7); // Pause before typing the next message
        }
      } else {
        setTimeout(typewriter, speed *2);
      }
    }
  }
};

window.addEventListener("load", typewriter);


// inspired by the code for typewriter effect and modified it to fit my needs:https://www.google.com/search?q=typing+text+on+screen+js&sca_esv=556415102&rlz=1C5CHFA_enCA873CA873&sxsrf=AB5stBg0hlX_XCrzbkYp3WZABiWiyXCBmA%3A1691890178103&ei=AjLYZJbzBfyE9u8PqMiMwAw&ved=0ahUKEwiW_MGIvtiAAxV8gv0HHSgkA8gQ4dUDCA8&uact=5&oq=typing+text+on+screen+js&gs_lp=Egxnd3Mtd2l6LXNlcnAiGHR5cGluZyB0ZXh0IG9uIHNjcmVlbiBqczIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHUiHDFCFAliIC3ABeAGQAQCYAckBoAGgB6oBBTAuNC4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBBAjGCfiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#fpstate=ive&vld=cid:1ddc0445,vid:h_Uv_9OxA2k