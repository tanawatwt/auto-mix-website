// gallery.jsx — Gallery page

function GalleryPage() {
  const [filter, setFilter] = React.useState('all');
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.base = t.base;
    document.documentElement.dataset.density = t.density;
  }, [t.accent, t.base, t.density]);

  const cats = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'workshop', label: 'หน้าร้าน' },
    { id: 'oil', label: 'น้ำมันเครื่อง' },
    { id: 'suspension', label: 'ช่วงล่าง' },
    { id: 'headlight', label: 'ขัดไฟหน้า' },
    { id: 'products', label: 'ผลิตภัณฑ์' },
  ];
  const all = [
    { cat: 'workshop', label: 'หน้าร้าน Auto Mix Shop', size: 'wide tall', src: 'images/automix/automix-engine-oil-bmw-on-lift-01.jpg' },
    { cat: 'oil', label: 'เปลี่ยนน้ำมันเครื่อง LIQUI MOLY', size: '', src: 'images/automix/automix-engine-oil-pouring-oil-03.jpg' },
    { cat: 'headlight', label: 'ขัดไฟหน้า ก่อน-หลัง', size: '', src: 'images/automix/automix-headlight-restoration-before-after-comparison-01.jpg' },
    { cat: 'products', label: 'LIQUI MOLY lineup', size: 'wide', src: 'images/automix/automix-engine-oil-oil-products-display.jpg' },
    { cat: 'suspension', label: 'ตรวจเช็คช่วงล่าง', size: '', src: 'images/automix/automix-suspension-wheel-inspection.jpg' },
    { cat: 'workshop', label: 'พื้นที่ให้บริการ', size: '', src: 'images/automix/automix-engine-oil-underbody-oil-service.jpg' },
    { cat: 'oil', label: 'ZIC X7 Fully Synthetic', size: '', src: 'images/automix/automix-engine-oil-bmw-oil-service.jpg' },
    { cat: 'headlight', label: 'ขัดไฟหน้าใสเหมือนใหม่', size: '', src: 'images/automix/automix-headlight-restoration-restored-clear-lens-after-01.jpg' },
    { cat: 'products', label: 'ZIC X7 + กรองน้ำมัน', size: 'tall', src: 'images/automix/automix-engine-oil-oil-filter-products.jpg' },
    { cat: 'workshop', label: 'ทีมช่าง Auto Mix Shop', size: 'wide', src: 'images/automix/automix-engine-oil-engine-bay-service.jpg' },
    { cat: 'suspension', label: 'ซ่อมเพลาขับ', size: '', src: 'images/automix/automix-suspension-cv-joint-underbody-01.jpg' },
    { cat: 'oil', label: 'เทน้ำมันเครื่อง', size: '', src: 'images/automix/automix-engine-oil-pouring-oil-02.jpg' },
    { cat: 'oil', label: 'ฟรัชชิ่งเกียร์ทั้งระบบ', size: '', src: 'images/automix/automix-gearbox-flush-atf-flush-machine-01.jpg' },
    { cat: 'workshop', label: 'หน้าร้าน Auto Mix Shop โคราช', size: '', src: 'images/automix/automix-engine-oil-bmw-service-consult.jpg' },
    { cat: 'products', label: 'ZIC CVTF Multi', size: '', src: 'images/automix/automix-gearbox-flush-atf-products-display.jpg' },
    { cat: 'suspension', label: 'ตรวจใต้ท้องรถ', size: 'wide', src: 'images/automix/automix-suspension-underbody-inspection.jpg' },
    { cat: 'oil', label: 'เปลี่ยนถ่าย LIQUI MOLY', size: '', src: 'images/automix/automix-engine-oil-pouring-oil-01.jpg' },
    { cat: 'products', label: 'LIQUI MOLY ตัวแทนจำหน่าย', size: '', src: 'images/automix/automix-engine-oil-oil-products-display.jpg' },
    { cat: 'workshop', label: 'ทีมช่าง + ผลิตภัณฑ์', size: '', src: 'images/automix/automix-engine-oil-bmw-hood-open.jpg' },
    { cat: 'oil', label: 'ZIC X5 เติมน้ำมัน', size: '', src: 'images/automix/automix-engine-oil-pouring-oil-04.jpg' },
    { cat: 'headlight', label: 'เคลือบ UV ไฟหน้า', size: '', src: 'images/automix/automix-headlight-restoration-technician-coating-lens.jpg' },
    { cat: 'workshop', label: 'Toyota Hilux ยกลิฟต์', size: '', src: 'images/automix/automix-engine-oil-mercedes-on-lift-oil.jpg' },
    { cat: 'suspension', label: 'เปลี่ยนโค้งรถ', size: '', src: 'images/automix/automix-suspension-cv-joint-underbody-02.jpg' },
    { cat: 'products', label: 'LIQUI MOLY เติมเครื่อง', size: '', src: 'images/automix/automix-engine-oil-pouring-oil-06.jpg' },
  ];
  const items = filter === 'all' ? all : all.filter(i => i.cat === filter);

  return (
    <>
      <TopBar />
      <Header active="gallery" />
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb"><a href="index.html">หน้าแรก</a> <span>/</span> <span>ผลงาน</span></div>
          <h1>ผลงานและ<span className="accent">หน้าร้าน</span></h1>
          <p>ภาพจริงจากการให้บริการ ลูกค้าที่ไว้ใจ และบรรยากาศในร้าน Auto Mix Shop โคราช</p>
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <div style={{display:'flex',gap:8,marginBottom:32,flexWrap:'wrap',justifyContent:'center'}}>
            {cats.map(c => (
              <button key={c.id}
                onClick={() => setFilter(c.id)}
                className={`btn btn-sm ${filter === c.id ? 'btn-primary' : 'btn-ghost'}`}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {items.map((g, i) => (
              <div key={i} className={`gallery-item ${g.size}`}>
                <img className="bg" src={g.src} alt={g.label} loading="lazy" />
                <div className="label">{g.label}</div>
              </div>
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
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<GalleryPage />);
