// service-landing.jsx — reusable local-SEO landing template for single-service pages
// Each dedicated service page (เปลี่ยนน้ำมันเครื่อง / ช่วงล่าง / ฟรัชชิ่งเกียร์ / ขัดไฟหน้า)
// provides a `data` object and renders <ServiceLanding data={data} />.

const SL_ALL_SERVICES = [
  { href:'oil-change-korat.html', key:'oil', label:'เปลี่ยนน้ำมันเครื่อง โคราช', desc:'น้ำมันแท้ LIQUI MOLY ZIC MOTUL พร้อมเปลี่ยนกรอง' },
  { href:'suspension-korat.html', key:'suspension', label:'ซ่อมช่วงล่างรถยนต์ โคราช', desc:'โช้คอัพ ลูกหมาก ปีกนก อะไหล่มาตรฐาน OE/OEM' },
  { href:'transmission-flush-korat.html', key:'flushing', label:'ฟรัชชิ่งเกียร์ โคราช', desc:'ล้างระบบเกียร์ เปลี่ยนน้ำมันเกียร์ ยืดอายุเกียร์' },
  { href:'headlight-restoration-korat.html', key:'headlight', label:'ขัดไฟหน้ารถยนต์ โคราช', desc:'ขัดใสเหมือนใหม่ เคลือบป้องกัน UV' },
];

function SL_Hero({ d }) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb">
          <a href="index.html">หน้าแรก</a> <span>/</span>{' '}
          <a href="services.html">บริการ</a> <span>/</span>{' '}
          <span>{d.breadcrumb}</span>
        </div>
        <h1>{d.hero.title} <span className="accent">{d.hero.accent}</span></h1>
        <p>{d.hero.sub}</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:24}}>
          <a href="tel:0990319888" className="btn btn-primary"><Icon.Phone /> โทรจองคิว 099-031-9888</a>
          <a href="https://lin.ee/LIl9L9F" className="btn btn-outline"><Icon.Line /> จองผ่าน LINE</a>
        </div>
      </div>
    </section>
  );
}

