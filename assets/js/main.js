/*=======================================MENU SHOW Y HIDDEN ============================*/

const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')




/*=====================MENU SHOW===============*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*===================  MENU HIDDEN ================*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}




/*======================== REMOVE MENU MOBILE ===================*/

const navLink= document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    //when we click on each nav__link, we remove the show-menu class

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))



/*======================= ACCORDION SKILLS =====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader=document.querySelectorAll('.skills__header')  

      function toggleSkills(){
          let itemClass = this.parentNode.className

         

          for (i=0; i < skillsContent.length; i++){
              skillsContent[i].className = "skills__content skills__close"
          }

          if(itemClass === 'skills__content skills__close')
          {
              this.parentNode.className = 'skills__content skills__open'
          }
      }

      skillsHeader.forEach((el)  =>{
       
          el.addEventListener('click', toggleSkills)
      }
      )




/*======================QUALIFICATION TABS =======================*/

const tabs = document.querySelectorAll('[data-target]'),
      tabsContent= document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)

            tabsContent.forEach(tabContent =>{
                tabContent.classList.remove('qualification__active')
            })    
  
            target.classList.add('qualification__active')
  
            tabs.forEach(tab =>{
                tab.classList.remove('qualification__active')
            })
  
            tab.classList.add('qualification__active')


            
            })
  
          })

           
/*===================== SERVICE MODAL =========================*/

const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns=document.querySelectorAll('.services__button'),
        modalCloses=document.querySelectorAll('.services__modal-close')
        
  
        let modal = function(modalClick){
            modalViews[modalClick].classList.add('active-modal')
        }

        modalBtns.forEach((modalbtn, i) =>{
            modalbtn.addEventListener('click', () =>{
                modal(i)
            })
        })

        

      window.onclick = function(event) {            
        modalViews.forEach((modalview) => {
            if (event.target == modalview) {   
                modalview.classList.remove('active-modal')    
                //document.querySelector('.services__modal').classList.remove('active-modal')
            }
          })
          }
       


        modalCloses.forEach((modalclose) => {
            modalclose.addEventListener('click',()=> {
                modalViews.forEach((modalview) => {
                  modalview.classList.remove('active-modal')
                })
            })
            
        })
       
        /*=============================Scroll section active links==============================*/

        const sections = document.querySelectorAll('section[id]')

        function scrollActive(){
            const scrollY = window.pageYOffset

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop-50;
                const sectionId = current.getAttribute('id')

        //alert('scrollY : ' + scrollY + 'sectionHeight : ' +  sectionHeight + 'sectionTop: ' + sectionTop + 'sectionId: ' + sectionId)
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                   // alert('if : '+ sectionHeight +'  '+ sectionTop+'  ' + sectionId)

                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                }else{
                   // alert('else : '+ sectionHeight +'  '+ sectionTop+'  ' + sectionId)

                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
              

            })

        }
        window.addEventListener('scroll', scrollActive)


        /*=============================Change Background color =================================*/

        function scrollHeader(){
            const nav=document.getElementById('header')
            //when the scroll is greater than 200 viewport  height, add the scroll-header class to the header tag

            if (this.scrollY >= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
        }

        window.addEventListener('scroll', scrollHeader)


/*======================================show scrollup======================================*/
        
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 560 viewport height. add the show scroll class to the a tag with the scroll

    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=====================================Dark Light Theme====================================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.classList.contains(iconTheme)? 'uil-moon' : 'Uil-sun'


// we validating if the user previously chose a topic

if (selectedTheme) {

    //if the calidation is fulfilled , we ask what the issue was to know if we activates or deactivated the dark

    document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'] (darkTheme)
    themeButton.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme)

}

//activate / deactivate  the theme manually with the button

themeButton.addEventListener('click', () => {
    //add or remove the dark / icon theme

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //we save the theme and the current icon that the user chose

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon)
    
})


/*========================================Contact Form===================================*/
  
function triggermail(){

    var tempParam={ 
        to_name:document.getElementById('name').value,
        from_name:document.getElementById('email').value,
        message:document.getElementById('msg').value
    };


         emailjs.send("gmail","mytemplate",tempParam);
        
}

