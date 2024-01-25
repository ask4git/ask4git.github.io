const SHOWING_ABOUT_CLASS_NAME = "main--about"
const SHOWING_CONTACT_CLASS_NAME = "main--contact"

const mainEl = document.querySelector(".main")
const menuEl = document.querySelector(".header__menu")
const logoEl = document.querySelector(".header__logo")
const formEl = document.querySelector(".form-box__form")
const contactButton = document.querySelector(
  ".lead-contact__text-box .contact-button"
)

const toggleMenu = (text) => {
  switch (text) {
    case "about":
      mainEl.classList.add(SHOWING_ABOUT_CLASS_NAME)
      mainEl.classList.remove(SHOWING_CONTACT_CLASS_NAME)
      break
    default:
      mainEl.classList.remove(SHOWING_ABOUT_CLASS_NAME)
      mainEl.classList.add(SHOWING_CONTACT_CLASS_NAME)
  }
}

menuEl.addEventListener("click", (e) => {
  const linkEl = e.target

  const textValue = linkEl.textContent

  toggleMenu(textValue)
})

logoEl.addEventListener("click", () => {
  mainEl.classList.add(SHOWING_ABOUT_CLASS_NAME)
  mainEl.classList.remove(SHOWING_CONTACT_CLASS_NAME)
})

contactButton.addEventListener("click", () => {
  toggleMenu()
})

formEl.addEventListener("submit", (e) => {
  e.preventDefault()
})
