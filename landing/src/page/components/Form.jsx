import { Button } from "@mui/material";

export const Form = () => {
  return (
    <>
      <form>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium dark:text-gray-700"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#FFC23C] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5 dark:bg-[#876d378e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-stone-500 dark:focus:border-stone-500"
            placeholder="name@example.com"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            for="feedback"
            className="block mb-2 text-sm font-medium dark:text-gray-700"
          >
            Your feedback
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-stone-500 focus:border-stone-500 dark:bg-[#876d378e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        <Button type="submit" variant="contained" color="secondary">
          Send
        </Button>
      </form>
    </>
  );
};
