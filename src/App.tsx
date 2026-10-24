import { useState } from 'react'

const forest = 'https://images.unsplash.com/photo-1593069567131-53a0614dde1d?auto=format&fit=crop&w=2200&q=85'
const river = 'https://images.unsplash.com/photo-1701091490268-2ae3de5f5f2f?auto=format&fit=crop&w=1200&q=85'
const links = [
  ['Nosotros', '#nosotros'],
  ['Proyectos', '#proyecto'],
  ['Transparencia y Gobernanza', '#transparencia'],
  ['Donaciones / Alianzas', '#colaborar'],
  ['Contacto', '#contacto'],
]
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '↗'}</span>
}
function Button({ children, href, light = false }: { children: React.ReactNode; href: string; light?: boolean }) {
  return <a className={`button ${light ? 'button-light' : ''}`} href={href}>{children}<Arrow /></a>
}
function Brand() {
  return <a href="#inicio" className="brand" aria-label="ÉCOYAI, inicio"><svg width="33" height="39" viewBox="0 0 33 39" fill="none" aria-hidden="true"><path d="M16.5 2v35M4 9l12.5 9L29 9M4 20l12.5 9L29 20M9 3l7.5 5L24 3" stroke="currentColor" strokeWidth="2"/><path d="m5 30 11.5 7L28 30" stroke="currentColor" strokeWidth="2"/></svg><span>ÉCOYAI<span className="brand-caption">TERRITORIO · SABERES · FUTURO</span></span></a>
}
function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header"><div className="header-inner"><Brand /><nav aria-label="Navegación principal" className={open ? 'nav open' : 'nav'}>{links.map(([name, href]) => <a onClick={() => setOpen(false)} key={href} href={href}>{name}</a>)}</nav><a className="header-cta" href="#colaborar">Colaborar <Arrow /></a><button className="menu" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>{open ? 'Cerrar −' : 'Menú ☰'}</button></div></header>
}
function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span />{children}</p> }
function Section({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`section ${className}`}>{children}</section>
}
const explore = [
  ['01', 'Nosotros', 'La identidad y el propósito que nos reúnen.', '#nosotros'],
  ['02', 'Proyectos', 'Saberes y tecnología que encuentran un camino.', '#proyecto'],
  ['03', 'Transparencia y Gobernanza', 'Una construcción basada en la confianza.', '#transparencia'],
  ['04', 'Donaciones / Alianzas', 'Distintas formas de caminar a nuestro lado.', '#colaborar'],
  ['05', 'Contacto', 'Toda conversación puede ser un comienzo.', '#contacto'],
]
export default function App() {
  const [dialog, setDialog] = useState<string | null>(null)
  return <>
    <Header />
    <main>
      <section className="hero" id="inicio">
        <img className="hero-image" src={forest} alt="Vista aérea de un territorio de selva atravesado por un río" />
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <Eyebrow>IDENTIDAD QUE PERMANECE. FUTURO QUE CONECTA.</Eyebrow>
          <h1>La memoria vive.<br />El futuro <em>escucha.</em></h1>
          <p>Conectamos territorio, saberes y tecnología para contribuir a la salvaguarda de la lengua Siona y su memoria viva.</p>
          <div className="hero-actions"><Button href="#nosotros" light>Conoce ÉCOYAI</Button><a href="#proyecto" className="text-link light-link">Conoce nuestro proyecto <Arrow /></a></div>
        </div>
        <div className="hero-bottom wrap"><span>DESDE EL TERRITORIO, HACIA EL MAÑANA</span><a href="#nosotros">Explora nuestra esencia <span aria-hidden="true">↓</span></a></div>
        <span className="photo-note">Imagen de referencia · Unsplash</span>
      </section>
      <div className="values-strip"><span>Territorio</span><i /><span>Identidad</span><i /><span>Saberes</span><i /><span>Lengua</span><i /><span>Tecnología con propósito</span></div>
      <Section id="nosotros" className="about wrap">
        <div className="about-copy"><Eyebrow>01 — NUESTRA ESENCIA</Eyebrow><h2>¿Qué es ÉCOYAI?</h2><p className="lead">Un encuentro entre lo que somos<br className="desktop" /> y lo que podemos construir.</p><p>ÉCOYAI es una organización que conecta la identidad cultural, los saberes y la tecnología con un propósito: contribuir a la salvaguarda y transmisión de la lengua Siona.</p><p>Entendemos la tecnología como una herramienta al servicio de la memoria, el territorio y la continuidad del conocimiento.</p><a className="text-link" href="#proposito">Conoce más sobre nosotros <Arrow /></a><small className="draft-note">Texto institucional provisional · origen y contexto por validar con ÉCOYAI.</small></div>
        <figure className="about-image"><img src={river} alt="Un río recorre la vegetación densa de un territorio tropical" loading="lazy" /><figcaption><span>EL TERRITORIO TAMBIÉN ES MEMORIA</span><span>Fotografía de referencia · no documenta al pueblo Siona</span></figcaption><div className="image-marker" aria-hidden="true">↗</div></figure>
      </Section>
      <Section id="proposito" className="purpose"><div className="wrap"><div className="purpose-heading"><Eyebrow>02 — LO QUE NOS GUÍA</Eyebrow><h2>Raíces que nos orientan.<br />Un horizonte compartido.</h2></div><div className="purpose-grid"><article><span className="small-label">NUESTRA MISIÓN</span><h3>Cuidar lo que nos conecta.</h3><p>Articular saberes y herramientas tecnológicas para contribuir a la preservación de la lengua y la identidad cultural Siona.</p></article><article><span className="small-label">NUESTRA VISIÓN</span><h3>Una memoria con futuro.</h3><p>Un futuro en el que la lengua y los saberes puedan transmitirse entre generaciones, con la tecnología como aliada.</p></article></div><div className="purpose-foot"><a href="#proposito" className="text-link" onClick={(e) => { e.preventDefault(); setDialog('Misión y visión') }}>Conoce nuestra misión y visión <Arrow /></a><small>Propuesta de redacción · pendiente de validación institucional</small></div></div></Section>
      <Section id="proyecto" className="project wrap"><div className="project-photo"><img src={forest} alt="El río y la selva, una mirada al territorio" loading="lazy" /><span className="photo-label">TERRITORIO · LENGUA · MEMORIA</span><span className="project-symbol" aria-hidden="true">∿<br />∿<br />∿</span></div><div className="project-copy"><Eyebrow>03 — PROYECTO DESTACADO</Eyebrow><h2>Salvaguardar una lengua también es preservar <em>una memoria.</em></h2><p>La lengua guarda maneras de nombrar, comprender y habitar el mundo.</p><p>Desarrollamos un proyecto que explora el uso de la inteligencia artificial para contribuir a la preservación y transmisión de la lengua Siona. Una herramienta al servicio de la cultura, no un reemplazo de sus voces.</p><span className="project-tag"><span /> LENGUA SIONA + INTELIGENCIA ARTIFICIAL</span><Button href="#proyecto-detalle">Conoce el proyecto</Button><details id="proyecto-detalle"><summary>Una tecnología que acompaña</summary><p>El propósito es apoyar la continuidad de la lengua Siona. El alcance, la metodología y las formas de participación se incorporarán cuando sean validados por ÉCOYAI.</p></details></div></Section>
      <Section id="explorar" className="explore"><div className="wrap"><div className="section-heading"><div><Eyebrow>04 — SIGUE EL CAMINO</Eyebrow><h2>Explora ÉCOYAI</h2></div><p>Cada camino, una forma de conocernos.</p></div><div className="explore-grid">{explore.map(([n, name, description, href]) => <a className="explore-card" href={href} key={n}><span className="card-number">{n}</span><Arrow /><h3>{name}</h3><p>{description}</p></a>)}<div className="explore-card upcoming"><span className="card-number">06</span><span className="small-label">UN CAMINO POR CONSTRUIR</span><p>Espacio reservado para una próxima sección.</p></div></div></div></Section>
      <Section id="colaborar" className="collaborate"><div className="wrap collaborate-inner"><div><Eyebrow>EL FUTURO SE CONSTRUYE EN COMUNIDAD</Eyebrow><h2>¿Quieres ser parte?</h2><p>Tu apoyo puede contribuir a fortalecer iniciativas que conectan tecnología, territorio y preservación cultural.</p></div><div className="collaborate-actions"><button className="button button-light" onClick={() => setDialog('Donar')}>Donar <Arrow /></button><button className="button button-outline" onClick={() => setDialog('Crear una alianza')}>Crear una alianza <Arrow /></button><span>Cada forma de acompañar cuenta.</span></div></div></Section>
      <Section id="transparencia" className="transparency wrap"><span className="small-label">TRANSPARENCIA Y GOBERNANZA</span><p>La confianza también se cultiva.</p><button className="text-link" onClick={() => setDialog('Transparencia y Gobernanza')}>Información institucional <Arrow /></button></Section>
    </main>
    <footer id="contacto"><div className="wrap"><div className="footer-main"><div className="footer-brand"><Brand /><p>Territorio, saberes y tecnología<br />al servicio de la memoria viva.</p></div><div><h3>EXPLORA</h3>{links.slice(0, 3).map(([name, href]) => <a href={href} key={href}>{name}</a>)}</div><div><h3>CONECTEMOS</h3><a href="#colaborar">Donaciones / Alianzas</a><button onClick={() => setDialog('Contacto')}>Escríbenos <Arrow /></button><button onClick={() => setDialog('Redes sociales')}>Redes sociales <Arrow /></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ÉCOYAI. Todos los derechos reservados.</span><span><button onClick={() => setDialog('Política de privacidad')}>Privacidad</button><button onClick={() => setDialog('Aviso legal')}>Aviso legal</button></span><span>Hecho con propósito.</span></div><p className="prototype-note">Prototipo institucional · Fotografías de referencia: Vlad Hilitanu y Robin Canfield / Unsplash. No representan a la comunidad Siona.</p></div></footer>
    {dialog && <div className="modal-backdrop" onClick={() => setDialog(null)}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onClick={e => e.stopPropagation()}><button autoFocus className="modal-close" onClick={() => setDialog(null)} aria-label="Cerrar">×</button><Eyebrow>ÉCOYAI · PROTOTIPO</Eyebrow><h2 id="dialog-title">{dialog}</h2><p>{dialog === 'Donar' ? 'Gracias por querer acompañar este propósito. El canal de donaciones aún no está habilitado; se incorporará cuando ÉCOYAI confirme los medios oficiales.' : dialog === 'Crear una alianza' || dialog === 'Contacto' ? 'Queremos abrir un espacio para conversar. Los datos de contacto oficiales están pendientes de confirmación por ÉCOYAI.' : 'Este contenido está pendiente de validación por ÉCOYAI. Se incorporará la información oficial en la siguiente etapa del sitio.'}</p><button className="button" onClick={() => setDialog(null)}>Volver al sitio <Arrow /></button></section></div>}
  </>
}
