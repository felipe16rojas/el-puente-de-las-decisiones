// Banco de situaciones pedagógicas con integración visual de Lengua de Señas Colombiana (LSC)
const scenarios = [
  {
    station: "Estación 1: Mi Cuerpo, Mis Reglas",
    pictogram: "🚪🔒",
    lscSign: "🏠 + ✋ (Casa / Habitación privada)",
    title: "El derecho a la privacidad en tu habitación",
    text: "Estás en tu habitación descansando o cambiándote de ropa. Un familiar entra sin tocar la puerta. ¿Qué derecho tienes en esta situación?",
    options: [
      {
        icon: "🗣️",
        text: "Pedir con respeto que toquen la puerta antes de entrar porque es mi espacio privado.",
        isRecommended: true,
        feedbackTitle: "¡Excelente decisión! Ejerces tu derecho a la privacidad.",
        feedback: "Todas las personas jóvenes y adultas tienen derecho a tener un espacio íntimo y privado. Pedir que toquen la puerta es un límite sano y respetuoso."
      },
      {
        icon: "😔",
        text: "Quedarme en silencio porque mi familia puede entrar cuando quiera sin avisar.",
        isRecommended: false,
        feedbackTitle: "Reflexionemos juntos sobre tu privacidad",
        feedback: "Aunque vivas con tu familia, eres una persona con derecho a la intimidad. Tu habitación es tu espacio personal y tienes derecho a pedir que toquen antes de entrar."
      }
    ]
  },
  {
    station: "Estación 1: Mi Cuerpo, Mis Reglas",
    pictogram: "🤗🚫",
    lscSign: "🛑 + 👤 (Detener / Mi cuerpo)",
    title: "Decidir sobre el contacto físico",
    text: "Llega una visita a casa y te pide un abrazo o un beso en la mejilla, pero tú hoy no tienes ganas de contacto físico. ¿Qué puedes hacer?",
    options: [
      {
        icon: "👋",
        text: "Saludar con la mano o con palabras, explicando amablemente que prefiero no abrazar hoy.",
        isRecommended: true,
        feedbackTitle: "¡Muy bien! Tu cuerpo te pertenece.",
        feedback: "Nadie está obligado a dar besos o abrazos si no lo desea, ni siquiera a familiares o conocidos. Puedes saludar de otra forma respetuosa."
      },
      {
        icon: "😟",
        text: "Aceptar el abrazo aunque me sienta incómodo para que nadie se moleste.",
        isRecommended: false,
        feedbackTitle: "Recuerda: tu comodidad es lo primero",
        feedback: "No tienes que aceptar contacto físico para agradar a los demás. Decir 'prefiero saludar de mano' es tu derecho y demuestra autonomía."
      }
    ]
  },
  {
    station: "Estación 2: El Semáforo del Afecto",
    pictogram: "💑💬",
    lscSign: "🤝 + ❌ (Acuerdo mutuo / Decisión)",
    title: "El consentimiento en pareja",
    text: "Tienes pareja y están compartiendo un momento afectivo. De pronto, tu pareja quiere avanzar más, pero tú no estás seguro o no quieres. ¿Qué debe pasar?",
    options: [
      {
        icon: "🛑",
        text: "Digo 'NO' con claridad y mi pareja debe detenerse y respetar mi decisión.",
        isRecommended: true,
        feedbackTitle: "¡Exacto! El consentimiento siempre debe ser libre y mutuo.",
        feedback: "En una relación sana, 'NO' significa 'NO'. Ambas personas deben estar de acuerdo y sentirse cómodas en todo momento."
      },
      {
        icon: "🤐",
        text: "No digo nada por miedo a que mi pareja se enoje o me deje.",
        isRecommended: false,
        feedbackTitle: "Una relación sana se basa en el respeto",
        feedback: "Quien te respeta y te quiere nunca te presionará para hacer algo que no deseas. Tienes pleno derecho a expresar tus límites."
      }
    ]
  },
  {
    station: "Estación 2: El Semáforo del Afecto",
    pictogram: "📱📸",
    lscSign: "📱 + 🛡️ (Pantalla / Cuidado y protección)",
    title: "Privacidad digital e imágenes íntimas",
    text: "Alguien que conociste por internet o redes sociales te pide que le envíes una foto íntima sin ropa. ¿Cuál es la decisión más segura y autónoma?",
    options: [
      {
        icon: "🚫",
        text: "Negarme a enviar la foto y bloquear a la persona si insiste.",
        isRecommended: true,
        feedbackTitle: "¡Gran decisión de autocuidado digital!",
        feedback: "Las fotos íntimas pueden compartirse sin tu permiso y poner en riesgo tu privacidad. Nunca cedas ante presiones en internet."
      },
      {
        icon: "📤",
        text: "Enviarla para demostrar que confío en esa persona.",
        isRecommended: false,
        feedbackTitle: "Cuidado: protege tu intimidad digital",
        feedback: "La confianza no se demuestra enviando fotos íntimas. Proteger tu imagen en internet es parte de tus derechos sexuales."
      }
    ]
  },
  {
    station: "Estación 3: Mi Red de Apoyo",
    pictogram: "⚠️🗣️",
    lscSign: "🆘 + 👥 (Pedir ayuda / Buscar apoyo)",
    title: "Actuar ante una situación incómoda o de abuso",
    text: "Un conocido o cuidador toca tu cuerpo sin tu permiso y te dice que 'es un secreto entre los dos'. ¿Qué debes hacer?",
    options: [
      {
        icon: "🆘",
        text: "No guardar el secreto y contárselo de inmediato a una persona de mi red de apoyo de confianza.",
        isRecommended: true,
        feedbackTitle: "¡Correcto! Ningún toque sin permiso debe ser un secreto.",
        feedback: "Nadie tiene derecho a tocar tu cuerpo sin tu consentimiento. Contarlo a una persona de confianza o autoridad te protege y hace valer tus derechos."
      },
      {
        icon: "🤫",
        text: "Guardar el secreto para no causar problemas.",
        isRecommended: false,
        feedbackTitle: "Importante: nunca guardes secretos que te hacen sentir mal",
        feedback: "Cuando alguien vulnera tu cuerpo, la culpa nunca es tuya. Buscar ayuda en tu red de apoyo es tu derecho."
      }
    ]
  },
  {
    station: "Estación 3: Mi Red de Apoyo",
    pictogram: "🏥📋",
    lscSign: "🩺 + 💡 (Salud / Explicación clara)",
    title: "Derecho a recibir información clara sobre salud sexual",
    text: "Vas a una consulta médica sobre salud sexual y el profesional habla solo con tu acompañante, ignorándote a ti. ¿Qué puedes exigir?",
    options: [
      {
        icon: "🙋",
        text: "Pedir que me expliquen la información directamente a mí en un lenguaje claro y comprensible.",
        isRecommended: true,
        feedbackTitle: "¡Excelente! Eres el protagonista de tu salud.",
        feedback: "Los profesionales de la salud tienen el deber de dirigirse a ti, respetar tu autonomía y brindarte información accesible."
      },
      {
        icon: "😶",
        text: "Dejar que decidan por mí porque no entiendo las palabras difíciles.",
        isRecommended: false,
        feedbackTitle: "Tienes derecho a entender y decidir",
        feedback: "Si el médico usa palabras difíciles, tienes derecho a pedir que te lo explique de forma sencilla para que tú tomes tus propias decisiones."
      }
    ]
  }
];

