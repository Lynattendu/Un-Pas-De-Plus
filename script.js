/* =========================================================
   UN PAS DE PLUS
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


/* =========================================================
   CLÉS LOCALSTORAGE
========================================================= */

const STORAGE_KEYS = {
  since: "unPasDePlus_since",
  goal: "unPasDePlus_goal"
};


/* =========================================================
   ÉLÉMENTS HTML
========================================================= */

// Citation
const motivationQuote =
  document.getElementById("motivationQuote");

const motivationAuthor =
  document.getElementById("motivationAuthor");


// COMPTEUR DEPUIS
const sinceEmpty =
  document.getElementById("sinceEmpty");

const sinceContent =
  document.getElementById("sinceContent");

const sinceName =
  document.getElementById("sinceName");

const sinceDays =
  document.getElementById("sinceDays");

const sinceUnit =
  document.getElementById("sinceUnit");

const sinceMessage =
  document.getElementById("sinceMessage");

const sinceDateDisplay =
  document.getElementById("sinceDateDisplay");

const addSinceBtn =
  document.getElementById("addSinceBtn");

const editSinceBtn =
  document.getElementById("editSinceBtn");


// OBJECTIF
const goalEmpty =
  document.getElementById("goalEmpty");

const goalContent =
  document.getElementById("goalContent");

const goalName =
  document.getElementById("goalName");

const goalPrefix =
  document.getElementById("goalPrefix");

const goalDays =
  document.getElementById("goalDays");

const goalUnit =
  document.getElementById("goalUnit");

const goalMessage =
  document.getElementById("goalMessage");

const goalDateDisplay =
  document.getElementById("goalDateDisplay");

const addGoalBtn =
  document.getElementById("addGoalBtn");

const editGoalBtn =
  document.getElementById("editGoalBtn");


// MODALE DEPUIS
const sinceModal =
  document.getElementById("sinceModal");

const sinceForm =
  document.getElementById("sinceForm");

const sinceInputName =
  document.getElementById("sinceInputName");

const sinceInputDate =
  document.getElementById("sinceInputDate");

const deleteSinceBtn =
  document.getElementById("deleteSinceBtn");


// MODALE OBJECTIF
const goalModal =
  document.getElementById("goalModal");

const goalForm =
  document.getElementById("goalForm");

const goalInputName =
  document.getElementById("goalInputName");

const goalInputDate =
  document.getElementById("goalInputDate");

const deleteGoalBtn =
  document.getElementById("deleteGoalBtn");



/* =========================================================
   CITATIONS
========================================================= */

