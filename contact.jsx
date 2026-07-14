// contact.jsx — Contact page

function ContactPage() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.base = t.base;
    document.documentElement.dataset.density = t.density;
  }, [t.accent, t.base, t.density]);

  return (
    <>
      <TopBar />
      <Header active="contact" />
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb"><a href="index.html">หน้าแรก</a> <span>/</span> <span>ติดต่อ</span></div>
          <h1>ติดต่อ <span className="accent">Auto Mix Shop</span></h1>
          <p>จองคิว สอบถามราคา หรือปรึกษาช่าง ได้หลายช่องทาง เปิดทุกวัน 08:30 – 17:30 น.</p>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:56}} className="contact-cards">
            {[
              {icon:<Icon.Phone />,label:'โทรศัพท์',main:'099-031-9888',sub:'โทรจองคิวหรือสอบถามราคา',href:'tel:0990319888',cta:'โทรเลย'},
              {icon:<Icon.Line />,label:'LINE',main:'@automix',sub:'สอบถาม สั่งซื้อสินค้า จองคิว',href:'https://lin.ee/LIl9L9F',cta:'แอด LINE',line:true},
            ].map((c,i)=>(
              <a key={i} href={c.href} style={{background:c.line?'linear-gradient(135deg,#06C755,#05B84C)':'linear-gradient(135deg,var(--accent),#FFB300)',color:c.line?'#fff':'#000',borderRadius:14,padding:'32px',display:'flex',gap:20,alignItems:'center',textDecoration:'none',transition:'transform .2s'}}>
                <div style={{width:56,height:56,borderRadius:12,background:'rgba(0,0,0,.15)',display:'grid',placeItems:'center',flexShrink:0}}>{c.icon}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:12,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',opacity:.7}}>{c.label}</div>
                  <div style={{fontSize:28,fontWeight:800,fontFamily:'Kanit',lineHeight:1.1,margin:'4px 0'}}>{c.main}</div>
                  <div style={{fontSize:14,opacity:.75}}>{c.sub}</div>
                </div>
                <div style={{background:'rgba(0,0,0,.15)',padding:'10px 16px',borderRadius:8,fontWeight:600,fontSize:14,flexShrink:0}}>{c.cta} →</div>
              </a>
            ))}
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:32}} className="contact-grid">
            <div>
              <h2 className="sec-title" style={{fontSize:28,marginBottom:24}}>ช่องทางติดต่ออื่น</h2>
              <div style={{display:'flex',flexDirection:'column',gap:16}}>
                {[
                  {icon:<Icon.Map />,label:'ที่อยู่',val:'353/1 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000',note:'ใกล้แยกเทอร์มินอล ติดธนาคาร CIMB'},
                  {icon:<Icon.Clock />,label:'เวลาทำการ',val:'เปิดทุกวัน 08:30 – 17:30 น.',note:'วันหยุดเทศกาลจะประกาศแจ้งล่วงหน้า'},
                  {icon:<Icon.Email />,label:'อีเมล',val:'automix.amg@gmail.com',note:'สอบถามการสั่งซื้อสินค้า'},
                  {icon:<Icon.FB />,label:'Facebook',val:'Auto Mix',note:'4.1K followers'},
                ].map((c,i)=>(
                  <div key={i} style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:10,padding:'20px',display:'flex',gap:16,alignItems:'flex-start'}}>
                    <div style={{width:36,height:36,borderRadius:8,background:'rgba(255,193,7,.1)',color:'var(--accent)',display:'grid',placeItems:'center',flexShrink:0}}>{c.icon}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:12,color:'var(--text-muted)',fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',marginBottom:4}}>{c.label}</div>
                      <div style={{fontSize:16,fontWeight:500,marginBottom:4}}>{c.val}</div>
                      <div style={{fontSize:13,color:'var(--text-dim)'}}>{c.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="sec-title" style={{fontSize:28,marginBottom:24}}>ส่งข้อความถึงเรา</h2>
              <form style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,padding:28,display:'flex',flexDirection:'column',gap:16}} onSubmit={e=>{e.preventDefault();alert('ขอบคุณค่ะ เราจะติดต่อกลับโดยเร็วที่สุด')}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                  <div>
                    <label style={{fontSize:13,color:'var(--text-dim)',display:'block',marginBottom:6}}>ชื่อ</label>
                    <input required style={inp} placeholder="ชื่อของคุณ" />
                  </div>
                  <div>
                    <label style={{fontSize:13,color:'var(--text-dim)',display:'block',marginBottom:6}}>เบอร์โทร</label>
                    <input required style={inp} placeholder="08X-XXX-XXXX" />
                  </div>
                </div>
                <div>
                  <label style={{fontSize:13,color:'var(--text-dim)',display:'block',marginBottom:6}}>รุ่นรถและบริการที่สนใจ</label>
                  <select style={inp} defaultValue="">
                    <option value="" disabled>เลือกบริการ</option>
                    <option>เปลี่ยนน้ำมันเครื่อง</option>
                    <option>ซ่อมช่วงล่าง</option>
                    <option>ฟรัชชิ่งเกียร์</option>
                    <option>ขัดไฟหน้า</option>
                    <option>อื่น ๆ</option>
                  </select>
                </div>
                <div>
                  <label style={{fontSize:13,color:'var(--text-dim)',display:'block',marginBottom:6}}>รายละเอียด</label>
                  <textarea rows={5} style={{...inp,minHeight:120,padding:12,resize:'vertical'}} placeholder="เช่น รุ่นรถ ปี และสิ่งที่ต้องการให้ตรวจเช็ค..." />
                </div>
                <button type="submit" className="btn btn-primary" style={{justifyContent:'center'}}><Icon.Phone /> ส่งข้อความ</button>
                <p style={{fontSize:12,color:'var(--text-muted)',textAlign:'center',margin:0}}>หรือโทรตรง 099-031-9888 สะดวกที่สุดในการจองคิว</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{paddingTop:0}}>
        <div className="container">
          <div style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:14,overflow:'hidden'}}>
            <div style={{padding:'24px 28px',borderBottom:'1px solid var(--border)',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
              <div>
                <div style={{fontSize:12,color:'var(--accent)',fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:4}}>แผนที่ร้าน</div>
                <div style={{fontSize:17,fontWeight:600}}>353/1 ถ.มิตรภาพ ใกล้แยกเทอร์มินอล</div>
              </div>
              <a href="https://www.google.com/maps" target="_blank" className="btn btn-sm btn-outline"><Icon.Map /> เปิดใน Google Maps</a>
            </div>
            <div style={{aspectRatio:'16/7',background:'repeating-linear-gradient(45deg,rgba(255,193,7,.03) 0 24px,rgba(255,193,7,.06) 24px 48px)',display:'grid',placeItems:'center',position:'relative'}}>
              <div style={{textAlign:'center'}}>
                <div style={{width:60,height:60,borderRadius:'50% 50% 50% 0',background:'var(--accent)',transform:'rotate(-45deg)',margin:'0 auto 16px',display:'grid',placeItems:'center'}}>
                  <div style={{transform:'rotate(45deg)',color:'#000'}}><Icon.Map /></div>
                </div>
                <div style={{fontFamily:'ui-monospace,monospace',fontSize:13,color:'var(--text-muted)'}}>[ Google Maps embed — 14.9799, 102.0977 ]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Floating />
      <TweaksPanel>
        <TweakSection label="Appearance" />
        <TweakRadio label="Accent" value={t.accent} options={['yellow', 'orange', 'mixed']} onChange={v => setTweak('accent', v)} />
        <TweakRadio label="Base tone" value={t.base} options={['dark', 'light']} onChange={v => setTweak('base', v)} />
      </TweaksPanel>
      <style>{`@media (max-width:900px){.contact-cards,.contact-grid{grid-template-columns:1fr !important}}`}</style>
    </>
  );
}

const inp = {
  width:'100%',padding:'10px 14px',background:'var(--bg-2)',border:'1px solid var(--border)',borderRadius:8,color:'var(--text)',fontFamily:'inherit',fontSize:14,outline:'none'
};

ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage />);
