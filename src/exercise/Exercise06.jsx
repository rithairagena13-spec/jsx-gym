export default function Exercise06() {
  const score = 75;

  const result = score >= 60 ? "Pass" : "Retry";

  return (
    <div>
      <h2>Exam Result</h2>
      <p>Score: {score}</p>
      <p>Result: {result}</p>
    </div>
  );
}