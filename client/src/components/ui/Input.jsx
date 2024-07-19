export default function Input({ placeholder, type }) {
  return (
    <input
      type={type}
      name="email"
      id="email"
      className="bg-white text-main-text-color placeholder-gray-400 block w-full p-2.5"
      placeholder={placeholder}
      required=""
    />
  );
}
