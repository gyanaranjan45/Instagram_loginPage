import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const isValidEmail = email.includes("@");

  const handleSendLink = () => {
    if (!email || !isValidEmail) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-insta">
      <div className="w-full max-w-sm bg-white border border-gray-200 px-10 py-10 rounded-md shadow-sm text-center">
        {/* Instagram Header */}
        <h1 className="text-4xl font-serif tracking-tight mb-6">Instagram</h1>

        {!success ? (
          <>
            <h2 className="text-lg font-semibold mb-2">Trouble logging in?</h2>

            <p className="text-sm text-gray-500 mb-4">
              Enter your email and we’ll send you a login link.
            </p>

            <input
              type="text"
              placeholder="Email address"
              className="
                w-full mb-2 px-3 py-2 text-sm
                bg-gray-50 border border-gray-300 rounded
                focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {email && !isValidEmail && (
              <p className="text-xs text-red-500 mb-2 text-left">
                Please enter a valid email
              </p>
            )}

            <button
              disabled={!email || !isValidEmail || loading}
              onClick={handleSendLink}
              className={`w-full py-2 text-sm font-semibold rounded
                transition-all duration-200
                ${
                  !email || !isValidEmail || loading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 active:scale-[0.99]"
                }
                text-white`}
            >
              {loading ? "Sending..." : "Send Login Link"}
            </button>

            <p
              onClick={() => navigate("/")}
              className="text-xs text-blue-500 mt-4 cursor-pointer hover:underline"
            >
              Back to login
            </p>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-2 text-green-600">
              Link Sent Successfully ✅
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              We’ve sent a login link to <br />
              <span className="font-semibold">{email}</span>
            </p>

            <p className="text-xs text-gray-400">Redirecting to login…</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
