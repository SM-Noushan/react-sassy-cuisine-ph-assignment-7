import Banner from "./components/header/Banner";
import Nav from "./components/header/Nav";
function App() {
  return (
    <div className="mx-auto max-w-[425px] md:container xl:max-w-screen-xl font-lexend text-haiti-950 p-4">
      <Nav />
      <Banner />
    </div>
  )
}

export default App
