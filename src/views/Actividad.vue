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
          imagen: require('@/assets/actividad/imagen1.png'),
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
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sus ingresos permiten cubrir los costos y generar beneficios.',
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
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Gastos administrativos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Ingresos por ventas del proyecto.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Costos de producción.', esCorrecta: false },
            { id: 'd', texto: 'Pago de impuestos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación financiera y plan de acción estratégico de un proyecto agropecuario.',
        },
        {
          id: 5,
          texto: 'Los costos de un proyecto corresponden a:',
          imagen: require('@/assets/actividad/imagen2.png'),
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
            { id: 'c', texto: 'Los aportes de los socios.', esCorrecta: false },
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
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Los costos de producción.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La rentabilidad financiera.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Los precios de mercado.', esCorrecta: false },
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
          imagen: require('@/assets/actividad/imagen2.png'),
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
          imagen: require('@/assets/actividad/imagen3.png'),
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
          imagen: require('@/assets/actividad/imagen3.png'),
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
            'Se evidencia un adecuado dominio de los conceptos relacionados con las características de un proyecto público.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los conceptos relacionados con las características de un proyecto público.',
        },
        {
          id: 12,
          texto: 'Un proyecto privado tiene como finalidad principal:',
          imagen: require('@/assets/actividad/imagen3.png'),
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
          texto:
            '¿Cuál es el propósito principal de la recolección de la información en un proyecto agropecuario comunitario?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elaborar el presupuesto definitivo del proyecto antes de su ejecución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Obtener información objetiva que facilite el diagnóstico, sustente la evaluación y oriente la formulación del plan de acción estratégico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Registrar únicamente los costos y los ingresos generados por el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar la rentabilidad financiera mediante indicadores económicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la recolección de la información en un proyecto agropecuario comunitario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la recolección de la información en un proyecto agropecuario comunitario.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de las siguientes técnicas permite obtener información detallada mediante un diálogo planificado con productores, líderes comunitarios o actores involucrados?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Lista de chequeo.', esCorrecta: false },
            { id: 'b', texto: 'Observación directa.', esCorrecta: false },
            { id: 'c', texto: 'Revisión documental.', esCorrecta: false },
            { id: 'd', texto: 'Entrevista.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la recolección de información y sus diferentes técnicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la recolección de información y sus diferentes técnicas.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de los siguientes aspectos hace parte de los elementos que conforman un plan de acción estratégico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tasa Interna de Retorno (TIR).',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Valor Actual Neto (VAN).', esCorrecta: false },
            { id: 'c', texto: 'Cronograma de ejecución.', esCorrecta: true },
            { id: 'd', texto: 'Flujo neto de caja.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los elementos que conforman un plan de acción estratégico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los elementos que conforman un plan de acción estratégico.',
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
          texto:
            'Durante el diligenciamiento de un plan de acción estratégico, ¿qué práctica contribuye a garantizar la calidad y confiabilidad de la información registrada?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dejar espacios en blanco para diligenciarlos posteriormente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incorporar información verificable sustentada en el diagnóstico, registros o evidencias del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Modificar los objetivos durante la ejecución sin justificación técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar únicamente las actividades, sin responsables ni cronograma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las prácticas que contribuye a garantizar la calidad y confiabilidad de la información registrada.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las prácticas que contribuye a garantizar la calidad y confiabilidad de la información registrada.',
        },
        {
          id: 18,
          texto: 'El seguimiento de un plan de acción facilita:',
          imagen: require('@/assets/actividad/imagen5.png'),
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
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento de un plan de acción estratégico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento de un plan de acción estratégico.',
        },
        {
          id: 19,
          texto: 'Ajustar un plan de acción significa:',
          imagen: require('@/assets/actividad/imagen5.png'),
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
            'Se evidencia un adecuado dominio de los conceptos relacionados los planes de acción en un proyecto agropecuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los planes de acción en un proyecto agropecuario.',
        },
        {
          id: 20,
          texto:
            'La evaluación financiera, económica y social de un proyecto contribuye a:',
          imagen: require('@/assets/actividad/imagen5.png'),
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
