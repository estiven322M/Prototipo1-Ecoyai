import { useEffect, useState } from 'react'

type Lang = 'es' | 'en'

const forest = 'https://images.unsplash.com/photo-1593069567131-53a0614dde1d?auto=format&fit=crop&w=2200&q=85'
const river = 'https://images.unsplash.com/photo-1701091490268-2ae3de5f5f2f?auto=format&fit=crop&w=1400&q=85'

const t = {
  es: {
    nav: [
      ['Inicio', '#inicio'],
      ['Nosotros', '#nosotros'],
      ['Proyectos', '#proyecto'],
      ['Transparencia y Gobernanza', '#transparencia'],
      ['Donaciones / Alianzas', '#colaborar'],
      ['Contacto', '#contacto'],
    ],
    donate: 'Donar',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    menu: 'Menú',
    close: 'Cerrar',
    langLabel: 'Idioma',
    heroEyebrow: 'Mocoa, Putumayo · Amazonía colombiana',
    heroTitle: 'Protegemos el legado ancestral, los derechos y el futuro de los pueblos indígenas.',
    heroText: 'Unimos el saber de los mayores con la tecnología para que la lengua, la medicina y el territorio sigan vivos.',
    heroPrimary: 'Conoce nuestras líneas de acción',
    heroSecondary: 'Donar / Apoyar',
    photoNote: 'Imagen de referencia · Unsplash',
    aboutEyebrow: 'Quiénes somos',
    aboutTitle: 'Una asociación nacida en el territorio, al servicio de sus pueblos.',
    aboutText:
      'La Asociación Eco Yai (Asëcoyai) es una entidad sin ánimo de lucro (ESAL) con sede en Mocoa, Putumayo, comprometida con la dignidad, el territorio y la autonomía de las comunidades nativas de Colombia y el mundo.',
    aboutLink: 'Conoce nuestra historia',
    mission: 'Misión',
    missionText: 'Articular saberes y herramientas tecnológicas para contribuir a la preservación de la lengua y la identidad cultural de los pueblos indígenas.',
    vision: 'Visión',
    visionText: 'Un futuro en el que la lengua y los saberes se transmitan entre generaciones, con la tecnología como aliada.',
    draft: 'Propuesta de redacción · pendiente de validación institucional',
    linesTitle: 'Líneas de trabajo',
    linesLink: 'Ver todos los proyectos',
    lines: [
      ['Medicina tradicional y lengua materna', 'Foto sugerida: manos y plantas medicinales'],
      ['Salud, educación y etnoturismo', 'Foto sugerida: espacio educativo propio'],
      ['Defensa del territorio y DD. HH.', 'Foto sugerida: río y territorio desde el aire'],
      ['Tecnología e innovación social', 'Foto sugerida: joven y sabedor con portátil'],
    ],
    projectTag: 'Campaña activa',
    projectTitle: 'Preservación de la lengua Siona mediante inteligencia artificial',
    projectText:
      'La lengua guarda maneras de nombrar, comprender y habitar el mundo. Exploramos el uso de la inteligencia artificial para contribuir a la preservación y transmisión de la lengua Siona: una herramienta al servicio de la cultura, no un reemplazo de sus voces.',
    gofundme: 'Apoyar en GoFundMe',
    bancolombia: 'Donar vía Bancolombia',
    projectLink: 'Conocer el proyecto completo',
    projectPhoto: 'Foto sugerida: sabedora Siona grabando relatos en su lengua',
    explore: [
      ['Nosotros', 'Historia, equipo y sabedores', '#nosotros'],
      ['Proyectos', 'Lo que hacemos en territorio', '#proyecto'],
      ['Transparencia', 'Estatutos, informes y gobernanza', '#transparencia'],
      ['Donaciones / Alianzas', 'Formas de colaborar', '#colaborar'],
      ['Contacto', 'Escríbenos o visítanos', '#contacto'],
    ],
    exploreLabel: 'Explorar el sitio',
    alliesTitle: 'Caminamos acompañados',
    seal: 'Organización legalmente constituida en Colombia · NIT [pendiente]',
    allies: ['Comunidad Siona', 'Taozen Family', '[Aliado]', '[Aliado]', '[Aliado]'],
    ctaTitle: 'Tu apoyo mantiene viva la palabra de los mayores.',
    ctaText: 'Dona, sé aliado institucional o comparte nuestro trabajo.',
    ctaDonate: 'Donar ahora',
    ctaAlly: 'Ser aliado',
    footerOrg: 'Asociación Eco Yai (Asëcoyai)',
    footerType: 'Entidad sin ánimo de lucro',
    address: 'Domicilio',
    contact: 'Contacto',
    docs: 'Documentos',
    statutes: 'Estatutos',
    privacy: 'Política de tratamiento de datos',
    rights: 'Todos los derechos reservados.',
    prototype:
      'Prototipo institucional · Fotografías de referencia: Vlad Hilitanu y Robin Canfield / Unsplash. No representan a la comunidad Siona.',
    modalEyebrow: 'ÉCOYAI · Prototipo',
    modalBack: 'Volver al sitio',
    modalDonate:
      'Gracias por querer acompañar este propósito. Los enlaces oficiales de GoFundMe y Bancolombia se incorporarán cuando ÉCOYAI los confirme.',
    modalContact: 'Queremos abrir un espacio para conversar. Los datos de contacto oficiales están pendientes de confirmación por ÉCOYAI.',
    modalPending: 'Este contenido está pendiente de validación por ÉCOYAI. Se incorporará la información oficial en la siguiente etapa del sitio.',
  },
  en: {
    nav: [
      ['Home', '#inicio'],
      ['About us', '#nosotros'],
      ['Projects', '#proyecto'],
      ['Transparency & Governance', '#transparencia'],
      ['Donations / Partnerships', '#colaborar'],
      ['Contact', '#contacto'],
    ],
    donate: 'Donate',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menu: 'Menu',
    close: 'Close',
    langLabel: 'Language',
    heroEyebrow: 'Mocoa, Putumayo · Colombian Amazon',
    heroTitle: 'We protect the ancestral legacy, the rights and the future of Indigenous peoples.',
    heroText: 'We bring together the wisdom of our elders and technology so that language, medicine and territory stay alive.',
    heroPrimary: 'Explore our lines of action',
    heroSecondary: 'Donate / Support',
    photoNote: 'Reference image · Unsplash',
    aboutEyebrow: 'Who we are',
    aboutTitle: 'An association born in the territory, at the service of its peoples.',
    aboutText:
      'Asociación Eco Yai (Asëcoyai) is a non-profit organization based in Mocoa, Putumayo, committed to the dignity, territory and autonomy of native communities in Colombia and around the world.',
    aboutLink: 'Read our story',
    mission: 'Mission',
    missionText: 'To bring together knowledge and technological tools to help preserve the language and cultural identity of Indigenous peoples.',
    vision: 'Vision',
    visionText: 'A future in which language and knowledge are passed on between generations, with technology as an ally.',
    draft: 'Draft wording · pending institutional validation',
    linesTitle: 'Lines of work',
    linesLink: 'See all projects',
    lines: [
      ['Traditional medicine & mother tongue', 'Suggested photo: hands and medicinal plants'],
      ['Health, education & ethnotourism', 'Suggested photo: community learning space'],
      ['Land defense & human rights', 'Suggested photo: river and territory from above'],
      ['Technology & social innovation', 'Suggested photo: youth and elder with a laptop'],
    ],
    projectTag: 'Active campaign',
    projectTitle: 'Preserving the Siona language through artificial intelligence',
    projectText:
      'Language holds ways of naming, understanding and inhabiting the world. We explore the use of artificial intelligence to help preserve and pass on the Siona language: a tool that serves the culture, never a replacement for its voices.',
    gofundme: 'Support on GoFundMe',
    bancolombia: 'Donate via Bancolombia',
    projectLink: 'Learn about the full project',
    projectPhoto: 'Suggested photo: Siona elder recording stories in her language',
    explore: [
      ['About us', 'History, team and knowledge keepers', '#nosotros'],
      ['Projects', 'Our work in the territory', '#proyecto'],
      ['Transparency', 'Bylaws, reports and governance', '#transparencia'],
      ['Donations / Partnerships', 'Ways to collaborate', '#colaborar'],
      ['Contact', 'Write to us or visit us', '#contacto'],
    ],
    exploreLabel: 'Explore the site',
    alliesTitle: 'We walk together',
    seal: 'Legally registered organization in Colombia · Tax ID [pending]',
    allies: ['Siona community', 'Taozen Family', '[Partner]', '[Partner]', '[Partner]'],
    ctaTitle: 'Your support keeps the words of our elders alive.',
    ctaText: 'Donate, become an institutional partner or share our work.',
    ctaDonate: 'Donate now',
    ctaAlly: 'Become a partner',
    footerOrg: 'Asociación Eco Yai (Asëcoyai)',
    footerType: 'Non-profit organization',
    address: 'Address',
    contact: 'Contact',
    docs: 'Documents',
    statutes: 'Bylaws',
    privacy: 'Data protection policy',
    rights: 'All rights reserved.',
    prototype:
      'Institutional prototype · Reference photos: Vlad Hilitanu and Robin Canfield / Unsplash. They do not depict the Siona community.',
    modalEyebrow: 'ÉCOYAI · Prototype',
    modalBack: 'Back to the site',
    modalDonate: 'Thank you for wanting to support this purpose. The official GoFundMe and Bancolombia links will be added once ÉCOYAI confirms them.',
    modalContact: 'We would love to talk. Official contact details are pending confirmation by ÉCOYAI.',
    modalPending: 'This content is pending validation by ÉCOYAI. Official information will be added in the next stage of the site.',
  },
} as const

