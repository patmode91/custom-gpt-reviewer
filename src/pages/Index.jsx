import { useState } from "react";
import { FaSearch, FaBalanceScale, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderHome = () => (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to Custom GPT Reviews</h1>
      <p className="mb-6">Explore and compare different GPT models to find the best fit for your needs.</p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigateTo("review")}>
          Request a Review
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigateTo("compare")}>
          Compare GPTs <FaBalanceScale />
        </button>
      </div>
    </div>
  );

  const renderReviewRequest = () => (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Request a GPT Review</h2>
      <input type="text" placeholder="Enter GPT Model" className="border-2 border-gray-300 p-2 rounded w-full mb-4" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Submit Review Request</button>
    </div>
  );

  const renderComparison = () => (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Compare GPT Models</h2>
      <div className="flex gap-4 mb-4">
        <input type="text" placeholder="Enter First GPT Model" className="border-2 border-gray-300 p-2 rounded w-full" />
        <input type="text" placeholder="Enter Second GPT Model" className="border-2 border-gray-300 p-2 rounded w-full" />
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">Compare Now</button>
    </div>
  );

  const renderFooter = () => (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <p>Follow us on social media</p>
      <div className="flex justify-center gap-4">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </footer>
  );

  return (
    <div>
      <nav className="bg-gray-100 p-4 text-center">
        <button className="mr-4" onClick={() => navigateTo("home")}>
          Home
        </button>
        <button className="mr-4" onClick={() => navigateTo("review")}>
          Review Request
        </button>
        <button className="mr-4" onClick={() => navigateTo("compare")}>
          GPT Comparison
        </button>
      </nav>
      {currentPage === "home" && renderHome()}
      {currentPage === "review" && renderReviewRequest()}
      {currentPage === "compare" && renderComparison()}
      {renderFooter()}
    </div>
  );
};

export default Index;
