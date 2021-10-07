function darkModeFunction(){
    let wrapper = document.getElementById("wrapper");
    if (document.getElementById("darkMode").checked){
      wrapper.classList.add("classDarkMode");    
      document.getElementById("logo").src = "bilder/NamnLogoDark.jpg"
      document.getElementById("linkedin").src = "bilder/IconLinkedInDark.jpg"
      document.getElementById("fb").src = "bilder/IconFbDark.jpg"
      
    }
    else{
      wrapper.classList.remove("classDarkMode");
      document.getElementById("logo").src = "bilder/NamnLogo.jpg"
      document.getElementById("linkedin").src = "bilder/Linkedin1.jpg"
      document.getElementById("fb").src = "bilder/Fb1.jpg"    
     
    }
    
  }
  document.getElementById("darkMode").addEventListener("change", darkModeFunction);