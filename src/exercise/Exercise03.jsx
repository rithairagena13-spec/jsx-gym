export default function Exercise03() {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        tabIndex={1}
        placeholder="Enter your name"
      />

      <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        tabIndex={2}
        placeholder="Enter your email"
      />

      <br />

      <button
        type="button"
        tabIndex={3}
        onClick={() => alert("Form submitted!")}
      >
        Submit
      </button>
    </div>
  );
}