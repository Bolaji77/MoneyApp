import Landing from "./routes/Landing";
import {Routes, Route, Navigate} from 'react-router-dom'
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from "./routes/Dashboard"
import SignupPage from "./routes/SignupPage";
import LoginPage from "./routes/LoginPage";


function App() {
  const {loading, currentUser} = useAuth();

  if(loading){
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-pulse text-pink-600 text-xl ">Loading...</div>
      </div>
    )
  }
  return (
    <>
    <div className="min-h-screen bg-slate-50">
      <Routes>
        <Route path="/" element={currentUser ? <Navigate to="/dashboard" replace /> : <Landing />} />

        <Route path="/login" element={currentUser ? <Navigate to="/dashboard" replace /> : <LoginPage />} />

        <Route path="/signup" element={currentUser ? <Navigate to="/dashboard" replace /> : <SignupPage />} />

        <Route path="/dashboard" element={
          <ProtectedRoute >
            <div className="container mx-auto px-4 py-8">
              <Dashboard />
            </div>
          </ProtectedRoute>
        }/>
      </Routes>
    </div>
      </>
  );
}

export default App;