const quotes = [

  {
    text: "Les seules limites sont celles que l’on se donne.",
    author: ""
  },

  {
    text: "Ta seule limite, c’est toi-même.",
    author: ""
  },

  {
    text: "Avec les erreurs, on apprend. Avec le temps, on comprend.",
    author: ""
  },

  {
    text: "La vie, ce n’est pas d’attendre que les orages passent, c’est d’apprendre à danser sous la pluie.",
    author: ""
  },

  {
    text: "Ne juge pas chaque journée par ta récolte, mais par les graines que tu as plantées.",
    author: ""
  },

  {
    text: "Le succès ne dépend pas du résultat mais de ce qu’on a appris en chemin.",
    author: ""
  },

  {
    text: "Quand on ose, on se trompe souvent. Quand on n’ose pas, on se trompe toujours.",
    author: ""
  },

  {
    text: "Les gagnants cherchent des moyens, les perdants des excuses.",
    author: ""
  },

  {
    text: "La vie, c’est comme faire de la bicyclette : il faut avancer pour ne pas perdre l’équilibre.",
    author: "Albert Einstein"
  },

  {
    text: "Fais de ta vie un rêve et d’un rêve une réalité.",
    author: ""
  },

  {
    text: "Je connais mes limites. C’est pourquoi je vais au-delà, pour les repousser.",
    author: ""
  },

  {
    text: "Au milieu de toute difficulté se trouve cachée une opportunité.",
    author: "Albert Einstein"
  },

  {
    text: "Si on veut obtenir quelque chose que l’on n’a jamais eu, il faut tenter quelque chose que l’on n’a jamais fait.",
    author: ""
  },

  {
    text: "J’ai appris que le courage n’est pas l’absence de peur, mais la capacité de la vaincre.",
    author: "Nelson Mandela"
  },

  {
    text: "Il faut vivre avec le courage d’essayer et non avec la peur de ne pas y arriver.",
    author: ""
  },

  {
    text: "La plus grande erreur que peut faire un homme est d’avoir peur d’en faire une.",
    author: ""
  },

  {
    text: "Il vaut mieux suivre le bon chemin en boitant que le mauvais d’un pas ferme.",
    author: ""
  },

  {
    text: "Chaque jour, fais quelque chose qui te rend heureux jusqu’à ce que cela devienne une habitude.",
    author: ""
  },

  {
    text: "L’important n’est pas qui tu es mais qui tu deviens.",
    author: ""
  },

  {
    text: "Tomber, c’est l’expérience. Se battre, c’est le caractère. Ne pas abandonner, c’est la vie.",
    author: ""
  },

  {
    text: "La première ressource dont tu as besoin pour réussir se trouve en toi.",
    author: ""
  },

  {
    text: "Sois libre d’essayer autant de fois que nécessaire pour que l’échec n’existe plus.",
    author: ""
  },

  {
    text: "Il n’y a pas de problème, il n’y a que des solutions.",
    author: ""
  },

  {
    text: "Si tu ne peux pas voler, alors cours. Si tu ne peux pas courir, alors marche. Si tu ne peux pas marcher, alors rampe. Mais quoi que tu fasses, continue à avancer.",
    author: ""
  },

  {
    text: "Les rêves ne meurent jamais. Ils sont parfois simplement endormis jusqu’au jour où tu as le courage de les réaliser.",
    author: ""
  },

  {
    text: "Il vaut mieux une action imparfaite qu’une parfaite inaction.",
    author: ""
  },

  {
    text: "Les seules limites de nos réalisations de demain sont nos doutes et nos hésitations d’aujourd’hui.",
    author: ""
  },

  {
    text: "Cesse d’avoir peur de ce qui pourrait mal se passer et commence à être enthousiaste à l’idée de ce qui pourrait bien aller.",
    author: ""
  },

  {
    text: "Il ne faut jamais attendre d’avoir pleinement confiance en soi pour faire un pas en avant. C’est en avançant que l’on construit sa confiance.",
    author: ""
  },

  {
    text: "Si tout était facile, rien n’en vaudrait la peine.",
    author: ""
  },

  {
    text: "Un rêve écrit avec une date devient un objectif. Un objectif détaillé en étapes devient un plan. Un plan soutenu par des actions transforme les rêves en réalité.",
    author: ""
  },

  {
    text: "Pense, crois, rêve et ose.",
    author: ""
  },

  {
    text: "Quand rien n’est certain, tout est possible.",
    author: ""
  },

  {
    text: "Tu dois rester obstiné sur l’atteinte de ton objectif, mais flexible sur le chemin à prendre pour y parvenir.",
    author: ""
  },

  {
    text: "Souviens-toi de la sagesse de l’eau : elle ne se dispute jamais avec les obstacles, elle les contourne en poursuivant son objectif.",
    author: ""
  },

  {
    text: "L’excellence ne signifie pas être parfait, mais donner le meilleur de soi-même.",
    author: ""
  },

  {
    text: "Quand on a dix pas à faire, neuf pas ne font que la moitié du chemin.",
    author: ""
  },

  {
    text: "L’expérience te dit quoi faire, la confiance te permet de le faire.",
    author: ""
  },

  {
    text: "Ne perds jamais espoir. Quand le soleil se couche, les étoiles apparaissent.",
    author: ""
  },

  {
    text: "La différence entre ce que tu as et ce que tu veux, c’est ce que tu fais.",
    author: ""
  },

  {
    text: "Le corps accomplit ce que l’esprit croit.",
    author: ""
  },

  {
    text: "Ton meilleur professeur, c’est ta dernière erreur.",
    author: ""
  },

  {
    text: "On ne réussit pas à tous les coups, mais on apprend à chaque fois.",
    author: ""
  },

  {
    text: "Entre possible et impossible, il y a deux lettres et un état d’esprit.",
    author: ""
  },

  {
    text: "Gagne si tu peux, perds si tu dois, mais n’abandonne jamais.",
    author: ""
  },

  {
    text: "Le vrai entraînement commence quand tu veux arrêter.",
    author: ""
  },

  {
    text: "Seul on va plus vite, ensemble on va plus loin.",
    author: ""
  },

  {
    text: "Fais confiance à cette petite voix qui te dit : ça peut marcher, il faut essayer.",
    author: ""
  },

  {
    text: "On ne perd jamais : soit on gagne, soit on apprend.",
    author: ""
  },

  {
    text: "Crois en toi et tu deviendras inarrêtable.",
    author: ""
  },

  {
    text: "Tous tes rêves peuvent se réaliser si tu as le courage de les poursuivre.",
    author: ""
  },

  {
    text: "Le seul mauvais entraînement est celui que tu ne fais pas.",
    author: ""
  },

  {
    text: "Tomber est un accident. Rester à terre est un choix.",
    author: ""
  },

  {
    text: "L’impossible recule toujours quand tu marches vers lui.",
    author: ""
  },

  {
    text: "Le succès est la somme de petits efforts répétés jour après jour.",
    author: ""
  },

  {
    text: "Tous les champions sont d’anciens débutants qui ont refusé d’abandonner.",
    author: ""
  },

  {
    text: "La distance entre tes rêves et la réalité s’appelle l’action.",
    author: ""
  },

  {
    text: "Si tu oses, ton courage grandira. Si tu hésites, c’est ta peur qui prendra toute la place.",
    author: ""
  },

  {
    text: "Je ne te dis pas que ce sera facile. Je te dis simplement que ça en vaut la peine.",
    author: ""
  },

  {
    text: "La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute.",
    author: ""
  },

  {
    text: "La persévérance rend l’impossible possible, le possible probable et le probable réalisable.",
    author: ""
  },

  {
    text: "Face à la roche, le ruisseau l’emporte toujours, non par la force mais par la persévérance.",
    author: ""
  },

  {
    text: "Il n’y a pas de réussite facile ni d’échec définitif.",
    author: ""
  },

  {
    text: "Je vais réussir parce que je suis assez fou pour le croire.",
    author: ""
  },

  {
    text: "On devient plus fort en prenant conscience de ses faiblesses.",
    author: ""
  },

  {
    text: "La façon la plus sûre de réussir est de toujours essayer encore une fois.",
    author: ""
  },

  {
    text: "Laisse tes rêves changer la réalité, mais ne laisse pas la réalité changer tes rêves.",
    author: ""
  },

  {
    text: "La préparation est la moitié de la victoire.",
    author: ""
  },

  {
    text: "Chaque réussite commence avec la volonté d’essayer.",
    author: ""
  },

  {
    text: "La plus petite des actions vaudra toujours mieux que la plus grande des intentions.",
    author: ""
  },

  {
    text: "On a deux vies. La deuxième commence le jour où l’on réalise qu’on n’en a qu’une.",
    author: ""
  },

  {
    text: "Ne te décourage pas : c’est souvent la dernière clé du trousseau qui ouvre la porte.",
    author: ""
  },

  {
    text: "Les routes difficiles conduisent souvent à de belles destinations.",
    author: ""
  },

  {
    text: "Lève-toi avec détermination et couche-toi avec satisfaction.",
    author: ""
  },

  {
    text: "Ton corps peut presque tout supporter. C’est ton esprit qu’il faut convaincre.",
    author: ""
  },

  {
    text: "Il ne faut pas avoir peur d’échouer, mais de ne pas essayer.",
    author: ""
  },

  {
    text: "N’attends pas d’atteindre ton objectif pour être fier de toi. Sois fier de chaque pas que tu fais.",
    author: ""
  },

  {
    text: "Ton objectif ne doit pas être d’être meilleur que les autres, mais meilleur que la personne que tu étais hier.",
    author: ""
  },

  {
    text: "Avec de la discipline, tu peux réaliser l’impossible.",
    author: ""
  },

  {
    text: "La motivation est ce qui te fait démarrer. L’habitude est ce qui te permet de tenir.",
    author: ""
  },

  {
    text: "L’échec est seulement l’opportunité de recommencer d’une manière plus intelligente.",
    author: ""
  },

  {
    text: "Les faibles cherchent des excuses, les forts cherchent des solutions.",
    author: ""
  },

  {
    text: "Tout le monde a besoin de croire en quelque chose. Alors crois en toi.",
    author: ""
  },

  {
    text: "Le gagnant n’est pas celui qui n’échoue jamais, c’est celui qui n’abandonne jamais.",
    author: ""
  },

  {
    text: "La confiance en toi est le premier secret du succès.",
    author: ""
  },

  {
    text: "Les défis rendent la vie intéressante. Les surmonter lui donne un sens.",
    author: ""
  },

  {
    text: "La force ne vient pas de ce que tu peux faire, mais du fait de surmonter ce que tu pensais ne pas pouvoir faire.",
    author: ""
  },

  {
    text: "Celui qui déplace la montagne commence par enlever les petites pierres.",
    author: ""
  },

  {
    text: "La journée facile, c’était hier.",
    author: ""
  },

  {
    text: "La vie mettra des pierres sur ton chemin. À toi de décider si tu en fais un pont ou un mur.",
    author: ""
  },

  {
    text: "Là où la volonté est grande, les difficultés diminuent.",
    author: ""
  },

  {
    text: "Il n’y a qu’une façon d’échouer : abandonner avant d’avoir réussi.",
    author: ""
  },

  {
    text: "La douleur est éphémère, mais la fierté est éternelle.",
    author: ""
  },

  {
    text: "Sois plus fort que tes excuses.",
    author: ""
  },

  {
    text: "Ne limite pas tes défis. Défie tes limites.",
    author: ""
  },

  {
    text: "Ne rêve pas de victoire. Entraîne-toi pour ça.",
    author: ""
  },

  {
    text: "Le plus grand échec est de ne pas avoir eu le courage d’essayer.",
    author: ""
  },

  {
    text: "Il ne faut pas penser uniquement à l’objectif. Il faut penser à avancer. C’est à force d’avancer qu’on finit par l’atteindre.",
    author: ""
  },

  {
    text: "Ce n’est pas parce que c’est compliqué que c’est impossible.",
    author: ""
  },

  {
    text: "Le bonheur n’est pas au sommet de la montagne, mais dans la façon de la gravir.",
    author: ""
  },

  {
    text: "Un gagnant est un rêveur qui n’abandonne jamais.",
    author: ""
  },

  {
    text: "Il ne faut pas attendre d’être parfait pour commencer quelque chose de bien.",
    author: ""
  },

  {
    text: "Si tu y crois, ton esprit peut t’y emmener.",
    author: ""
  },

  {
    text: "Plus tu en rêves, plus tu t’en approches.",
    author: ""
  },

  {
    text: "Tu n’es pas un perdant tant que tu continues à essayer.",
    author: ""
  },

  {
    text: "Plus la bataille est dure, plus la victoire est douce.",
    author: ""
  },

  {
    text: "Il n’y a pas d’ascenseur vers le succès. Il faut prendre l’escalier.",
    author: ""
  },

  {
    text: "Ne regarde pas derrière toi, ce n’est pas là que tu vas.",
    author: ""
  },

  {
    text: "Oublie le passé, mais retiens la leçon.",
    author: ""
  },

  {
    text: "Suis tes rêves, ils connaissent le chemin.",
    author: ""
  },

  {
    text: "Rien de grand ne s’est accompli sans plaisir ni passion.",
    author: ""
  },

  {
    text: "Ce sont tes choix qui montrent qui tu es, bien plus que tes capacités.",
    author: ""
  },

  {
    text: "Ne va pas là où le chemin mène. Va là où il n’y en a pas encore et ouvre la route.",
    author: ""
  }

];


