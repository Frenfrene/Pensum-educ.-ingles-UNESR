// Datos ramos con requisitos por nombre exacto
const ramosData = [
  // Semestre 1
  { id: 'S1-1', nombre: 'Iniciación Universitaria', requisitos: [] },
  { id: 'S1-2', nombre: 'Lenguaje y Comunicación', requisitos: [] },
  { id: 'S1-3', nombre: 'Métodos y Técnicas de Estudio', requisitos: [] },
  { id: 'S1-4', nombre: 'Terminología en Estadística e Investigación', requisitos: [] },
  { id: 'S1-5', nombre: 'Precálculo', requisitos: [] },
  { id: 'S1-6', nombre: 'Idioma Moderno', requisitos: [] },

  // Semestre 2
  { id: 'S2-1', nombre: 'Estadística I', requisitos: [] },
  { id: 'S2-2', nombre: 'Psicología General', requisitos: [] },
  { id: 'S2-3', nombre: 'Psicología del Aprendizaje', requisitos: [] },
  { id: 'S2-4', nombre: 'Orientación Educativa', requisitos: [] },
  { id: 'S2-5', nombre: 'Pedagogía General', requisitos: [] },
  { id: 'S2-6', nombre: 'Fundamentos de la Andragogía', requisitos: [] },

  // Semestre 3
  { id: 'S3-1', nombre: 'Estadística II', requisitos: ['Estadística I'] },
  { id: 'S3-2', nombre: 'Metodología de la Investigación I', requisitos: [] },
  { id: 'S3-3', nombre: 'Ideas Educativas de Simón Rodríguez', requisitos: [] },
  { id: 'S3-4', nombre: 'Filosofía de la Educación', requisitos: [] },
  { id: 'S3-5', nombre: 'Sociología General', requisitos: [] },
  { id: 'S3-6', nombre: 'Educación Ambiental', requisitos: [] },

  // Semestre 4
  { id: 'S4-1', nombre: 'Realidad Socioeconómica de Venezuela', requisitos: [] },
  { id: 'S4-2', nombre: 'Metodología de la Investigación II', requisitos: ['Metodología de la Investigación I'] },
  { id: 'S4-3', nombre: 'Planificación de la Educación', requisitos: [] },
  { id: 'S4-4', nombre: 'Administración de la Educación', requisitos: [] },
  { id: 'S4-5', nombre: 'Sistema Educativo Venezolano', requisitos: [] },
  { id: 'S4-6', nombre: 'Planificación Curricular', requisitos: [] },

  // Semestre 5
  { id: 'S5-1', nombre: 'Diseños para el Aprendizaje', requisitos: [] },
  { id: 'S5-2', nombre: 'Evaluación de los Aprendizajes I', requisitos: ['Diseños para el Aprendizaje'] },
  { id: 'S5-3', nombre: 'Psicología Evolutiva', requisitos: [] },
  { id: 'S5-4', nombre: 'Inglés I', requisitos: [] },
  { id: 'S5-5', nombre: 'Inglés de Nivelación', requisitos: [] },
  { id: 'S5-6', nombre: 'Corrientes del Pensamiento Pedagógico', requisitos: [] },

  // Semestre 6
  { id: 'S6-1', nombre: 'Inglés II', requisitos: ['Inglés I'] },
  { id: 'S6-2', nombre: 'Introducción a la Literatura', requisitos: ['Inglés II'] },
  { id: 'S6-3', nombre: 'Panorama de la Cultura Británica y Norteamericana', requisitos: ['Inglés II'] },
  { id: 'S6-4', nombre: 'Sociología de la Educación', requisitos: [] },
  { id: 'S6-5', nombre: 'Educación Ambiental', requisitos: [] },
  { id: 'S6-6', nombre: 'Técnicas y Administración de Educación Individualizada', requisitos: [] },

  // Semestre 7
  { id: 'S7-1', nombre: 'Inglés III', requisitos: ['Inglés II'] },
  { id: 'S7-2', nombre: 'Fonética y Fonología del Inglés I', requisitos: ['Inglés III'] },
  { id: 'S7-3', nombre: 'Lingüística General', requisitos: ['Inglés III'] },
  { id: 'S7-4', nombre: 'Medios y Materiales Impresos', requisitos: [] },
  { id: 'S7-5', nombre: 'Medios Audiovisuales y Electrónicos', requisitos: [] },
  { id: 'S7-6', nombre: 'Ortografía del Inglés', requisitos: [] },

  // Semestre 8
  { id: 'S8-1', nombre: 'Inglés IV', requisitos: ['Inglés III'] },
  { id: 'S8-2', nombre: 'Composición y Estilo', requisitos: ['Inglés IV'] },
  { id: 'S8-3', nombre: 'Fonética y Fonología del Inglés II', requisitos: ['Fonética y Fonología del Inglés I'] },
  { id: 'S8-4', nombre: 'Lingüística Aplicada', requisitos: ['Lingüística General'] },
  { id: 'S8-5', nombre: 'Literatura Norteamericana S. XX', requisitos: ['Introducción a la Literatura'] },
  { id: 'S8-6', nombre: 'Literatura Británica S. XX', requisitos: ['Introducción a la Literatura'] },

  // Semestre 9
  { id: 'S9-1', nombre: 'Metodología Especial del Inglés', requisitos: ['Lingüística General'] },
  { id: 'S9-2', nombre: 'Evaluación de los Aprendizajes II', requisitos: ['Evaluación de los Aprendizajes I'] },
  { id: 'S9-3', nombre: 'Literatura Británica S. XIX', requisitos: ['Introducción a la Literatura', 'Inglés III'] },
  { id: 'S9-4', nombre: 'Literatura Norteamericana S. XIX', requisitos: ['Introducción a la Literatura', 'Inglés IV'] },
  { id: 'S9-5', nombre: 'Análisis de Textos Literarios', requisitos: ['Inglés IV'] },
  { id: 'S9-6', nombre: 'Psicología Lingüística', requisitos: ['Lingüística Aplicada'] },

  // Semestre 10
  { id: 'S10-1', nombre: 'Semántica', requisitos: ['Composición y Estilo'] },
  { id: 'S10-2', nombre: 'Sociolingüística', requisitos: ['Lingüística General'] },
  { id: 'S10-3', nombre: 'Morfología y Sintaxis I', requisitos: ['Inglés I'] },
  { id: 'S10-4', nombre: 'Morfología y Sintaxis II', requisitos: ['Morfología y Sintaxis I'] },
  { id: 'S10-5', nombre: 'Proyecto I - Docencia en Inglés', requisitos: ['Metodología de la Investigación II'] },
  { id: 'S10-6', nombre: 'Proyecto II - Docencia en Inglés', requisitos: ['Proyecto I - Docencia en Inglés'] },

  // Semestre 11
  { id: 'S11-1', nombre: 'Seminario de Trabajo Especial de Grado', requisitos: ['Proyecto II - Docencia en Inglés'] },
  { id: 'S11-2', nombre: 'Trabajo Especial de Grado', requisitos: ['Seminario de Trabajo Especial de Grado'] },
  { id: 'S11-3', nombre: 'Servicio Comunitario', requisitos: [] },
  { id: 'S11-4', nombre: 'Pasantía en Docencia en Inglés', requisitos: [] },
];

