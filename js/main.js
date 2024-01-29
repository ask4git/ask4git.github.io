const EMAIL_URL =
  "https://script.google.com/macros/s/AKfycbwBy8tu71VY6YII5zeAcftUn0gIoIfy9JQs0J_Yva24RZ9KVuSw62qUXTinihpe3C3s/exec"

const SHOWING_ABOUT_CLASS_NAME = "main--about"
const SHOWING_CONTACT_CLASS_NAME = "main--contact"

const mainEl = document.querySelector(".main")
const menuEl = document.querySelector(".header__menu")
const logoEl = document.querySelector(".header__logo")
const formEl = document.querySelector(".form-box__form")
const contactButton = document.querySelector(
  ".lead-contact__text-box .contact-button"
)
const overlayEl = document.querySelector(".overlay")

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

const formObj = {
  "team-name": "조직명은 필수 항목입니다.",
  "manager-name": "담당자명은 필수 항목입니다.",
  "phone-number": "휴대폰번호는 필수 항목입니다.",
  email: "이메일은 필수 항목입니다.",
  "company-contact": null,
  "existing-services": null,
  "reference-services": null,
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)
  const transFormData = {}

  for (const key of formData.keys()) {
    if (formObj[key] && !formData.get(key)) {
      return alert(formObj[key])
    }

    transFormData[key] = formData.get(key)
  }

  overlayEl.classList.add("overlay--active")

  const encoded = Object.keys(transFormData)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(transFormData[key])
    )
    .join("&")

  fetch(EMAIL_URL, {
    redirect: "follow",
    mode: "no-cors",
    method: "POST",
    body: encoded,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => {
      alert("정상적으로 요청이 전송되었습니다.")
    })
    .catch((err) => {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
    })
    .finally(() => {
      overlayEl.classList.remove("overlay--active")
    })
})
