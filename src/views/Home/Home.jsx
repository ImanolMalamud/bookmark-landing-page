import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import Features from "../../components/Features/Features";
import Extension from "../../components/Extension/Extension";
import Questions from "../../components/Questions/Questions";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-screen-lg flex-col px-5 md:px-0">
        <Header />
        <main id="main" className="flex flex-col">
          <Introduction />
          <Features />
          <Extension />
          <Questions />
        </main>
      </div>
      {/* Form section with full-width background */}
      <div className="w-full">
        <Form />
      </div>
      <div className="mx-auto w-full">
        <Footer />
      </div>
    </>
  );
};

export default Home;