/* =========================================================
   OUTILS DATE
========================================================= */

function getToday() {

  const now = new Date();

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
}


function parseLocalDate(dateString) {

  if (!dateString) {
    return null;
  }

  const parts = dateString.split("-");

  if (parts.length !== 3) {
    return null;
  }

  const year = Number(parts[0]);
  const month = Number(parts[1]) - 1;
  const day = Number(parts[2]);

  return new Date(year, month, day);
}


function differenceInDays(dateA, dateB) {

  const msPerDay =
    1000 * 60 * 60 * 24;

  const utcA =
    Date.UTC(
      dateA.getFullYear(),
      dateA.getMonth(),
      dateA.getDate()
    );

  const utcB =
    Date.UTC(
      dateB.getFullYear(),
      dateB.getMonth(),
      dateB.getDate()
    );

  return Math.round(
    (utcA - utcB) / msPerDay
  );
}


function formatDate(date) {

  return new Intl.DateTimeFormat(
    "fr-FR",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  ).format(date);
}



/* =========================================================
   LOCALSTORAGE
========================================================= */

function saveData(key, data) {

  localStorage.setItem(
    key,
    JSON.stringify(data)
  );
}


function loadData(key) {

  const saved =
    localStorage.getItem(key);

  if (!saved) {
    return null;
  }

  try {

    return JSON.parse(saved);

  } catch (error) {

    console.error(
      "Erreur de lecture localStorage :",
      error
    );

    return null;
  }
}


