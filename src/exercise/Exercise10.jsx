export default function Exercise10() {
  const technologies = ["HTML", "CSS", "JavaScript"];

  return (
    <div>
      {/* Displaying my learning technologies */}
      <h2>My Technologies</h2>

      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
}