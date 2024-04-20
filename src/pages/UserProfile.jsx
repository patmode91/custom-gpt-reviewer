import React from "react";

const UserProfile = () => {
  return (
    <div className="p-10">
      <div className="text-center mb-10">
        <img src="/path/to/default/avatar.jpg" alt="Profile Avatar" className="rounded-full w-24 h-24 mx-auto" />
        <h1 className="text-2xl font-serif text-red-700 mt-4">Username</h1>
        <p className="text-sm">User Rating: ★★★★☆</p>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-bold">Personal Information</h2>
        <p>Name: John Doe (optional)</p>
        <p>Bio: Enthusiast of AI and machine learning.</p>
        <p>Location: New York, USA (optional)</p>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-bold">GPT Preferences</h2>
        <p>Preferred GPTs: GPT-3, GPT-Neo</p>
        <p>Reviews Written: 12 reviews</p>
        <p>Comparison History: 5 comparisons</p>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-bold">Account Settings</h2>
        <p>Privacy Controls: Friends only</p>
        <p>Notification Settings: Enabled</p>
        <p>Account Management: Change password, Delete account</p>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-bold">Activity Feed</h2>
        <p>Recent Activity: Reviewed GPT-4 yesterday</p>
        <p>Interactions: 34 likes, 10 comments</p>
      </div>
      <div>
        <h2 className="text-xl font-bold">Contact / Message</h2>
        <p>Messaging Option: Enabled</p>
        <p>Social Links: [Facebook, Twitter, LinkedIn]</p>
      </div>
    </div>
  );
};

export default UserProfile;
