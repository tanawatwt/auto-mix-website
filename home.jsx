// home.jsx — Auto Mix homepage

function Hero({ variant = 'split' }) {
  if (variant === 'centered') {
    return (
      <section className="hero" style={{minHeight: '640px'}}>
        <div className="hero-grid-bg"></div>
        <div className="hero-stripes"></div>
        <div className="container" style={{gridTemplateColumns: '1fr', textAlign: 'center', justifyItems: 'center'}}>
          <div style={{maxWidth: 820}}>
            <div className="hero-tagline"><span className="hero-tagline-dot"></span>ศูนย์บริการรถยนต์มาตรฐาน โคราช</div>
            <h1>ดูแลรถคุณ<br/>ด้วยช่างมืออาชีพ <span className="accent">โคราช</span></h1>
            <p className="hero-sub" style={{margin: '0 auto 32px'}}>เปลี่ยนน้ำมันเครื่อง ซ่อมช่วงล่าง ฟรัชชิ่งเกียร์ ขัดไฟหน้ารถยนต์ ใช้ผลิตภัณฑ์มาตรฐานระดับโลก LIQUI MOLY • ZIC • MOTUL</p>
            <div className="hero-ctas" style={{justifyContent: 'center'}}>
              <a href="tel:0990319888" className="btn btn-lg btn-primary"><Icon.Phone /> โทรจองคิว 099-031-9888</a>
              <a href="https://lin.ee/LIl9L9F" className="btn btn-lg btn-outline"><Icon.Line /> จองผ่าน LINE</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (variant === 'fullbleed') {
    return (
      <section className="hero" style={{minHeight: '620px', background: 'var(--bg)'}}>
        <div className="hero-grid-bg"></div>
        <div className="container" style={{gridTemplateColumns: '1fr'}}>
          <div style={{
            position: 'relative', borderRadius: 20, overflow: 'hidden',
            minHeight: 480,
            border: '1px solid var(--border-strong)', padding: '64px 56px', display: 'flex', alignItems: 'center'
          }}>
            <img src="images/automix/automix-engine-oil-bmw-on-lift-01.jpg" alt="" aria-hidden="true" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',zIndex:0}} />
            <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg, rgba(10,10,10,.94) 28%, rgba(10,10,10,.55) 60%, rgba(10,10,10,.25) 100%)',zIndex:1}}></div>
            <div style={{maxWidth: 640, position: 'relative', zIndex: 2}}>
              <div className="hero-tagline"><span className="hero-tagline-dot"></span>AUTO MIX — ออโต้มิกซ์ โคราช</div>
              <h1>ศูนย์บริการ<br/>รถยนต์มาตรฐาน<br/><span className="accent">ครบวงจร</span></h1>
              <p className="hero-sub">ช่างผู้มีประสบการณ์สูง ใช้ผลิตภัณฑ์มาตรฐานระดับโลก แจ้งราคาตรงไปตรงมา ไม่มีบวกเพิ่ม</p>
              <div className="hero-ctas">
                <a href="tel:0990319888" className="btn btn-lg btn-primary"><Icon.Phone /> 099-031-9888</a>
                <a href="services.html" className="btn btn-lg btn-outline">ดูบริการทั้งหมด</a>
              </div>
            </div>
            <div style={{
              position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)',
              fontFamily: 'Kanit', fontSize: 180, fontWeight: 900, lineHeight: 1,
              color: 'rgba(255,193,7,.08)', letterSpacing: '-0.04em', userSelect: 'none'
            }}>A/M</div>
          </div>
        </div>
      </section>
    );
  }
  // default: split
  return (
    <section className="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-stripes"></div>
      <div className="container">
        <div>
          <div className="hero-tagline"><span className="hero-tagline-dot"></span>ศูนย์บริการรถยนต์มาตรฐาน โคราช</div>
          <h1>บริการรถยนต์<br/>ครบวงจร <span className="accent">โคราช</span><br/>โดยช่างมืออาชีพ</h1>
          <p className="hero-sub">
            เปลี่ยนน้ำมันเครื่อง ซ่อมช่วงล่าง ฟรัชชิ่งเกียร์ ขัดไฟหน้ารถยนต์ ใช้ผลิตภัณฑ์มาตรฐานระดับโลก LIQUI MOLY • ZIC • MOTUL พร้อมทีมช่างที่มีประสบการณ์สูง
          </p>
          <div className="hero-ctas">
            <a href="tel:0990319888" className="btn btn-lg btn-primary"><Icon.Phone /> โทรจองคิว 099-031-9888</a>
            <a href="https://lin.ee/LIl9L9F" className="btn btn-lg btn-outline"><Icon.Line /> จองผ่าน LINE</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">10+</div>
              <div className="hero-stat-label">ปีประสบการณ์</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">4.1K+</div>
              <div className="hero-stat-label">ลูกค้าที่ไว้ใจ</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">9+</div>
              <div className="hero-stat-label">แบรนด์มาตรฐานโลก</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <img className="bg" src="images/automix/automix-engine-oil-bmw-on-lift-01.jpg" alt="AUTO MIX โคราช — ศูนย์บริการรถยนต์" loading="eager" width="1080" height="720" fetchpriority="high" />
          <div className="hero-visual-overlay"></div>
          <div className="hero-visual-badge"><span className="dot"></span>เปิดให้บริการวันนี้</div>
          <div className="hero-visual-tag">
            <div>
              <h4>ถนนมิตรภาพ ใกล้แยกเทอร์มินอล</h4>
              <p>353/1 ต.ในเมือง อ.เมือง นครราชสีมา</p>
            </div>
            <a href="contact.html" className="hero-visual-arrow"><Icon.ArrowRight /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: <Icon.Shield />, title: 'ช่างผู้มีประสบการณ์', desc: 'ทีมช่างที่ผ่านงานรถยุโรปและรถเอเชียมาอย่างยาวนาน', num: '01' },
    { icon: <Icon.Tool />, title: 'ผลิตภัณฑ์มาตรฐานโลก', desc: 'LIQUI MOLY, ZIC, MOTUL, NGK, Repsol ของแท้จากตัวแทนจำหน่าย', num: '02' },
    { icon: <Icon.Price />, title: 'แจ้งราคาตรงไปตรงมา', desc: 'ไม่มีบวกเพิ่ม ไม่มีค่าใช้จ่ายแอบแฝง แจ้งราคาก่อนเริ่มงาน', num: '03' },
    { icon: <Icon.Star />, title: 'บริการครบวงจร', desc: 'น้ำมันเครื่อง ช่วงล่าง ฟรัชชิ่งเกียร์ ขัดไฟหน้า รถยุโรป-เอเชีย ในที่เดียว', num: '04' },
  ];
  return (
    <section className="sec why">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">ทำไมต้อง AUTO MIX</div>
            <h2 className="sec-title">เหตุผลที่ลูกค้าโคราช<br/>เลือกดูแลรถที่นี่</h2>
          </div>
          <p className="sec-sub">เรามุ่งเน้นความซื่อตรง คุณภาพงาน และผลิตภัณฑ์ที่ดีที่สุด เพื่อให้รถของคุณได้รับการดูแลอย่างที่ควรจะเป็น</p>
        </div>
        <div className="why-grid">
          {items.map((it, i) => (
            <div className="why-item" key={i}>
              <div className="why-item-num">{it.num}</div>
              <div className="why-item-icon">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: <Icon.Oil />, featured: true,
      tag: 'บริการยอดนิยม',
      title: 'เปลี่ยนน้ำมันเครื่อง โคราช',
      desc: 'เปลี่ยนถ่ายน้ำมันเครื่อง ของเหลวทุกชนิด ใช้ผลิตภัณฑ์ LIQUI MOLY, ZIC, MOTUL',
      bullets: ['ตรวจเช็คเครื่องยนต์ฟรี', 'เลือกสเปคตามรุ่นรถ', 'รถยุโรป / รถเอเชีย'],
      href: 'oil-change-korat.html'
    },
    {
      icon: <Icon.Suspension />, featured: true,
      tag: 'งานเชี่ยวชาญ',
      title: 'ซ่อมช่วงล่าง โคราช',
      desc: 'ตรวจเช็คและซ่อมช่วงล่างครบวงจร เปลี่ยนโช้คอัพ ลูกหมาก ปีกนก',
      bullets: ['ตรวจเช็คช่วงล่างฟรี', 'อะไหล่มาตรฐาน', 'รับประกันคุณภาพ'],
      href: 'suspension-korat.html'
    },
    {
      icon: <Icon.Gear />, featured: true,
      tag: 'ระบบเกียร์',
      title: 'ฟรัชชิ่งเกียร์',
      desc: 'ฟรัชชิ่งระบบเกียร์ เปลี่ยนน้ำมันเกียร์ เปลี่ยนกรองเกียร์และปะเก็น',
      bullets: ['ยืดอายุเกียร์', 'เพิ่มประสิทธิภาพ', 'สำหรับรถทุกรุ่น'],
      href: 'transmission-flush-korat.html'
    },
    {
      icon: <Icon.Headlight />,
      title: 'ขัดไฟหน้ารถยนต์',
      desc: 'ขัดไฟหน้ารถให้ใสเหมือนใหม่ เพิ่มความปลอดภัยในการขับขี่เวลากลางคืน',
      bullets: ['ไฟหน้าใสเหมือนใหม่', 'ขัดทั้ง 2 ข้าง', 'เคลือบป้องกัน UV'],
      href: 'headlight-restoration-korat.html'
    },
  ];
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">บริการของเรา</div>
            <h2 className="sec-title">ดูแลรถยนต์<br/><span className="accent">ครบวงจรในที่เดียว</span></h2>
          </div>
          <p className="sec-sub">
            เรารับดูแลรถยุโรปและรถเอเชียทุกรุ่น ด้วยผลิตภัณฑ์ระดับโลกและทีมช่างมืออาชีพ เลือกดูบริการที่คุณต้องการได้เลย
          </p>
        </div>
        <div className="services-grid">
          {items.map((s, i) => (
            <div className={`service-card ${s.featured ? 'featured' : ''}`} key={i}>
              {s.tag && <span className="tag">{s.tag}</span>}
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <a href={s.href} className="service-card-link">ดูรายละเอียด <Icon.ArrowRight /></a>
            </div>
          ))}
        </div>
        <div style={{textAlign: 'center', marginTop: 40}}>
          <a href="services.html" className="btn btn-outline">ดูบริการทั้งหมด <Icon.ArrowRight /></a>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  const brands = [
    { name: 'LIQUI MOLY', sub: 'GERMANY', accent: true },
    { name: 'ZIC', sub: 'KOREA' },
    { name: 'MOTUL', sub: 'FRANCE' },
    { name: 'NEXZTER', sub: 'JAPAN' },
    { name: 'NGK', sub: 'JAPAN' },
    { name: 'REPSOL', sub: 'SPAIN' },
    { name: 'GATES', sub: 'USA' },
    { name: 'MOBIL', sub: 'USA' },
    { name: 'BEC', sub: 'BATTERY' },
    { name: 'TTW', sub: 'BATTERY' },
    { name: 'BOSCH', sub: 'GERMANY' },
    { name: 'CASTROL', sub: 'UK' },
  ];
  return (
    <section className="sec brands">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">แบรนด์ที่เราใช้</div>
            <h2 className="sec-title">ผลิตภัณฑ์มาตรฐานระดับโลก<br/><span className="accent">ของแท้ทุกชิ้น</span></h2>
          </div>
          <p className="sec-sub">เราเป็นตัวแทนจำหน่ายและใช้ผลิตภัณฑ์แบรนด์ดังจากทั่วโลก เพื่อความมั่นใจสูงสุดสำหรับรถของคุณ</p>
        </div>
        <div className="brands-grid">
          {brands.map((b, i) => (
            <div className="brand-cell" key={i} data-accent={b.accent ? 'true' : 'false'}>
              <div className="logo">
                {b.name}
                <small>{b.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">ความรู้จากช่าง</div>
            <h2 className="sec-title">เคล็ดลับดูแลรถ<br/><span className="accent">จากผู้เชี่ยวชาญ</span></h2>
          </div>
          <p className="sec-sub">แบ่งปันความรู้เกี่ยวกับการดูแลรักษารถยนต์ เพื่อให้คุณเข้าใจรถของคุณมากขึ้น</p>
        </div>
        <div className="expertise-grid">
          <div className="exp-card lg">
            <div className="exp-media"><img className="bg" src="images/automix/automix-engine-oil-bmw-oil-service.jpg" alt="เลือกน้ำมันเครื่อง" loading="lazy" /></div>
            <div className="exp-body">
              <div className="exp-tag">น้ำมันเครื่อง</div>
              <h3>เลือกน้ำมันเครื่องอย่างไรให้เหมาะกับรถคุณ</h3>
              <p>เบอร์น้ำมัน ประเภทเครื่อง การขับขี่ และข้อแนะนำจากผู้ผลิต ล้วนเป็นปัจจัยสำคัญที่ส่งผลต่อประสิทธิภาพและอายุการใช้งานของเครื่องยนต์</p>
              <a href="blog.html" className="link">อ่านบทความเต็ม <Icon.ArrowRight /></a>
            </div>
          </div>
          <div className="exp-card">
            <div className="exp-tag">ช่วงล่าง</div>
            <h3>5 สัญญาณที่บอกว่าช่วงล่างควรตรวจเช็ค</h3>
            <p>เสียงดังผิดปกติ การเกาะถนนไม่มั่นคง ยางสึกไม่เท่ากัน อาจบอกว่าช่วงล่างกำลังมีปัญหา</p>
            <a href="blog.html" className="link">อ่านต่อ <Icon.ArrowRight /></a>
          </div>
          <div className="exp-card">
            <div className="exp-tag">เกียร์</div>
            <h3>ฟรัชชิ่งเกียร์ต่างจากเปลี่ยนน้ำมันเกียร์?</h3>
            <p>สองบริการนี้ไม่เหมือนกัน เข้าใจความแตกต่างก่อนตัดสินใจ</p>
            <a href="blog.html" className="link">อ่านต่อ <Icon.ArrowRight /></a>
          </div>
          <div className="exp-card">
            <div className="exp-tag">ขัดไฟหน้า</div>
            <h3>ขัดไฟหน้ารถยนต์ช่วยอะไรบ้าง</h3>
            <p>ไฟหน้าที่เหลืองหรือเป็นฝ้าทำให้แสงสว่างน้อยลง การขัดและเคลือบ UV ช่วยเพิ่มความสว่างและความปลอดภัย</p>
            <a href="blog.html" className="link">อ่านต่อ <Icon.ArrowRight /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const items = [
    { src: 'images/automix/automix-engine-oil-bmw-on-lift-02.jpg', cls: 'wide tall', label: 'Workshop — AUTO MIX' },
    { src: 'images/automix/automix-engine-oil-pouring-oil-07.jpg', cls: '', label: 'เปลี่ยนน้ำมันเครื่อง' },
    { src: 'images/automix/automix-headlight-restoration-restored-clear-lens-after-03.jpg', cls: '', label: 'ขัดไฟหน้ารถยนต์' },
    { src: 'images/automix/automix-engine-oil-oil-products-display.jpg', cls: 'wide', label: 'LIQUI MOLY display' },
    { src: 'images/automix/automix-suspension-underbody-service.jpg', cls: '', label: 'ตรวจเช็คช่วงล่าง' },
    { src: 'images/automix/automix-gearbox-flush-flush-machine-service-02.jpg', cls: '', label: 'ฟรัชชิ่งเกียร์' },
  ];
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">ผลงานของเรา</div>
            <h2 className="sec-title">ภาพจากหน้าร้าน<br/><span className="accent">และงานจริง</span></h2>
          </div>
          <a href="gallery.html" className="btn btn-outline">ดูผลงานทั้งหมด <Icon.ArrowRight /></a>
        </div>
        <div className="gallery-grid">
          {items.map((g, i) => (
            <div key={i} className={`gallery-item ${g.cls}`}>
              <img className="bg" src={g.src} alt={g.label} loading="lazy" />
              <div className="label">{g.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: 'คุณสมชาย', meta: 'รถ BMW • ลูกค้าประจำ', text: 'บริการดีมาก ช่างมืออาชีพ แจ้งราคาตรงไปตรงมา ใช้น้ำมัน LIQUI MOLY ของแท้ เครื่องนิ่งขึ้นจริง ๆ', stars: 5, initial: 'ส' },
    { name: 'คุณปิยะ', meta: 'รถ Honda Civic', text: 'เปลี่ยนช่วงล่างที่นี่ ช่างอธิบายทุกขั้นตอน ไม่บวกงานเพิ่ม ราคาสมเหตุสมผล จะกลับมาใช้บริการอีกแน่นอน', stars: 5, initial: 'ป' },
    { name: 'คุณนิภา', meta: 'รถ Toyota Camry', text: 'ขัดไฟหน้าและฟรัชชิ่งเกียร์กับที่นี่ พนักงานสุภาพ งานละเอียด ร้านสะอาดเป็นระเบียบ แนะนำคนโคราชให้มาใช้บริการ', stars: 5, initial: 'น' },
  ];
  return (
    <section className="sec testimonials">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">ลูกค้าของเรา</div>
            <h2 className="sec-title">เสียงจริงจากลูกค้า<br/><span className="accent">ที่ไว้ใจเรา</span></h2>
          </div>
          <p className="sec-sub">4.1K+ ครอบครัวในโคราชเลือกให้ AUTO MIX ดูแลรถของพวกเขา</p>
        </div>
        <div className="tst-grid">
          {reviews.map((r, i) => (
            <div className="tst-card" key={i}>
              <div className="tst-stars">{'★'.repeat(r.stars)}</div>
              <p className="tst-quote">"{r.text}"</p>
              <div className="tst-author">
                <div className="tst-avatar">{r.initial}</div>
                <div className="tst-author-info">
                  <div className="name">{r.name}</div>
                  <div className="meta">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">บทความล่าสุด</div>
            <h2 className="sec-title">เคล็ดลับและความรู้<br/><span className="accent">จากทีมช่าง</span></h2>
          </div>
          <a href="blog.html" className="btn btn-outline">ดูบทความทั้งหมด <Icon.ArrowRight /></a>
        </div>
        <div className="blog-preview-grid">
          <a href="blog-detail.html" className="blog-featured">
            <div className="media"><img className="bg" src="images/automix/automix-engine-oil-pouring-oil-01.jpg" alt="เลือกน้ำมันเครื่อง LIQUI MOLY" loading="lazy" /></div>
            <div className="body">
              <span className="blog-cat">น้ำมันเครื่อง</span>
              <h3>เลือกน้ำมันเครื่องอย่างไรให้เหมาะกับรถยุโรปและรถเอเชีย</h3>
              <p>เรียนรู้เรื่องเบอร์ความหนืด ประเภทเครื่อง และพฤติกรรมการขับขี่ ที่มีผลต่อการเลือกน้ำมันเครื่องให้เหมาะสม เพื่อปกป้องเครื่องยนต์อย่างยาวนาน</p>
              <div className="meta">
                <span>24 เม.ย. 2026</span>
                <span>อ่านบทความ →</span>
              </div>
            </div>
          </a>
          <div className="blog-small-list">
            <a href="blog-detail.html" className="blog-small">
              <div className="media"><img className="bg" src="images/automix/automix-suspension-wheel-inspection.jpg" alt="ช่วงล่าง" loading="lazy" /></div>
              <div className="body">
                <span className="blog-cat">ช่วงล่าง</span>
                <h4>5 สัญญาณที่ช่วงล่างต้องตรวจเช็ค</h4>
                <div className="meta">22 เม.ย. 2026 • 4 นาที</div>
              </div>
            </a>
            <a href="blog-detail.html" className="blog-small">
              <div className="media"><img className="bg" src="images/automix/automix-gearbox-flush-atf-flush-machine-01.jpg" alt="ฟรัชชิ่งเกียร์" loading="lazy" /></div>
              <div className="body">
                <span className="blog-cat">เกียร์</span>
                <h4>ฟรัชชิ่งเกียร์ต่างจากเปลี่ยนน้ำมันเกียร์อย่างไร</h4>
                <div className="meta">18 เม.ย. 2026 • 5 นาที</div>
              </div>
            </a>
            <a href="blog-detail.html" className="blog-small">
              <div className="media"><img className="bg" src="images/automix/automix-headlight-restoration-restored-clear-lens-after-01.jpg" alt="ขัดไฟหน้ารถยนต์" loading="lazy" /></div>
              <div className="body">
                <span className="blog-cat">ขัดไฟหน้า</span>
                <h4>ขัดไฟหน้ารถยนต์ให้ใสเหมือนใหม่</h4>
                <div className="meta">15 เม.ย. 2026 • 4 นาที</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.base = t.base;
    document.documentElement.dataset.density = t.density;
  }, [t.accent, t.base, t.density]);

  return (
    <>
      <TopBar />
      <Header active="home" />
      <Hero variant={t.heroVariant} />
      <WhyChoose />
      <Services />
      <Brands />
      <Expertise />
      <BlogPreview />
      <GalleryPreview />
      <Testimonials />
      <CTABanner />
      <Footer />
      <Floating />
      <TweaksPanel>
        <TweakSection label="Appearance" />
        <TweakRadio label="Accent" value={t.accent} options={['yellow', 'orange', 'mixed']} onChange={v => setTweak('accent', v)} />
        <TweakRadio label="Base tone" value={t.base} options={['dark', 'light']} onChange={v => setTweak('base', v)} />
        <TweakRadio label="Density" value={t.density} options={['compact', 'regular']} onChange={v => setTweak('density', v)} />
        <TweakSection label="Layout" />
        <TweakRadio label="Hero variant" value={t.heroVariant} options={['split', 'centered', 'fullbleed']} onChange={v => setTweak('heroVariant', v)} />
        <TweakToggle label="Show promo strip" value={t.showPromo} onChange={v => setTweak('showPromo', v)} />
      </TweaksPanel>
      {t.showPromo && <div style={{position:'fixed',top:0,left:0,right:0,zIndex:60}}><PromoStrip /></div>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
