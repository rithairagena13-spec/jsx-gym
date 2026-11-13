export default function Exercise05() {
  const profileImage = "/src/image/profile.webp";
  const userName = "Becca@12";

  return (
    <div>
      <img
        src={profileImage}
        alt={`${userName}'s profile picture`}
        width={150}
        height={150}
      />

      <h2>{userName}</h2>
    </div>
  );
}