import Footer from "./components/footer";
import Header from "./components/header";
import SearchQuery from "./components/search_query";
function App() {
  return (
    <div>
      <Header />

      <div className="container mx-auto">
        <SearchQuery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
