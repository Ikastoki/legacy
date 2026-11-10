export const security = {
  fundamentos: [
    {
      title: "Conceptos fundamentales de seguridad",
      meta: "X temas",
      lessons: [
        { title: "📖 Principios básicos", url: "/markdown/security/fundamentos/principios-basicos" },
        { title: "📖 Autenticación y control de acceso", url: "/markdown/security/fundamentos/autenticacion-control" },
        { title: "📖 Conceptos de riesgo y medición", url: "/markdown/security/fundamentos/riesgo-medicion" },
      ],
    },
    {
      title: "Estrategias de defensa",
      meta: "X temas",
      lessons: [
        { title: "📖 Modelos de seguridad", url: "/markdown/security/fundamentos/modelos-seguridad" },
        { title: "📖 Aislamiento y segmentación", url: "/markdown/security/fundamentos/aislamiento-segmentacion" },
        { title: "📖 Resiliencia y continuidad", url: "/markdown/security/fundamentos/resiliencia-continuidad" },
      ],
    },
  ],
  rolesEquipos: [
    {
      title: "Equipos de seguridad",
      meta: "X temas",
      lessons: [
        { title: "📖 Colores de equipo", url: "/markdown/security/roles-equipos/colores-equipo" },
        { title: "📖 Roles organizacionales", url: "/markdown/security/roles-equipos/roles-organizacionales" },
      ],
    },
    {
      title: "Marcos de trabajo y modelos de ataque",
      meta: "X temas",
      lessons: [
        { title: "📖 Modelos de ataque", url: "/markdown/security/roles-equipos/modelos-ataque" },
        { title: "📖 MITRE ATT&CK", url: "/markdown/security/roles-equipos/mitre-attack" },
        { title: "📖 Estándares y bases de datos", url: "/markdown/security/roles-equipos/estandares-bases" },
        { title: "📖 Seguridad en el Ciclo de Vida (SDLC)", url: "/markdown/security/roles-equipos/seguridad-sdlc" },
      ],
    },
  ],
  herramientas: [
    {
      title: "Herramientas de red y descubrimiento",
      meta: "X temas",
      lessons: [
        { title: "📖 Herramientas de línea de comandos (Linux)", url: "/markdown/security/herramientas/comandos-linux" },
        { title: "📖 Escaneo y enumeración", url: "/markdown/security/herramientas/escaneo-enumeracion" },
        { title: "📖 Captura y análisis de tráfico", url: "/markdown/security/herramientas/captura-trafico" },
      ],
    },
    {
      title: "Herramientas forenses y de análisis",
      meta: "X temas",
      lessons: [
        { title: "📖 Línea de comandos para forensia", url: "/markdown/security/herramientas/comandos-forensia" },
        { title: "📖 Forensia de memoria y discos", url: "/markdown/security/herramientas/forensia-memoria" },
        { title: "📖 Análisis de sistemas", url: "/markdown/security/herramientas/analisis-sistemas" },
      ],
    },
    {
      title: "Distribuciones de hacking",
      meta: "X temas",
      lessons: [
        { title: "📖 Sistemas operativos especializados", url: "/markdown/security/herramientas/sistemas-operativos" },
      ],
    },
  ],
  criptografia: [
    {
      title: "Fundamentos criptográficos",
      meta: "X temas",
      lessons: [
        { title: "📖 Funciones y transformaciones", url: "/markdown/security/criptografia/funciones-transformaciones" },
        { title: "📖 Criptografía asimétrica y simétrica", url: "/markdown/security/criptografia/asimetrica-simetrica" },
        { title: "📖 Federación de Identidad (IAM Moderno)", url: "/markdown/security/criptografia/federacion-identidad" },
      ],
    },
    {
      title: "Protocolos seguros",
      meta: "X temas",
      lessons: [
        { title: "📖 Seguridad en red", url: "/markdown/security/criptografia/seguridad-red" },
        { title: "📖 Seguridad en aplicaciones", url: "/markdown/security/criptografia/seguridad-aplicaciones" },
        { title: "📖 Seguridad inalámbrica", url: "/markdown/security/criptografia/seguridad-inalambrica" },
      ],
    },
  ],
  ataques: [
    {
      title: "Ataques a aplicaciones web",
      meta: "X temas",
      lessons: [
        { title: "📖 OWASP Top 10", url: "/markdown/security/ataques/owasp-top10" },
        { title: "📖 Explotación de rutas y memoria", url: "/markdown/security/ataques/explotacion-rutas" },
      ],
    },
    {
      title: "Ataques a redes",
      meta: "X temas",
      lessons: [
        { title: "📖 Ataques de interceptación y suplantación", url: "/markdown/security/ataques/interceptacion-suplantacion" },
        { title: "📖 Ataques a protocolos", url: "/markdown/security/ataques/ataques-protocolos" },
        { title: "📖 Ataques a redes conmutadas", url: "/markdown/security/ataques/redes-conmutadas" },
      ],
    },
    {
      title: "Malware y técnicas de autenticación",
      meta: "X temas",
      lessons: [
        { title: "📖 Malware", url: "/markdown/security/ataques/malware" },
        { title: "📖 Ataques a autenticación", url: "/markdown/security/ataques/ataques-autenticacion" },
        { title: "📖 Handshakes y protocolos", url: "/markdown/security/ataques/handshakes-protocolos" },
      ],
    },
    {
      title: "Amenazas a Infraestructuras Modernas",
      meta: "X temas",
      lessons: [
        { title: "📖 Ataques a la Cadena de Suministro (Supply Chain)", url: "/markdown/security/ataques/cadena-suministro" },
        { title: "📖 Ataques a Entornos Cloud y Contenedores", url: "/markdown/security/ataques/cloud-contenedores" },
        { title: "📖 Amenazas a Entornos No-Tradicionales", url: "/markdown/security/ataques/entornos-no-tradicionales" },
      ],
    },
  ],
  defensa: [
    {
      title: "Tecnologías de defensa",
      meta: "X temas",
      lessons: [
        { title: "📖 Protección en red", url: "/markdown/security/defensa/proteccion-red" },
        { title: "📖 Protección en endpoint", url: "/markdown/security/defensa/proteccion-endpoint" },
        { title: "📖 Protección Cloud-Native (CNAPP/CWPP)", url: "/markdown/security/defensa/proteccion-cloud-native" },
        { title: "📖 Señuelos y trampas", url: "/markdown/security/defensa/senuelos-trampas" },
      ],
    },
    {
      title: "Monitorización y análisis",
      meta: "X temas",
      lessons: [
        { title: "📖 SIEM y SOAR", url: "/markdown/security/defensa/siem-soar" },
        { title: "📖 Hardening", url: "/markdown/security/defensa/hardening" },
        { title: "📖 Threat Intelligence y Hunting", url: "/markdown/security/defensa/threat-intelligence" },
      ],
    },
    {
      title: "Gestión de vulnerabilidades",
      meta: "X temas",
      lessons: [
        { title: "📖 Proceso completo", url: "/markdown/security/defensa/gestion-vulnerabilidades" },
      ],
    },
    {
      title: "Respuesta a incidentes",
      meta: "X temas",
      lessons: [
        { title: "📖 Fases del IR", url: "/markdown/security/defensa/fases-ir" },
        { title: "📖 Conceptos relacionados", url: "/markdown/security/defensa/conceptos-ir" },
      ],
    },
    {
      title: "Ingeniería inversa",
      meta: "X temas",
      lessons: [
        { title: "📖 Fundamentos", url: "/markdown/security/defensa/ingenieria-inversa" },
      ],
    },
  ],
};