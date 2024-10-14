import Footer from "./components/Footer"
import Header from "./components/Header"
import { ThemeProvider } from "./ThemeContext"

interface AppProps {
  children: React.ReactNode
}

function App({children}: AppProps) {
  

  return (
    <ThemeProvider>
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow mb-16">{children}</main>
      <Footer/>
    </div>
    </ThemeProvider>
  )
}

export default App
