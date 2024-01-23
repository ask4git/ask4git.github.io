const SHOWING_ABOUT_CLASS_NAME = "main--about"
const SHOWING_CONTACT_CLASS_NAME = "main--contact"

const mainEl = document.querySelector(".main")
const menuEl = document.querySelector(".header__menu")
const logoEl = document.querySelector(".header__logo")
const formEl = document.querySelector(".form-box__form")

menuEl.addEventListener("click", (e) => {
  const linkEl = e.target

  const textValue = linkEl.textContent

  if (textValue === "about") {
    mainEl.classList.add(SHOWING_ABOUT_CLASS_NAME)
    mainEl.classList.remove(SHOWING_CONTACT_CLASS_NAME)
  } else {
    mainEl.classList.remove(SHOWING_ABOUT_CLASS_NAME)
    mainEl.classList.add(SHOWING_CONTACT_CLASS_NAME)
  }
})

logoEl.addEventListener("click", () => {
  mainEl.classList.add(SHOWING_ABOUT_CLASS_NAME)
  mainEl.classList.remove(SHOWING_CONTACT_CLASS_NAME)
})

formEl.addEventListener("submit", (e) => {
  e.preventDefault()
})
