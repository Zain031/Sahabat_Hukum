import Link from "next/link";
export default function Modal() {
  return (
    <>
      <>
        <div className="fixed bottom-0 right-0 mb-4 mr-4">
          <Link
            href="/chatbot"
            id="open-chat"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Chat dengan Admin Bot
          </Link>
        </div>
      </>
    </>
  );
}
