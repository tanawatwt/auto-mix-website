// shared.jsx — icons, header, footer, floating buttons for Auto Mix

const Icon = {
  Oil: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="M9 2h6"/><path d="M5 12c0-3.5 3-6 7-6s7 2.5 7 6v4c0 2-1 4-4 5H9c-3-1-4-3-4-5v-4z"/><path d="M10 15c0 1 1 2 2 2s2-1 2-2"/></svg>,
  Brake: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>,
  Suspension: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v16M20 4v16"/><path d="M7 7l10 10M7 10l10 10M7 4l10 10M7 13l10 10" opacity=".5"/><circle cx="4" cy="4" r="1.5"/><circle cx="20" cy="20" r="1.5"/></svg>,
  Battery: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="16" height="11" rx="1"/><path d="M7 8V5h3V8M13 8V5h3V8"/><path d="M19 12h2v3h-2"/><path d="M7 14h3M14 14h-2v-2M14 14v-2"/></svg>,
  Gear: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M22 12h-3M5 12H2M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7L5.6 5.6"/></svg>,
  Headlight: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12c0-4 3-7 7-7h4c4 0 7 3 7 7v4c0 1-1 2-2 2H5c-1 0-2-1-2-2v-4z"/><circle cx="10" cy="12" r="3"/><path d="M17 10h2M17 14h2"/></svg>,
  Phone: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z"/></svg>,
  Line: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.4 7.2 8 8v3l3.5-2.3c4.8-.5 8.5-3.9 8.5-8.2C22 6.6 17.5 3 12 3zM7 12.5H5.5V9H4.2v-.8H7V9H5.7v3.5zm2.3 0H8V8.2h1.3v4.3zm4 0H12l-1.8-2.8v2.8H9V8.2h1.2l1.8 2.8V8.2h1.2v4.3zm4 0H14V8.2h3.3V9H15v.7h2v.8h-2v1.2h2.3v.8z"/></svg>,
  FB: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8V24C19.6 23 24 18 24 12z"/></svg>,
  ArrowRight: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  Check: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>,
  Map: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  Shield: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4v6c0 5.5-3.8 10.5-9 12-5.2-1.5-9-6.5-9-12V6l9-4z"/><path d="M9 12l2 2 4-4"/></svg>,
  Tool: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L22 14l-8 8-2.7-2.7L13 18l-7.5 1.5a1 1 0 0 1-1-1L6 11l-1.3-1.3L2 7l2.7-2.7a4 4 0 0 1 5 0L12 6.6"/></svg>,
  Price: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>,
  Star: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7.5.6-5.8 5 1.8 7.4L12 18l-6.5 4 1.8-7.4L1.5 9.6 9 9z"/></svg>,
  Menu: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
  Email: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>,
};

function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="info-items">
          <div className="info-item"><Icon.Clock /> <span>เปิดทุกวัน 08:30 – 17:30 น.</span></div>
          <div className="info-item"><Icon.Map /> <span>353/1 ถ.มิตรภาพ อ.เมือง จ.นครราชสีมา</span></div>
          <div className="info-item"><Icon.Email /> <span>automix.amg@gmail.com</span></div>
        </div>
        <div className="socials">
          <a href="#" aria-label="Facebook"><Icon.FB /></a>
          <a href="#" aria-label="LINE"><Icon.Line /></a>
        </div>
      </div>
    </div>
  );
}

const NAV_SERVICES = [
  { href: 'oil-change-korat.html', label: 'เปลี่ยนน้ำมันเครื่อง' },
  { href: 'suspension-korat.html', label: 'ซ่อมช่วงล่างรถยนต์' },
  { href: 'transmission-flush-korat.html', label: 'ฟรัชชิ่งเกียร์' },
  { href: 'headlight-restoration-korat.html', label: 'ขัดไฟหน้ารถยนต์' },
];

function Header({ active }) {
  const [open, setOpen] = React.useState(false);
  const [subOpen, setSubOpen] = React.useState(false);
  const links = [
    { href: '/', label: 'หน้าแรก', key: 'home' },
    { href: 'services.html', label: 'บริการ', key: 'services', children: NAV_SERVICES },
    { href: 'gallery.html', label: 'ผลงาน', key: 'gallery' },
    { href: 'blog.html', label: 'บทความ', key: 'blog' },
    { href: 'about.html', label: 'เกี่ยวกับเรา', key: 'about' },
    { href: 'contact.html', label: 'ติดต่อ', key: 'contact' },
  ];
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="brand">
          <img src="assets/logo.jpg" alt="AUTO MIX — ออโต้มิกซ์ ศูนย์บริการรถยนต์โคราช" className="brand-logo" />
        </a>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {links.map(l => l.children ? (
            <div key={l.key} className="nav-item has-sub">
              <div className="nav-item-row">
                <a href={l.href} className={active === l.key ? 'active' : ''}>{l.label}</a>
                <button type="button" className="nav-sub-toggle" aria-label="เมนูบริการย่อย" aria-expanded={subOpen} onClick={() => setSubOpen(v => !v)}>
                  <svg className="nav-caret" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>
              <div className={`nav-sub ${subOpen ? 'open' : ''}`}>
                {l.children.map(c => (
                  <a key={c.href} href={c.href} className={active === c.href ? 'active' : ''}>{c.label}</a>
                ))}
                <a href="services.html" className="nav-sub-all">ดูบริการทั้งหมด →</a>
              </div>
            </div>
          ) : (
            <a key={l.key} href={l.href} className={active === l.key ? 'active' : ''}>{l.label}</a>
          ))}
        </nav>
        <div className="header-cta">
          <a href="tel:0990319888" className="btn btn-sm btn-ghost"><Icon.Phone /> 099-031-9888</a>
          <a href="https://lin.ee/LIl9L9F" className="btn btn-sm btn-primary">จองคิว</a>
          <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menu"><Icon.Menu /></button>
        </div>
      </div>
    </header>
  );
}

