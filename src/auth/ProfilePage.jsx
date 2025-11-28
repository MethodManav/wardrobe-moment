import React, { useState } from "react";
import "../auth/profile.css";

const initialUser = {
  firstName: "Pradum",
  lastName: "Kumar",
  email: "pradum@example.com",
  phone: "+91 98765 43210",
  city: "Varanasi",
  state: "Uttar Pradesh",
  country: "India",
  avatar:
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=160&h=160",
  memberSince: "Feb 2025",
};

// demo rental stats – replace with API data later
const initialRentalStats = {
  totalListed: 8,
  totalRented: 21,
  totalEarnings: 7320,
  pendingEarnings: 1450,
  currency: "₹",
};

const initialRecentRentals = [
  {
    id: 1,
    name: "Classic Black Suit",
    timesRented: 4,
    earning: 2200,
  },
  {
    id: 2,
    name: "Everyday Cotton T-shirt",
    timesRented: 6,
    earning: 1260,
  },
  {
    id: 3,
    name: "Ivory Wedding Sherwani",
    timesRented: 3,
    earning: 2400,
  },
];

export default function ProfilePage() {
  const [user, setUser] = useState(initialUser);
  const [activeTab, setActiveTab] = useState("overview");
  const [editForm, setEditForm] = useState(initialUser);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [rentalStats] = useState(initialRentalStats);
  const [recentRentals] = useState(initialRecentRentals);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // TODO: call your update profile API here
    console.log("Updated profile:", editForm);
    setUser(editForm);
    setActiveTab("overview");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    // TODO: call your change password API here
    console.log("Change password:", passwordForm);

    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    alert("Password updated (demo).");
  };

  return (
    <div className="page-wrapper">
      <div className="page-breadcrumb">
        <span className="crumb-link">Home</span>
        <span className="crumb-separator">/</span>
        <span className="crumb-current">My account</span>
      </div>

      <div className="profile-layout">
        {/* Left column: user card + navigation */}
        <aside className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-avatar-wrapper">
              <img
                src={user.avatar}
                alt={user.firstName}
                className="profile-avatar"
              />
            </div>
            <h2 className="profile-name">
              {user.firstName} {user.lastName}
            </h2>
            <p className="profile-email">{user.email}</p>
            <p className="profile-meta">Member since {user.memberSince}</p>
          </div>

          <div className="profile-menu">
            <button
              className={
                "profile-menu-item" +
                (activeTab === "overview" ? " profile-menu-item--active" : "")
              }
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={
                "profile-menu-item" +
                (activeTab === "edit" ? " profile-menu-item--active" : "")
              }
              onClick={() => setActiveTab("edit")}
            >
              Edit profile
            </button>
            <button
              className={
                "profile-menu-item" +
                (activeTab === "password" ? " profile-menu-item--active" : "")
              }
              onClick={() => setActiveTab("password")}
            >
              Change password
            </button>
            <button
              className={
                "profile-menu-item" +
                (activeTab === "earnings" ? " profile-menu-item--active" : "")
              }
              onClick={() => setActiveTab("earnings")}
            >
              Rental earnings
            </button>
          </div>
        </aside>

        {/* Right column: tab content */}
        <main className="profile-content">
          {activeTab === "overview" && (
            <section className="panel">
              <div className="panel-header">
                <h3>Profile details</h3>
                <button
                  className="primary-link-button"
                  onClick={() => setActiveTab("edit")}
                >
                  Edit profile
                </button>
              </div>

              <div className="panel-grid">
                <div>
                  <h4 className="field-label">Full name</h4>
                  <p className="field-value">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
                <div>
                  <h4 className="field-label">Email</h4>
                  <p className="field-value">{user.email}</p>
                </div>
                <div>
                  <h4 className="field-label">Phone</h4>
                  <p className="field-value">{user.phone}</p>
                </div>
                <div>
                  <h4 className="field-label">Location</h4>
                  <p className="field-value">
                    {user.city}, {user.state}, {user.country}
                  </p>
                </div>
              </div>

              <div className="panel-note">
                Use this profile while renting outfits and managing your orders.
              </div>
            </section>
          )}

          {activeTab === "edit" && (
            <section className="panel">
              <div className="panel-header">
                <h3>Edit profile</h3>
              </div>

              <form className="form-grid" onSubmit={handleEditSubmit}>
                <div className="form-group">
                  <label className="form-label">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={editForm.firstName}
                    onChange={handleEditChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={editForm.lastName}
                    onChange={handleEditChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleEditChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={editForm.phone}
                    onChange={handleEditChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    value={editForm.city}
                    onChange={handleEditChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    name="state"
                    value={editForm.state}
                    onChange={handleEditChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={editForm.country}
                    onChange={handleEditChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Avatar URL</label>
                  <input
                    type="url"
                    name="avatar"
                    value={editForm.avatar}
                    onChange={handleEditChange}
                    className="form-input"
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="primary-button">
                    Save changes
                  </button>
                  <button
                    type="button"
                    className="ghost-button"
                    onClick={() => {
                      setEditForm(user);
                      setActiveTab("overview");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </section>
          )}

          {activeTab === "password" && (
            <section className="panel">
              <div className="panel-header">
                <h3>Change password</h3>
              </div>

              <form className="form-narrow" onSubmit={handlePasswordSubmit}>
                <div className="form-group">
                  <label className="form-label">Current password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwordForm.currentPassword}
                    onChange={handlePasswordChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">New password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwordForm.newPassword}
                    onChange={handlePasswordChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm new password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwordForm.confirmPassword}
                    onChange={handlePasswordChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="primary-button">
                    Update password
                  </button>
                </div>

                <p className="panel-note">
                  Tip: Use at least 8 characters with a mix of letters and
                  numbers.
                </p>
              </form>
            </section>
          )}

          {activeTab === "earnings" && (
            <section className="panel">
              <div className="panel-header">
                <h3>Rental earnings</h3>
              </div>

              {/* summary stats */}
              <div className="stats-grid">
                <div className="stat-card">
                  <p className="stat-label">Outfits listed</p>
                  <p className="stat-value">{rentalStats.totalListed}</p>
                </div>
                <div className="stat-card">
                  <p className="stat-label">Total rentals</p>
                  <p className="stat-value">{rentalStats.totalRented}</p>
                </div>
                <div className="stat-card">
                  <p className="stat-label">Total earnings</p>
                  <p className="stat-value">
                    {rentalStats.currency}
                    {rentalStats.totalEarnings}
                  </p>
                </div>
                <div className="stat-card">
                  <p className="stat-label">Pending payout</p>
                  <p className="stat-value">
                    {rentalStats.currency}
                    {rentalStats.pendingEarnings}
                  </p>
                </div>
              </div>

              {/* recent items */}
              <h4 className="earnings-subtitle">Recent rental items</h4>
              <div className="earnings-table-wrapper">
                <table className="earnings-table">
                  <thead>
                    <tr>
                      <th>Outfit</th>
                      <th>Times rented</th>
                      <th>Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentRentals.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.timesRented}</td>
                        <td>
                          {rentalStats.currency}
                          {item.earning}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="panel-note">
                These numbers are calculated from all completed rental orders.
                Once a rental is marked as returned, its amount moves into your
                earnings and pending payout.
              </p>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
