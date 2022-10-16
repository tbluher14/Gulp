import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import LogoutButton from "../auth/LogoutButton";


function ProfileButton() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state?.session?.user)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <div className="dropdown-menu" >
      <div className="dropdown-button" onClick={openMenu}>
      </div>
      {showMenu && (
        <div className="profile-dropdown">
          <div className="dropdown-email">
            Profile: {sessionUser.email}
          </div>
          <div>
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
