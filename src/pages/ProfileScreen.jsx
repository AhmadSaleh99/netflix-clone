import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { shallowEqual, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

const ProfileScreen = () => {
  const user = useSelector(selectUser, shallowEqual);

  return (
    <div className=" ProfileScreen">
      <Nav />
      <div className="profilecreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (premium)</h3>

              <div className="plans__info">
                <div className="headers">
                  <h5>premium 4K + HDR</h5>
                  <h5>Basic 720p</h5>
                  <h5>standard 1080p</h5>
                </div>
                <div className="spans">
                  <button>subscribe</button>
                  <button>subscribe</button>
                  <button>subscribe</button>
                </div>
              </div>

              <button
                onClick={() => signOut(auth)}
                className="profileScreen__signOut"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
