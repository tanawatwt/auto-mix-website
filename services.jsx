// services.jsx — Services page with SEO-anchored sections

function ServiceHero() {
  return (
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb"><a href="index.html">หน้าแรก</a> <span>/</span> <span>บริการ</span></div>
        <h1>บริการของ <span className="accent">AUTO MIX โคราช</span></h1>
        <p>ศูนย์บริการรถยนต์มาตรฐาน ดูแลครบทุกระบบ ใช้ผลิตภัณฑ์ระดับโลก โดยช่างผู้มีประสบการณ์สูงสำหรับรถยุโรปและรถเอเชียทุกรุ่น</p>
      </div>
    </section>
  );
}

function ServiceQuickNav() {
  const items = [
    { id: 'oil', label: 'เปลี่ยนน้ำมันเครื่อง' },
    { id: 'suspension', label: 'ซ่อมช่วงล่าง' },
    { id: 'brake', label: 'ซ่อมเบรค' },
    { id: 'battery', label: 'แบตเตอรี่' },
    { id: 'flushing', label: 'ฟรัชชิ่งเกียร์' },
    { id: 'headlight', label: 'ขัดไฟหน้า' },
  ];
  return (
    <div style={{background:'var(--bg-2)',borderBottom:'1px solid var(--border)',position:'sticky',top:'84px',zIndex:20}}>
      <div className="container" style={{display:'flex',gap:8,padding:'16px 24px',overflowX:'auto'}}>
        {items.map(i => (
          <a key={i.id} href={`#${i.id}`} className="btn btn-sm btn-ghost" style={{flexShrink:0}}>{i.label}</a>
        ))}
      </div>
    </div>
  );
}

