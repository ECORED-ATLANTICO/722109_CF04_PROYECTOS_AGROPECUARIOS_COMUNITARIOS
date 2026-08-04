<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 El componente formativo Evaluación financiera y plan de acción estratégico de un proyecto agropecuario desarrolla competencias para analizar la viabilidad de iniciativas productivas y fortalecer la gestión de proyectos agropecuarios comunitarios mediante herramientas técnicas para la planificación y la toma de decisiones. Inicialmente, aborda la evaluación del proyecto, integrando la evaluación financiera para determinar la rentabilidad de la inversión a través del análisis de costos, ingresos e indicadores, y la evaluación económica y social, orientada a valorar los beneficios generados para la comunidad, el aprovechamiento de los recursos y el impacto sobre el desarrollo territorial. Posteriormente, presenta la recolección de la información como el proceso para obtener datos confiables mediante herramientas y técnicas que sustentan el análisis del proyecto. Con esta información se desarrolla el diagnóstico, el cual permite interpretar la situación actual, identificar necesidades, priorizar problemáticas y reconocer oportunidades mediante herramientas de análisis que respaldan decisiones objetivas.    
    p.mb-3 Finalmente, el componente orienta la formulación del plan de acción estratégico, abordando su concepto, elementos, procedimiento de elaboración, diligenciamiento e importancia como instrumento para organizar acciones, coordinar recursos, definir responsabilidades, realizar seguimiento y promover el mejoramiento continuo. En conjunto, estos contenidos proporcionan una metodología que favorece la planificación, ejecución y fortalecimiento de proyectos agropecuarios comunitarios con criterios de eficiencia, sostenibilidad y desarrollo rural.
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La figura presenta la estructura del componente formativo Evaluación financiera y plan de acción estratégico de un proyecto agropecuario. Esta organiza los contenidos en cuatro ejes principales: evaluación del proyecto, recolección de la información, diagnóstico y plan de acción estratégico. Cada eje incluye sus respectivos temas y subtemas, mostrando la secuencia lógica y la relación entre los diferentes contenidos que conforman el proceso de análisis, planificación y gestión de un proyecto agropecuario.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
