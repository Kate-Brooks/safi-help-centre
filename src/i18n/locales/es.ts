import type { UiStrings } from './en';

export const es: UiStrings = {
  app: {
    name: 'Safi',
    helpCentre: 'Centro de ayuda',
    backToApp: 'Volver a la app',
  },
  search: {
    placeholder: 'Buscar en el Centro de ayuda',
    noResults: 'No se encontraron artículos',
  },
  language: {
    label: 'Idioma',
    description:
      'Los artículos se muestran en el idioma configurado aquí y en los ajustes de la app.',
  },
  nav: {
    home: 'Inicio',
    browseByCategory: 'Explorar por categoría',
  },
  categories: {
    gettingSetUp: 'Configuración inicial',
    quality: 'Calidad',
    partnerInvites: 'Invitaciones de socios',
    claims: 'Reclamaciones',
    production: 'Producción',
  },
  articles: {
    usersCompany: 'Usuarios y empresa',
    devices: 'Dispositivos (recomendado)',
    materialSpecs: 'Cómo crear especificaciones de material',
    generalSettings: 'Ajustes generales',
    qualityProcess: 'Proceso de calidad y buenas prácticas',
    importLoads: 'Importar cargas / conectar con ERP',
    collectingQualityData: 'Recopilar datos de calidad',
    createPartnerInvites: 'Cómo crear invitaciones de socios',
    createClaims: 'Cómo crear reclamaciones',
    warehouseView: 'Vista de almacén',
    foPickerView: 'Vista de selector FO',
  },
  home: {
    heading: '¿Cómo podemos ayudarte?',
    subheading:
      'Guías y tutoriales para aprovechar al máximo Safi AI, desde la configuración hasta flujos de calidad avanzados.',
    browseByCategory: 'Explorar por categoría',
    articleCount_one: '{{count}} artículo',
    articleCount_other: '{{count}} artículos',
    comingSoon: 'Próximamente',
  },
  article: {
    onThisPage: 'En esta página',
    availableOn: 'Disponible en',
    watchTutorial: 'Ver el tutorial',
    showTranscript: 'Mostrar transcripción',
    hideTranscript: 'Ocultar transcripción',
    transcript: 'Transcripción del vídeo',
    transcriptIntro:
      'Transcripción completa del vídeo tutorial, proporcionada por accesibilidad.',
    share: 'Compartir',
    shareViaEmail: 'Compartir por correo',
    shareViaWhatsApp: 'Compartir en WhatsApp',
    downloadPdf: 'Descargar PDF',
    copyLink: 'Copiar enlace',
    linkCopied: 'Enlace copiado',
    preparingPdf: 'Preparando PDF…',
    estReadTime: '{{minutes}} min de lectura',
    lastUpdated: 'Última actualización {{date}}',
    previous: 'Anterior',
    next: 'Siguiente',
    step: 'Paso',
    note: 'Nota',
    tip: 'Consejo',
    important: 'Importante',
    recommended: 'Recomendado',
    helpfulQuestion: '¿Te resultó útil este artículo?',
    helpfulYes: 'Sí',
    helpfulNo: 'No',
    helpfulThanks: 'Gracias por tus comentarios.',
    imagePlaceholder: 'Captura de pantalla pendiente',
    relatedToCategory: 'En {{category}}',
  },
  translation: {
    pendingTitle: 'Aún no traducido',
    pendingBody:
      'Este artículo aún no se ha traducido al {{language}}. Se muestra a continuación en inglés. Las traducciones se gestionan en los archivos de contenido i18n.',
    showEnglish: 'Mostrar versión en inglés',
  },
  plans: {
    starter: 'Starter',
    professional: 'Professional',
    enterprise: 'Enterprise',
  },
};