// Mapeo para encontrar id por nombre
const nombreToId = {};
ramosData.forEach(ramo => {
  nombreToId[ramo.nombre] = ramo.id;
});

// Traducir requisitos a ids
ramosData.forEach(ramo => {
  ramo.requisitosIds = ramo.requisitos.map(req => nombreToId[req]).filter(id => id !== undefined);
});

// Estado guardado: { idRamo: true/false (aprobado) }
let estado = {};

// Cargar estado de localStorage
function cargarEstado() {
  const saved = localStorage.getItem('mallaEstado');
  if (saved) {
    estado = JSON.parse(saved);
  } else {
    // Por defecto los ramos sin requisito desbloqueados (no aprobados)
    ramosData.forEach(ramo => {
      if (ramo.requisitosIds.length === 0) estado[ramo.id] = false;
      else estado[ramo.id] = false;
    });
  }
}

// Guardar estado
function guardarEstado() {
  localStorage.setItem('mallaEstado', JSON.stringify(estado));
}

// ¿Puede aprobarse? Requisitos aprobados
function puedeAprobar(id) {
  const ramo = ramosData.find(r => r.id === id);
  if (!ramo) return false;
  return ramo.requisitosIds.every(reqId => estado[reqId]);
}

// Construir UI
function construirMalla() {
  const container = document.getElementById('malla-container');
  container.innerHTML = '';

  // Agrupar por semestre para mostrar label y luego ramos
  let currentSemestre = 1;
  for (let sem = 1; sem <= 11; sem++) {
    // Label semestre
    const label = document.createElement('div');
    label.classList.add('semestre-label');
    label.textContent = `📚 Semestre ${sem}`;
    container.appendChild(label);

    // Filtrar ramos semestre
    const ramosSem = ramosData.filter(r => r.id.startsWith(`S${sem}-`));
    ramosSem.forEach(ramo => {
      const div = document.createElement('div');
      div.classList.add('ramo');
      div.textContent = ramo.nombre;
      div.id = ramo.id;

      // Bloqueo o no
      if (!puedeAprobar(ramo.id)) {
        div.classList.add('bloqueado');
        div.title = 'Requisitos no aprobados';
      } else {
        div.title = 'Click para aprobar / desaprobar';
      }

      // Si ya aprobado
      if (estado[ramo.id]) {
        div.classList.add('aprobado');
        div.title = 'Aprobado - Click para quitar aprobación';
      }

      // Click funcional solo si puede aprobar
      if (puedeAprobar(ramo.id)) {
        div.addEventListener('click', () => {
          // Toggle aprobado
          estado[ramo.id] = !estado[ramo.id];
          actualizarMalla();
          guardarEstado();
        });
      }

      container.appendChild(div);
    });
  }
}

// Actualizar UI tras cambio
function actualizarMalla() {
  const container = document.getElementById('malla-container');

  ramosData.forEach(ramo => {
    const div = document.getElementById(ramo.id);
    if (!div) return;

    // Bloqueado si no cumple requisito y no está aprobado
    if (!puedeAprobar(ramo.id) && !estado[ramo.id]) {
      div.classList.add('bloqueado');
      div.classList.remove('aprobado');
      div.title = 'Requisitos no aprobados';
      div.style.cursor = 'not-allowed';
      div.replaceWith(div.cloneNode(true)); // Remueve event listeners
    } else {
      div.classList.remove('bloqueado');
      div.style.cursor = 'pointer';

      if (estado[ramo.id]) {
        div.classList.add('aprobado');
        div.title = 'Aprobado - Click para quitar aprobación';
      } else {
        div.classList.remove('aprobado');
        div.title = 'Click para aprobar / desaprobar';
      }

      // Removemos y agregamos listener para evitar múltiples
      const newDiv = div.cloneNode(true);
      newDiv.addEventListener('click', () => {
        estado[ramo.id] = !estado[ramo.id];
        actualizarMalla();
        guardarEstado();
      });
      div.replaceWith(newDiv);
    }
  });
}

// Inicializar app
function init() {
  cargarEstado();
  construirMalla();
}

init();
