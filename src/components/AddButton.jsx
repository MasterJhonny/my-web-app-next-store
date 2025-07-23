import Link from "next/link";

const AddButton = ({ href }) => {
  return (
    <Link
      href={href}
      className="w-16 h-16 flex justify-center items-center shadow-md rounded-full bg-pink-600 hover:bg-pink-700 text-white fixed bottom-2 right-4 z-10"
    >
      <span className="font-bold text-2xl text-white">+</span>
    </Link>
  );
};

export default AddButton;
