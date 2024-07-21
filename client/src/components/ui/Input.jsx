export default function Input({ placeholder, type, pb }) {
  return (
    <input
      type={type}
      name="email"
      id="email"
      className={`bg-white text-main-text-color placeholder-gray-400 block w-full p-2.5 ${pb}`}
      placeholder={placeholder}
      required=""
    />
  );
}
