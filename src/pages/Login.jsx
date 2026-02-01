import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/logo.svg";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const isDisabled = !user || !password;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-insta">
      {/* MAIN CONTENT */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex items-center justify-center bg-gray">
          <img
            src={logo}
            alt="Instagram preview"
            className="w-[420px] xl:w-[480px] opacity-95"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center justify-center px-4">
          {/* LOGIN CARD */}
          <div className="w-full max-w-sm bg-white border px-10 py-10 rounded-md shadow-sm">
            <h1 className="text-4xl font-serif text-center mb-8">Instagram</h1>

            <input
              type="text"
              placeholder="Phone number, username, or email"
              className="w-full mb-3 px-3 py-2 text-sm bg-gray-50 border rounded focus:ring-1 focus:ring-blue-200 focus:outline-none"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2 text-sm pr-14 bg-gray-50 border rounded focus:ring-1 focus:ring-blue-200 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                disabled={!password}
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className={`absolute right-3 top-1/2 -translate-y-1/2
      ${
        !password
          ? "text-gray-300 cursor-not-allowed"
          : "text-gray-500 hover:text-gray-700"
      }
    `}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              disabled={isDisabled}
              onClick={() => navigate("/home")}
              className={`w-full py-2 text-sm font-semibold rounded text-white transition
                ${
                  isDisabled
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
            >
              Log In
            </button>

            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-3 text-xs text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <p
              className="text-center text-sm text-blue-900 font-semibold cursor-pointer hover:underline"
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            >
              Log in with Facebook
            </p>

            <p
              onClick={() => navigate("/forgot-password")}
              className="text-center text-xs mt-4 text-blue-900 cursor-pointer hover:underline"
            >
              Forgot password?
            </p>
          </div>

          {/* SIGN UP */}
          <div className="w-full max-w-sm bg-white border mt-4 py-4 text-center text-sm rounded-md">
            Don’t have an account?
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-500 font-semibold cursor-pointer ml-1 hover:underline"
            >
              Sign up
            </span>
          </div>

          {/* GET THE APP */}
          <div className="w-full max-w-sm mt-6 text-center">
            <p className="text-sm mb-3">Get the app.</p>

            <div className="flex items-center justify-center gap-3">
              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10 w-auto hover:scale-105 transition"
                />
              </a>

              {/* Microsoft Store */}
              <a
                href="https://apps.microsoft.com/detail/9nblggh5l9xt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://get.microsoft.com/images/en-us%20dark.svg"
                  alt="Get it from Microsoft Store"
                  className="h-10 w-auto hover:scale-105 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full py-6 text-xs text-gray-500">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-3">
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
            <span key={item} className="hover:underline cursor-pointer">
              {item}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <span>English</span>
          <span>© 2026 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default Login;
