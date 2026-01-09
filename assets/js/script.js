/*dit is de eerste img van de homepage*/
let isFirstImage = true;

function toggleImage(param) {

    const imgProjects = document.getElementById("my-projects");
    const imgContact = document.getElementById("contact-me");
    const imgMyLanguages = document.getElementById("my-languages");

    if (param == 'my-projects') {

        if (isFirstImage) {
            imgProjects.src = "assets/img/cat1.jpeg";
        } else {
            imgProjects.src = "assets/img/my-projects.jpeg";
        }

        if (param == 'contact-me') {

            if (isFirstImage) {
                imgContact.src = "assets/img/question.jpeg";
            }
            else {
                imgContact.src = "assets/img/contact-me.jpeg"
            }
        }


        if (param == 'my-languages') {
            if (isFirstImage) {
                imgProjects.src = "assets/img/my-languages.jpeg"
            }
        }






    }
    else if (param == 'contact-me') {
        imgContact.src = "assets/img/question.jpeg";
    }

    else if (param == 'my-languages') {
        imgMyLanguages.src = "assets/img/cat2.jpeg";
    }


    }
    isFirstImage = !isFirstImage;


