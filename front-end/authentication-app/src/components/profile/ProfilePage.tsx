import React from "react";
import { useDispatch } from "react-redux";
import { CONSTANTS } from "../../redux/saga/types";
import { useNavigate } from "react-router-dom";
import { navigateLink } from "../../config/navigationLink";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({
      type: CONSTANTS.USER_LOGOUT,
      onLogout: () => navigate(navigateLink.auth.login),
    });
  };
  return (
    <>
      <div>ProfilePage</div>
      <button onClick={logout}>Sign Out</button>
    </>
  );
};

export default ProfilePage;
