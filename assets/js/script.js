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

    /*dit is voor de works pagina*/
    const ButtonPinkGoose = document.getElementById('Button-PinkGoose');
    var open = false;

    ButtonPinkGoose.addEventListener('click', () => {
        const opentxt = document.getElementById('More-pinkgoose')
        console.log("test");
        if (!open){
            opentxt.style.display = 'block'
        } else if (open) {
            opentxt.style.display = 'none'
            open = false;
        }
    })

    const ButtonMasterMind = document.getElementById('Button-MasterMind');
    var open = false;

    ButtonMasterMind.addEventListener('click', () => {
        const opentxt = document.getElementById('More-mastermind')
        console.log("test");
        if (!open){
            opentxt.style.display = 'block'
        } else if (open) {
            opentxt.style.display = 'none'
            open = false;
        }
    })

/* dit is voor de more works*/
  
 const button = document.querySelector('.more-works');
    const extra = document.getElementById('extra-works');

    button.addEventListener('click', () => {
        extra.classList.toggle('hidden');
    });

       const ButtonConstruction = document.getElementById('Button-construction');
    var open = false;

    ButtonConstruction.addEventListener('click', () => {
        const opentxt = document.getElementById('More-construction')
        console.log("test");
        if (!open){
            opentxt.style.display = 'block'
        } else if (open) {
            opentxt.style.display = 'none'
            open = false;
        }
    })

     const ButtonConstruction2 = document.getElementById('Button-construction2');
    var open = false;

    ButtonConstruction2.addEventListener('click', () => {
        const opentxt = document.getElementById('More-construction2')
        console.log("test");
        if (!open){
            opentxt.style.display = 'block'
        } else if (open) {
            opentxt.style.display = 'none'
            open = false;
        }
    })

 