function PromoStrip() {
  const items = [
    'ศูนย์บริการรถยนต์มาตรฐาน โคราช',
    'LIQUI MOLY • ZIC • MOTUL • Nexzter',
    'เปลี่ยนน้ำมันเครื่อง ซ่อมช่วงล่าง ฟรัชชิ่งเกียร์ ขัดไฟหน้า',
    'เปิดทุกวัน 08:30 – 17:30 น.',
    'โทร 099-031-9888',
  ];
  const all = [...items, ...items];
  return (
    <div className="promo-strip">
      <div className="promo-strip-inner">
        {all.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

function Floating() {
  return (
    <div className="floating">
      <a href="tel:0990319888" className="float-btn call pulse-ring" aria-label="โทร">
        <Icon.Phone />
        <span className="tooltip">โทร 099-031-9888</span>
      </a>
      <a href="https://lin.ee/LIl9L9F" className="float-btn line" aria-label="LINE">
        <Icon.Line />
        <span className="tooltip">LINE @automix</span>
      </a>
      <a href="#" className="float-btn fb" aria-label="Facebook">
        <Icon.FB />
        <span className="tooltip">Facebook</span>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="assets/logo.jpg" alt="AUTO MIX" />
            <p>ศูนย์บริการรถยนต์มาตรฐาน โคราช เปลี่ยนน้ำมันเครื่อง ช่วงล่าง ฟรัชชิ่งเกียร์ ขัดไฟหน้า และจำหน่ายผลิตภัณฑ์ดูแลรถยนต์ โดยช่างผู้มีประสบการณ์</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Icon.FB /></a>
              <a href="#" aria-label="LINE"><Icon.Line /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>บริการของเรา</h4>
            <ul>
              <li><a href="oil-change-korat.html">เปลี่ยนน้ำมันเครื่อง โคราช</a></li>
              <li><a href="suspension-korat.html">ซ่อมช่วงล่าง โคราช</a></li>
              <li><a href="transmission-flush-korat.html">ฟรัชชิ่งเกียร์ โคราช</a></li>
              <li><a href="headlight-restoration-korat.html">ขัดไฟหน้ารถยนต์ โคราช</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>เมนู</h4>
            <ul>
              <li><a href="/">หน้าแรก</a></li>
              <li><a href="services.html">บริการทั้งหมด</a></li>
              <li><a href="gallery.html">ผลงาน</a></li>
              <li><a href="blog.html">บทความ</a></li>
              <li><a href="about.html">เกี่ยวกับเรา</a></li>
              <li><a href="contact.html">ติดต่อเรา</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4 style={{fontSize:'13px', color:'#F5F5F5', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'18px'}}>ติดต่อ</h4>
            <p>
              <strong style={{color:'#F5F5F5'}}>ที่อยู่</strong><br/>
              353/1 ถ.มิตรภาพ ต.ในเมือง<br/>อ.เมือง จ.นครราชสีมา 30000
            </p>
            <p>
              <strong style={{color:'#F5F5F5'}}>โทรศัพท์</strong> 099-031-9888<br/>
              <strong style={{color:'#F5F5F5'}}>LINE</strong> @automix<br/>
              <strong style={{color:'#F5F5F5'}}>อีเมล</strong> automix.amg@gmail.com
            </p>
            <div className="hours"><span className="dot"></span>เปิดทุกวัน 08:30 – 17:30 น.</div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 AUTO MIX — ออโต้มิกซ์. สงวนลิขสิทธิ์.</div>
          <div>ศูนย์บริการรถยนต์โคราช • เปลี่ยนน้ำมันเครื่องโคราช • ซ่อมช่วงล่างโคราช</div>
        </div>
      </div>
    </footer>
  );
}

function CTABanner() {
  return (
    <section className="sec" style={{paddingTop: 0}}>
      <div className="container">
        <div className="cta-banner">
          <div>
            <h2>พร้อมดูแลรถคุณแล้ว<br/>โทรปรึกษาช่างผู้เชี่ยวชาญได้ทันที</h2>
            <p>แจ้งราคาตรงไปตรงมา ไม่มีบวกเพิ่ม แนะนำผลิตภัณฑ์ที่เหมาะกับรถของคุณ</p>
          </div>
          <div className="cta-banner-phone">
            <div className="label">โทรจองคิว</div>
            <div className="phone">099-031-9888</div>
            <div className="ctas">
              <a href="tel:0990319888" className="btn"><Icon.Phone /> โทรเลย</a>
              <a href="https://lin.ee/LIl9L9F" className="btn btn-line"><Icon.Line /> LINE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Icon, TopBar, Header, PromoStrip, Floating, Footer, CTABanner });