let currentStep = 0;
let speechRate = 1.0;
let hoverTimeout = null;

// Elementos del DOM
const screenIntro = document.getElementById('screen-intro');
const screenGame = document.getElementById('screen-game');
const screenEnd = document.getElementById('screen-end');

const stationBadge = document.getElementById('station-badge');
const progressFill = document.getElementById('progress-fill');
const questionTitle = document.getElementById('question-title');
const scenarioPictogram = document.getElementById('scenario-pictogram');
const scenarioText = document.getElementById('scenario-text');
const lscLabel = document.getElementById('lsc-label');
const optionsContainer = document.getElementById('options-container');
const feedbackBox = document.getElementById('feedback-box');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const btnNext = document.getElementById('btn-next');

// Síntesis de voz accesible
function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = speechRate;
    window.speechSynthesis.speak(utterance);
  }
}

document.getElementById('btn-read-screen').addEventListener('click', () => {
  let visibleSection = document.querySelector('section:not(.hidden)');
  if (visibleSection) {
    speakText(visibleSection.innerText);
  }
});

document.getElementById('btn-stop-audio').addEventListener('click', () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
});

document.getElementById('btn-speed').addEventListener('click', (e) => {
  if (speechRate === 1.0) {
    speechRate = 0.8;
    e.target.innerText = "🐢 Velocidad: Lenta";
  } else {
    speechRate = 1.0;
    e.target.innerText = "🐇 Velocidad: Normal";
  }
});

