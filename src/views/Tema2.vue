<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Recolección de la información

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema2/img_1.png')
      .bloque-texto-t__texto.col-12.col-md-10.col-lg-10.mb-0
        p.mb-0 La formulación de un plan de acción estratégico para un proyecto agropecuario comunitario requiere información confiable, pertinente y actualizada que permita comprender las condiciones del territorio, las necesidades de la comunidad y el desempeño del proyecto. Contar con estos insumos facilita el análisis de la situación, fortalece la toma de decisiones y proporciona una base objetiva para definir acciones orientadas al mejoramiento, la sostenibilidad y el cumplimiento de los objetivos planteados.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1 Concepto
    .mb-0 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-3.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema2/img_2.svg', class="img-fluid d-none d-lg-block")
      .col-12.col-lg-11
        p.mb-3(data-aos="zoom-in-right") La recolección de la información es el proceso de obtener, organizar y registrar datos relevantes sobre los aspectos técnicos, productivos, económicos, sociales y ambientales de un proyecto agropecuario comunitario. Su propósito es proporcionar información objetiva que facilite el diagnóstico, sustente la evaluación del proyecto y oriente la formulación de un plan de acción estratégico acorde con las necesidades y oportunidades identificadas.
   
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 Herramientas y técnicas de recolección
    .mb-0 

    p.mb-3(data-aos="zoom-in-right") Las herramientas y las técnicas de recolección de la información son elementos complementarios que permiten obtener datos pertinentes y confiables para el análisis de un proyecto agropecuario comunitario. Mientras las herramientas facilitan el registro y la organización de la información, las técnicas orientan la forma de obtenerla de manera sistemática y objetiva. Su aplicación conjunta fortalece el diagnóstico, mejora la calidad del análisis y proporciona una base sólida para la evaluación del proyecto y la formulación de un plan de acción estratégico. 
    p.mb-5(data-aos="zoom-in-right") Entre las más utilizadas tenemos:

    .tarjeta.tarjeta--fondo-img-1.py-4.p-3.rounded-3.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-1
        .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
          SlyderA(tipo="a").tarjeta.tarjeta--blanca.py-4.p-5.mb-0
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 #[strong Encuesta]
                p.mb-0 Herramienta que permite recopilar información de un grupo de personas mediante preguntas estructuradas para conocer opiniones, necesidades, prácticas productivas o condiciones socioeconómicas relacionadas con el proyecto.            
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 #[strong Entrevista]
                p.mb-0 Técnica por medio de la cual se obtiene información detallada mediante un diálogo planificado con productores, líderes comunitarios o actores involucrados, favoreciendo la comprensión de situaciones, experiencias y expectativas.            
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 #[strong Grupo focal]
                p.mb-0 Es una técnica que reúne a un grupo de participantes representativos para intercambiar experiencias, analizar problemáticas, identificar necesidades y proponer alternativas de mejora mediante una discusión orientada por un moderador.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 #[strong Observación directa]
                p.mb-0 Permite identificar de manera objetiva las condiciones del proyecto, los procesos productivos, la infraestructura, los recursos disponibles y las prácticas implementadas en campo.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 #[strong Revisión documental]
                p.mb-0 Analiza documentos, registros técnicos, informes, planes, presupuestos, estados financieros y demás fuentes de información existentes para respaldar el proceso de evaluación.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 #[strong Lista de chequeo]
                p.mb-0 Facilita verificar de forma sistemática el cumplimiento de criterios, actividades, requisitos técnicos o condiciones previamente definidas para el proyecto agropecuario.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 #[strong Registros técnicos y productivos]
                p.mb-0 Reúnen información relacionada con producción, costos, rendimientos, inventarios, manejo de cultivos o especies pecuarias y demás indicadores que apoyan la evaluación del proyecto.
        .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
          figure
            img(src='@/assets/curso/temas/tema2/img_3.png', class="img-fluid d-none d-lg-block")

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-8.p-2
        .grad1.p-4
          .col-11
            p.mb-3 #[strong Nota.] Estas herramientas y técnicas pueden utilizarse de manera complementaria para obtener una visión integral del proyecto agropecuario comunitario, mejorando la calidad del diagnóstico y respaldando la toma de decisiones durante la formulación del plan de acción estratégico.
  
    
  

</template>

<script>
export default {
  name: 'Tema2',
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
