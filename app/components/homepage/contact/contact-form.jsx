"use client";
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-gray-900">
      <p className="font-semibold mb-5 text-blue-600 text-xl uppercase">
        Contact Me
      </p>

      <div className="max-w-3xl bg-white rounded-lg border border-gray-200 shadow-sm p-4 lg:p-6">
        <p className="text-sm text-gray-600 mb-4">
          If you have any questions or would like to connect, feel free to reach
          out. I’m open to collaboration and opportunities that align with my
          skills and interests.
        </p>

        <div className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-gray-700">
              Your Name
            </label>
            <input
              className="bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none px-3 py-2 transition-all duration-200"
              type="text"
              maxLength="100"
              required
              value={userInput.name}
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={checkRequired}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-gray-700">
              Your Email
            </label>
            <input
              className="bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none px-3 py-2 transition-all duration-200"
              type="email"
              maxLength="100"
              required
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && (
              <p className="text-sm text-red-500">
                Please provide a valid email!
              </p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              className="bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none px-3 py-2 transition-all duration-200"
              maxLength="500"
              rows="4"
              required
              value={userInput.message}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-3 mt-2">
            {error.required && (
              <p className="text-sm text-red-500">All fields are required!</p>
            )}
            <button
              className="flex items-center gap-2 rounded-full bg-blue-600 hover:from-blue-500 hover:to-blue-600 px-6 md:px-12 py-3 text-sm md:text-base font-medium text-white transition-all duration-300 hover:scale-[1.02]"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <TbMailForward size={20} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
