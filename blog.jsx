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
    { id: 'gear', label: 'ฟลัชชิ่งเกียร์' },
    { id: 'headlight', label: 'ขัดไฟหน้า' },
    { id: 'care', label: 'ดูแลรถ' },
  ];
  const posts = [
    { cat: 'oil', catLabel: 'น้ำมันเครื่อง', href: 'blog-oil-change-price.html', img: 'images/automix/automix-engine-oil-oil-products-display.jpg', title: 'เปลี่ยนน้ำมันเครื่องราคาเท่าไหร่? อัปเดต 2026 พร้อมตารางเทียบทุกประเภท', excerpt: 'รวมราคาเปลี่ยนน้ำมันเครื่องปี 2026 แยกตามประเภทน้ำมันและรุ่นรถ พร้อมบอกจุดคุ้ม', date: '14 ก.ค. 2026', read: '5 นาที' },
    { cat: 'oil', catLabel: 'น้ำมันเครื่อง', href: 'blog-engine-oil-types.html', img: 'images/automix/automix-engine-oil-pouring-oil-03.jpg', title: 'น้ำมันเครื่องสังเคราะห์แท้ vs กึ่งสังเคราะห์ vs ธรรมดา ต่างกันยังไง', excerpt: 'เทียบน้ำมัน 3 ประเภทแบบเข้าใจง่าย ทั้งอายุการใช้งาน ราคา และใครควรใช้แบบไหน', date: '14 ก.ค. 2026', read: '6 นาที' },
    { cat: 'oil', catLabel: 'น้ำมันเครื่อง', href: 'blog-best-engine-oil-brand.html', img: 'images/automix/automix-engine-oil-bmw-oil-service.jpg', title: 'น้ำมันเครื่องยี่ห้อไหนดี 2026 เลือกให้เหมาะกับรถและการใช้งาน', excerpt: 'จัดกลุ่มน้ำมันเครื่องตามการใช้งานจริง ทั้งขับในเมือง เดินทางไกล และรถกระบะ', date: '14 ก.ค. 2026', read: '6 นาที' },
    { cat: 'oil', catLabel: 'น้ำมันเครื่อง', href: 'blog-oil-change-interval.html', img: 'images/automix/automix-engine-oil-dipstick-check.jpg', title: 'เปลี่ยนน้ำมันเครื่องทุกกี่กิโล? อัปเดตระยะที่เหมาะกับการใช้งานจริง', excerpt: 'แยกระยะเปลี่ยนตามประเภทน้ำมัน พร้อม 5 สัญญาณเตือนว่าถึงเวลาต้องเปลี่ยน', date: '14 ก.ค. 2026', read: '5 นาที' },
    { cat: 'oil', catLabel: 'น้ำมันเครื่อง', href: 'blog-5w30-vs-5w40.html', img: 'images/automix/automix-engine-oil-pouring-oil-05.jpg', title: 'น้ำมันเครื่อง 5W-30 กับ 5W-40 ต่างกันยังไง รถเราใช้เบอร์ไหนดี', excerpt: 'อธิบายตัวเลขความหนืดแบบเข้าใจง่าย และตอบเคลียร์ว่ารถแบบไหนใช้เบอร์ไหน', date: '14 ก.ค. 2026', read: '4 นาที' },
    { cat: 'suspension', catLabel: 'ช่วงล่าง', href: 'blog-wheel-alignment-price.html', img: 'images/automix/automix-suspension-tire-pressure-check.jpg', title: 'ตั้งศูนย์ถ่วงล้อราคาเท่าไหร่ ควรทำตอนไหน และเกี่ยวอะไรกับช่วงล่าง', excerpt: 'ตอบครบทั้งราคา อาการที่ต้องทำ และทำไมช่วงล่างหลวมทำให้ตั้งศูนย์ไม่อยู่', date: '14 ก.ค. 2026', read: '6 นาที' },
    { cat: 'suspension', catLabel: 'ช่วงล่าง', href: 'blog-suspension-check-price.html', img: 'images/automix/automix-suspension-suspension-inspection.jpg', title: 'เช็คช่วงล่างราคาเท่าไหร่ ที่ไหนดี และตรวจอะไรบ้าง', excerpt: 'ราคาเช็คช่วงล่าง มีตรวจฟรีไหม และเช็กลิสต์รายการที่ช่างตรวจให้', date: '14 ก.ค. 2026', read: '5 นาที' },
    { cat: 'suspension', catLabel: 'ช่วงล่าง', href: 'blog-suspension-parts.html', img: 'images/automix/automix-suspension-suspension-part-assembly.jpg', title: 'ช่วงล่างรถยนต์มีอะไรบ้าง? รู้จักทุกชิ้นส่วนแบบเข้าใจง่าย', excerpt: 'รู้จักโช้คอัพ สปริง ลูกหมาก ปีกนก บูช พร้อมหน้าที่และอาการเมื่อเริ่มเสีย', date: '14 ก.ค. 2026', read: '7 นาที' },
    { cat: 'suspension', catLabel: 'ช่วงล่าง', href: 'blog-ball-joint-symptoms.html', img: 'images/automix/automix-suspension-suspension-arm-service.jpg', title: 'ลูกหมากหลวมคืออะไร อาการเป็นยังไง อันตรายแค่ไหน', excerpt: 'อาการลูกหมากหลวม เสียงดังตอนเลี้ยว/ตกหลุม ระดับอันตราย และราคาซ่อม', date: '14 ก.ค. 2026', read: '5 นาที' },
    { cat: 'suspension', catLabel: 'ช่วงล่าง', href: 'blog-suspension-noise-symptoms.html', img: 'images/automix/automix-suspension-underbody-work.jpg', title: '8 อาการช่วงล่างมีปัญหา + เสียงดังใต้ท้องรถ บอกอะไรได้บ้าง', excerpt: 'ตารางจับคู่เสียง/อาการกับชิ้นส่วนที่น่าจะเสีย ให้วินิจฉัยเบื้องต้นก่อนเข้าอู่', date: '14 ก.ค. 2026', read: '6 นาที' },
    { cat: 'gear', catLabel: 'ฟลัชชิ่งเกียร์', href: 'blog-transmission-oil-interval.html', img: 'images/automix/automix-gearbox-flush-pouring-atf-fluid.jpg', title: 'เปลี่ยนน้ำมันเกียร์ทุกกี่กิโล? ออโต้กับธรรมดาต่างกันแค่ไหน', excerpt: 'แยกระยะเปลี่ยนออโต้/ธรรมดา พร้อมเทียบถ่ายปกติกับฟลัชชิ่งเกียร์', date: '14 ก.ค. 2026', read: '6 นาที' },
    { cat: 'gear', catLabel: 'ฟลัชชิ่งเกียร์', href: 'blog-transmission-flush-guide.html', img: 'images/automix/automix-gearbox-flush-atf-flush-machine-01.jpg', title: 'ฟลัชชิ่งเกียร์คืออะไร คุ้มไหม รถออโต้ควรทำเมื่อไหร่', excerpt: 'อธิบายกระบวนการฟลัชชิ่ง ต่างจากถ่ายปกติ ข้อดี-ข้อควรระวัง', date: '14 ก.ค. 2026', read: '6 นาที' },
    { cat: 'gear', catLabel: 'ฟลัชชิ่งเกียร์', href: 'blog-gear-jerk.html', img: 'images/automix/automix-gearbox-flush-transmission-inspection.jpg', title: 'เกียร์กระตุกเกิดจากอะไร อาการแบบนี้แก้ยังไง', excerpt: 'ไล่สาเหตุจากน้ำมันเกียร์เสื่อมถึงปัญหาภายใน พร้อมวิธีแก้และป้องกัน', date: '14 ก.ค. 2026', read: '5 นาที' },
    { cat: 'gear', catLabel: 'ฟลัชชิ่งเกียร์', href: 'blog-auto-transmission-symptoms.html', img: 'images/automix/automix-gearbox-flush-mercedes-on-lift.jpg', title: '7 อาการเกียร์ออโต้เสีย สังเกตก่อนบานปลาย', excerpt: 'เช็กลิสต์อาการเกียร์ออโต้เสีย แยกอาการที่ดูแลน้ำมันได้กับที่ต้องเข้าศูนย์', date: '14 ก.ค. 2026', read: '5 นาที' },
    { cat: 'gear', catLabel: 'ฟลัชชิ่งเกียร์', href: 'blog-transmission-flush-price.html', img: 'images/automix/automix-gearbox-flush-atf-products-display.jpg', title: 'ฟลัชชิ่งเกียร์ราคาเท่าไหร่ คุ้มกว่าถ่ายปกติไหม', excerpt: 'ตารางราคาฟลัชชิ่งเกียร์ เทียบกับถ่ายปกติ พร้อมบอกจุดคุ้ม', date: '14 ก.ค. 2026', read: '4 นาที' },
    { cat: 'headlight', catLabel: 'ขัดไฟหน้า', href: 'blog-headlight-polish-price.html', img: 'images/automix/automix-headlight-restoration-before-after-comparison-01.jpg', title: 'ขัดไฟหน้ารถราคาเท่าไหร่ ทำที่ไหนดี คุ้มกว่าทำเองไหม', excerpt: 'ราคาขัดไฟหน้าแยกตามวิธี ขัดอย่างเดียว vs ขัด+เคลือบ และทำเองกับร้าน', date: '14 ก.ค. 2026', read: '5 นาที' },
    { cat: 'headlight', catLabel: 'ขัดไฟหน้า', href: 'blog-diy-headlight-polish.html', img: 'images/automix/automix-headlight-restoration-technician-sanding-lens.jpg', title: 'วิธีขัดไฟหน้ารถเองที่บ้าน ทำตามได้จริง + ข้อควรระวัง', excerpt: 'สอน step-by-step ขัดไฟหน้าเอง พร้อมข้อควรระวังและเรื่องการเคลือบ UV', date: '14 ก.ค. 2026', read: '6 นาที' },
    { cat: 'headlight', catLabel: 'ขัดไฟหน้า', href: 'blog-yellow-headlight-fix.html', img: 'images/automix/automix-headlight-restoration-yellowed-lens-before.jpg', title: 'ไฟหน้ารถเหลือง แก้ยังไงให้กลับมาใสเหมือนใหม่', excerpt: 'สาเหตุและ 5 วิธีแก้ไฟหน้าเหลืองจากง่ายไปยาก พร้อมวิธีกันเหลืองซ้ำ', date: '14 ก.ค. 2026', read: '5 นาที' },
    { cat: 'headlight', catLabel: 'ขัดไฟหน้า', href: 'blog-headlight-coating-vs-polish.html', img: 'images/automix/automix-headlight-restoration-technician-coating-lens.jpg', title: 'เคลือบไฟหน้า vs ขัดไฟหน้า ต่างกันยังไง อันไหนคุ้มกว่า', excerpt: 'ตารางเทียบขัด vs เคลือบ ความทน ราคา และควรทำอย่างเดียวหรือคู่กัน', date: '14 ก.ค. 2026', read: '4 นาที' },
    { cat: 'headlight', catLabel: 'ขัดไฟหน้า', href: 'blog-hazy-headlight-causes.html', img: 'images/automix/automix-headlight-restoration-hazy-yellowed-lens-before.jpg', title: 'ไฟหน้ารถขุ่น มัว เกิดจากอะไร แก้ได้ด้วยการขัดไหม', excerpt: 'สาเหตุไฟหน้าขุ่นมัว แยกเคสที่ขัดหายกับเคสที่ต้องเปลี่ยนโคม', date: '14 ก.ค. 2026', read: '4 นาที' },
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
          <div className="breadcrumb"><a href="/">หน้าแรก</a> <span>/</span> <span>บทความ</span></div>
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
            <a href={featured.href} className="blog-featured" style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',marginBottom:32,textDecoration:'none'}}>
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
              <a key={i} href={p.href} className="blog-featured" style={{textDecoration:'none'}}>
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
