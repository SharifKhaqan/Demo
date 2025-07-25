export default function Typeof() {
  let name = "Ali";
  let age = 22;
  let isStudent = true;
  let marks = [90, 85, 95];
  let details = { city: "Lahore", country: "Pakistan" };
  let nothing = null;
  let notDefined;

  return (
    <div>
      <h2>Typeof Example</h2>
      <p>name: {name} | {typeof name}</p>
      <p>age: {age} | {typeof age}</p>
      <p>isStudent: {isStudent.toString()} | {typeof isStudent}</p>
      <p>marks: {marks.join(", ")} | {typeof marks}</p>
      <p>details:{typeof details}</p>
      <p>nothing: {nothing} | {typeof nothing}</p>
      <p>notDefined: {notDefined} | {typeof notDefined}</p>
    </div>
  );
}
