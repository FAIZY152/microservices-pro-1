export default function CreateSnipet() {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-900 text-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-3">Code Snippet</h2>

      {/* Input for snippet title/description */}
      <input
        type="text"
        placeholder="Enter snippet title..."
        className="w-full p-2 mb-3 text-sm text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none"
      />

      {/* Code textarea */}
      <div className="relative">
        <textarea
          id="codeArea"
          placeholder="Write your code here..."
          className="w-full h-40 p-3 font-mono text-sm text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none"></textarea>

        {/* Copy Button */}
        <button
          onClick={() => copyCode()}
          className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
          Copy
        </button>
      </div>
      <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Create Snippet
      </button>
    </div>
  );

  function copyCode() {
    const text = document.getElementById("codeArea").value;
    navigator.clipboard.writeText(text);
    alert("Code copied to clipboard!");
  }
}
