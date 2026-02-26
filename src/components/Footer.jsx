// Footer provides company copyright and compact secondary links.
const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-800">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-800">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
