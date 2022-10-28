import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserImage from "../UserImage";
import { URL } from "../../../App";

const PersonalInfo = () => {
  const loggedInUser = useSelector((state) => state.user);

  const [personalInfoShow, setPersonalInfoShow] = useState(false);
  const [enteredName, setEnteredName] = useState("");

  const updateName = async () => {
    try {
      const { data } = await axios.patch(`${URL}/api/v1/users/updateMe`, {
        name: enteredName,
      });
      if (data.status === "success") {
        setTimeout(() => {
          document.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(`error: `, error);
      // setError(error.response.data.message);
    }
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    updateName();
  };

  return (
    <div className="mb-8 border-b border-customBorder ">
      <div className="mb-4 flex gap-12 border-b border-customBorder pb-4">
        <h3 className="text-xl">Personal Information</h3>
        {!personalInfoShow && (
          <button
            className="cursor-pointer text-blue-500"
            onClick={() => setPersonalInfoShow(true)}
          >
            Change Information
          </button>
        )}
      </div>

      {!personalInfoShow && (
        <div className="my-4 ">
          <h4 className="mb-2 opacity-80">Name</h4>
          <div className="max-w-[15rem] border border-loginBorder bg-backg py-3 px-3 opacity-90">
            {loggedInUser?.user?.data.data.name}
          </div>
        </div>
      )}

      {personalInfoShow && (
        <form className=" p-3" onSubmit={formSubmissionHandler}>
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
              placeholder={loggedInUser?.user?.data.data.name}
              type="text"
              id="name"
              name="name"
              onChange={(e) => setEnteredName(e.target.value)}
              value={enteredName}
            />
          </div>
          <button
            type="submit"
            className="rounded-sm bg-secondary py-1 px-4 text-white"
          >
            save
          </button>
        </form>
      )}
    </div>
  );
};

const ProfilePic = () => {
  const [profilePicshown, setProfilePicShown] = useState(false);
  const [userPhoto, setUserPhoto] = useState({
    photo: "",
  });

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("photo", userPhoto.photo);
    try {
      const { data } = await axios.patch(
        `${URL}/api/v1/users/updateMe`,
        formData
      );
      if (data.status === "success") {
        setTimeout(() => {
          document.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(`error: `, error);
      // setError(error.response.data.message);
    }
  };

  return (
    <div className="mb-8 border-b border-customBorder pb-4">
      <div className="mb-4 flex gap-12 border-b border-customBorder pb-4">
        <h3 className="text-xl">Profile Picture</h3>
        {!profilePicshown && (
          <button
            className="cursor-pointer text-blue-500"
            onClick={() => setProfilePicShown(true)}
          >
            Change Profile Picture
          </button>
        )}
      </div>
      <form
        className="flex items-center justify-between"
        onSubmit={formSubmissionHandler}
        encType="multipart/form-data"
      >
        <div>
          <h4 className="mb-2 opacity-80">Your Profile Photo</h4>
          <UserImage imgHeight="h-36" />
          {profilePicshown && (
            <button className="mt-8 cursor-pointer rounded-sm bg-secondary px-4 py-1 text-lg text-white">
              save
            </button>
          )}
        </div>
        {profilePicshown && (
          <div>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => setUserPhoto({ photo: e.target.files[0] })}
            />
          </div>
        )}
      </form>
    </div>
  );
};

const MyPass = () => {
  const [passShown, setPassShown] = useState(false);
  const [enteredCurPass, setEnteredCurPass] = useState("");
  const [enteredNewPass, setEnteredNewPass] = useState("");
  const [enteredConPass, setEnteredConPass] = useState("");

  const [showResponse, setShowResponse] = useState(null);

  const updateMyPass = async () => {
    try {
      const { data } = await axios.patch(
        `${URL}/api/v1/users/updateMyPassword`,
        {
          passwordCurrent: enteredCurPass,
          password: enteredNewPass,
          passwordConfirm: enteredConPass,
        }
      );
      if (data.status === "success") {
        setShowResponse("Updated Successfully ✔");
        setTimeout(() => {
          document.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(`error: `, error);
      setShowResponse(error.response.data.message);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    updateMyPass();
  };

  return (
    <div className="mb-8 border-b border-customBorder pb-4">
      <div className="mb-4 flex gap-12 border-b border-customBorder pb-4">
        <h3 className="text-xl">Password</h3>
        {!passShown && (
          <button
            className="cursor-pointer text-blue-500"
            onClick={() => setPassShown(true)}
          >
            Change Password
          </button>
        )}
      </div>

      {!passShown && (
        <div className="max-w-[15rem] border border-loginBorder bg-backg py-3 px-3 opacity-70">
          ***************
        </div>
      )}

      {passShown && (
        <form className=" p-3" onSubmit={formSubmissionHandler}>
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="passCurrent">Current Password</label>
            <input
              className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
              type="password"
              id="passCurrent"
              name="passCurrent"
              onChange={(e) => setEnteredCurPass(e.target.value)}
              value={enteredCurPass}
            />
          </div>
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="passNew">New Password</label>
            <input
              className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
              type="password"
              id="passNew"
              name="passNew"
              onChange={(e) => setEnteredNewPass(e.target.value)}
              value={enteredNewPass}
            />
          </div>
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="passConfirm">Confirm Password</label>
            <input
              className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
              type="password"
              id="passConfirm"
              name="passConfirm"
              onChange={(e) => setEnteredConPass(e.target.value)}
              value={enteredConPass}
            />
          </div>
          <div className="flex items-center gap-6">
            <button
              type="submit"
              className="rounded-sm bg-secondary py-1 px-4 text-white"
            >
              Update
            </button>
            <p className="text-green-600">{showResponse}</p>
          </div>
        </form>
      )}
    </div>
  );
};

const DeleteAcc = () => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [enteredPass, setEnteredPass] = useState("");
  const [showResponse, setShowResponse] = useState("");

  const navigate = useNavigate();

  const deleteAccount = async () => {
    try {
      await axios.patch(`${URL}/api/v1/users/deleteMe`, {
        password: enteredPass,
      });
      setShowResponse("Deleted Successfully ✔");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(`error: `, error);
      setShowResponse(error.response.data.message);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    deleteAccount();
  };
  return (
    <>
      <button
        className="mb-7 cursor-pointer text-blue-500"
        onClick={() => setFormIsShown(true)}
      >
        Delete Your Account
      </button>
      {formIsShown && (
        <form className=" p-3" onSubmit={formSubmissionHandler}>
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="deleteAcc">Please provide your password</label>
            <input
              className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
              type="password"
              id="deleteAcc"
              name="deleteAcc"
              onChange={(e) => setEnteredPass(e.target.value)}
              value={enteredPass}
            />
          </div>

          <div className="flex items-center gap-6">
            <button
              type="submit"
              className="rounded-sm bg-secondary py-1 px-4 text-white"
            >
              Confirm Delete
            </button>
            <p className="text-green-600">{showResponse}</p>
          </div>
        </form>
      )}
    </>
  );
};

const Profile = () => {
  return (
    <div className=" rounded-sm border-t-2 border-orange-500 bg-white p-8 pr-4 shadow-sm sm:pr-[25vw]">
      <PersonalInfo />
      <ProfilePic />
      <MyPass />
      <DeleteAcc />
    </div>
  );
};

export default Profile;