function deleteData(key) {

  localStorage.removeItem(key);
}



/* =========================================================
   CITATION DU JOUR
========================================================= */

function getDailyQuoteIndex() {

  const today =
    getToday();

  const dateKey =
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  let hash = 0;

  for (
    let i = 0;
    i < dateKey.length;
    i++
  ) {

    hash =
      ((hash << 5) - hash) +
      dateKey.charCodeAt(i);

    hash |= 0;
  }

  return Math.abs(hash) % quotes.length;
}


function displayDailyQuote() {

  if (
    !motivationQuote ||
    quotes.length === 0
  ) {
    return;
  }

  const quote =
    quotes[getDailyQuoteIndex()];

  motivationQuote.textContent =
    `“${quote.text}”`;

  if (
    motivationAuthor &&
    quote.author
  ) {

    motivationAuthor.textContent =
      `— ${quote.author}`;

    motivationAuthor.style.display =
      "block";

  } else if (motivationAuthor) {

    motivationAuthor.textContent = "";

    motivationAuthor.style.display =
      "none";
  }
}



/* =========================================================
   AFFICHAGE — COMPTEUR DEPUIS
========================================================= */

function renderSince() {

  const data =
    loadData(STORAGE_KEYS.since);

  if (
    !data ||
    !data.name ||
    !data.date
  ) {

    sinceEmpty?.classList.remove(
      "hidden"
    );

    sinceContent?.classList.add(
      "hidden"
    );

    return;
  }


  const startDate =
    parseLocalDate(data.date);

  const today =
    getToday();

  if (!startDate) {
    return;
  }


  let days =
    differenceInDays(
      today,
      startDate
    );


  /*
    Si la date enregistrée est future,
    on considère que l'activité
    n'a pas encore commencé.
  */

  if (days < 0) {

    sinceEmpty?.classList.add(
      "hidden"
    );

    sinceContent?.classList.remove(
      "hidden"
    );

    sinceName.textContent =
      data.name;

    const remaining =
      Math.abs(days);

    sinceDays.textContent =
      remaining;

    sinceUnit.textContent =
      remaining === 1
        ? "jour"
        : "jours";

    sinceMessage.textContent =
      remaining === 1
        ? "avant de commencer"
        : "avant de commencer";

    sinceDateDisplay.textContent =
      `Début prévu le ${formatDate(startDate)}`;

    return;
  }


  sinceEmpty?.classList.add(
    "hidden"
  );

  sinceContent?.classList.remove(
    "hidden"
  );


  sinceName.textContent =
    data.name;


  if (days === 0) {

    sinceDays.textContent =
      "Aujourd’hui";

    sinceUnit.textContent =
      "";

    sinceMessage.textContent =
      "tout commence maintenant";

  } else {

    sinceDays.textContent =
      days;

    sinceUnit.textContent =
      days === 1
        ? "jour"
        : "jours";

    sinceMessage.textContent =
      days === 1
        ? "depuis que tu as commencé"
        : "depuis que tu as commencé";
  }


  sinceDateDisplay.textContent =
    `Début : ${formatDate(startDate)}`;
}



