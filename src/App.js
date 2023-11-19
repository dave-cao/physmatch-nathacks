import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Auth from "./Auth/Auth";
import Clients from "./clients/clients";
import Onboarding from "./Onboarding/Onboarding";
import Requests from "./requests/Requests";
import Book from "./Book/Book";
import DoctorPage from "./Book/DoctorPage";

// supabase
import { createClient } from "@supabase/supabase-js";
const supabaseURL = "https://agcjyctxnumrckwiyldb.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnY2p5Y3R4bnVtcmNrd2l5bGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNDQ1MDUsImV4cCI6MjAxNTgyMDUwNX0.pDNYEqKNYOEtqpUhclHt_pTob0ZA7lIpbfL30JElIik";
const supabase = createClient(supabaseURL, supabaseKey);

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  let routes;

  // routes for when doctor is logged in (doctor view)
  if (true) {
    routes = (
      <Routes>
        <Route exact path="/clients" element={<Clients />} />

        <Route exact path="/onboarding" element={<Onboarding />} />
        <Route exact path="/requests" element={<Requests />} />
        <Route exact path="/" element={<Book supabase={supabase} session={session} />} />
        <Route exact path="/doctor_page/:id" element={<DoctorPage supabase={supabase} session={session} />} />

        <Route
          exact
          path="/auth"
          element={<Auth supabase={supabase} session={session} />}
        />

      </Routes>
    );
  } else {
    // routes for when doctor is not logged in (client view)
    routes = (
      <Routes>

        <Route exact path="/" element={<Book supabase={supabase} session={session} />} />
        <Route exact path="/doctor_page/:id" element={<DoctorPage supabase={supabase} session={session} />} />
        <Route
          exact
          path="/auth"
          element={<Auth supabase={supabase} session={session} />}
        />
      </Routes>
    )
  }

  return (
    <Router>
      {/* switch enables one route only to be used */}
      <MainNavigation supabase={supabase} session={session} />
      <main>{routes}</main>
    </Router>
  );
}

export default App;
