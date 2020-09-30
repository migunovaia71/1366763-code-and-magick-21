'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
const WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green']

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');

const similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

const getRandom = (arr) => {
  return Math.floor(Math.random() * arr.length) + 1;
}

const wizards = [
  {
    name: WIZARD_NAMES[getRandom(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES)],
    coatColor: WIZARD_COAT[getRandom(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)]
  },
  {
    name: WIZARD_NAMES[getRandom(WIZARD_NAMES)] + WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES)],
    coatColor: WIZARD_COAT[getRandom(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)]
  },
  {
    name: WIZARD_NAMES[getRandom(WIZARD_NAMES)] + WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES)],
    coatColor: WIZARD_COAT[getRandom(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)]
  },
  {
    name: WIZARD_NAMES[getRandom(WIZARD_NAMES)] + WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES)],
    coatColor: WIZARD_COAT[getRandom(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)]
  }
];

const renderWizard = function(wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;


  return wizardElement;
}

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
