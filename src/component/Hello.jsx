export default function Hello() {
  function showName() {
    console.log("My name is Sara");
  }
  function showtext(txt) {
    console.log(txt);
  }
  return (
    <div>
      <h1>헬롱우</h1>
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          showAge("My age is 20");
        }}
      >
        Show age
      </button>
      <input
        type="text"
        onChange={(e) => {
          const txt = e.target.value;
          showtext(txt);
        }}
      />
    </div>
  );
}
