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
        'Prueba de conocimientos sobre evaluación financiera y el plan de acción estratégico en proyectos agropecuarios',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar los conocimientos del aprendiz sobre los fundamentos de la evaluación financiera, económica y social de proyectos agropecuarios, así como la formulación, seguimiento, valoración y ajuste de planes de acción estratégicos, de acuerdo con herramientas de análisis, criterios técnicos y necesidades organizacionales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la evaluación de proyectos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar únicamente los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar, cuantificar y valorar los costos y beneficios del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar contratos laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir la estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 2,
          texto: 'La evaluación financiera de un proyecto permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Analizar la rentabilidad desde la perspectiva de los inversionistas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Determinar exclusivamente los impactos ambientales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar la calidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer la estructura jurídica de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 3,
          texto: 'Un proyecto es financieramente viable cuando:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sus ingresos permiten cubrir los costos and generar beneficios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tiene un gran número de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Posee licencias ambientales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuenta con varios proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes elementos se considera un beneficio en la evaluación financiera?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gastos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ingresos por ventas del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pago de impuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 5,
          texto: 'Los costos de un proyecto corresponden a:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los recursos utilizados para desarrollar las actividades del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los ingresos obtenidos por ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los aportes de los socios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los beneficios sociales generados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 6,
          texto: '¿Qué aspecto analiza principalmente la evaluación económica?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La utilidad para los accionistas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los efectos del proyecto sobre la economía en general.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El proceso de contratación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 7,
          texto: 'La evaluación social de un proyecto busca determinar:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La rentabilidad financiera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los precios de mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los beneficios y efectos que genera para la comunidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 8,
          texto:
            'Un ejemplo de beneficio social generado por un proyecto agropecuario es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento de los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generación de empleo en la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Pago de servicios públicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compra de insumos agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 9,
          texto: 'La rentabilidad de un proyecto se relaciona con:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de generar beneficios en comparación con la inversión realizada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de trabajadores contratados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de maquinaria utilizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ubicación geográfica del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 10,
          texto: 'La evaluación de proyectos permite tomar decisiones sobre:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La selección de personal únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El diseño del logotipo empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La conveniencia de ejecutar o no una iniciativa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La compra de terrenos exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 11,
          texto: 'Un proyecto público se caracteriza porque:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Busca exclusivamente el lucro privado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es financiado y orientado principalmente al bienestar colectivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo beneficia a los inversionistas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carece de objetivos sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 12,
          texto: 'Un proyecto privado tiene como finalidad principal:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desarrollar políticas públicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar recursos del Estado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejecutar programas comunitarios obligatoriamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Generar beneficios económicos para sus inversionistas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 13,
          texto: 'El plan de acción estratégico permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar actividades para alcanzar los objetivos propuestos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Determinar únicamente el presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer el precio de venta de los productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar la infraestructura del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 14,
          texto: 'Una acción de mejora debe formularse con base en:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Opiniones informales sin análisis previo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diagnósticos y herramientas de análisis.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Decisiones improvisadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Experiencias de otros sectores sin adaptación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 15,
          texto: 'El diagnóstico organizacional tiene como propósito:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar fortalezas, debilidades y oportunidades de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar únicamente presupuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir los precios de los productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar auditorías tributarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 16,
          texto: 'Para definir un plan de acción es necesario:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas publicitarias exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaborar contratos laborales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar la oferta del mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer actividades, responsables y tiempos de ejecución.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 17,
          texto: 'La valoración de los resultados del plan de acción permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verificar el cumplimiento de los objetivos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Calcular únicamente los impuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar automáticamente los ingresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar la normatividad vigente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 18,
          texto: 'El seguimiento de un plan de acción facilita:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de planificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar la asignación de responsabilidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Detectar desviaciones y realizar ajustes oportunos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir automáticamente los costos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 19,
          texto: 'Ajustar un plan de acción significa:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificar estrategias y actividades según los resultados obtenidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cancelar todas las actividades programadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar el presupuesto sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar los objetivos del proyecto permanentemente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 20,
          texto:
            'La evaluación financiera, económica y social de un proyecto contribuye a:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer el organigrama empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tomar decisiones informadas sobre su viabilidad y sostenibilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar únicamente el valor de los activos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar contratos de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

<style lang="sass"></style>
