export default function Exercise08() {
  const noticeStyle = {
    backgroundColor: "#dcfce7",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid green",
  };

  return (
    <div style={noticeStyle}>
      <h2>Important Notice</h2>
      <p>Your profile has been updated successfully!</p>
    </div>
  );
}