/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle) {
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        });
      }

      if(navClose) {
        navClose.addEventListener('click',() =>{
            navMenu.classList.remove('show-menu')
        });
      }

// remove menu mobile
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Swipper Projects
let swiperProject = new Swiper(".projects_container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

// Swipper Testimonials
let swiperTestimonials = new Swiper(".testimonial_container", {
  grabCursor: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Email JS
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  //Check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    // Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    // show message
    contactMessage.textContent = "Write all the input fields 📝"
  } else {
    // serviceID - templateID - #form - publicKEY
    emailjs.sendForm('','','','s')
    .then(() =>{
        // show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent ✅'

        // remove message after five seconds
        setTimeout(() =>{
          contactMessage.textContent = ''
        }, 5000);
    },(error) =>{
      alert('OOPS! SOMETHING HAS FAILED...', error)
    });
    // clear the input field
    contactName.value = ''
    contacEmail.value = ''
    contacProject.value = ''
  }
}
contactForm.addEventListener('submit', sendEmail)

// Scroll section active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(curren => {
      const sectionHeight = curren.offsetHeight,
            sectionTop = curren.offsetTop - 58,
            sectionId = curren.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link')
      } else {
        sectionsClass.classList.remove('active-link')
      }      

    });
}
window.addEventListener('scroll', scrollActive)

// Scroll Up
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is height than 350 viewport height, add the show-scroll class to
  this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
                     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Dark Light Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

/* Previously selected topic (if user selected) */
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon =  localStorage.getItem('selected-icon')

/* We obtain the current theme that the interface has by validating the dark-theme class */
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'line'

/* We validate if the user previsusly chose a topic */
if(selectedTheme) {
/* if the validation is fulfilled, we ask what the issue was to know if we activated */
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

/* Acctive / deactivate the theme manually with the button */
themeButton.addEventListener('click', () => {
/* add or remove the dark / icon theme */
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
/* We save theme and the current icon that the user chose */
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
});

//  Change background header
const scrollHeader = () => {
  const header = document.getElementById('header')
  /* When the scroll is greater than 50 viewport height, and the scroll-heaher class to the header tag*/
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

//  Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
//  reset: true /* Animations repeat */
});
sr.reveal(`.home_data, .projects_container, .testimonial_container, .footer_container`)
sr.reveal(`.home_info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills_content:nth-child(1), .contact_content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills_content:nth-child(2), .contact_content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification_content, .services_card`, {interval: 100})