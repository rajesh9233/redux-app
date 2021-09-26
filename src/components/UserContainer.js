import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchusers } from "../redux/user/userActions";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2> {userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user, i) => <p key={i}>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapToStateProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchusers()),
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(UserContainer);
