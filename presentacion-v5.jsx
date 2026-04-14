import { useState } from "react";

const GOLD = "#8B6914";
const DARK = "#1C1612";
const CREAM = "#FAF7F2";
const CARD = "#F0EAE0";
const MUTED = "#6B5A48";
const LIGHT = "#A08060";
const GREEN = "#2E7D32";
const BORDER = "rgba(139,105,20,0.22)";
const BORDER2 = "rgba(139,105,20,0.5)";

const Tag = ({ text }) => (
  <span style={{ fontFamily:"monospace",fontSize:9,letterSpacing:"0.2em",color:GOLD,border:`1px solid ${BORDER2}`,borderRadius:3,padding:"3px 9px",background:"rgba(139,105,20,0.07)",display:"inline-block",marginBottom:10 }}>
    {text}
  </span>
);
const Title = ({ children, size="clamp(20px,4vw,34px)" }) => (
  <h2 style={{ fontFamily:"Georgia,serif",fontSize:size,fontWeight:700,color:DARK,lineHeight:1.15,margin:"0 0 8px" }}>{children}</h2>
);
const Body = ({ children, color=DARK, style={} }) => (
  <p style={{ fontFamily:"monospace",fontSize:"clamp(10px,1.6vw,12px)",color,lineHeight:1.7,margin:"0 0 8px",...style }}>{children}</p>
);
const Small = ({ children, color=MUTED }) => (
  <p style={{ fontFamily:"monospace",fontSize:"clamp(8px,1.3vw,10px)",color,lineHeight:1.5,margin:0 }}>{children}</p>
);
const GoldBar = ({ center=false }) => (
  <div style={{ width:48,height:2,background:`linear-gradient(90deg,${GOLD},#C49A2A,${GOLD})`,borderRadius:2,margin:center?"8px auto 14px":"8px 0 14px" }} />
);
const Quote = ({ children }) => (
  <div style={{ borderLeft:`3px solid ${GOLD}`,paddingLeft:14,margin:"10px 0 0" }}>
    <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(11px,1.6vw,13px)",color:MUTED,fontStyle:"italic",margin:0,lineHeight:1.6 }}>{children}</p>
  </div>
);
const Diamond = ({ color=GOLD }) => <span style={{ color,fontSize:9,marginRight:7,flexShrink:0,marginTop:2 }}>◆</span>;
const BulletRow = ({ children, color=DARK, bulletColor=GOLD }) => (
  <div style={{ display:"flex",alignItems:"flex-start",marginBottom:5 }}>
    <Diamond color={bulletColor} />
    <Small color={color}>{children}</Small>
  </div>
);
const Pill = ({ text, color=GOLD }) => (
  <span style={{ fontFamily:"monospace",fontSize:8,letterSpacing:"0.1em",color,border:`1px solid ${color}`,borderRadius:10,padding:"2px 8px",background:`${color}15`,display:"inline-block",marginRight:4,marginBottom:3 }}>{text}</span>
);

