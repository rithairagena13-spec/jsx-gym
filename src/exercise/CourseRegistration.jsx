export default function CourseRegistration() {
  const course = "Advanced Frontend";
  const seats = 8;
  const imagePath = "/src/image/bootcamp.webp";

  function register() {
    alert("Registration clicked");
  }

  return (
    <section className="registration" tabIndex={0}>
      <h2>Registration</h2>

      <label htmlFor="email">Email</label>
      <input id="email" type="email" required />

      <img src={imagePath} alt="Students learning" />

      <p>Course: {course}</p>
      <p>Seats left: {seats}</p>

      <button onClick={register}>Join</button>

      <br />
    </section>
  );
}