import Banner from "./components/header/Banner";
import Navbar from "./components/header/Navbar";
import Index from "./components/main/Index";
function App() {
  return (
    <div className="mx-auto max-w-[425px] md:container xl:max-w-screen-xl font-lexend text-haiti-950 p-4">
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Index />
      </main>
    </div>
  )
}

export default App
