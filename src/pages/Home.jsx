import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [likedPosts, setLikedPosts] = useState({});
  const [openComment, setOpenComment] = useState(null);
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState("");
  const [sharePost, setSharePost] = useState(null);

  const toggleLike = (id) => {
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-insta">
      {/* Top Navbar */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-2xl font-serif tracking-tight cursor-pointer">
            Instagram
          </h1>

          <input
            type="text"
            placeholder="Search"
            className="
              hidden md:block bg-gray-100 px-4 py-1.5 rounded-lg
              text-sm outline-none focus:ring-1 focus:ring-gray-300
            "
          />

          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-gray-300 cursor-pointer"></div>
            <button
              onClick={() => navigate("/")}
              className="text-sm text-blue-500 font-semibold hover:underline"
            >
              Log out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex gap-6 px-4 mt-6">
        {/* Feed */}
        <div className="flex-1 max-w-xl mx-auto">
          {[1, 2, 3].map((post) => (
            <div
              key={post}
              className="bg-white border rounded-md mb-6 shadow-sm hover:shadow-md transition"
            >
              {/* Post Header */}
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                <p className="font-semibold text-sm cursor-pointer">username</p>
              </div>

              {/* Post Image */}
              <div className="h-80 bg-gray-200"></div>

              {/* Post Actions */}
              <div className="flex gap-4 px-4 py-3 text-gray-700">
                {/* Like */}
                <svg
                  onClick={() => toggleLike(post)}
                  className={`cursor-pointer transition hover:scale-110
                    ${
                      likedPosts[post]
                        ? "text-red-500 fill-red-500"
                        : "hover:text-red-500"
                    }
                  `}
                  width="24"
                  height="24"
                  fill={likedPosts[post] ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 21s-8-4.5-8-11a5 5 0 0110 0 5 5 0 0110 0c0 6.5-8 11-8 11z" />
                </svg>

                {/* Comment */}
                <svg
                  onClick={() =>
                    setOpenComment(openComment === post ? null : post)
                  }
                  className="hover:text-gray-900 cursor-pointer transition hover:scale-110"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>

                {/* Share */}
                <svg
                  onClick={() => setSharePost(post)}
                  className="hover:text-gray-900 cursor-pointer transition hover:scale-110"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4z" />
                </svg>
              </div>

              {/* Likes & Caption */}
              <div className="px-4 text-sm space-y-1">
                <p className="font-semibold">
                  {likedPosts[post] ? "1,235 likes" : "1,234 likes"}
                </p>
                <p>
                  <span className="font-semibold cursor-pointer">username</span>{" "}
                  This is a demo Instagram post.
                </p>
              </div>

              {/* Comment Section */}
              {openComment === post && (
                <div className="px-4 pb-4 mt-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && commentText.trim()) {
                        setComments((prev) => ({
                          ...prev,
                          [post]: [...(prev[post] || []), commentText],
                        }));
                        setCommentText("");
                      }
                    }}
                    className="
                      w-full text-sm px-3 py-2
                      border rounded bg-gray-50
                      focus:outline-none focus:ring-1 focus:ring-gray-300
                    "
                  />

                  {(comments[post] || []).map((c, i) => (
                    <p key={i} className="text-sm mt-1">
                      <span className="font-semibold">user</span> {c}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-80">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold text-sm cursor-pointer">
                your_username
              </p>
              <p className="text-xs text-gray-500">Your Name</p>
            </div>
          </div>

          <p className="text-sm font-semibold text-gray-500 mb-3">
            Suggestions for you
          </p>

          {[1, 2, 3].map((item) => (
            <div key={item} className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                <p className="text-sm font-semibold cursor-pointer">
                  user_{item}
                </p>
              </div>
              <button className="text-blue-500 text-xs font-semibold hover:underline">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Share Modal */}
      {sharePost && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-72 text-center shadow-lg">
            <p className="font-semibold mb-3">Share this post</p>

            <button
              onClick={() => {
                navigator.clipboard.writeText("https://instagram.com/post");
                alert("Link copied!");
              }}
              className="w-full py-2 bg-blue-500 text-white rounded text-sm mb-2"
            >
              Copy Link
            </button>

            <button
              onClick={() => setSharePost(null)}
              className="w-full py-2 text-sm text-gray-600 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
