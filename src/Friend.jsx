export default function Friend({ Friend }) {
  const { name, email } = Friend;
  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  );
}