// ════════════════════════════════════════════
// SLIDES
// ════════════════════════════════════════════
const slides = [
  // 1 PORTADA
  { label:"Portada", content:() => (
    <div style={{ textAlign:"center" }}>
      <div style={{ fontSize:38,marginBottom:10 }}>🔍</div>
      <Tag text="PRESENTACIÓN DE SERVICIOS · CHIHUAHUA 2026" />
      <Title size="clamp(24px,5vw,42px)">Mystery Shopper Turístico</Title>
      <p style={{ fontFamily:"monospace",fontSize:"clamp(11px,2vw,14px)",color:MUTED,margin:"0 0 16px" }}>El servicio de evaluación encubierta que faltaba en Chihuahua</p>
      <GoldBar center />
      <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(14px,2.5vw,18px)",fontWeight:700,color:GOLD,margin:"0 0 6px" }}>Lic. Agustín Flores C.</p>
      {["35+ años · Industria Restaurantera","Ex Presidente CANIRAC · COCENTRO · ACR","Certificado Capacitador SEP · CANIRAC","Distintivos: Punto Limpio · Moderniza · H"].map(c=>(
        <p key={c} style={{ fontFamily:"monospace",fontSize:"clamp(9px,1.5vw,11px)",color:MUTED,margin:"2px 0" }}>{c}</p>
      ))}
      <div style={{ display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginTop:14 }}>
        <Body color={DARK} style={{ margin:0 }}>📞 (614) 133-61-43</Body>
        <Body color={DARK} style={{ margin:0 }}>✉️ delpaseo22@gmail.com</Body>
      </div>
    </div>
  )},

  // 2 MERCADO
  { label:"El mercado", content:() => (
    <div>
      <Tag text="EL CONTEXTO" />
      <Title>Chihuahua en su momento histórico</Title>
      <GoldBar />
      <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12 }}>
        {[["2.18 M","visitantes en la capital (2025)"],["$17,000 M","pesos en derrama económica"],["85%","turismo de negocios y congresos"],["+10%","crecimiento hotelero 2024–2025"],["60%+","ocupación hotelera sostenida"],["40+","hoteles afiliados en la capital"]].map(([n,l])=>(
          <div key={n} style={{ background:CARD,border:`1px solid ${BORDER}`,borderRadius:8,padding:"12px 8px",textAlign:"center" }}>
            <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(16px,3vw,24px)",fontWeight:700,color:GOLD,margin:"0 0 4px" }}>{n}</p>
            <Small>{l}</Small>
          </div>
        ))}
      </div>
      <Quote>Con tanta demanda, el estándar de servicio subió. ¿Tu establecimiento está a la altura?</Quote>
    </div>
  )},

  // 3 PROBLEMA
  { label:"El problema", content:() => (
    <div>
      <Tag text="EL PROBLEMA" />
      <Title>Lo que el dueño no puede ver...</Title>
      <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(13px,2vw,17px)",color:GOLD,fontStyle:"italic",margin:"0 0 8px" }}>Yo sí puedo.</p>
      <GoldBar />
      {[["👤","El 73% de clientes con mala experiencia NO se quejan. Simplemente no regresan."],["📢","Ese cliente le cuenta su experiencia negativa a 10 personas más."],["📋","Las encuestas solo capturan a quien decide responderlas — no la realidad."],["🔍","El Mystery Shopper captura lo que ocurre cuando tú no estás presente."]].map(([icon,text])=>(
        <div key={text} style={{ display:"flex",gap:12,alignItems:"flex-start",background:CARD,border:`1px solid ${BORDER}`,borderRadius:8,padding:"10px 13px",marginBottom:8 }}>
          <span style={{ fontSize:16,flexShrink:0 }}>{icon}</span>
          <Body color={DARK} style={{ margin:0 }}>{text}</Body>
        </div>
      ))}
      <div style={{ textAlign:"center",padding:"11px 16px",background:CARD,border:`1px solid ${BORDER2}`,borderRadius:8,marginTop:4 }}>
        <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(12px,1.8vw,15px)",color:DARK,fontStyle:"italic",margin:0 }}>"¿Sabes lo que hace tu personal cuando no te ven?"</p>
      </div>
    </div>
  )},

  // 4 SERVICIO
  { label:"El servicio", content:() => (
    <div>
      <Tag text="EL SERVICIO" />
      <Title>¿Qué es el Mystery Shopper Turístico?</Title>
      <GoldBar />
      <Body>Un evaluador certificado se presenta como cliente real, vive la experiencia completa y documenta objetivamente cada punto de contacto, desde la bienvenida hasta la despedida.</Body>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:12 }}>
        {["Bienvenida y primer impacto","Protocolo y servicio de mesa","Calidad del producto","Limpieza e instalaciones","Cobro y despedida","Presencia digital y reseñas","Upselling y crossselling","Cumplimiento de distintivos oficiales"].map(i=>(
          <div key={i} style={{ display:"flex",alignItems:"flex-start" }}>
            <Diamond /><Small color={DARK}>{i}</Small>
          </div>
        ))}
      </div>
      <Quote>Resultado: información objetiva y accionable que no puedes obtener de ninguna otra manera.</Quote>
    </div>
  )},

  // 5 VENTAJA
  { label:"Mi ventaja", content:() => (
    <div>
      <Tag text="MI VENTAJA" />
      <Title>Una ventaja que nadie puede replicar</Title>
      <GoldBar />
      {[["35 años como empresario restaurantero","Evalúo desde la experiencia real, no desde la teoría."],["Ex Presidente CANIRAC Chihuahua","Los dueños ya me conocen. La confianza está construida."],["Ex Presidente COCENTRO y ACR","Liderazgo comprobado en el ecosistema empresarial local."],["Certificado Capacitador SEP y CANIRAC","Puedo evaluar Y capacitar al equipo. El ciclo completo."],["Diplomado Admón. Restaurantes (3 ed.)","Reportes técnicos y accionables, no solo descripciones."],["Distintivos Punto Limpio y Moderniza","Te preparo para obtener certificaciones oficiales."]].map(([cred,why])=>(
        <div key={cred} style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,background:CARD,border:`1px solid ${BORDER}`,borderRadius:7,padding:"9px 13px",marginBottom:7,alignItems:"center" }}>
          <Small color={GOLD} style={{ fontWeight:700 }}>{cred}</Small>
          <Small color={MUTED}>{why}</Small>
        </div>
      ))}
      <Quote>Las empresas foráneas llegan sin conocer el mercado. Yo ya soy parte de él.</Quote>
    </div>
  )},

  // 6 SERVICIOS
  { label:"Servicios", content:() => (
    <div>
      <Tag text="CATÁLOGO" />
      <Title>Servicios y Precios</Title>
      <GoldBar />
      <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:9,marginBottom:10 }}>
        {[{name:"ESENCIAL",sub:"Diagnóstico Inicial",price:"$3,500–$5,000",unit:"por evaluación",items:["1 visita encubierta","Reporte con fotos","Puntuación por área","3 recomendaciones"],hi:false},{name:"PLUS",sub:"Seguimiento Mensual",price:"$8,000–$12,000",unit:"por mes",items:["2 visitas/mes","Reporte comparativo","Retroalimentación 1hr","Monitoreo digital"],hi:true},{name:"PREMIUM",sub:"Consultoría Integral",price:"$18,000–$25,000",unit:"por mes",items:["4 visitas/mes","Capacitación mensual","Plan de mejora","Benchmark oficial"],hi:false}].map(pkg=>(
          <div key={pkg.name} style={{ background:pkg.hi?CARD:CREAM,border:`1px solid ${pkg.hi?BORDER2:BORDER}`,borderTop:pkg.hi?`3px solid ${GOLD}`:undefined,borderRadius:10,padding:"13px 12px" }}>
            <p style={{ fontFamily:"monospace",fontSize:9,letterSpacing:"0.12em",color:GOLD,fontWeight:700,margin:"0 0 2px" }}>{pkg.name}</p>
            <p style={{ fontFamily:"monospace",fontSize:"clamp(8px,1.2vw,10px)",color:MUTED,fontStyle:"italic",margin:"0 0 6px" }}>{pkg.sub}</p>
            <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(12px,2vw,17px)",fontWeight:700,color:DARK,margin:"0 0 2px" }}>{pkg.price}</p>
            <p style={{ fontFamily:"monospace",fontSize:9,color:LIGHT,margin:"0 0 7px" }}>MXN · {pkg.unit}</p>
            {pkg.items.map(i=><BulletRow key={i}>{i}</BulletRow>)}
          </div>
        ))}
      </div>
      <div style={{ background:CARD,border:`1px solid ${BORDER2}`,borderRadius:10,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"wrap" }}>
        <div>
          <p style={{ fontFamily:"monospace",fontSize:9,color:GOLD,fontWeight:700,margin:"0 0 2px" }}>★ RUTA HACIA EL DISTINTIVO — exclusivo en Chihuahua</p>
          <Small>Evaluación + capacitación certificada + acompañamiento en trámite de Distintivo H, Punto Limpio o Moderniza.</Small>
        </div>
        <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(12px,2vw,16px)",fontWeight:700,color:DARK,margin:0,whiteSpace:"nowrap" }}>$12,000–$18,000 MXN</p>
      </div>
    </div>
  )},

  // 7 PROCESO
  { label:"Proceso", content:() => (
    <div>
      <Tag text="EL PROCESO" />
      <Title>De la evaluación a la mejora real</Title>
      <GoldBar />
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12 }}>
        {[["01","DIAGNÓSTICO","Visita encubierta anónima. Tu personal no sabe que está siendo evaluado."],["02","REPORTE","Documento ejecutivo con hallazgos, fotos y puntuación. Entrega en 48–72 horas."],["03","RETROALIMENTACIÓN","Sesión con dirección para revisar resultados y definir prioridades de mejora."],["04","MEJORA","Plan de acción. Capacitación certificada si se requiere. Seguimiento continuo."]].map(([n,t,d])=>(
          <div key={n} style={{ background:CARD,border:`1px solid ${BORDER}`,borderRadius:10,padding:"16px 14px",position:"relative",overflow:"hidden" }}>
            <p style={{ fontFamily:"Georgia,serif",fontSize:38,fontWeight:700,color:"rgba(139,105,20,0.1)",position:"absolute",top:2,right:10,margin:0,lineHeight:1 }}>{n}</p>
            <p style={{ fontFamily:"monospace",fontSize:"clamp(8px,1.3vw,10px)",letterSpacing:"0.15em",color:GOLD,fontWeight:700,margin:"0 0 6px" }}>{t}</p>
            <Body style={{ margin:0 }}>{d}</Body>
          </div>
        ))}
      </div>
      <Quote>🔒 Confidencialidad total. Solo el dueño o directivo autorizado accede a los resultados.</Quote>
    </div>
  )},

  // 8 BENEFICIOS
  { label:"Beneficios", content:() => (
    <div>
      <Tag text="BENEFICIOS" />
      <Title>Lo que obtiene tu establecimiento</Title>
      <GoldBar />
      <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:9,marginBottom:12 }}>
        {[["⭐","Más reseñas positivas","Un servicio consistente se refleja en Google y TripAdvisor."],["🔄","Mayor retención","Reduces las razones por las que los clientes no regresan."],["👥","Equipo alineado","Tu personal adopta protocolos correctos al saberse evaluado."],["🏆","Distintivos oficiales","Te preparamos para obtener o renovar certificaciones."],["📈","Decisiones con datos","No suposiciones. Evidencia objetiva y accionable."],["🎯","Ventaja competitiva","El servicio es tu diferenciador en un mercado creciente."]].map(([icon,title,desc])=>(
          <div key={title} style={{ background:CARD,border:`1px solid ${BORDER}`,borderRadius:9,padding:"13px 11px" }}>
            <p style={{ fontSize:18,margin:"0 0 5px" }}>{icon}</p>
            <p style={{ fontFamily:"monospace",fontSize:"clamp(8px,1.3vw,11px)",fontWeight:700,color:GOLD,margin:"0 0 4px" }}>{title}</p>
            <Small>{desc}</Small>
          </div>
        ))}
      </div>
      <div style={{ background:CARD,border:`1px solid ${BORDER2}`,borderRadius:10,padding:"12px 16px",display:"flex",alignItems:"center",gap:14 }}>
        <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(22px,3vw,28px)",fontWeight:700,color:GOLD,margin:0,flexShrink:0 }}>+11%</p>
        <Body style={{ margin:0 }}>Incremento en precio de habitación por cada punto adicional en TripAdvisor — Cornell University</Body>
      </div>
    </div>
  )},

  // 9 MERCADO
  { label:"Mercado", content:() => (
    <div>
      <Tag text="MERCADO OBJETIVO" />
      <Title>¿Para quién es este servicio?</Title>
      <GoldBar />
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
        {[["🍽️","Restaurantes de categoría","Ticket promedio $300–$900. Reputación digital crítica. Establecimientos con o que buscan Punto Limpio, Moderniza o Distintivo H."],["🏨","Hoteles 3 a 5 estrellas","Sheraton, Courtyard, Fiesta Inn, boutiques y más. Huéspedes de negocios con las expectativas más altas del mercado."],["🏅","Aspirantes a Distintivo","Negocios que buscan el Distintivo H, Punto Limpio o Moderniza. Ya tienen mentalidad de mejora continua."],["🔗","Cadenas y Franquicias","Verificación local continua de cumplimiento de estándares corporativos."]].map(([icon,title,desc])=>(
          <div key={title} style={{ background:CARD,border:`1px solid ${BORDER}`,borderRadius:12,padding:"18px 15px",display:"flex",gap:12 }}>
            <span style={{ fontSize:24,flexShrink:0 }}>{icon}</span>
            <div>
              <p style={{ fontFamily:"monospace",fontSize:"clamp(9px,1.5vw,12px)",fontWeight:700,color:GOLD,margin:"0 0 5px" }}>{title}</p>
              <Body color={DARK} style={{ margin:0 }}>{desc}</Body>
            </div>
          </div>
        ))}
      </div>
    </div>
  )},

  // 10 ESTRATEGIAS
  { label:"Estrategias", content:() => (
    <div>
      <Tag text="ESTRATEGIA DE LANZAMIENTO · 90 DÍAS" />
      <Title>Lanzamiento, diferenciación y retención</Title>
      <GoldBar />
      <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:12 }}>
        {/* MES 1 */}
        <div style={{ background:CARD,border:`1px solid ${BORDER}`,borderRadius:10,padding:"14px 12px" }}>
          <p style={{ fontFamily:"Georgia,serif",fontSize:11,fontWeight:700,color:GOLD,margin:"0 0 8px",letterSpacing:"0.1em" }}>MES 1 — AUTORIDAD</p>
          <BulletRow>Perfil profesional en LinkedIn, Instagram y Facebook.</BulletRow>
          <BulletRow>3 posts/semana con datos de turismo Chihuahua.</BulletRow>
          <BulletRow>Contactar Asociación de Hoteles de Chihuahua.</BulletRow>
          <BulletRow>1–2 diagnósticos de cortesía a cambio de testimonio.</BulletRow>
        </div>
        {/* MES 2 */}
        <div style={{ background:CARD,border:`1px solid ${BORDER2}`,borderTop:`3px solid ${GOLD}`,borderRadius:10,padding:"14px 12px" }}>
          <p style={{ fontFamily:"Georgia,serif",fontSize:11,fontWeight:700,color:GOLD,margin:"0 0 8px",letterSpacing:"0.1em" }}>MES 2 — CLIENTES</p>
          <BulletRow>Presentación formal a 10 restaurantes y 5 hoteles target.</BulletRow>
          <BulletRow>Cerrar al menos 3 contratos Plus.</BulletRow>
          <BulletRow>Publicar primer caso de éxito con datos reales.</BulletRow>
          <BulletRow>Activar red de exsocios CANIRAC como referidos.</BulletRow>
        </div>
        {/* MES 3 */}
        <div style={{ background:CARD,border:`1px solid ${BORDER}`,borderRadius:10,padding:"14px 12px" }}>
          <p style={{ fontFamily:"Georgia,serif",fontSize:11,fontWeight:700,color:GOLD,margin:"0 0 8px",letterSpacing:"0.1em" }}>MES 3 — ESCALA</p>
          <BulletRow>Registro como consultor aprobado ante Sectur estatal.</BulletRow>
          <BulletRow>Campaña pagada en Facebook e Instagram.</BulletRow>
          <BulletRow>Alianza con agencia de capacitación hotelera.</BulletRow>
          <BulletRow>Participar en Cuulinaria o FITA Chihuahua.</BulletRow>
        </div>
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
        <div style={{ background:CREAM,border:`1px solid ${BORDER}`,borderRadius:9,padding:"12px 14px" }}>
          <p style={{ fontFamily:"monospace",fontSize:10,fontWeight:700,color:GOLD,margin:"0 0 6px" }}>◆ DIFERENCIACIÓN</p>
          <Body style={{ margin:0 }}>Eres el único en Chihuahua que puede ofrecer: Evaluar + Diagnosticar + Capacitar (certificado SEP) + Acompañar hacia Distintivos oficiales. Ese ciclo completo es imposible de replicar por foráneos.</Body>
        </div>
        <div style={{ background:CREAM,border:`1px solid ${BORDER}`,borderRadius:9,padding:"12px 14px" }}>
          <p style={{ fontFamily:"monospace",fontSize:10,fontWeight:700,color:GOLD,margin:"0 0 6px" }}>◆ RETENCIÓN</p>
          <Body style={{ margin:0 }}>Reportes mensuales visuales con gráficas de evolución. Benchmark anónimo vs. competidores. Programa de referidos: 1 mes gratis por cliente referido que firme. Reconocimiento público en redes con permiso del cliente.</Body>
        </div>
      </div>
    </div>
  )},

  // 11 EMBUDO
  { label:"Embudo de ventas", content:() => (
    <div>
      <Tag text="EMBUDO DE VENTAS · 5 ETAPAS" />
      <Title>Del desconocido al cliente fiel</Title>
      <GoldBar />
      <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
        {[
          { n:"1", stage:"ATENCIÓN", color:"#D4A017", icon:"📣", what:"Posts + Reels + Lead Magnet PDF gratuito", metric:"Alcance semanal > 2,000 personas" },
          { n:"2", stage:"INTERÉS",  color:"#C49A2A", icon:"🎯", what:"Webinar gratuito mensual + contenido educativo", metric:"50 leads/mes al tercer mes" },
          { n:"3", stage:"DESEO",    color:"#8B6914", icon:"💡", what:"Llamada de diagnóstico gratuita 30 min + caso de éxito", metric:"30% tasa de cierre en llamadas" },
          { n:"4", stage:"ACCIÓN",   color:"#6B5A48", icon:"✍️", what:"Propuesta en 24h + contrato 1 página + primer pago", metric:"3+ clientes nuevos/mes al madurar" },
          { n:"5", stage:"FIDELIZACIÓN", color:"#4A3A28", icon:"🤝", what:"Revisión trimestral + programa de referidos", metric:"Retención > 80% tras 3 meses" },
        ].map((e,i)=>(
          <div key={e.stage} style={{ display:"grid",gridTemplateColumns:"32px 100px 1fr 1fr",gap:10,alignItems:"center",background:CARD,border:`1px solid ${BORDER}`,borderRadius:9,padding:"9px 13px",borderLeft:`4px solid ${e.color}` }}>
            <p style={{ fontFamily:"Georgia,serif",fontSize:18,fontWeight:700,color:e.color,margin:0,textAlign:"center" }}>{e.n}</p>
            <div>
              <p style={{ fontFamily:"monospace",fontSize:9,letterSpacing:"0.12em",color:e.color,fontWeight:700,margin:"0 0 2px" }}>{e.stage}</p>
              <span style={{ fontSize:14 }}>{e.icon}</span>
            </div>
            <Small color={DARK}>{e.what}</Small>
            <div style={{ background:CREAM,borderRadius:6,padding:"5px 8px" }}>
              <p style={{ fontFamily:"monospace",fontSize:8,color:GREEN,fontWeight:700,margin:"0 0 1px" }}>META</p>
              <Small color={DARK}>{e.metric}</Small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )},

  // 12 ANUNCIOS
  { label:"Anuncios", content:() => (
    <div>
      <Tag text="ANUNCIOS PARA REDES · HOOKS PODEROSOS" />
      <Title>5 anuncios listos para publicar</Title>
      <GoldBar />
      <div style={{ display:"flex",flexDirection:"column",gap:9 }}>
        {[
          {
            num:"01", plat:"Instagram/Facebook", target:"Restaurantes", hook:'"¿Tu mesero sonríe... o solo finge?"',
            copy:"El 73% de los clientes con mala experiencia no se quejan. Simplemente no regresan. Soy Agustín Flores — 35 años en la industria, ex presidente de CANIRAC. Te digo la verdad sobre tu servicio. 👇 Escríbeme 'QUIERO SABER'",
          },
          {
            num:"02", plat:"Instagram/Facebook", target:"Hoteles", hook:'"Me hospedé en tu hotel. Esto es lo que encontré."',
            copy:"Chihuahua recibió 2.18M turistas en 2025. El 85% viaja por negocios — los más exigentes. ¿Tu hotel da lo que esperan? 3 cupos este mes con diagnóstico especial. 👇 WhatsApp: (614) 133-61-43",
          },
          {
            num:"03", plat:"Instagram/Facebook", target:"Awareness general", hook:'"El cliente que se fue molesto... nunca te lo dijo."',
            copy:"El único Mystery Shopper turístico con base en Chihuahua. Certificado SEP · Ex presidente CANIRAC. 👇 Descarga GRATIS: '10 errores de servicio que te están costando clientes'",
          },
          {
            num:"04", plat:"Story / Reels", target:"Lanzamiento", hook:'"5 cupos este mes. Diagnóstico con 50% de descuento."',
            copy:"Precio de lanzamiento: $2,500 MXN (valor normal $5,000). Incluye: visita encubierta + reporte + sesión 60 min. ⏰ Solo 5 lugares. Primero en responder, primero en ser atendido.",
          },
          {
            num:"05", plat:"LinkedIn", target:"Directivos / Gerentes", hook:'"¿Cuánto le cuesta a tu hotel una mala reseña en Google?"',
            copy:"+1 punto en TripAdvisor = hasta +11% en precio de habitación (Cornell U). 35 años en la industria. Ex presidente CANIRAC, COCENTRO y ACR. Certificado SEP. ¿Agendamos 20 min? Sin costo.",
          },
        ].map(ad=>(
          <div key={ad.num} style={{ background:CARD,border:`1px solid ${BORDER}`,borderRadius:9,padding:"10px 13px" }}>
            <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:6,flexWrap:"wrap" }}>
              <p style={{ fontFamily:"Georgia,serif",fontSize:18,fontWeight:700,color:GOLD,margin:0 }}>{ad.num}</p>
              <Pill text={ad.plat} />
              <Pill text={ad.target} color={MUTED} />
            </div>
            <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(11px,1.8vw,14px)",fontWeight:700,color:DARK,fontStyle:"italic",margin:"0 0 5px" }}>{ad.hook}</p>
            <Small color={MUTED}>{ad.copy}</Small>
          </div>
        ))}
      </div>
    </div>
  )},

  // 13 PLAN DE ACCIÓN
  { label:"Plan 30 días", content:() => (
    <div>
      <Tag text="PLAN DE ACCIÓN · 30 DÍAS" />
      <Title>Semana a semana</Title>
      <GoldBar />
      <div style={{ display:"flex",flexDirection:"column",gap:8,marginBottom:12 }}>
        {[
          { sem:"Semana 1", color:"#D4A017", acciones:"Imagen corporativa. Perfil LinkedIn e Instagram con todas tus credenciales. WhatsApp Business configurado.", resultado:"Presencia digital activa", costo:"$3,000–$5,000" },
          { sem:"Semana 1–2", color:"#C49A2A", acciones:"Lead Magnet PDF '10 errores' listo. Propuesta comercial personalizable. Plantillas de reporte.", resultado:"Herramientas de venta listas", costo:"$1,500" },
          { sem:"Semana 2", color:"#8B6914", acciones:"Contacto directo a 10 exsocios de CANIRAC. Invitación a diagnóstico gratuito 30 min. 6 posts publicados.", resultado:"3–4 reuniones agendadas", costo:"$0" },
          { sem:"Semana 3", color:"#6B5A48", acciones:"Realizar 1–2 evaluaciones iniciales (cortesía o precio especial). Documentar proceso y resultados con permiso del cliente.", resultado:"Primer caso de éxito", costo:"$0–500" },
          { sem:"Semana 4", color:"#4A3A28", acciones:"Lanzar Anuncio 04 (urgencia) en Facebook e Instagram ($1,500 MXN). Presentación formal a Asociación de Hoteles.", resultado:"Pipeline de 10+ prospectos", costo:"$1,500" },
        ].map(row=>(
          <div key={row.sem} style={{ display:"grid",gridTemplateColumns:"90px 1fr 120px 80px",gap:10,background:CARD,border:`1px solid ${BORDER}`,borderRadius:9,padding:"10px 13px",borderLeft:`4px solid ${row.color}`,alignItems:"center" }}>
            <p style={{ fontFamily:"monospace",fontSize:9,fontWeight:700,color:row.color,margin:0 }}>{row.sem}</p>
            <Small color={DARK}>{row.acciones}</Small>
            <div style={{ background:CREAM,borderRadius:6,padding:"5px 8px" }}>
              <p style={{ fontFamily:"monospace",fontSize:8,color:GREEN,fontWeight:700,margin:"0 0 1px" }}>RESULTADO</p>
              <Small>{row.resultado}</Small>
            </div>
            <div style={{ textAlign:"center" }}>
              <p style={{ fontFamily:"monospace",fontSize:8,color:MUTED,margin:"0 0 1px" }}>COSTO</p>
              <p style={{ fontFamily:"Georgia,serif",fontSize:11,fontWeight:700,color:GOLD,margin:0 }}>{row.costo}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background:CARD,border:`1px solid ${BORDER2}`,borderRadius:9,padding:"11px 16px" }}>
        <p style={{ fontFamily:"monospace",fontSize:9,fontWeight:700,color:GOLD,margin:"0 0 4px" }}>INVERSIÓN TOTAL ESTIMADA MES 1</p>
        <div style={{ display:"flex",gap:20,flexWrap:"wrap" }}>
          <Body style={{ margin:0 }}>💰 <strong>$6,000–$8,500 MXN</strong> — inversión inicial para activar el negocio completo.</Body>
          <Body style={{ margin:0 }}>🎯 <strong>Meta:</strong> 3 clientes activos al cierre del mes 1.</Body>
        </div>
      </div>
    </div>
  )},

  // 14 CONTACTO
  { label:"Contacto", content:() => (
    <div style={{ textAlign:"center" }}>
      <Tag text="SIGUIENTE PASO" />
      <Title>Agenda tu diagnóstico gratuito de 30 minutos</Title>
      <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(12px,2vw,16px)",color:GOLD,fontStyle:"italic",margin:"0 0 16px" }}>Sin costo · Sin compromiso · Solo resultados</p>
      <GoldBar center />
      <div style={{ display:"flex",flexDirection:"column",gap:7,textAlign:"left",maxWidth:340,margin:"0 auto 18px" }}>
        {["Cómo funciona el proceso paso a paso","Qué áreas son prioritarias para tu establecimiento","Cuál paquete se adapta mejor a tus objetivos","Cuándo podemos comenzar"].map(b=>(
          <div key={b} style={{ display:"flex",gap:9 }}>
            <Diamond /><Body color={DARK} style={{ margin:0 }}>{b}</Body>
          </div>
        ))}
      </div>
      <div style={{ background:CARD,border:`1px solid ${BORDER2}`,borderRadius:12,padding:"20px 28px",display:"inline-block",minWidth:240 }}>
        <p style={{ fontFamily:"Georgia,serif",fontSize:"clamp(15px,2.5vw,20px)",fontWeight:700,color:GOLD,margin:"0 0 6px" }}>Lic. Agustín Flores C.</p>
        <p style={{ fontFamily:"monospace",fontSize:"clamp(8px,1.3vw,10px)",color:MUTED,margin:"0 0 2px" }}>Ex Presidente CANIRAC · COCENTRO · ACR</p>
        <p style={{ fontFamily:"monospace",fontSize:"clamp(8px,1.3vw,10px)",color:MUTED,margin:"0 0 14px" }}>Certificado SEP · CANIRAC · Punto Limpio · Moderniza</p>
        <div style={{ display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap" }}>
          <Body color={DARK} style={{ margin:0,fontWeight:700 }}>📞 (614) 133-61-43</Body>
          <Body color={DARK} style={{ margin:0,fontWeight:700 }}>✉️ delpaseo22@gmail.com</Body>
        </div>
        <Small style={{ marginTop:6 }}>📍 Chihuahua, Chih. México</Small>
      </div>
    </div>
  )},
];

// ════════════════════════════════════════════
// APP
// ════════════════════════════════════════════
export default function App() {
  const [cur, setCur] = useState(0);
  const prev = () => setCur(c => Math.max(0, c - 1));
  const next = () => setCur(c => Math.min(slides.length - 1, c + 1));

  return (
    <div style={{ minHeight:"100vh",background:"#D8D1C6",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",padding:"14px 10px 24px",fontFamily:"monospace" }}>
      <style>{`
        @keyframes fadein { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
        *{box-sizing:border-box}
        button:hover{opacity:0.8}
      `}</style>

      {/* ── SLIDE ── */}
      <div style={{ width:"100%",maxWidth:800,background:CREAM,borderRadius:14,border:`1px solid rgba(139,105,20,0.18)`,boxShadow:"0 4px 32px rgba(60,40,10,0.18)",padding:"clamp(16px,4.5%,38px)",position:"relative",marginBottom:12 }}>
        {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h])=>(
          <div key={v+h} style={{ position:"absolute",[v]:0,[h]:0,width:22,height:22,
            borderTop:v==="top"?`1.5px solid rgba(139,105,20,0.35)`:"none",
            borderBottom:v==="bottom"?`1.5px solid rgba(139,105,20,0.35)`:"none",
            borderLeft:h==="left"?`1.5px solid rgba(139,105,20,0.35)`:"none",
            borderRight:h==="right"?`1.5px solid rgba(139,105,20,0.35)`:"none",
          }} />
        ))}
        <div style={{ position:"absolute",top:11,right:14,fontFamily:"monospace",fontSize:9,color:LIGHT,letterSpacing:"0.12em" }}>
          {String(cur+1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}
        </div>
        <div key={cur} style={{ animation:"fadein 0.28s ease forwards" }}>
          {slides[cur].content()}
        </div>
      </div>

      {/* ── BARRA PROGRESO + FLECHAS ── */}
      <div style={{ width:"100%",maxWidth:800,display:"flex",alignItems:"center",gap:10,marginBottom:10 }}>
        <button onClick={prev} disabled={cur===0} style={{ width:38,height:38,borderRadius:"50%",border:`1px solid ${BORDER2}`,background:CARD,color:GOLD,fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",opacity:cur===0?0.3:1,flexShrink:0 }}>‹</button>
        <div style={{ flex:1,height:4,background:"rgba(139,105,20,0.15)",borderRadius:4,overflow:"hidden" }}>
          <div style={{ height:"100%",width:`${((cur+1)/slides.length)*100}%`,background:GOLD,borderRadius:4,transition:"width 0.3s ease" }} />
        </div>
        <button onClick={next} disabled={cur===slides.length-1} style={{ width:38,height:38,borderRadius:"50%",border:`1px solid ${BORDER2}`,background:CARD,color:GOLD,fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",opacity:cur===slides.length-1?0.3:1,flexShrink:0 }}>›</button>
      </div>

      {/* ── MINIATURAS ── */}
      <div style={{ width:"100%",maxWidth:800,display:"flex",gap:5,flexWrap:"wrap",justifyContent:"center" }}>
        {slides.map((s,i)=>(
          <button key={i} onClick={()=>setCur(i)} style={{ padding:"4px 9px",borderRadius:6,border:`1px solid ${i===cur?BORDER2:BORDER}`,background:i===cur?CARD:"transparent",color:i===cur?GOLD:LIGHT,fontFamily:"monospace",fontSize:8,cursor:"pointer",letterSpacing:"0.04em",transition:"all 0.2s",fontWeight:i===cur?700:400 }}>
            {String(i+1).padStart(2,"0")} {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
