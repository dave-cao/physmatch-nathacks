import React from "react";

import { useState } from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";

import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIelemets/Backdrop";

export default function MainNavigation({ supabase, session }) {
  const [drawerIsOpen, setDrawerIsopen] = useState(false);

  const openDrawer = () => {
    setDrawerIsopen(true);
  };

  const closeDrawer = () => {
    setDrawerIsopen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks supabase={supabase} session={session} />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-naviagtion__tile">
          <Link id="link_Styles" to="/">
            PhysMatch{" "}
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks supabase={supabase} session={session} />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}
