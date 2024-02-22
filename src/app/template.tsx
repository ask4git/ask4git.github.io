import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default Template