// Iniciar juego
document.getElementById('btn-start').addEventListener('click', () => {
  currentStep = 0;
  screenIntro.classList.add('hidden');
  screenEnd.classList.add('hidden');
  screenGame.classList.remove('hidden');
  loadScenario();
});

// Cargar situación actual
function loadScenario() {
  const data = scenarios[currentStep];
  stationBadge.innerText = data.station;
  const progressPercent = ((currentStep) / scenarios.length) * 100;
  progressFill.style.width = `${progressPercent}%`;

  questionTitle.innerText = `Situación ${currentStep + 1} de ${scenarios.length}: ${data.title}`;
  scenarioPictogram.innerText = data.pictogram;
  scenarioText.innerText = data.text;
  lscLabel.innerText = data.lscSign;

  optionsContainer.innerHTML = '';
  feedbackBox.style.display = 'none';
  btnNext.classList.add('hidden');

  data.options.forEach((opt, index) => {
    const optionWrapper = document.createElement('div');
    optionWrapper.style.display = 'flex';
    optionWrapper.style.gap = '10px';
    optionWrapper.style.alignItems = 'stretch';

    const button = document.createElement('button');
    button.className = 'option-btn';
    button.style.flex = '1';
    button.innerHTML = `
      <span class="option-icon" aria-hidden="true">${opt.icon}</span>
      <span>${opt.text}</span>
    `;

    button.addEventListener('mouseenter', () => {
      if (!button.disabled) {
        hoverTimeout = setTimeout(() => {
          speakText(`Opción ${index + 1}: ${opt.text}`);
        }, 400);
      }
    });

    button.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
    });

    button.addEventListener('focus', () => {
      if (!button.disabled) {
        speakText(`Opción ${index + 1}: ${opt.text}`);
      }
    });

    button.addEventListener('click', () => {
      clearTimeout(hoverTimeout);
      selectOption(opt);
    });

    const audioBtn = document.createElement('button');
    audioBtn.className = 'btn-a11y';
    audioBtn.style.minWidth = '56px';
    audioBtn.style.fontSize = '24px';
    audioBtn.style.border = '3px solid #64748B';
    audioBtn.style.borderRadius = '14px';
    audioBtn.innerText = '🔊';
    audioBtn.setAttribute('aria-label', `Escuchar opción ${index + 1}`);
    audioBtn.title = 'Escuchar esta opción antes de elegir';
    audioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakText(`Opción ${index + 1}: ${opt.text}`);
    });

    optionWrapper.appendChild(button);
    optionWrapper.appendChild(audioBtn);
    optionsContainer.appendChild(optionWrapper);
  });

  const fullIntroText = `${data.station}. ${data.title}. ${data.text}. Seña clave en lengua de señas: ${data.lscSign}.`;
  speakText(fullIntroText);
}

// Procesar selección
function selectOption(option) {
  const allButtons = optionsContainer.querySelectorAll('.option-btn');
  allButtons.forEach(btn => btn.disabled = true);

  feedbackBox.style.display = 'block';
  feedbackBox.className = 'feedback-box ' + (option.isRecommended ? 'feedback-correct' : 'feedback-info');
  feedbackTitle.innerText = option.feedbackTitle;
  feedbackText.innerText = option.feedback;

  btnNext.classList.remove('hidden');
  if (currentStep === scenarios.length - 1) {
    btnNext.innerText = "Finalizar recorrido 🏆";
  } else {
    btnNext.innerText = "Siguiente situación ➡️";
  }

  speakText(`${option.feedbackTitle}. ${option.feedback}`);
}

// Avanzar
btnNext.addEventListener('click', () => {
  currentStep++;
  if (currentStep < scenarios.length) {
    loadScenario();
  } else {
    progressFill.style.width = '100%';
    screenGame.classList.add('hidden');
    screenEnd.classList.remove('hidden');
    speakText(screenEnd.innerText);
  }
});

// Reiniciar
document.getElementById('btn-restart').addEventListener('click', () => {
  currentStep = 0;
  screenEnd.classList.add('hidden');
  screenGame.classList.remove('hidden');
  loadScenario();
});