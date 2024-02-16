"use client"

import { FormEvent, useState } from "react"

import { FORM_PROPERTY } from "@/constants/form"
import { EMAIL_URL } from "@/constants/email"

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLoading) {
      return
    }

    const formEl = e.currentTarget as HTMLFormElement

    const formData = new FormData(formEl)

    const transFormData: Record<string, any> = {}

    for (const key of formData.keys()) {
      const value = formData.get(key)

      if (FORM_PROPERTY[key] && !value) {
        return alert(FORM_PROPERTY[key])
      }

      transFormData[key] = value
    }

    try {
      setIsLoading(true)
    } catch (error) {}

    const encoded = Object.keys(transFormData)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(transFormData[key])
      )
      .join("&")

    setIsLoading(true)

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
        if (res.status >= 400) {
          throw Error()
        }
        alert("정상적으로 요청이 전송되었습니다.")
      })
      .catch(() => {
        alert("오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="mt-28 w-full flex justify-center">
      <div className="bg-white rounded-2xl p-8 w-full max-w-[1320px]">
        <h2 className="text-5xl text-center uppercase font-bold">contact</h2>
        <form className="py-8 max-w-[1120px] m-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="team-name"
                className="after:content-['*'] after:text-[#ff0000] text-xl font-bold"
              >
                조직명
              </label>
              <input
                id="team-name"
                type="text"
                placeholder="e.g. ) team codekit"
                name="team-name"
                className="border border-[#e2e2e2] rounded-lg w-[410px] h-12 px-6 py-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                className="after:content-['*'] after:text-[#ff0000] text-xl font-bold"
                htmlFor="manager-name"
              >
                담당자명
              </label>
              <input
                id="manager-name"
                type="text"
                placeholder="e.g. ) 김코드"
                name="manager-name"
                className="border border-[#e2e2e2] rounded-lg w-[410px] h-12 px-6 py-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="phone-number"
                className="after:content-['*'] after:text-[#ff0000] text-xl font-bold"
              >
                휴대폰번호
              </label>
              <input
                id="phone-number"
                type="tel"
                placeholder="e.g. ) 010-1234-1234"
                name="phone-number"
                className="border border-[#e2e2e2] rounded-lg w-[410px] h-12 px-6 py-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="after:content-['*'] after:text-[#ff0000] text-xl font-bold"
              >
                이메일
              </label>
              <input
                type="email"
                placeholder="e.g. ) ask@codekit.im"
                name="email"
                id="email"
                className="border border-[#e2e2e2] rounded-lg w-[410px] h-12 px-6 py-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-xl font-bold" htmlFor="company-contact">
                회사연락처
              </label>
              <input
                type="tel"
                placeholder="e.g. ) 02-5678-5678"
                name="company-contact"
                id="company-contact"
                className="border border-[#e2e2e2] rounded-lg w-[410px] h-12 px-6 py-4"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <label className="text-xl font-bold" htmlFor="existing-services">
              기존 서비스
            </label>
            <input
              className="border border-[#e2e2e2] rounded-lg w-[980px] h-12 px-6 py-4"
              type="text"
              placeholder="e.g. ) about.codekit.im"
              id="existing-services"
              name="existing-services"
            />
          </div>
          <div className="flex items-center justify-between mt-5">
            <label className="text-xl font-bold" htmlFor="reference-services">
              참고 서비스
            </label>
            <input
              className="border border-[#e2e2e2] rounded-lg w-[980px] h-12 px-6 py-4"
              type="text"
              placeholder="e.g. ) make.codekit.im"
              name="reference-services"
              id="reference-services"
            />
          </div>
          <div className="flex items-center justify-center p-3 mt-8">
            <button
              className="relative w-36 h-14 bg-[#7e02ff] rounded-[2rem] text-white text-2xl font-bold"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <span
                  className="
                  absolute top-[16px] left-[60px] 
              border-4 border-white w-6 h-6 rounded-full border-b-transparent animate-spin
              "
                />
              ) : (
                "Contact"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
