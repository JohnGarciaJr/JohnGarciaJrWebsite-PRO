/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== DARK LIGHT THEME (synced with home page) ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Same localStorage keys as main.js, so theme choice carries over between pages
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('bg-header')
                          : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUpEl = document.getElementById('scroll-up')
    window.scrollY >= 350 ? scrollUpEl.classList.add('show-scroll')
                           : scrollUpEl.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ===============*/
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    })
    sr.reveal('.media__tabs, .media__gallery, .footer__container', { interval: 80 })
}

/*=============== TABS ===============*/
const tabButtons = document.querySelectorAll('.media__tab-btn')
const tabContents = document.querySelectorAll('.media__tab-content')

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab')

        tabButtons.forEach(b => b.classList.remove('active-tab'))
        tabContents.forEach(c => c.classList.remove('active-tab-content'))

        btn.classList.add('active-tab')
        document.getElementById(target).classList.add('active-tab-content')
    })
})

/*=============== ACTIVATE TAB FROM URL HASH ===============*/
/* Lets links like media.html#video-tab open directly on the right tab */
const hashTarget = window.location.hash.replace('#', '')
if (hashTarget === 'photo-tab' || hashTarget === 'video-tab') {
    const matchingBtn = document.querySelector(`.media__tab-btn[data-tab="${hashTarget}"]`)
    if (matchingBtn) matchingBtn.click()
}

/*=============== IMAGE MODAL ===============*/
function openImageModal(imageSrc) {
    const modal = document.getElementById('image-modal')
    const modalImg = document.getElementById('modalImage')
    modal.style.display = 'block'
    modalImg.src = imageSrc
}

function closeImageModal() {
    const modal = document.getElementById('image-modal')
    modal.style.display = 'none'
}

/*=============== VIDEO MODAL ===============*/
function openVideoModal(videoUrl) {
    const modal = document.getElementById('video-modal')
    const modalVideo = document.getElementById('modalVideo')
    modal.style.display = 'block'
    modalVideo.src = videoUrl
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal')
    const modalVideo = document.getElementById('modalVideo')
    modal.style.display = 'none'
    modalVideo.src = ''
}

/*=============== CLOSE MODALS ON OUTSIDE CLICK ===============*/
window.addEventListener('click', (e) => {
    if (e.target.id === 'image-modal') closeImageModal()
    if (e.target.id === 'video-modal') closeVideoModal()
})

/*=============== CLOSE MODALS ON ESC ===============*/
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeImageModal()
        closeVideoModal()
    }
})
