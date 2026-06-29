// about.jsx — About page

function AboutPage() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.base = t.base;
    document.documentElement.dataset.density = t.density;
  }, [t.accent, t.base, t.density]);

  const values = [
    { icon: <Icon.Shield />, title: 'ซื่อสัตย์กับลูกค้า', desc: 'แจ้งราคาตรงไปตรงมา ไม่บวกเพิ่ม ไม่เสนอบริการที่ไม่จำเป็น' },
    { icon: <Icon.Tool />, title: 'ช่างมืออาชีพ', desc: 'ทีมช่างที่มีประสบการณ์สูง ผ่านงานรถยุโรปและรถเอเชียหลากหลายรุ่น' },
    { icon: <Icon.Star />, title: 'ผลิตภัณฑ์มาตรฐาน', desc: 'ใช้เฉพาะผลิตภัณฑ์ที่ได้มาตรฐานสากลจากแบรนด์ที่เชื่อถือได้' },
    { icon: <Icon.Price />, title: 'คุ้มค่าราคาดี', desc: 'ราคายุติธรรม คุ้มค่ากับคุณภาพงานและผลิตภัณฑ์ที่เลือกใช้' },
  ];
  const team = [
    { name: 'ช่างเอ', role: 'หัวหน้าช่าง', exp: 'ประสบการณ์ 15+ ปี รถยุโรป', initial: 'อ', img: 'images/workshop/11-mechanic-truck.jpg' },
    { name: 'ช่างบี', role: 'ช่างช่วงล่าง', exp: 'ประสบการณ์ 10+ ปี ช่วงล่างและน้ำมันเครื่อง', initial: 'บ', img: 'images/suspension/06-propshaft-inspection.jpg' },
    { name: 'ช่างซี', role: 'ช่างระบบเกียร์', exp: 'ประสบการณ์ 12+ ปี ฟรัชชิ่งเกียร์ออโต้และ CVT', initial: 'ซ', img: 'images/workshop/01-mechanic-dipstick.jpg' },
    { name: 'ช่างดี', role: 'ช่างดูแลภายนอก', exp: 'ประสบการณ์ 8+ ปี ขัดไฟหน้าและเคลือบ', initial: 'ด', img: 'images/workshop/08-mechanic-dipstick-2.jpg' },
  ];

  return (
    <>
      <TopBar />
      <Header active="about" />
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb"><a href="index.html">หน้าแรก</a> <span>/</span> <span>เกี่ยวกับเรา</span></div>
          <h1>เกี่ยวกับ <span className="accent">AUTO MIX</span></h1>
          <p>ศูนย์บริการรถยนต์มาตรฐานในโคราช ที่ลูกค้ามากกว่า 4.1K ไว้วางใจให้ดูแลรถของพวกเขา</p>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:56,alignItems:'center'}} className="about-grid">
            <div>
              <div className="sec-eyebrow">เรื่องราวของเรา</div>
              <h2 className="sec-title" style={{fontSize:'clamp(28px,3vw,40px)'}}>ศูนย์บริการรถยนต์ที่<br/><span className="accent">ใส่ใจทุกคัน</span></h2>
              <p style={{color:'var(--text-dim)',fontSize:16,marginBottom:20,textWrap:'pretty'}}>
                AUTO MIX เริ่มต้นจากความตั้งใจที่จะเป็นศูนย์บริการรถยนต์ที่ลูกค้าโคราชไว้วางใจได้ ด้วยช่างผู้มีประสบการณ์ ผลิตภัณฑ์มาตรฐานระดับโลก และการบริการที่ซื่อสัตย์โปร่งใส
              </p>
              <p style={{color:'var(--text-dim)',fontSize:16,marginBottom:28,textWrap:'pretty'}}>
                เรามุ่งเน้นการดูแลรถเสมือนเป็นรถของเราเอง แนะนำสิ่งที่เหมาะสมกับรถของลูกค้าแต่ละคัน แจ้งราคาก่อนเริ่มงานทุกครั้ง และไม่เสนอบริการที่ลูกค้าไม่จำเป็น
              </p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,padding:'24px 0',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
                <div><div style={{fontFamily:'Kanit',fontSize:32,fontWeight:800,color:'var(--accent)'}}>10+</div><div style={{fontSize:13,color:'var(--text-dim)'}}>ปีที่ให้บริการ</div></div>
                <div><div style={{fontFamily:'Kanit',fontSize:32,fontWeight:800,color:'var(--accent)'}}>4.1K+</div><div style={{fontSize:13,color:'var(--text-dim)'}}>ลูกค้าที่ไว้ใจ</div></div>
                <div><div style={{fontFamily:'Kanit',fontSize:32,fontWeight:800,color:'var(--accent)'}}>9+</div><div style={{fontSize:13,color:'var(--text-dim)'}}>แบรนด์มาตรฐาน</div></div>
              </div>
            </div>
            <div style={{aspectRatio:'4/5',borderRadius:14,overflow:'hidden',border:'1px solid var(--border)',position:'relative'}}>
              <img src="images/hero/04-team-products.jpg" alt="ทีม AUTO MIX โคราช" loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 55%,rgba(0,0,0,.55) 100%)',pointerEvents:'none'}}></div>
              <div style={{position:'absolute',bottom:20,left:20,right:20,display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:16,zIndex:2}}>
                <div>
                  <div style={{fontSize:12,fontWeight:700,color:'var(--accent)',letterSpacing:'.12em',textTransform:'uppercase',marginBottom:4}}>AUTO MIX โคราช</div>
                  <div style={{fontSize:18,fontWeight:700,fontFamily:'Kanit',color:'#fff'}}>ครอบครัว AUTO MIX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{background:'var(--bg-2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="container">
          <div className="sec-head">
            <div>
              <div className="sec-eyebrow">คุณค่าที่เรายึดถือ</div>
              <h2 className="sec-title">สิ่งที่ทำให้<br/><span className="accent">AUTO MIX แตกต่าง</span></h2>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}} className="values-grid">
            {values.map((v,i)=>(
              <div key={i} style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,padding:28}}>
                <div style={{width:48,height:48,borderRadius:10,background:'rgba(255,193,7,.1)',color:'var(--accent)',display:'grid',placeItems:'center',marginBottom:20}}>{v.icon}</div>
                <h3 style={{fontSize:18,marginBottom:8}}>{v.title}</h3>
                <p style={{fontSize:14,color:'var(--text-dim)'}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <div>
              <div className="sec-eyebrow">ทีมช่างของเรา</div>
              <h2 className="sec-title">ทีมช่างผู้เชี่ยวชาญ<br/><span className="accent">พร้อมดูแลรถคุณ</span></h2>
            </div>
            <p className="sec-sub">ทีมช่างที่ผ่านการฝึกและมีประสบการณ์จริงในการซ่อมรถยุโรปและรถเอเชียมาอย่างยาวนาน</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}} className="team-grid">
            {team.map((m,i)=>(
              <div key={i} style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
                <div style={{aspectRatio:'1/1',position:'relative',overflow:'hidden',background:'var(--bg-3)'}}>
                  <img src={m.img} alt={m.name} loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',display:'block',filter:'saturate(.9)'}} />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 45%,rgba(0,0,0,.75) 100%)'}}></div>
                  <div style={{position:'absolute',top:12,left:12,width:40,height:40,borderRadius:'50%',background:'var(--accent)',color:'#000',display:'grid',placeItems:'center',fontFamily:'Kanit',fontWeight:800,fontSize:18,zIndex:2}}>{m.initial}</div>
                </div>
                <div style={{padding:20}}>
                  <h3 style={{fontSize:18,marginBottom:4}}>{m.name}</h3>
                  <div style={{fontSize:13,color:'var(--accent)',fontWeight:600,marginBottom:8}}>{m.role}</div>
                  <div style={{fontSize:13,color:'var(--text-dim)'}}>{m.exp}</div>
                </div>
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
      <style>{`@media (max-width:900px){.about-grid{grid-template-columns:1fr !important}.values-grid,.team-grid{grid-template-columns:repeat(2,1fr) !important}}`}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AboutPage />);