type Dialog = 'donate' | 'contact' | 'pending'

function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="ÉCOYAI">
      <svg width="30" height="36" viewBox="0 0 33 39" fill="none" aria-hidden="true">
        <path d="M16.5 2v35M4 9l12.5 9L29 9M4 20l12.5 9L29 20M9 3l7.5 5L24 3" stroke="currentColor" strokeWidth="2" />
        <path d="m5 30 11.5 7L28 30" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span>ÉCOYAI</span>
    </a>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('es')
  const [open, setOpen] = useState(false)
  const [dialog, setDialog] = useState<{ title: string; kind: Dialog } | null>(null)
  const c = t[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'es' ? 'ÉCOYAI — Asociación Eco Yai' : 'ÉCOYAI — Eco Yai Association'
  }, [lang])

  useEffect(() => {
    if (!dialog) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setDialog(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dialog])

  const show = (title: string, kind: Dialog) => (e?: React.MouseEvent) => {
    e?.preventDefault()
    setDialog({ title, kind })
  }

  return (
    <>
      <header className="header">
        <div className="header-inner wrap">
          <Brand />
          <nav aria-label="Principal" className={open ? 'nav open' : 'nav'}>
            {c.nav.map(([name, href], i) => (
              <a key={href} href={href} onClick={() => setOpen(false)} aria-current={i === 0 ? 'page' : undefined}>
                {name}
              </a>
            ))}
          </nav>
          <div className="header-tools">
            <div className="lang" role="group" aria-label={c.langLabel}>
              {(['es', 'en'] as Lang[]).map((l) => (
                <button key={l} aria-pressed={lang === l} onClick={() => setLang(l)}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a className="pill pill-accent pill-sm" href="#colaborar">
              {c.donate}
            </a>
            <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? c.menuClose : c.menuOpen} aria-expanded={open}>
              {open ? c.close : c.menu}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* INI-01 */}
        <section className="hero" id="inicio">
          <img className="hero-image" src={forest} alt="" />
          <div className="hero-shade" />
          <span className="photo-note">{c.photoNote}</span>
          <div className="hero-content wrap">
            <p className="eyebrow">{c.heroEyebrow}</p>
            <h1>{c.heroTitle}</h1>
            <p className="hero-text">{c.heroText}</p>
            <div className="actions">
              <a className="pill pill-accent" href="#lineas">
                {c.heroPrimary}
              </a>
              <a className="pill pill-ghost" href="#colaborar">
                {c.heroSecondary}
              </a>
            </div>
          </div>
        </section>

        {/* INI-02 + INI-03 */}
        <section id="nosotros" className="light">
          <div className="wrap about">
            <div className="about-copy">
              <p className="eyebrow eyebrow-dark">{c.aboutEyebrow}</p>
              <h2>{c.aboutTitle}</h2>
              <p className="lead">{c.aboutText}</p>
              <a className="link" href="#nosotros" onClick={show(c.aboutLink, 'pending')}>
                {c.aboutLink}
              </a>
            </div>
            <div className="mv">
              <article className="mv-card">
                <h3>{c.mission}</h3>
                <p>{c.missionText}</p>
              </article>
              <article className="mv-card mv-dark">
                <h3>{c.vision}</h3>
                <p>{c.visionText}</p>
              </article>
              <small className="draft-note">{c.draft}</small>
            </div>
          </div>
        </section>

        <section id="lineas" className="light lines">
          <div className="wrap">
            <div className="section-head">
              <h2>{c.linesTitle}</h2>
              <a className="link" href="#proyecto">
                {c.linesLink}
              </a>
            </div>
            <div className="line-grid">
              {c.lines.map(([title, photo]) => (
                <a className="line-card" href="#proyecto" key={title}>
                  <div className="ph-light">{photo}</div>
                  <h3>{title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* INI-04 */}
        <section id="proyecto" className="dark">
          <div className="wrap project">
            <figure className="project-photo">
              <img src={river} alt="" loading="lazy" />
              <figcaption>{c.projectPhoto}</figcaption>
            </figure>
            <div className="project-copy">
              <p className="tag">
                <span />
                {c.projectTag}
              </p>
              <h2>{c.projectTitle}</h2>
              <p>{c.projectText}</p>
              <div className="actions">
                <a className="pill pill-accent" href="#colaborar" onClick={show(c.gofundme, 'donate')}>
                  {c.gofundme}
                </a>
                <a className="pill pill-ghost" href="#colaborar" onClick={show(c.bancolombia, 'donate')}>
                  {c.bancolombia}
                </a>
              </div>
              <a className="link link-leaf" href="#proyecto" onClick={show(c.projectLink, 'pending')}>
                {c.projectLink}
              </a>
            </div>
          </div>
        </section>

        {/* INI-05 */}
        <nav aria-label={c.exploreLabel} className="explore">
          <div className="wrap explore-grid">
            {c.explore.map(([name, desc, href]) => (
              <a href={href} key={href}>
                <span className="explore-name">{name}</span>
                <span className="explore-desc">{desc}</span>
              </a>
            ))}
          </div>
        </nav>

        <section id="transparencia" className="light">
          <div className="wrap allies">
            <div className="section-head">
              <h2>{c.alliesTitle}</h2>
              <button className="seal" onClick={show(c.nav[3][0], 'pending')}>
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                {c.seal}
              </button>
            </div>
            <div className="ally-grid">
              {c.allies.map((a, i) => (
                <div className="ally" key={i}>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INI-06 */}
        <section id="colaborar" className="cta">
          <div className="wrap cta-inner">
            <div>
              <h2>{c.ctaTitle}</h2>
              <p>{c.ctaText}</p>
            </div>
            <div className="actions">
              <button className="pill pill-dark" onClick={show(c.ctaDonate, 'donate')}>
                {c.ctaDonate}
              </button>
              <button className="pill pill-outline-dark" onClick={show(c.ctaAlly, 'contact')}>
                {c.ctaAlly}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacto">
        <div className="wrap">
          <div className="footer-main">
            <div>
              <Brand />
              <p>
                {c.footerOrg}
                <br />
                {c.footerType}
              </p>
            </div>
            <div>
              <h3>{c.address}</h3>
              <p>
                Barrio Los Chiparos, Casa 5
                <br />
                Mocoa, Putumayo — Colombia
              </p>
            </div>
            <div>
              <h3>{c.contact}</h3>
              <p>
                [correo@ecoyai.org]
                <br />
                [+57 000 000 0000]
              </p>
            </div>
            <div>
              <h3>{c.docs}</h3>
              <button onClick={show(c.statutes, 'pending')}>{c.statutes}</button>
              <button onClick={show(c.privacy, 'pending')}>{c.privacy}</button>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Asociación Eco Yai · Mocoa, Putumayo. {c.rights}
            </span>
            <span>{c.prototype}</span>
          </div>
        </div>
      </footer>

      {dialog && (
        <div className="modal-backdrop" onClick={() => setDialog(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onClick={(e) => e.stopPropagation()}>
            <button autoFocus className="modal-close" onClick={() => setDialog(null)} aria-label={c.close}>
              ×
            </button>
            <p className="eyebrow eyebrow-dark">{c.modalEyebrow}</p>
            <h2 id="dialog-title">{dialog.title}</h2>
            <p>{dialog.kind === 'donate' ? c.modalDonate : dialog.kind === 'contact' ? c.modalContact : c.modalPending}</p>
            <button className="pill pill-dark" onClick={() => setDialog(null)}>
              {c.modalBack}
            </button>
          </section>
        </div>
      )}
    </>
  )
}
