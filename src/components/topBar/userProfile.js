import React from "react";
import * as TS from "./topBarStyles";
import GuestIcon from './guest_icon.png';

function UserProfile(props) {
    return (
      <TS.UserProfileContainer>
        <TS.Guest src={GuestIcon}></TS.Guest>
      </TS.UserProfileContainer>
    );
  }
  
export default UserProfile;
  