function SL_Stats({ stats }) {
  if (!stats) return null;
  return (
    <div style={{background:'var(--bg-2)',borderBottom:'1px solid var(--border)'}}>
      <div className="container sl-stats" style={{display:'grid',gridTemplateColumns:`repeat(${stats.length},1fr)`,gap:16,padding:'28px 24px'}}>
        {stats.map((s,i)=>(
          <div key={i} style={{textAlign:'center'}}>
            <div style={{fontFamily:'Kanit',fontSize:'clamp(24px,3vw,34px)',fontWeight:800,color:'var(--accent)',lineHeight:1.1}}>{s.num}</div>
            <div style={{fontSize:13.5,color:'var(--text-dim)',marginTop:6}}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SL_Intro({ d }) {
  return (
    <section className="sec">
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1.1fr 1fr',gap:56,alignItems:'center'}} className="sl-split">
          <div>
            <div className="sec-eyebrow">{d.intro.eyebrow}</div>
            <h2 className="sec-title" style={{fontSize:'clamp(26px,3vw,38px)'}}>{d.intro.h2}</h2>
            {d.intro.paragraphs.map((p,i)=>(
              <p key={i} className="sec-sub" style={{marginBottom:16}}>{p}</p>
            ))}
            <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:8}}>
              <a href="tel:0990319888" className="btn btn-primary"><Icon.Phone /> โทรปรึกษาช่าง</a>
              <a href="https://lin.ee/LIl9L9F" className="btn btn-outline"><Icon.Line /> สอบถามราคา</a>
            </div>
          </div>
          <div>
            <div style={{aspectRatio:'4/3',borderRadius:14,overflow:'hidden',border:'1px solid var(--border)',background:'var(--bg-card)',position:'relative'}}>
              <img src={d.intro.image} alt={d.hero.title + ' ' + d.hero.accent} loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 55%,rgba(0,0,0,.45) 100%)',pointerEvents:'none'}}></div>
              {d.intro.caption && (
                <div style={{position:'absolute',bottom:16,left:16,background:'rgba(0,0,0,.8)',backdropFilter:'blur(8px)',padding:'8px 12px',borderRadius:8,fontSize:12,border:'1px solid var(--border-strong)',zIndex:2}}>
                  {d.intro.caption}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SL_Included({ d }) {
  return (
    <section className="sec" style={{background:'var(--bg-2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">{d.included.eyebrow || 'รายละเอียดบริการ'}</div>
            <h2 className="sec-title">{d.included.h2}</h2>
          </div>
          {d.included.sub && <p className="sec-sub">{d.included.sub}</p>}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="sl-included-grid">
          {d.included.items.map((it,i)=>(
            <div key={i} style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,padding:'22px 22px 24px'}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
                <span style={{color:'var(--accent)',flexShrink:0}}><Icon.Check /></span>
                <h3 style={{fontSize:16.5,margin:0}}>{it.title}</h3>
              </div>
              <p style={{fontSize:14,color:'var(--text-dim)',margin:0}}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SL_Symptoms({ d }) {
  if (!d.symptoms) return null;
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">{d.symptoms.eyebrow || 'สัญญาณเตือน'}</div>
            <h2 className="sec-title">{d.symptoms.h2}</h2>
          </div>
          {d.symptoms.sub && <p className="sec-sub">{d.symptoms.sub}</p>}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'14px 20px'}} className="sl-sympt-grid">
          {d.symptoms.items.map((s,i)=>(
            <div key={i} style={{display:'flex',gap:14,alignItems:'flex-start',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:10,padding:'18px 20px'}}>
              <div style={{fontFamily:'Kanit',fontSize:22,fontWeight:800,color:'var(--accent)',lineHeight:1,flexShrink:0,width:30}}>{String(i+1).padStart(2,'0')}</div>
              <div>
                <h3 style={{fontSize:15.5,margin:'0 0 4px'}}>{s.title}</h3>
                <p style={{fontSize:13.5,color:'var(--text-dim)',margin:0}}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SL_Process({ steps }) {
  const fallback = [
    { n:'01', title:'จองคิว', desc:'โทรหรือ LINE แจ้งบริการที่ต้องการ เรายืนยันคิวให้ทันที' },
    { n:'02', title:'ตรวจเช็ครถ', desc:'ช่างตรวจสภาพจริง ให้คำแนะนำที่เหมาะกับรถของคุณ' },
    { n:'03', title:'แจ้งราคา', desc:'ประเมินราคาตรงไปตรงมา ยืนยันก่อนเริ่มงานทุกครั้ง' },
    { n:'04', title:'ลงมือทำ', desc:'ช่างมืออาชีพทำงานละเอียด ใช้ผลิตภัณฑ์มาตรฐาน' },
    { n:'05', title:'ส่งมอบ', desc:'ทดสอบงานก่อนส่งมอบ พร้อมอธิบายทุกจุด' },
  ];
  const s = steps || fallback;
  return (
    <section className="sec" style={{background:'var(--bg-2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
      <div className="container">
        <div className="sec-head" style={{justifyContent:'center',textAlign:'center'}}>
          <div style={{margin:'0 auto'}}>
            <div className="sec-eyebrow" style={{justifyContent:'center'}}>กระบวนการให้บริการ</div>
            <h2 className="sec-title" style={{margin:'0 auto'}}>ขั้นตอนการใช้บริการ<br/><span className="accent">ที่ AUTO MIX โคราช</span></h2>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:`repeat(${s.length},1fr)`,gap:16}} className="process-grid">
          {s.map((st,i)=>(
            <div key={i} style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,padding:24}}>
              <div style={{fontFamily:'Kanit',fontSize:44,fontWeight:800,color:'var(--accent)',lineHeight:1,marginBottom:16,opacity:.85}}>{st.n}</div>
              <h3 style={{fontSize:18,marginBottom:8}}>{st.title}</h3>
              <p style={{fontSize:13.5,color:'var(--text-dim)'}}>{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SL_Pricing({ d }) {
  if (!d.pricing) return null;
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">{d.pricing.eyebrow || 'ราคา / โปรโมชั่น'}</div>
            <h2 className="sec-title">{d.pricing.h2}</h2>
          </div>
          {d.pricing.sub && <p className="sec-sub">{d.pricing.sub}</p>}
        </div>
        <div style={{display:'grid',gridTemplateColumns:`repeat(${Math.min(d.pricing.packages.length,3)},1fr)`,gap:16}} className="promo-grid">
          {d.pricing.packages.map((p,i)=>(
            <div key={i} style={{
              background:p.highlight?'linear-gradient(180deg,rgba(255,193,7,.12),rgba(255,193,7,.02))':'var(--bg-card)',
              border:`1px solid ${p.highlight?'rgba(255,193,7,.35)':'var(--border)'}`,
              borderRadius:12,padding:28,position:'relative'
            }}>
              {p.tag && <div style={{position:'absolute',top:-1,right:20,background:'var(--accent)',color:'#000',padding:'4px 12px',fontSize:11,fontWeight:700,borderRadius:'0 0 6px 6px',letterSpacing:'.05em'}}>{p.tag}</div>}
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

function SL_Gallery({ d }) {
  if (!d.gallery || !d.gallery.length) return null;
  return (
    <section className="sec" style={{background:'var(--bg-2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
      <div className="container">
        <div className="sec-head" style={{justifyContent:'center',textAlign:'center'}}>
          <div style={{margin:'0 auto'}}>
            <div className="sec-eyebrow" style={{justifyContent:'center'}}>ผลงานจริง</div>
            <h2 className="sec-title" style={{margin:'0 auto'}}>{d.gallery_title || 'ตัวอย่างงานบริการ'}</h2>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}} className="sl-gallery-grid">
          {d.gallery.map((g,i)=>(
            <div key={i} style={{aspectRatio:'4/3',borderRadius:12,overflow:'hidden',border:'1px solid var(--border)',background:'var(--bg-card)'}}>
              <img src={g.src} alt={g.alt} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SL_ServiceArea({ d }) {
  const areas = (d.serviceArea && d.serviceArea.areas) || [
    'อ.เมืองนครราชสีมา','ถนนมิตรภาพ','หัวทะเล','จอหอ','หนองไผ่ล้อม','บ้านเกาะ',
    'ปักธงชัย','สีคิ้ว','ปากช่อง','โชคชัย','พิมาย','สูงเนิน'
  ];
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">พื้นที่ให้บริการ</div>
            <h2 className="sec-title">{(d.serviceArea && d.serviceArea.h2) || 'ให้บริการลูกค้าทั่ว โคราช และใกล้เคียง'}</h2>
          </div>
          <p className="sec-sub">{(d.serviceArea && d.serviceArea.sub) || 'AUTO MIX ตั้งอยู่บนถนนมิตรภาพ ใกล้แยกเทอร์มินอล ติดธนาคาร CIMB เดินทางสะดวกจากทุกพื้นที่ในนครราชสีมา'}</p>
        </div>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          {areas.map((a,i)=>(
            <span key={i} style={{display:'inline-flex',alignItems:'center',gap:8,background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:999,padding:'8px 16px',fontSize:14}}>
              <span style={{color:'var(--accent)'}}><Icon.Map /></span>{a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SL_FAQItem({ q, a, open, onToggle }) {
  return (
    <div style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
      <button onClick={onToggle} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,padding:'18px 22px',background:'transparent',border:'none',cursor:'pointer',textAlign:'left',color:'inherit'}}>
        <span style={{fontFamily:'Kanit',fontWeight:600,fontSize:16}}>{q}</span>
        <span style={{color:'var(--accent)',fontSize:22,flexShrink:0,transform:open?'rotate(45deg)':'none',transition:'transform .2s'}}>+</span>
      </button>
      {open && <div style={{padding:'0 22px 20px',fontSize:14.5,color:'var(--text-dim)',lineHeight:1.7}}>{a}</div>}
    </div>
  );
}

function SL_FAQ({ faqs }) {
  if (!faqs || !faqs.length) return null;
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section className="sec" style={{background:'var(--bg-2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
      <div className="container" style={{maxWidth:840}}>
        <div className="sec-head" style={{justifyContent:'center',textAlign:'center'}}>
          <div style={{margin:'0 auto'}}>
            <div className="sec-eyebrow" style={{justifyContent:'center'}}>คำถามที่พบบ่อย</div>
            <h2 className="sec-title" style={{margin:'0 auto'}}>คำถามที่พบบ่อย <span className="accent">FAQ</span></h2>
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {faqs.map((f,i)=>(
            <SL_FAQItem key={i} q={f.q} a={f.a} open={openIdx===i} onToggle={()=>setOpenIdx(openIdx===i?-1:i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SL_Related({ related }) {
  const items = related || SL_ALL_SERVICES;
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">บริการอื่น ๆ</div>
            <h2 className="sec-title">บริการอื่นที่ <span className="accent">AUTO MIX โคราช</span></h2>
          </div>
          <p className="sec-sub"><a href="services.html" style={{color:'var(--accent)'}}>ดูบริการทั้งหมด →</a></p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))',gap:16}} className="sl-related-grid">
          {items.map((r,i)=>(
            <a key={i} href={r.href} style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,padding:'22px 20px',textDecoration:'none',color:'inherit',display:'flex',flexDirection:'column',gap:8}}>
              <h3 style={{fontSize:16,margin:0}}>{r.label}</h3>
              <p style={{fontSize:13.5,color:'var(--text-dim)',margin:0,flex:1}}>{r.desc}</p>
              <span style={{color:'var(--accent)',fontSize:13.5,display:'inline-flex',alignItems:'center',gap:6,marginTop:4}}>ดูรายละเอียด <Icon.ArrowRight /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceLanding({ data }) {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.base = t.base;
    document.documentElement.dataset.density = t.density;
  }, [t.accent, t.base, t.density]);

  // related links exclude the current page
  const related = (data.related || SL_ALL_SERVICES).filter(r => r.key !== data.pageKey);

  return (
    <>
      <TopBar />
      <Header active="services" />
      <SL_Hero d={data} />
      <SL_Stats stats={data.stats} />
      <SL_Intro d={data} />
      <SL_Included d={data} />
      <SL_Symptoms d={data} />
      <SL_Gallery d={data} />
      {t.showPromo && <SL_Pricing d={data} />}
      <SL_Process steps={data.process} />
      <SL_ServiceArea d={data} />
      <SL_FAQ faqs={data.faqs} />
      <SL_Related related={related} />
      <CTABanner />
      <Footer />
      <Floating />
      <TweaksPanel>
        <TweakSection label="Appearance" />
        <TweakRadio label="Accent" value={t.accent} options={['yellow', 'orange', 'mixed']} onChange={v => setTweak('accent', v)} />
        <TweakRadio label="Base tone" value={t.base} options={['dark', 'light']} onChange={v => setTweak('base', v)} />
        <TweakRadio label="Density" value={t.density} options={['compact', 'regular']} onChange={v => setTweak('density', v)} />
        {data.pricing && (<><TweakSection label="Content" /><TweakToggle label="Show pricing" value={t.showPromo} onChange={v => setTweak('showPromo', v)} /></>)}
      </TweaksPanel>
      <style>{`
        @media (max-width:900px){
          .sl-split{grid-template-columns:1fr !important; gap:32px !important}
          .sl-included-grid{grid-template-columns:1fr !important}
          .sl-sympt-grid{grid-template-columns:1fr !important}
          .sl-gallery-grid{grid-template-columns:repeat(2,1fr) !important}
          .sl-related-grid{grid-template-columns:repeat(2,1fr) !important}
          .process-grid{grid-template-columns:repeat(2,1fr) !important}
          .promo-grid{grid-template-columns:1fr !important}
        }
        @media (max-width:560px){
          .sl-gallery-grid{grid-template-columns:1fr !important}
          .sl-related-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  );
}

Object.assign(window, { ServiceLanding });
