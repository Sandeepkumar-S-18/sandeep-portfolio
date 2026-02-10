const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by Sandeepkumar S &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
