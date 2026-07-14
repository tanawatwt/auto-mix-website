// blog-article.jsx — reusable article template. Each article HTML sets a DATA object
// and renders <BlogArticle data={DATA} />. Inline internal links use [[href|anchor]].

function BA_rich(text) {
  // parse [[href|anchor]] tokens into inline links
  const out = [];
  const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(<a key={m.index} href={m[1]} style={{color:'var(--accent)',fontWeight:600}}>{m[2]}</a>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function BA_Table({ table }) {
  return (
    <div style={{overflowX:'auto',margin:'8px 0 20px'}}>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14.5,minWidth:480}}>
        <thead>
          <tr>{table.head.map((h,i)=>(
            <th key={i} style={{textAlign:'left',padding:'12px 14px',background:'var(--bg-2)',borderBottom:'2px solid var(--accent)',fontFamily:'Kanit',fontWeight:600,whiteSpace:'nowrap'}}>{h}</th>
          ))}</tr>
        </thead>
        <tbody>
          {table.rows.map((r,ri)=>(
            <tr key={ri}>{r.map((c,ci)=>(
              <td key={ci} style={{padding:'11px 14px',borderBottom:'1px solid var(--border)',color:ci===0?'var(--text)':'var(--text-dim)',fontWeight:ci===0?600:400}}>{c}</td>
            ))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BA_Section({ s }) {
  return (
    <section style={{marginBottom:36,scrollMarginTop:'100px'}}>
      <h2 style={{fontFamily:'Kanit',fontSize:'clamp(22px,2.6vw,28px)',fontWeight:700,marginBottom:16,lineHeight:1.35}}>{s.h2}</h2>
      {s.image && (
        <figure style={{margin:'0 0 20px'}}>
          <div style={{aspectRatio:'16/9',borderRadius:12,overflow:'hidden',border:'1px solid var(--border)',background:'var(--bg-card)'}}>
            <img src={s.image.src} alt={s.image.alt} loading="lazy" width="1080" height="608" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
          </div>
          {s.image.caption && <figcaption style={{fontSize:13,color:'var(--text-muted)',marginTop:8,textAlign:'center'}}>{s.image.caption}</figcaption>}
        </figure>
      )}
      {(s.body||[]).map((p,i)=>(
        <p key={i} style={{fontSize:16,lineHeight:1.85,color:'var(--text-dim)',marginBottom:14}}>{BA_rich(p)}</p>
      ))}
      {s.table && <BA_Table table={s.table} />}
      {s.list && (
        <ul style={{listStyle:'none',margin:'4px 0 16px',padding:0,display:'flex',flexDirection:'column',gap:10}}>
          {s.list.map((li,i)=>(
            <li key={i} style={{display:'flex',gap:12,alignItems:'flex-start',fontSize:15.5,lineHeight:1.7}}>
              <span style={{color:'var(--accent)',flexShrink:0,marginTop:3}}><Icon.Check /></span>
              <span style={{color:'var(--text-dim)'}}>{BA_rich(li)}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function BA_ServiceCTA({ service }) {
  if (!service) return null;
  return (
    <div style={{background:'linear-gradient(180deg,rgba(255,193,7,.1),rgba(255,193,7,.02))',border:'1px solid rgba(255,193,7,.3)',borderRadius:14,padding:'22px 24px',margin:'28px 0 32px'}}>
      <div style={{display:'flex',gap:16,alignItems:'center',flexWrap:'wrap',justifyContent:'space-between'}}>
        <div style={{flex:'1 1 300px'}}>
          <div style={{fontSize:12,fontWeight:700,color:'var(--accent)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:6}}>บริการที่ Auto Mix Shop โคราช</div>
          <div style={{fontSize:16,color:'var(--text-dim)'}}>{service.blurb}</div>
        </div>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          <a href={service.href} className="btn btn-primary">{service.anchor} <Icon.ArrowRight /></a>
          <a href="tel:0990319888" className="btn btn-outline"><Icon.Phone /> 099-031-9888</a>
        </div>
      </div>
    </div>
  );
}

function BA_FAQ({ faqs }) {
  if (!faqs || !faqs.length) return null;
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{marginTop:44}}>
      <h2 style={{fontFamily:'Kanit',fontSize:'clamp(22px,2.6vw,28px)',fontWeight:700,marginBottom:18}}>คำถามที่พบบ่อย</h2>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {faqs.map((f,i)=>(
          <div key={i} style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
            <button onClick={()=>setOpen(open===i?-1:i)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,padding:'16px 20px',background:'transparent',border:'none',cursor:'pointer',textAlign:'left',color:'inherit'}}>
              <span style={{fontFamily:'Kanit',fontWeight:600,fontSize:15.5}}>{f.q}</span>
              <span style={{color:'var(--accent)',fontSize:22,flexShrink:0,transform:open===i?'rotate(45deg)':'none',transition:'transform .2s'}}>+</span>
            </button>
            {open===i && <div style={{padding:'0 20px 18px',fontSize:15,color:'var(--text-dim)',lineHeight:1.75}}>{BA_rich(f.a)}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function BA_Related({ related }) {
  if (!related || !related.length) return null;
  return (
    <section style={{marginTop:48,borderTop:'1px solid var(--border)',paddingTop:36}}>
      <h2 style={{fontFamily:'Kanit',fontSize:22,fontWeight:700,marginBottom:20}}>บทความที่เกี่ยวข้อง</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16}} className="ba-related">
        {related.map((r,i)=>(
          <a key={i} href={r.href} style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,padding:'18px 20px',textDecoration:'none',color:'inherit',display:'flex',flexDirection:'column',gap:8}}>
            {r.cat && <span style={{fontSize:11.5,fontWeight:700,color:'var(--accent)',letterSpacing:'.05em'}}>{r.cat}</span>}
            <span style={{fontFamily:'Kanit',fontWeight:600,fontSize:15.5,lineHeight:1.5}}>{r.label}</span>
            <span style={{color:'var(--accent)',fontSize:13.5,display:'inline-flex',alignItems:'center',gap:6,marginTop:4}}>อ่านต่อ <Icon.ArrowRight /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

function BlogArticle({ data }) {
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
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">หน้าแรก</a> <span>/</span>{' '}
            <a href="blog.html">บทความ</a> <span>/</span>{' '}
            <span>{data.category}</span>
          </div>
          <h1 style={{maxWidth:900}}>{data.h1}</h1>
          <div style={{display:'flex',gap:16,flexWrap:'wrap',color:'var(--text-muted)',fontSize:14,marginTop:14}}>
            <span>{data.date}</span><span>•</span><span>อ่าน {data.read}</span><span>•</span><span style={{color:'var(--accent)'}}>{data.category}</span>
          </div>
        </div>
      </section>

      <section className="sec" style={{paddingTop:32}}>
        <div className="container" style={{maxWidth:820}}>
          {data.heroImage && (
            <div style={{aspectRatio:'16/9',borderRadius:16,overflow:'hidden',border:'1px solid var(--border)',background:'var(--bg-card)',marginBottom:28}}>
              <img src={data.heroImage} alt={data.heroAlt||data.h1} loading="eager" width="1080" height="608" fetchpriority="high" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </div>
          )}
          {(data.intro||[]).map((p,i)=>(
            <p key={i} style={{fontSize:16.5,lineHeight:1.85,color:'var(--text)',marginBottom:14}}>{BA_rich(p)}</p>
          ))}
          <BA_ServiceCTA service={data.service} />
          {(data.sections||[]).map((s,i)=><BA_Section key={i} s={s} />)}
          <BA_FAQ faqs={data.faqs} />
          <BA_Related related={data.related} />
        </div>
      </section>

      <CTABanner />
      <Footer />
      <Floating />
      <TweaksPanel>
        <TweakSection label="Appearance" />
        <TweakRadio label="Accent" value={t.accent} options={['yellow','orange','mixed']} onChange={v=>setTweak('accent',v)} />
        <TweakRadio label="Base tone" value={t.base} options={['dark','light']} onChange={v=>setTweak('base',v)} />
      </TweaksPanel>
    </>
  );
}

Object.assign(window, { BlogArticle });
