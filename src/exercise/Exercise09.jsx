export default function Exercise09() {
  const isActive = true;

  return (
    <div>
      <span
        className={
          isActive
            ? "text-green-600 font-semibold"
            : "text-gray-500 font-semibold"
        }
      >
        {isActive ? "Active" : "Inactive"}
      </span>
    </div>
  );
}