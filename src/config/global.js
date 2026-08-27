export default {
  global: {
    Name:
      'Evaluación financiera y plan de acción estratégico de un proyecto agropecuario',
    Description:
      'La evaluación de proyectos busca identificar, cuantificar y valorar costos y beneficios en un periodo determinado para establecer su viabilidad financiera. Este proceso es crucial para decidir si es conveniente ejecutarlos. La evaluación puede ser para proyectos de inversión privada o social, dependiendo del inversor. Los resultados definirán la tipología del proyecto, ya sea en términos de rentabilidad o beneficios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-3'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evaluación financiera',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Evaluación económica y social',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recolección de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas y técnicas de recolección',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diagnóstico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas de análisis',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Importancia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan de acción estratégico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elementos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Procedimiento de elaboración',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Diligenciamiento',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Importancia',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722109_CF05_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evaluación del proyecto',
      referencia:
        'Miranda, J. J. (2005). <em>Gestión de Proyectos. Identificación - Formulación - Evaluación: Financiera, económica, Social, Ambiental.</em> MM Editores.',
      tipo: 'PDF',
      link:
        'https://students.aiu.edu/submissions/profiles/resources/onlineBook/m7r2W5_Gestion%20de%20Proyectos%20good.pdf ',
    },
    {
      tema: 'Evaluación del proyecto',
      referencia:
        'Sosa Flores, M., Ribet Cuadot, M. y Hernández Pérez, F. A. (2007). <em>Fundamentos teórico-metodológicos para la evaluación económico-financiera de proyectos de inversión.</em> El Cid Editor S.A.',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books/about/Fundamentos_te%C3%B3rico_metodol%C3%B3gicos_para.html?id=CmlxnQAACAAJ&redir_esc=y ',
    },
  ],

  glosario: [
    {
      termino: 'Alcance',
      significado:
        'Es el trabajo que tiene que ser hecho para entregar los resultados planteados. Se refiere a los requerimientos a satisfacer en el proyecto.',
    },
    {
      termino: 'Costo-beneficio',
      significado:
        'Es la efectividad de un proyecto en función de los costos. Criterio de evaluación que establece la relación entre los recursos asignados y los objetivos alcanzados. También se usan las expresiones costo – eficacia y costo – efectividad.',
    },
    {
      termino: 'Indicadores',
      significado:
        'Datos operativos extraídos a partir de los objetivos y resultados que pretenden cuantificar y mostrar el impacto que el proyecto está teniendo en sus diferentes aspectos (beneficiarios, calidad, cantidad, tiempo, etcétera).',
    },
    {
      termino: 'Proyecto',
      significado:
        'Es un trabajo o esfuerzo que se ejecuta una sola vez y que persigue un fin específico, y tiene como característica principal producir resultados únicos como un producto o un servicio.',
    },
    {
      termino: 'Tasa interna de retorno (TIR)',
      significado:
        'Tasa de descuento que equivale al valor presente del flujo de caja neto en relación con el costo inicial de un proyecto.',
    },
    {
      termino: 'Valor Actual Neto (VAN)',
      significado:
        'Valor presente de la corriente estimada de los flujos de caja neto de un proyecto, descontando el costo de capital de la firma, menos el costo inicial del proyecto.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'Probabilidad que tiene un proyecto de aportar un nivel aceptable de beneficios a sus destinatarios una vez finalizada la ayuda comunitaria.',
    },
  ],
  referencias: [
    {
      referencia:
        'Córdoba Padilla, M. (2011). <em>Formulación y Evaluación de Proyectos.</em> Ecoe Ediciones.',
    },
    {
      referencia:
        'Departamento Nacional de Planeación, (2016). <em>Documento guía del módulo de capacitación en teoría de proyectos.</em> DNP.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Inversiones%20y%20finanzas%20pblicas/MGA_WEB/Documento%20Base%20Modulo%20Teoria%20de%20Proyectos.pdf',
    },
    {
      referencia:
        'Hernández Diaz, G. A., Matamoros Cárdenas, M. y Sánchez Segura, A. F. (2019). <em>Actualización de la estimación de los indicadores “Razón Precio-Cuenta”.</em> Dirección de Estudios Económicos.',
    },
    {
      referencia:
        'Miranda, J. J. (2005). <em>Gestión de Proyectos. Identificación - Formulación - Evaluación: Financiera, económica, Social, Ambiental.</em> MM Editores.',
    },
    {
      referencia:
        'Puentes Montañez, G. A. (2011). <em>Formulación y Evaluación de Proyectos Agropecuarios.</em> Ecoe Ediciones.',
    },
    {
      referencia:
        'Sosa Flores, M., Ribet Cuadot, M. y Hernández Pérez, F. A. (2007). <em>Fundamentos teórico-metodológicos para la evaluación económico-financiera de proyectos de inversión.</em> El Cid Editor S.A.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Roberto Augusto Bernal Duque',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial – Regional Cundinamarca',
        },
        {
          nombre: 'Yeison Farid Méndez Ortiz',
          cargo: 'Experto temático',
          centro: 'Centro Agropecuario “La Granja” – Regional Tolima',
        },
        {
          nombre: 'Orlando Barón Méndez',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial – Regional Cundinamarca',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura – Regional Santander',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑADOR Y DESARROLLADOR DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
