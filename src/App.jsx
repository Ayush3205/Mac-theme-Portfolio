import { Dock, Home, Navbar, Welcome } from "#components";
import { Resume, Safari, Terminal, Finder, Text, Image, Contact, Photos } from "#windows";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  )
}

export default App;
