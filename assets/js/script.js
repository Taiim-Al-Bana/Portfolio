/*dit is de eerste img van de homepage*/
let isFirstImage = true;

function toggleImage(param) {

    const imgProjects = document.getElementById("my-projects");
    const imgContact = document.getElementById("contact-me");
    const imgMyLanguages = document.getElementById("my-languages");

    if (param == 'my-projects') {

        if (isFirstImage) {
            imgProjects.src = "assets/img/cat1.jpeg";
            isFirstImage = false;
        } else {
            imgProjects.src = "assets/img/goede-projects.jpeg";
            isFirstImage = true;
        }
    } else {
       
    }

    if (param == 'contact-me') {

        if (isFirstImage) {
            imgContact.src = "assets/img/question.jpeg";
            isFirstImage = false;
        } else {
            imgContact.src = "assets/img/contact-me.jpg";
            isFirstImage = true;
        }
    } else {
       
    }    
  
    if (param == 'my-languages') {

        if (isFirstImage) {
            imgMyLanguages.src = "assets/img/cat2.jpeg";
            isFirstImage = false;
        } else {
            imgMyLanguages.src = "assets/img/my-languages.jpeg";
            isFirstImage = true;
        }
    } else {
       
    }
       
}
