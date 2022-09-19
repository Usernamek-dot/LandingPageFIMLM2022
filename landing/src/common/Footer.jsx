export const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center lg:text-left">
      <div
        className="text-gray-700 text-center p-4"
        sx={{ bgcolor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Copyright{" "}
        <a
          className="text-gray-800"
          href="https://github.com/Usernamek-dot/LandingPageFIMLM2022"
        >
          Landing Page
        </a>{" "}
        | by kypacheco07@misena.edu.co
      </div>
    </footer>
  );
};
