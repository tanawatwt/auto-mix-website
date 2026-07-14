// blog-detail.jsx — Blog detail page

function BlogDetailPage() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.base = t.base;
    document.documentElement.dataset.density = t.density;
  }, [t.accent, t.base, t.density]);

  return (
    <>
      <TopBar />
      <Header active="blog" />
      <article>
        <div style={{background:'radial-gradient(ellipse at 50% 0%,rgba(255,193,7,.08),transparent 60%),var(--bg)',borderBottom:'1px solid var(--border)',padding:'60px 0'}}>
          <div className="container" style={{maxWidth:820}}>
            <div className="breadcrumb" style={{display:'inline-flex',gap:8,alignItems:'center',fontSize:13,color:'var(--text-muted)',marginBottom:20}}>
              <a href="index.html">หน้าแรก</a> <span>/</span> <a href="blog.html">บทความ</a> <span>/</span> <span>น้ำมันเครื่อง</span>
            </div>
            <span className="blog-cat">น้ำมันเครื่อง</span>
            <h1 style={{fontSize:'clamp(32px,4vw,52px)',lineHeight:1.1,margin:'14px 0 20px',textWrap:'balance'}}>เลือกน้ำมันเครื่องอย่างไรให้เหมาะกับรถยุโรปและรถเอเชีย</h1>
            <div style={{display:'flex',gap:20,color:'var(--text-muted)',fontSize:14,flexWrap:'wrap'}}>
              <span>24 เมษายน 2026</span>
              <span>โดย ทีมช่าง Auto Mix Shop</span>
              <span>อ่าน 6 นาที</span>
            </div>
          </div>
        </div>
        <div className="container" style={{maxWidth:820,padding:'56px 24px'}}>
          <div style={{aspectRatio:'16/9',borderRadius:14,overflow:'hidden',marginBottom:48,border:'1px solid var(--border)',position:'relative'}}>
            <img src="images/automix/automix-engine-oil-pouring-oil-01.jpg" alt="เลือกน้ำมันเครื่อง" loading="eager" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
          </div>
          <div style={{fontSize:17,lineHeight:1.8,color:'var(--text)'}}>
            <p style={{fontSize:19,color:'var(--text-dim)',marginBottom:32,fontWeight:500,textWrap:'pretty'}}>
              การเลือกน้ำมันเครื่องที่ถูกต้องเป็นสิ่งสำคัญในการยืดอายุเครื่องยนต์ เพิ่มประสิทธิภาพ และรักษาความน่าเชื่อถือในระยะยาว ขึ้นอยู่กับรุ่นรถ ประเภทเครื่องยนต์ ระยะทางที่ขับ และคำแนะนำจากผู้ผลิต
            </p>
            <h2 style={{fontSize:28,marginTop:40,marginBottom:16}}>1. เบอร์ความหนืดของน้ำมันเครื่อง</h2>
            <p style={{marginBottom:20,color:'var(--text-dim)'}}>
              เบอร์น้ำมันเครื่อง เช่น 5W-30 หรือ 0W-20 บอกถึงความหนืดของน้ำมันที่อุณหภูมิต่ำและสูง เบอร์ที่ต่ำลงจะไหลได้ดีเมื่อเย็น เหมาะกับอากาศเย็น ส่วนเบอร์สูงจะรักษาฟิล์มน้ำมันได้ดีที่อุณหภูมิสูง
            </p>
            <h2 style={{fontSize:28,marginTop:40,marginBottom:16}}>2. น้ำมันสังเคราะห์เต็มรูปแบบ vs. กึ่งสังเคราะห์</h2>
            <p style={{marginBottom:20,color:'var(--text-dim)'}}>
              น้ำมันสังเคราะห์ (Fully Synthetic) เช่น LIQUI MOLY Longtime High Tech 5W-30 ให้การปกป้องที่ดีกว่าและอายุการใช้งานยาวนานกว่า ส่วนน้ำมันกึ่งสังเคราะห์เป็นทางเลือกที่ประหยัดกว่าสำหรับรถทั่วไป
            </p>
            <h2 style={{fontSize:28,marginTop:40,marginBottom:16}}>3. ความแตกต่างระหว่างรถยุโรปและรถเอเชีย</h2>
            <p style={{marginBottom:20,color:'var(--text-dim)'}}>
              รถยุโรปมักต้องการน้ำมันที่ผ่านมาตรฐาน ACEA หรือมาตรฐานเฉพาะของผู้ผลิต เช่น BMW Longlife, MB 229.5 ส่วนรถเอเชียจะเน้นมาตรฐาน API และ ILSAC เป็นหลัก การใช้ผิดสเปคอาจทำให้การรับประกันเป็นโมฆะได้
            </p>
            <div style={{background:'linear-gradient(180deg,rgba(255,193,7,.08),rgba(255,193,7,.02))',border:'1px solid rgba(255,193,7,.25)',borderRadius:12,padding:'28px 32px',margin:'40px 0'}}>
              <div style={{display:'flex',gap:16,alignItems:'flex-start'}}>
                <div style={{width:44,height:44,borderRadius:10,background:'var(--accent)',color:'#000',display:'grid',placeItems:'center',flexShrink:0}}>
                  <Icon.Shield />
                </div>
                <div>
                  <div style={{fontSize:13,fontWeight:700,color:'var(--accent)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:8}}>คำแนะนำจาก Auto Mix Shop</div>
                  <p style={{margin:0,color:'var(--text)',textWrap:'pretty'}}>
                    แนะนำให้ตรวจสอบสเปคน้ำมันที่คู่มือรถ และปรึกษาช่างผู้มีประสบการณ์ก่อนเลือกใช้ การใช้น้ำมันผิดประเภทอาจส่งผลต่อประสิทธิภาพ ค่าความประหยัดน้ำมัน และการปกป้องเครื่องยนต์ในระยะยาว
                  </p>
                </div>
              </div>
            </div>
            <h2 style={{fontSize:28,marginTop:40,marginBottom:16}}>4. เมื่อไรควรเปลี่ยนน้ำมันเครื่อง</h2>
            <p style={{marginBottom:20,color:'var(--text-dim)'}}>
              โดยทั่วไป น้ำมันกึ่งสังเคราะห์เปลี่ยนทุก 5,000–7,000 กม. น้ำมันสังเคราะห์เต็มรูปแบบเปลี่ยนทุก 10,000–15,000 กม. หรือตามระยะเวลาที่กำหนด ขึ้นอยู่กับสภาพการขับขี่
            </p>
            <h2 style={{fontSize:28,marginTop:40,marginBottom:16}}>5. ทำไมต้องใช้แบรนด์ที่ได้มาตรฐาน</h2>
            <p style={{marginBottom:20,color:'var(--text-dim)'}}>
              แบรนด์อย่าง LIQUI MOLY, ZIC, MOTUL ได้รับการรับรองมาตรฐานสากล ผ่านการทดสอบคุณภาพอย่างเข้มงวด จึงมั่นใจได้ในประสิทธิภาพและการปกป้องเครื่องยนต์ของคุณ
            </p>
          </div>

          <div style={{marginTop:56,padding:'32px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12}}>
            <h3 style={{fontSize:20,marginBottom:20}}>บริการที่เกี่ยวข้อง</h3>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
              {[
                {title:'เปลี่ยนน้ำมันเครื่อง',href:'services.html#oil'},
                {title:'ล้างเครื่องยนต์',href:'services.html#oil'},
                {title:'เปลี่ยนกรองน้ำมัน',href:'services.html#oil'},
                {title:'ตรวจเช็คสภาพรถ',href:'services.html'},
              ].map((s,i)=>(
                <a key={i} href={s.href} className="btn btn-ghost" style={{justifyContent:'space-between'}}>
                  {s.title} <Icon.ArrowRight />
                </a>
              ))}
            </div>
          </div>

          <div style={{marginTop:32,display:'flex',gap:12,padding:'28px',background:'linear-gradient(135deg,var(--accent) 0%,#FFB300 100%)',borderRadius:12,alignItems:'center',flexWrap:'wrap',color:'#000'}}>
            <div style={{flex:1,minWidth:240}}>
              <div style={{fontSize:13,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',opacity:.7,marginBottom:4}}>ต้องการคำปรึกษา?</div>
              <div style={{fontSize:22,fontWeight:700,fontFamily:'Kanit'}}>ช่างของเราพร้อมช่วยคุณเลือกน้ำมันที่เหมาะสม</div>
            </div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              <a href="tel:0990319888" className="btn" style={{background:'#000',color:'#fff'}}><Icon.Phone /> โทรปรึกษา</a>
              <a href="https://lin.ee/LIl9L9F" className="btn btn-line"><Icon.Line /> LINE</a>
            </div>
          </div>
        </div>
      </article>

      <section className="sec" style={{background:'var(--bg-2)',borderTop:'1px solid var(--border)'}}>
        <div className="container">
          <h2 className="sec-title" style={{fontSize:32,marginBottom:32}}>บทความที่เกี่ยวข้อง</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="related-grid">
            {[
              {cat:'ช่วงล่าง',title:'5 สัญญาณที่ช่วงล่างต้องตรวจเช็ค',img:'images/automix/automix-suspension-wheel-inspection.jpg'},
              {cat:'ฟรัชชิ่งเกียร์',title:'ฟรัชชิ่งเกียร์ต่างจากเปลี่ยนน้ำมันเกียร์อย่างไร',img:'images/automix/automix-gearbox-flush-atf-flush-machine-01.jpg'},
              {cat:'ขัดไฟหน้า',title:'ขัดไฟหน้ารถยนต์ให้ใสเหมือนใหม่',img:'images/automix/automix-headlight-restoration-restored-clear-lens-after-01.jpg'},
            ].map((p,i)=>(
              <a key={i} href="blog-detail.html" className="blog-featured" style={{textDecoration:'none'}}>
                <div className="media" style={{aspectRatio:'16/10'}}><img className="bg" src={p.img} alt={p.title} loading="lazy" /></div>
                <div className="body" style={{padding:24}}>
                  <span className="blog-cat">{p.cat}</span>
                  <h3 style={{fontSize:18}}>{p.title}</h3>
                </div>
              </a>
            ))}
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
      <style>{`@media (max-width:900px){.related-grid{grid-template-columns:1fr !important}}`}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BlogDetailPage />);
