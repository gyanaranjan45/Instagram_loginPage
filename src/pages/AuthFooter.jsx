const AuthFooter = () => {
  return (
    <footer className="mt-12 text-xs text-gray-500">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-4xl mx-auto px-4">
        {[
          "Meta",
          "About",
          "Blog",
          "Jobs",
          "Help",
          "API",
          "Privacy",
          "Terms",
          "Locations",
          "Instagram Lite",
          "Threads",
          "Contact Uploading & Non-Users",
          "Meta Verified",
        ].map((item) => (
          <span key={item} className="cursor-pointer hover:underline">
            {item}
          </span>
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-4">
        <select className="bg-transparent text-xs outline-none cursor-pointer">
          <option>English</option>
          <option>Hindi</option>
          <option>French</option>
        </select>
        <span>© 2026 Instagram from Meta</span>
      </div>
    </footer>
  );
};

export default AuthFooter;
