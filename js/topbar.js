// topbar.js
import { sexThemes } from './constants.js';
import { formatAge, getNextVaccine } from './utils.js';

export const applySexTheme = (topBar, dynamicForm, leftColumn, rightColumn, buttons, sex) => {
  const theme = sexThemes[sex] || sexThemes.Default;
  topBar.className = `w-full p-3 shadow flex flex-col md:flex-row md:justify-between items-center gap-2 fixed top-[80px] z-50 left-0 right-0 ${theme.topBarBg} ${theme.textColor}`;
  dynamicForm.className = `shadow-md rounded-lg p-4 mb-6 w-full flex flex-col md:flex-row gap-6 ${theme.formBg}`;
  leftColumn.className = `w-full md:w-3/5 flex gap-4 ${theme.formBg}`;
  rightColumn.className = `w-full md:w-2/5 grid grid-cols-1 gap-4 max-h-[600px] overflow-y-auto ${theme.formBg}`;
  buttons.forEach(btn => {
    btn.className = `px-4 py-2 rounded text-white ${theme.buttonBg} ${theme.buttonHover} transition`;
  });
};
