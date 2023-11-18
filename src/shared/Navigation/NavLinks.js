import React from "react";

import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import AuthFunction from "../../functions/AuthFunction";
import { useNavigate } from "react-router-dom";
export default function NavLinks({ supabase, session }) {
  const authFunction = AuthFunction(supabase);
  const navigate = useNavigate();
  const logoutUser = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <ul className="nav-links">
      {!session && (
        <li>
          <NavLink to="/" exact>
            Book A Doc
          </NavLink>
        </li>
      )}
      {!session && (
        <li>
          <NavLink to="/clients">Clients</NavLink>
        </li>
      )}
      {!session && (
        <li>
          <NavLink to="/onboarding">Onboarding</NavLink>
        </li>
      )}
      {!session && (
        <li>
          <NavLink to="/requests">Requests</NavLink>
        </li>
      )}
      {!session && (
        <li>
          <NavLink to="/auth">Doctor log-in</NavLink>
        </li>
      )}

      {session && (
        <li>
          <button
            onClick={() => {
              logoutUser();
            }}
          >
            Log out{" "}
          </button>
        </li>
      )}
    </ul>
  );
}