/* =========================================================
   AFFICHAGE — OBJECTIF
========================================================= */

function renderGoal() {

  const data =
    loadData(STORAGE_KEYS.goal);

  if (
    !data ||
    !data.name ||
    !data.date
  ) {

    goalEmpty?.classList.remove(
      "hidden"
    );

    goalContent?.classList.add(
      "hidden"
    );

    return;
  }


  const targetDate =
    parseLocalDate(data.date);

  const today =
    getToday();

  if (!targetDate) {
    return;
  }


  const days =
    differenceInDays(
      targetDate,
      today
    );


  goalEmpty?.classList.add(
    "hidden"
  );

  goalContent?.classList.remove(
    "hidden"
  );

  goalName.textContent =
    data.name;


  if (days > 1) {

    goalPrefix.textContent =
      "Dans";

    goalDays.textContent =
      days;

    goalUnit.textContent =
      "jours";

    goalMessage.textContent =
      "avant ton objectif";

  }


  else if (days === 1) {

    goalPrefix.textContent =
      "";

    goalDays.textContent =
      "Demain";

    goalUnit.textContent =
      "";

    goalMessage.textContent =
      "c’est presque le moment";

  }


  else if (days === 0) {

    goalPrefix.textContent =
      "";

    goalDays.textContent =
      "Aujourd’hui";

    goalUnit.textContent =
      "";

    goalMessage.textContent =
      "C’est le jour J. Fais-le.";

  }


  else {

    const elapsed =
      Math.abs(days);

    goalPrefix.textContent =
      "";

    goalDays.textContent =
      elapsed;

    goalUnit.textContent =
      elapsed === 1
        ? "jour"
        : "jours";

    goalMessage.textContent =
      elapsed === 1
        ? "depuis cet objectif"
        : "depuis cet objectif";
  }


  goalDateDisplay.textContent =
    `Date : ${formatDate(targetDate)}`;
}



