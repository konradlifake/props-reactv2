import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
function App() {
    return (
      <div>
        <Header 
        title="Daily news"
        nav1="Home"
        nav2="Sports"
        nav3="Technology"
        nav4="Contact"
        />

        <Hero
        headline="Breaking news"
        description="A new at technology is changing the future of educaation."
        />

        <Sidebar
        title="Latest News"
        item1="Football world Cup"
        item2="Stock Market Update"
        item3="Weather Forecast"
        />

        <Footer
        text="© 2026 Daily news. All Rights Reserved"
        />
      </div>
    )
}
export default App;