const SHOWING_ABOUT_CLASS_NAME = "main--about"
const SHOWING_CONTACT_CLASS_NAME = "main--contact"

const mainEl = document.querySelector(".main")
const menuEl = document.querySelector(".header__menu")

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