/* =========================================================
   OUVERTURE MODALE DEPUIS
========================================================= */

function openSinceModal() {

  const data =
    loadData(STORAGE_KEYS.since);


  if (data) {

    sinceInputName.value =
      data.name || "";

    sinceInputDate.value =
      data.date || "";

    deleteSinceBtn.style.display =
      "inline-flex";

  } else {

    sinceInputName.value =
      "";

    sinceInputDate.value =
      "";

    deleteSinceBtn.style.display =
      "none";
  }


  sinceModal.classList.remove(
    "hidden"
  );

  sinceModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );


  setTimeout(() => {

    sinceInputName.focus();

  }, 100);
}



/* =========================================================
   OUVERTURE MODALE OBJECTIF
========================================================= */

function openGoalModal() {

  const data =
    loadData(STORAGE_KEYS.goal);


  if (data) {

    goalInputName.value =
      data.name || "";

    goalInputDate.value =
      data.date || "";

    deleteGoalBtn.style.display =
      "inline-flex";

  } else {

    goalInputName.value =
      "";

    goalInputDate.value =
      "";

    deleteGoalBtn.style.display =
      "none";
  }


  goalModal.classList.remove(
    "hidden"
  );

  goalModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );


  setTimeout(() => {

    goalInputName.focus();

  }, 100);
}



/* =========================================================
   FERMETURE MODALES
========================================================= */

function closeSinceModal() {

  sinceModal.classList.add(
    "hidden"
  );

  sinceModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );
}


function closeGoalModal() {

  goalModal.classList.add(
    "hidden"
  );

  goalModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );
}



/* =========================================================
   ENREGISTREMENT DEPUIS
========================================================= */

sinceForm?.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const name =
      sinceInputName.value.trim();

    const date =
      sinceInputDate.value;


    if (
      !name ||
      !date
    ) {
      return;
    }


    saveData(
      STORAGE_KEYS.since,
      {
        name,
        date
      }
    );


    closeSinceModal();

    renderSince();
  }
);



