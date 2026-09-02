<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diagnóstico

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema3/img_1.png', class="img-fluid")
      .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-3(data-aos="zoom-in-right") Después de recopilar y analizar la información del proyecto agropecuario comunitario, resulta necesario interpretar los datos obtenidos para reconocer la situación actual, identificar fortalezas y oportunidades, así como los aspectos que requieren mejoramiento. Este proceso constituye una base fundamental para orientar la toma de decisiones, priorizar acciones estratégicas y formular un plan de acción coherente con las necesidades del territorio, las capacidades de la comunidad y los objetivos del proyecto.    
   
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Concepto
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diagnóstico es el proceso de análisis e interpretación de la información recopilada para identificar la situación actual de un proyecto agropecuario comunitario, reconocer fortalezas, debilidades, oportunidades y necesidades, y generar una base objetiva que oriente la toma de decisiones, la evaluación del proyecto y la formulación de un plan de acción estratégico.
    
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Características
    .mb-0 

    p.mb-3(data-aos="zoom-in-right") El diagnóstico reúne un conjunto de características que garantizan un análisis organizado, objetivo y fundamentado de la información recopilada en un proyecto agropecuario comunitario. Estas características permiten comprender de manera integral la realidad del proyecto, identificar factores que influyen en su desarrollo y generar información confiable para priorizar necesidades, orientar la toma de decisiones sustentadas en las condiciones y el mejoramiento del territorio y la comunidad.
    p.mb-5(data-aos="zoom-in-right") Entre las características más importantes del diagnóstico, se encuentran las siguientes: 

    .row.justify-content-center.align-items-center.mb-lg-3(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-botones
          h5 Figura 4.
          span Características del diagnóstico
        .row.justify-content-center.align-items-center
          .col-lg-12
            figure.mb-3
              img.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/tema3/img_3.svg', alt='La figura muestra las características del diagnóstico en proyectos agropecuarios comunitarios. Se presentan seis recuadros con las principales características del diagnóstico: objetivo, integral, participativo, sistemático, analítico y orientado a la mejora, cada una acompañada de una breve explicación que resalta su aporte al análisis, la toma de decisiones y el fortalecimiento del proyecto.')
              img.mb-3.d-block.d-lg-none(src='@/assets/curso/temas/tema3/img_4.svg', alt='La figura muestra las características del diagnóstico en proyectos agropecuarios comunitarios. Se presentan seis recuadros con las principales características del diagnóstico: objetivo, integral, participativo, sistemático, analítico y orientado a la mejora, cada una acompañada de una breve explicación que resalta su aporte al análisis, la toma de decisiones y el fortalecimiento del proyecto.')
              figcaption Nota. SENA, (2026).

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3 Herramientas de análisis
    .mb-0 

    p.mb-3(data-aos="zoom-in-right") Las herramientas de análisis permiten organizar, interpretar y evaluar la información recopilada durante el diagnóstico de un proyecto. Su aplicación facilita identificar fortalezas, oportunidades, debilidades y problemáticas, establecer relaciones entre sus causas y efectos, priorizar necesidades y fundamentar la toma de decisiones para formular un plan de acción estratégico acorde con las condiciones del territorio y los objetivos del proyecto.
    p.mb-5(data-aos="zoom-in-right") Las herramientas más utilizadas y de fácil aplicación en el contexto rural son las siguientes: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-botones
          h5 Tabla 6. 
          span Herramientas de análisis
        .tabla-b.color-acento-contenido.ttbl2
          table
            caption
              p.mb-0 Nota. SENA, (2026).
            tr
              th.t2 Herramienta de análisis
              th.t2 Definición
              th.t2 Ejemplo de aplicación 
            tr(style="background-color: #F6F6F6;")
              td.text-start Matriz DOFA
              td.text-start Instrumento de análisis estratégico que identifica fortalezas, debilidades, oportunidades y amenazas para comprender la situación actual y definir estrategias orientadas al logro de los objetivos.
              td.text-start Analizar una asociación de productores de cacao para fortalecer su competitividad. 
            tr(style="background-color: #FFFFFF;")
              td.text-start Árbol de problemas
              td.text-start Técnica de análisis que organiza de forma gráfica un problema central, sus causas y consecuencias, facilitando la identificación de situaciones que requieren intervención.
              td.text-start Identificar las causas de la baja productividad de un cultivo. 
            tr(style="background-color: #F6F6F6;")
              td.text-start Diagrama de causa y efecto (Ishikawa)
              td.text-start Método de análisis gráfico que organiza las posibles causas de un problema para facilitar su comprensión y orientar la búsqueda de soluciones.
              td.text-start Determinar las causas de las pérdidas en la producción de leche. 
            tr(style="background-color: #FFFFFF;")
              td.text-start Matriz de priorización
              td.text-start Mecanismo de análisis que clasifica problemas, necesidades o alternativas mediante criterios establecidos, facilitando la selección de las acciones más relevantes según su impacto y viabilidad.
              td.text-start Priorizar las acciones de mejora de un proyecto productivo.
    
    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.4 Importancia
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema3/img_5.png')
      .bloque-texto-t__texto.col-12.col-md-10.col-lg-10.mb-0
        p.mb-0 El diagnóstico permite comprender el contexto en el que se desarrolla un proyecto y establecer un punto de partida para orientar su evolución. Su elaboración favorece la definición de prioridades, optimiza la planificación de las actividades, facilita la asignación adecuada de los recursos y reduce la posibilidad de adoptar acciones poco pertinentes. Además, fortalece la capacidad de adaptación frente a cambios del entorno y contribuye al mejoramiento continuo de los resultados obtenidos.

    p.mb-5(data-aos="zoom-in-right") Los elementos más importantes son:

    .row.justify-content-center.align-items-start.mb-4
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema3/img_6.png', class="img-fluid").h-100
      .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-sistema-h")
          div(titulo="Comprensión del contexto")
            p.mb-0 Permite reconocer las condiciones del territorio, la comunidad y el sistema productivo para orientar acciones acordes con la realidad del proyecto.
            p.mb-0 #[strong Ejemplo:] conocer la disponibilidad de agua antes de establecer un cultivo.
          div(titulo="Priorización de acciones")
            p.mb-0 Facilita ordenar las actividades según su urgencia, impacto y disponibilidad de recursos, favoreciendo una ejecución más organizada y eficiente.
            p.mb-0 #[strong Ejemplo:] atender primero el mantenimiento del sistema de riego.
          div(titulo="Optimización de recursos")
            p.mb-0 Favorece el aprovechamiento adecuado de los recursos disponibles, evitando desperdicios y mejorando el rendimiento de las actividades programadas.
            p.mb-0 #[strong Ejemplo:] distribuir el presupuesto entre insumos y asistencia técnica.
          div(titulo="Prevención de riesgos")
            p.mb-0 Permite anticipar situaciones que pueden afectar el desarrollo del proyecto y establecer medidas para reducir sus posibles consecuencias.
            p.mb-0 #[strong Ejemplo:] implementar drenajes antes de la temporada de lluvias.
          div(titulo="Seguimiento y evaluación")
            p.mb-0 Facilita verificar el cumplimiento de las actividades y valorar los resultados obtenidos para realizar ajustes cuando sean necesarios.
            p.mb-0 #[strong Ejemplo:] comparar la producción obtenida con la meta establecida.
          div(titulo="Mejoramiento continuo")
            p.mb-0 Promueve la incorporación permanente de ajustes que incrementen la eficiencia, la productividad y la sostenibilidad del proyecto.
            p.mb-0 #[strong Ejemplo:] adoptar nuevas prácticas para mejorar el rendimiento del cultivo.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
