import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Component/Common/Navbar";
import Sidebar from "./Component/Common/Sidebar";
import Footer from "./Component/Common/Footer";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";
import { ToastContainer } from "react-toastify";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const openLoginModal = () => setModalType("login");
  const openSignupModal = () => setModalType("signup");
  const closeModal = () => setModalType(null);
  const toggleModals = () => {
    setModalType((prev) => (prev === "login" ? "signup" : "login"));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const username = localStorage.getItem("username") || "User";

  return (
    <>
      <div className={`transition-filter duration-300}`}>
        <Navbar
          isAuthenticated={isAuthenticated}
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
          handleLogout={handleLogout}
          toggleSidebar={toggleSidebar}
        />

        <div className="flex min-h-[calc(100vh-4rem)]">
          {isAuthenticated && (
            <>
              <Sidebar 
                username={username} 
                handleLogout={handleLogout}
                sidebarOpen={sidebarOpen}
                closeSidebar={closeSidebar}
              />
              
              {sidebarOpen && (
                              <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              ></div>
              )}
            </>
          )}

          <main className="flex-1">
            <Outlet
              context={{
                isAuthenticated,
                setIsAuthenticated,
                openLoginModal,
                setModalType,
                openSignupModal,
              }}
            />
          </main>
        </div>

        <Footer />
      </div>

      {modalType === "login" && !isAuthenticated && (
        <Login
          onClose={closeModal}
          setIsAuthenticated={setIsAuthenticated}
          toggleModals={toggleModals}
        />
      )}

      {modalType === "signup" && !isAuthenticated && (
        <Signup
          onClose={closeModal}
          setIsAuthenticated={setIsAuthenticated}
          toggleModals={toggleModals}
        />
      )}

      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
