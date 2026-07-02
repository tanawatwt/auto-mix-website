// blog.jsx — Blog list page

function BlogPage() {
  const [cat, setCat] = React.useState('all');
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.base = t.base;
    document.documentElement.dataset.density = t.density;
  }, [t.accent, t.base, t.density]);

  const cats = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'oil', label: 'น้ำมันเครื่อง' },
    { id: 'suspension', label: 'ช่วงล่าง' },
    { id: 'gear', label: 'ฟรัชชิ่งเกียร์' },
    { id: 'headlight', label: 'ขัดไฟหน้า' },
    { id: 'care', label: 'ดูแลรถ' },
  ];
  const posts = [
    { cat: 'oil', catLabel: 'น้ำมันเครื่อง', img: 'images/automix/automix-engine-oil-pouring-oil-01.jpg', title: 'เลือกน้ำมันเครื่องอย่างไรให้เหมาะกับรถยุโรปและรถเอเชีย', excerpt: 'เรียนรู้เรื่องเบอร์ความหนืด ประเภทเครื่อง พฤติกรรมการขับขี่ ที่มีผลต่อการเลือกน้ำมัน', date: '24 เม.ย. 2026', read: '6 นาที' },
    { cat: 'suspension', catLabel: 'ช่วงล่าง', img: 'images/automix/automix-suspension-wheel-inspection.jpg', title: '5 สัญญาณที่บอกว่าช่วงล่างของรถคุณควรตรวจเช็ค', excerpt: 'เสียงดังผิดปกติ ยางสึกไม่เท่ากัน การเกาะถนนไม่มั่นคง อย่ามองข้ามสัญญาณเหล่านี้', date: '22 เม.ย. 2026', read: '4 นาที' },
    { cat: 'gear', catLabel: 'ฟรัชชิ่งเกียร์', img: 'images/automix/automix-gearbox-flush-atf-flush-machine-01.jpg', title: 'ฟรัชชิ่งเกียร์ vs. เปลี่ยนน้ำมันเกียร์ ต่างกันอย่างไร', excerpt: 'เข้าใจความแตกต่างของสองบริการนี้ เพื่อเลือกใช้ให้เหมาะกับสภาพรถของคุณ', date: '18 เม.ย. 2026', read: '5 นาที' },
    { cat: 'headlight', catLabel: 'ขัดไฟหน้า', img: 'images/automix/automix-headlight-restoration-before-after-comparison-01.jpg', title: 'ขัดไฟหน้ารถยนต์ให้ใสเหมือนใหม่ ช่วยเรื่องอะไรบ้าง', excerpt: 'ไฟหน้าที่เหลืองหรือเป็นฝ้าทำให้แสงสว่างน้อยลง การขัดและเคลือบ UV เพิ่มความปลอดภัยตอนกลางคืน', date: '12 เม.ย. 2026', read: '4 นาที' },
    { cat: 'oil', catLabel: 'ผลิตภัณฑ์', img: 'images/automix/automix-engine-oil-oil-products-display.jpg', title: 'LIQUI MOLY ZIC และ MOTUL แตกต่างกันอย่างไร', excerpt: 'เปรียบเทียบน้ำมันพรีเมี่ยมแต่ละแบรนด์ และเข้าใจว่าน้ำมันที่ได้มาตรฐานสำคัญอย่างไร', date: '1 เม.ย. 2026', read: '6 นาที' },
    { cat: 'care', catLabel: 'ดูแลรถ', img: 'images/automix/automix-headlight-restoration-restored-clear-lens-after-01.jpg', title: 'วิธีดูแลรถในหน้าฝนให้ปลอดภัยและอายุยาว', excerpt: 'ตั้งแต่ที่ปัดน้ำฝน ช่วงล่าง ไฟส่องทาง ถึงการทำความสะอาดรถ', date: '28 มี.ค. 2026', read: '5 นาที' },
  ];
  const filtered = cat === 'all' ? posts : posts.filter(p => p.cat === cat);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <TopBar />
      <Header active="blog" />
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb"><a href="index.html">หน้าแรก</a> <span>/</span> <span>บทความ</span></div>
          <h1>บทความและ<span className="accent">ความรู้จากช่าง</span></h1>
          <p>แบ่งปันความรู้การดูแลรักษารถยนต์ เคล็ดลับจากผู้เชี่ยวชาญ และคำแนะนำที่ช่วยให้คุณเข้าใจรถของคุณมากขึ้น</p>
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <div style={{display:'flex',gap:8,marginBottom:40,flexWrap:'wrap'}}>
            {cats.map(c => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`btn btn-sm ${cat === c.id ? 'btn-primary' : 'btn-ghost'}`}>
                {c.label}
              </button>
            ))}
          </div>
          {featured && (
            <a href="blog-detail.html" className="blog-featured" style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',marginBottom:32,textDecoration:'none'}}>
              <div className="media" style={{minHeight:360}}><img className="bg" src={featured.img} alt={featured.title} loading="lazy" /></div>
              <div className="body" style={{padding:'40px'}}>
                <span className="blog-cat">{featured.catLabel}</span>
                <h3 style={{fontSize:28}}>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <div className="meta">
                  <span>{featured.date} • {featured.read}</span>
                  <span style={{color:'var(--accent)'}}>อ่านต่อ →</span>
                </div>
              </div>
            </a>
          )}
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="blog-list-grid">
            {rest.map((p, i) => (
              <a key={i} href="blog-detail.html" className="blog-featured" style={{textDecoration:'none'}}>
                <div className="media" style={{aspectRatio:'16/10'}}><img className="bg" src={p.img} alt={p.title} loading="lazy" /></div>
                <div className="body" style={{padding:'24px'}}>
                  <span className="blog-cat">{p.catLabel}</span>
                  <h3 style={{fontSize:19}}>{p.title}</h3>
                  <p style={{fontSize:14}}>{p.excerpt}</p>
                  <div className="meta" style={{fontSize:12}}>
                    <span>{p.date}</span>
                    <span>{p.read}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
      <Floating />
      <TweaksPanel>
        <TweakSection label="Appearance" />
        <TweakRadio label="Accent" value={t.accent} options={['yellow', 'orange', 'mixed']} onChange={v => setTweak('accent', v)} />
        <TweakRadio label="Base tone" value={t.base} options={['dark', 'light']} onChange={v => setTweak('base', v)} />
        <TweakRadio label="Density" value={t.density} options={['compact', 'regular']} onChange={v => setTweak('density', v)} />
      </TweaksPanel>
      <style>{`@media (max-width:900px){.blog-list-grid{grid-template-columns:1fr !important}}`}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BlogPage />);