/* =========================================================
   ENREGISTREMENT OBJECTIF
========================================================= */

goalForm?.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const name =
      goalInputName.value.trim();

    const date =
      goalInputDate.value;


    if (
      !name ||
      !date
    ) {
      return;
    }


    saveData(
      STORAGE_KEYS.goal,
      {
        name,
        date
      }
    );


    closeGoalModal();

    renderGoal();
  }
);



/* =========================================================
   SUPPRESSION — DEPUIS
========================================================= */

deleteSinceBtn?.addEventListener(
  "click",
  () => {

    const confirmed =
      window.confirm(
        "Supprimer ce compteur ?"
      );

    if (!confirmed) {
      return;
    }


    deleteData(
      STORAGE_KEYS.since
    );

    closeSinceModal();

    renderSince();
  }
);



/* =========================================================
   SUPPRESSION — OBJECTIF
========================================================= */

deleteGoalBtn?.addEventListener(
  "click",
  () => {

    const confirmed =
      window.confirm(
        "Supprimer cet objectif ?"
      );

    if (!confirmed) {
      return;
    }


    deleteData(
      STORAGE_KEYS.goal
    );

    closeGoalModal();

    renderGoal();
  }
);



/* =========================================================
   BOUTONS OUVERTURE
========================================================= */

addSinceBtn?.addEventListener(
  "click",
  openSinceModal
);

editSinceBtn?.addEventListener(
  "click",
  openSinceModal
);


addGoalBtn?.addEventListener(
  "click",
  openGoalModal
);

editGoalBtn?.addEventListener(
  "click",
  openGoalModal
);



/* =========================================================
   FERMETURE PAR BOUTONS / OVERLAY
========================================================= */

document.querySelectorAll(
  '[data-close-modal="since"]'
).forEach((element) => {

  element.addEventListener(
    "click",
    closeSinceModal
  );

});


document.querySelectorAll(
  '[data-close-modal="goal"]'
).forEach((element) => {

  element.addEventListener(
    "click",
    closeGoalModal
  );

});



/* =========================================================
   TOUCHE ÉCHAP
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") {
      return;
    }


    if (
      !sinceModal.classList.contains(
        "hidden"
      )
    ) {

      closeSinceModal();
    }


    if (
      !goalModal.classList.contains(
        "hidden"
      )
    ) {

      closeGoalModal();
    }
  }
);



/* =========================================================
   LIMITES DES DATES
========================================================= */

function setDateLimits() {

  const today =
    getToday();

  const yyyy =
    today.getFullYear();

  const mm =
    String(
      today.getMonth() + 1
    ).padStart(2, "0");

  const dd =
    String(
      today.getDate()
    ).padStart(2, "0");

  const todayString =
    `${yyyy}-${mm}-${dd}`;


  /*
    Pour le compteur "Depuis",
    on autorise aujourd’hui ou une date passée.
  */

  if (sinceInputDate) {

    sinceInputDate.max =
      todayString;
  }


  /*
    Pour l'objectif,
    on autorise aujourd’hui ou une date future.
  */

  if (goalInputDate) {

    goalInputDate.min =
      todayString;
  }
}



/* =========================================================
   ACTUALISATION AUTOMATIQUE
========================================================= */

function refreshAll() {

  displayDailyQuote();

  renderSince();

  renderGoal();
}



/* =========================================================
   DÉTECTION CHANGEMENT DE JOUR
========================================================= */

let lastKnownDate =
  getToday().toDateString();


setInterval(() => {

  const currentDate =
    getToday().toDateString();


  if (
    currentDate !==
    lastKnownDate
  ) {

    lastKnownDate =
      currentDate;

    setDateLimits();

    refreshAll();
  }

}, 60000);



/* =========================================================
   RETOUR SUR L’APPLICATION
========================================================= */

document.addEventListener(
  "visibilitychange",
  () => {

    if (
      document.visibilityState ===
      "visible"
    ) {

      setDateLimits();

      refreshAll();
    }
  }
);



/* =========================================================
   INITIALISATION
========================================================= */

setDateLimits();

refreshAll();

});