function ServiceBlock({ id, eyebrow, title, desc, bullets, benefits, image, reverse, seoH2 }) {
  return (
    <section className="sec" id={id} style={{scrollMarginTop:'180px'}}>
      <div className="container">
        <div style={{
          display:'grid',
          gridTemplateColumns: reverse ? '1fr 1.1fr' : '1.1fr 1fr',
          gap:56,alignItems:'center'
        }} className="svc-block">
          <div style={{order: reverse ? 2 : 1}}>
            <div className="sec-eyebrow">{eyebrow}</div>
            <h2 className="sec-title" style={{fontSize:'clamp(28px,3vw,40px)'}}>{title}</h2>
            {seoH2 && <p style={{color:'var(--text-dim)',fontSize:15,marginBottom:16,fontStyle:'italic'}}>{seoH2}</p>}
            <p className="sec-sub" style={{marginBottom:28}}>{desc}</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px 20px',marginBottom:28}}>
              {bullets.map((b,i)=>(
                <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start',fontSize:14.5}}>
                  <span style={{color:'var(--accent)',flexShrink:0,marginTop:2}}><Icon.Check /></span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            {benefits && (
              <div style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:10,padding:'16px 20px',marginBottom:24}}>
                <div style={{fontSize:12,fontWeight:600,color:'var(--accent)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:8}}>สิทธิประโยชน์</div>
                <div style={{fontSize:14.5,color:'var(--text-dim)'}}>{benefits}</div>
              </div>
            )}
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <a href="tel:0990319888" className="btn btn-primary"><Icon.Phone /> โทรจองคิว</a>
              <a href="https://lin.ee/LIl9L9F" className="btn btn-outline"><Icon.Line /> สอบถามผ่าน LINE</a>
            </div>
          </div>
          <div style={{order: reverse ? 1 : 2}}>
            <div style={{
              aspectRatio:'4/3',borderRadius:14,overflow:'hidden',border:'1px solid var(--border)',
              background:'var(--bg-card)',position:'relative'
            }}>
              <img src={image} alt={title} loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 55%,rgba(0,0,0,.45) 100%)',pointerEvents:'none'}}></div>
              <div style={{position:'absolute',bottom:16,left:16,background:'rgba(0,0,0,.8)',backdropFilter:'blur(8px)',padding:'8px 12px',borderRadius:8,fontSize:12,border:'1px solid var(--border-strong)',zIndex:2}}>
                {id === 'oil' && 'LIQUI MOLY • ZIC • MOTUL'}
                {id === 'suspension' && 'ครอบคลุม EU / ASIA'}
                {id === 'brake' && 'ความปลอดภัยสูงสุด'}
                {id === 'battery' && 'BEC • TTW มาตรฐาน'}
                {id === 'flushing' && 'ยืดอายุระบบเกียร์'}
                {id === 'headlight' && 'เคลือบ UV เคลือบเงา'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { n: '01', title: 'จองคิว', desc: 'โทรหรือ LINE แจ้งบริการที่ต้องการ เรายืนยันคิวให้ทันที' },
    { n: '02', title: 'ตรวจเช็ครถ', desc: 'ช่างตรวจสภาพจริง ให้คำแนะนำที่เหมาะกับรถของคุณ' },
    { n: '03', title: 'แจ้งราคา', desc: 'ประเมินราคาตรงไปตรงมา ยืนยันก่อนเริ่มงานทุกครั้ง' },
    { n: '04', title: 'ลงมือทำ', desc: 'ช่างมืออาชีพทำงานละเอียด ใช้ผลิตภัณฑ์มาตรฐาน' },
    { n: '05', title: 'ตรวจสอบ', desc: 'ทดสอบงานก่อนส่งมอบ พร้อมอธิบายทุกจุด' },
  ];
  return (
    <section className="sec" style={{background:'var(--bg-2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
      <div className="container">
        <div className="sec-head" style={{justifyContent:'center',textAlign:'center'}}>
          <div style={{margin:'0 auto'}}>
            <div className="sec-eyebrow" style={{justifyContent:'center'}}>กระบวนการให้บริการ</div>
            <h2 className="sec-title" style={{margin:'0 auto'}}>ขั้นตอนการใช้บริการ<br/><span className="accent">ที่ AUTO MIX โคราช</span></h2>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16}} className="process-grid">
          {steps.map((s,i)=>(
            <div key={i} style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,padding:24,position:'relative'}}>
              <div style={{fontFamily:'Kanit',fontSize:44,fontWeight:800,color:'var(--accent)',lineHeight:1,marginBottom:16,opacity:.85}}>{s.n}</div>
              <h3 style={{fontSize:18,marginBottom:8}}>{s.title}</h3>
              <p style={{fontSize:13.5,color:'var(--text-dim)'}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoPricing({ show }) {
  if (!show) return null;
  const packages = [
    { brand: 'LIQUI MOLY', spec: 'Longtime High Tech 5W-30', price: '3,150', sub: 'รวมเปลี่ยนน้ำมันเครื่อง' },
    { brand: 'LIQUI MOLY', spec: 'T-Series 0W-20', price: '1,650', sub: 'รวมเปลี่ยนน้ำมันเครื่อง' },
    { brand: 'MOTUL', spec: '6100 5W-40 • ครบรอบร้าน', price: '1,111', sub: '4 ลิตร รถเบนซิน', highlight: true },
  ];
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">โปรโมชั่น</div>
            <h2 className="sec-title">ราคาพิเศษ<br/><span className="accent">น้ำมันเครื่อง</span></h2>
          </div>
          <p className="sec-sub">ราคารวมค่าบริการเปลี่ยนน้ำมันเครื่องแล้ว พร้อมตรวจเช็คฟรีในโปรโมชั่นที่กำหนด</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="promo-grid">
          {packages.map((p,i)=>(
            <div key={i} style={{
              background:p.highlight?'linear-gradient(180deg,rgba(255,193,7,.12),rgba(255,193,7,.02))':'var(--bg-card)',
              border:`1px solid ${p.highlight?'rgba(255,193,7,.35)':'var(--border)'}`,
              borderRadius:12,padding:28,position:'relative'
            }}>
              {p.highlight && <div style={{position:'absolute',top:-1,right:20,background:'var(--accent)',color:'#000',padding:'4px 12px',fontSize:11,fontWeight:700,borderRadius:'0 0 6px 6px',letterSpacing:'.05em'}}>ครบรอบร้าน</div>}
              <div style={{fontFamily:'Kanit',fontSize:14,fontWeight:700,color:'var(--accent)',letterSpacing:'.1em',marginBottom:6}}>{p.brand}</div>
              <div style={{fontSize:15,marginBottom:24,color:'var(--text-dim)'}}>{p.spec}</div>
              <div style={{display:'flex',alignItems:'baseline',gap:6,marginBottom:6}}>
                <span style={{fontFamily:'Kanit',fontSize:44,fontWeight:800,lineHeight:1}}>{p.price}</span>
                <span style={{fontSize:16,color:'var(--text-dim)'}}>บาท</span>
              </div>
              <div style={{fontSize:13,color:'var(--text-muted)',marginBottom:24}}>{p.sub}</div>
              <a href="tel:0990319888" className="btn btn-sm btn-primary" style={{width:'100%',justifyContent:'center'}}>จองคิวรับโปร</a>
            </div>
          ))}
        </div>
        <p style={{fontSize:13,color:'var(--text-muted)',marginTop:24,textAlign:'center'}}>* ราคาและโปรโมชั่นอาจมีการเปลี่ยนแปลง กรุณาสอบถามก่อนใช้บริการ</p>
      </div>
    </section>
  );
}

function ServicesPage() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.base = t.base;
    document.documentElement.dataset.density = t.density;
  }, [t.accent, t.base, t.density]);

  const services = [
    {
      id:'oil', eyebrow:'บริการยอดนิยม',
      title:'เปลี่ยนน้ำมันเครื่อง โคราช',
      seoH2:'ศูนย์เปลี่ยนน้ำมันเครื่องมาตรฐาน ใช้ผลิตภัณฑ์ LIQUI MOLY ZIC MOTUL ของแท้',
      desc:'เปลี่ยนถ่ายน้ำมันเครื่องรถยนต์ทุกรุ่น ทั้งรถยุโรปและรถเอเชีย เลือกสเปคน้ำมันที่เหมาะกับเครื่องยนต์ พร้อมเปลี่ยนกรองน้ำมันเครื่องและตรวจเช็คระดับของเหลวทั้งหมด',
      bullets:['น้ำมันแท้จากตัวแทน','เปลี่ยนกรองน้ำมันเครื่อง','ตรวจของเหลวทั้งระบบ','ช่างเลือกสเปคให้ตามรุ่นรถ','ล้างเครื่องยนต์ (Engine Flush)','รับประกันคุณภาพงาน'],
      benefits:'ฟรีตรวจเช็คสภาพรถ 20 จุด เมื่อใช้บริการเปลี่ยนน้ำมันเครื่องในโปรโมชั่นที่กำหนด',
      image:'images/oil/06-team-oil-pour.jpg'
    },
    {
      id:'suspension', eyebrow:'งานเชี่ยวชาญ',
      title:'ซ่อมช่วงล่าง โคราช',
      seoH2:'ศูนย์ซ่อมช่วงล่างรถยนต์โคราช เปลี่ยนโช้คอัพ ลูกหมาก ปีกนก ครอบคลุมรถยุโรป-เอเชีย',
      desc:'ตรวจเช็คและซ่อมช่วงล่างรถยนต์อย่างละเอียด เปลี่ยนโช้คอัพ ลูกหมาก ปีกนก ยางรัดเพลา ลูกปืนล้อ ด้วยอะไหล่คุณภาพและช่างที่ชำนาญเฉพาะด้าน',
      bullets:['ตรวจเช็คช่วงล่างฟรี','เปลี่ยนโช้คอัพคู่หน้า-หลัง','เปลี่ยนลูกหมาก ปีกนก','ลูกปืนล้อ ยางรัดเพลา','อะไหล่มาตรฐาน OE/OEM','รับประกันคุณภาพ'],
      benefits:'ตรวจเช็คช่วงล่างฟรี แจ้งราคาตรงไปตรงมาก่อนเริ่มงานทุกครั้ง ไม่มีบวกเพิ่ม',
      image:'images/suspension/04-propshaft-repair.jpg', reverse:true
    },
    {
      id:'brake', eyebrow:'ความปลอดภัย',
      title:'ซ่อมเบรครถยนต์ โคราช',
      seoH2:'ศูนย์ซ่อมเบรครถยนต์โคราช เปลี่ยนผ้าเบรค จานเบรค น้ำมันเบรค บริการครบจบในที่เดียว',
      desc:'เปลี่ยนผ้าเบรค จานเบรค ซ่อมแม่ปั๊มเบรค ลูกสูบเบรค เปลี่ยนและฟรัชชิ่งน้ำมันเบรค ด้วยอะไหล่คุณภาพสูง เพื่อความปลอดภัยสูงสุดในการขับขี่',
      bullets:['เปลี่ยนผ้าเบรคคุณภาพสูง','เจียร/เปลี่ยนจานเบรค','ซ่อมแม่ปั๊ม-ลูกสูบเบรค','ฟรัชชิ่งน้ำมันเบรค','ตรวจเช็คระบบ ABS','รับประกันการติดตั้ง'],
      benefits:'ตรวจเช็คระบบเบรคทั้งระบบฟรี เพื่อความปลอดภัยสูงสุดของคุณและครอบครัว',
      image:'images/brake/02-brake-work.jpg'
    },
    {
      id:'battery', eyebrow:'ระบบไฟฟ้า',
      title:'เปลี่ยนแบตเตอรี่รถยนต์',
      desc:'บริการเปลี่ยนแบตเตอรี่รถยนต์ มีให้เลือกตามรุ่นรถ แบรนด์ BEC, TTW และแบรนด์มาตรฐาน พร้อมตรวจสภาพระบบไฟฟ้าและไดชาร์จ',
      bullets:['แบตเตอรี่คุณภาพสูง','ตรวจไดชาร์จ-ไดสตาร์ท','วัดค่าแบตแม่นยำ','ติดตั้งพร้อมใช้งาน','รับประกันแบต','เปลี่ยนหน้าร้าน/นอกสถานที่'],
      image:'images/workshop/06-fortuner-hood.jpg', reverse:true
    },
    {
      id:'flushing', eyebrow:'ระบบเกียร์',
      title:'ฟรัชชิ่งเกียร์ + เปลี่ยนน้ำมันเกียร์',
      desc:'ฟรัชชิ่งระบบเกียร์ เปลี่ยนน้ำมันเกียร์ เปลี่ยนกรองเกียร์พร้อมปะเก็น ช่วยยืดอายุระบบเกียร์และเพิ่มประสิทธิภาพการเปลี่ยนเกียร์ให้นุ่มนวลขึ้น',
      bullets:['ฟรัชชิ่งเกียร์ด้วยเครื่องมือมาตรฐาน','เปลี่ยนกรองเกียร์+ปะเก็น','น้ำมันเกียร์มาตรฐาน','รถเกียร์ออโต้และเกียร์ธรรมดา','ตรวจเช็คระบบเกียร์','คำแนะนำการดูแล'],
      image:'images/transmission/01-liqui-moly-flush-machine.jpg'
    },
    {
      id:'headlight', eyebrow:'ดูแลภายนอก',
      title:'ขัดไฟหน้ารถยนต์',
      desc:'บริการขัดไฟหน้ารถยนต์ให้ใสเหมือนใหม่ พร้อมเคลือบป้องกัน UV เพิ่มความปลอดภัยในการขับขี่เวลากลางคืนและทำให้รถของคุณดูใหม่ขึ้น',
      bullets:['ขัดไฟหน้าทั้ง 2 ข้าง','ขัดละเอียดหลายขั้นตอน','เคลือบป้องกัน UV','ยืดอายุความใส','เพิ่มความสว่างไฟหน้า','เพิ่มมูลค่ารถ'],
      image:'images/headlight/02-automix-after.jpg', reverse:true
    },
  ];

  return (
    <>
      <TopBar />
      <Header active="services" />
      <ServiceHero />
      <ServiceQuickNav />
      {services.map((s, i) => <ServiceBlock key={s.id} {...s} />)}
      <PromoPricing show={t.showPromo} />
      <ProcessSection />
      <CTABanner />
      <Footer />
      <Floating />
      <TweaksPanel>
        <TweakSection label="Appearance" />
        <TweakRadio label="Accent" value={t.accent} options={['yellow', 'orange', 'mixed']} onChange={v => setTweak('accent', v)} />
        <TweakRadio label="Base tone" value={t.base} options={['dark', 'light']} onChange={v => setTweak('base', v)} />
        <TweakRadio label="Density" value={t.density} options={['compact', 'regular']} onChange={v => setTweak('density', v)} />
        <TweakSection label="Content" />
        <TweakToggle label="Show promo pricing" value={t.showPromo} onChange={v => setTweak('showPromo', v)} />
      </TweaksPanel>
      <style>{`
        @media (max-width:900px){
          .svc-block{grid-template-columns:1fr !important; gap:32px !important}
          .svc-block>div:first-child{order:1 !important}
          .svc-block>div:last-child{order:2 !important}
          .process-grid{grid-template-columns:repeat(2,1fr) !important}
          .promo-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ServicesPage />);
