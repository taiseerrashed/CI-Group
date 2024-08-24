const Message = () => {
  return (
    <div className="p-4 mt-5">
        <form className="flex flex-col gap-4">
            <input
                className="p-2 rounded border border-gray-300"
                type="text"
                placeholder="Name"
            />
            <input
                className="p-2 rounded border border-gray-300"
                type="text"
                placeholder="Phone"
            />
            <input
                className="p-2 rounded border border-gray-300"
                type="email"
                placeholder="Email"
            />
            <textarea
                className="p-2 rounded border border-gray-300"
                placeholder="Message"
            />
            <button
                type="submit"
                className="p-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
                Submit
            </button>
        </form>
    </div>
  );
};

export default Message;
