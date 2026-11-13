export default function Exercise02() {
  const profileImage = "/src/image/profile.webp";

  return (
    <div>
      <img src={profileImage} alt="Profile picture" className="w-24 h-24 rounded-full object-cover" />

      <h2>Becca</h2>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
      />

      <br />

      <h3>Contact Information</h3>

      <ul>
        <li>Phone: +250 788 000 000</li>
        <li>Location: Kigali, Rwanda</li>
      </ul>
    </div>
  );
}