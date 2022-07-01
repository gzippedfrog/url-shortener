import Header from "./components/Header";
import UrlInputForm from "./components/UrlInputForm";
import MyUrlsList from "./components/MyUrlsList";
import AllUrlList from "./components/AllUrlList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <UrlInputForm />

        <MyUrlsList />
        <AllUrlList />
      </div>
    </div>
  );
}

export default App;
