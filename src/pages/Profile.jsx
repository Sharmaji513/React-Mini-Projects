import React, { useEffect, useState } from "react";

function Profile() {
  const [profileData, setProfileData] = useState({
    name: "Rita Correia",
    age: "32",
    location: "London",
    followers: "80K",
    likes: "803K",
    photos: "1.4K",
  });

  const generateRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);

    const randomUserData = {
      name: `${data.results[0].name.first} ${data.results[0].name.last}`,
      age: data.results[0].dob.age,
      location: `${data.results[0].location.city}, ${data.results[0].location.country}`,
      followers: Math.floor(Math.random() * 100000),
      likes: Math.floor(Math.random() * 1000000),
      photos: Math.floor(Math.random() * 2000),
      profilePic: data.results[0].picture.large,
    };

    setProfileData(randomUserData);
  };

  useEffect(() => {
    generateRandomUser();
  }, []);

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold mb-5">Random-Profile-Generator </h1>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md">
        <div className="text-center h-40 bg-zinc-200">
          <div className="pt-2">
            <img
              className="w-20 h-20 mx-auto mb-4 rounded-full"
              src={profileData.profilePic}
              alt=""
            />
            <h3 className="text-xl font-semibold">
              {profileData.name} <strong>{profileData.age}</strong>
            </h3>
          </div>
          <h4 className="text-gray-500">{profileData.location}</h4>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <div className="text-center">
            <h3 className="text-2xl font-semibold">{profileData.followers}</h3>
            <h4 className="text-gray-500">Followers</h4>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold">{profileData.likes}</h3>
            <h4 className="text-gray-500">Likes</h4>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold">{profileData.photos}</h3>
            <h4 className="text-gray-500">Photos</h4>
          </div>
        </div>
      </div>
      <button
        className="mt-4 mx-auto block px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md"
        onClick={generateRandomUser}
      >
        Generate Random User
      </button>
    </div>
  );
}

export default Profile;
