import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
function App() {
    return (
      <div>
        <Header 
        title="Portfolio"
        nav1="Skills"
        nav2="About"
        nav3="Projects"
        nav4="Contact"
        />

        <Hero
        headline="About me"
        description="I am a passionate web developer who enjoys creating modern, responsive and user-friendly websites using HTML and CSS

I studied at Technikum im. Jana Zamoyskiego w Zwierzyńcu"
        />

        <Sidebar
        title="Skills"
        item1="HTML"
        item2="CSS"
        item3="GIT"
        />

        <Footer
        text="© 2026 Portfolio. All Rights Reserved"
        />
      </div>
    )
}
export default App;