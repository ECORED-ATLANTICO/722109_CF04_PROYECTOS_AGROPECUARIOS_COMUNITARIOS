<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Evaluación de conocimientos sobre los componentes de estudio para la formulación de proyectos agropecuarios.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión y aplicación de los conceptos relacionados con los estudios de mercado, técnico, administrativo, ambiental y financiero en la formulación de proyectos agropecuarios, identificando los elementos que determinan la viabilidad y sostenibilidad de una iniciativa productiva de acuerdo con criterios técnicos, normativos y metodológicos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del estudio de mercado en un proyecto agropecuario?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar la ubicación del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar la viabilidad comercial del bien o servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcular el flujo de caja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir el organigrama empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 2,
          texto: 'La identificación del bien o servicio permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer las fuentes de financiación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir las características y beneficios de lo que se ofrecerá al mercado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar la estructura jurídica de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar los impactos ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 3,
          texto: 'La demanda en un estudio de mercado se refiere a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de productos disponibles para la venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La capacidad productiva de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La cantidad de bienes o servicios que los consumidores están dispuestos a adquirir.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El número de proveedores existentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 4,
          texto: 'El análisis de la oferta consiste en:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar los competidores y los productos disponibles en el mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Identificar los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer el flujo de caja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir el organigrama empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 5,
          texto:
            '¿Qué factor influye directamente en la determinación del precio de un producto agropecuario?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La oferta, la demanda y los costos de producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El organigrama de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La legislación ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 6,
          texto: 'Una estrategia de mercadeo agrícola busca:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar acciones para posicionar y comercializar el producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar contratos laborales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar el tamaño de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar licencias ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 7,
          texto:
            'En el estudio técnico, la localización del proyecto hace referencia a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La forma jurídica de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El lugar donde se desarrollarán las actividades productivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La estrategia comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 8,
          texto: 'El tamaño de un proyecto agropecuario está relacionado con:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de leyes aplicables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El número de socios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tipo de contrato utilizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La capacidad de producción prevista.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 9,
          texto: 'La descripción del proceso productivo permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar las etapas necesarias para obtener el producto o servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definir el flujo de caja.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer la estructura jurídica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar los impuestos aplicables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 10,
          texto: 'El cronograma de actividades tiene como finalidad:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar las tareas según tiempos y responsables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Determinar el precio de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer los impuestos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir la demanda del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 11,
          texto: 'La planeación estratégica permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir la dirección y los objetivos de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Calcular únicamente los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar el flujo de caja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer la oferta del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 12,
          texto: 'El análisis DOFA evalúa:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costos, gastos e ingresos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Debilidades, oportunidades, fortalezas y amenazas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Oferta, demanda, precio y promoción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Riesgos ambientales y financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 13,
          texto: '¿Cuál es la función principal de un organigrama?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar los precios del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calcular la rentabilidad del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Representar gráficamente la estructura organizacional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Identificar los impactos ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 14,
          texto: 'El aspecto legal de un proyecto agropecuario busca:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar el cumplimiento de las normas aplicables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar automáticamente la producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir los costos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer la estrategia de mercadeo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 15,
          texto: 'La normatividad agropecuaria tiene como objetivo:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar la demanda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar el flujo de caja.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar el organigrama empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regular las actividades del sector agropecuario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de las siguientes corresponde a un tipo de empresa reconocido en Colombia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sociedad por Acciones Simplificada (SAS).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Asociación Temporal de Producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cooperativa Informal de Negocios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Grupo Empresarial Rural Autónomo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 17,
          texto: 'La contratación en una empresa permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir la ubicación del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calcular los ingresos esperados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer formalmente las relaciones laborales o comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elaborar indicadores ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 18,
          texto: 'El estudio ambiental busca principalmente:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar el precio del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer la estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calcular la rentabilidad financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar y gestionar los impactos ambientales del proyecto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 19,
          texto: 'La legislación ambiental establece:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las normas para la protección y conservación de los recursos naturales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los precios máximos de los productos agropecuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura jurídica de las empresas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los procedimientos de contratación laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
        {
          id: 20,
          texto: 'El flujo de caja es una herramienta financiera que permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar impactos ambientales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar y proyectar ingresos y egresos de dinero en un período determinado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar la estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Analizar la oferta y la demanda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formulación de los componentes de estudio para proyectos agropecuarios.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la formulación de los componentes de estudio para proyectos agropecuarios.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

<style lang="sass"></style>
