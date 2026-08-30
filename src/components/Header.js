function Header({ currentPage, onNavigate }) {
  return (
    <header className="site-header">
      <div className="brand-wrap">
        <div className="brand-mark">CA</div>
        <div>
          <p className="brand-name">Chele Accessories Department</p>
          <span className="brand-tag">Fashion for every moment</span>
        </div>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        <button
          type="button"
          className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
          onClick={() => onNavigate('home')}
        >
          Home
        </button>
        <button
          type="button"
          className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
          onClick={() => onNavigate('contact')}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Header;
