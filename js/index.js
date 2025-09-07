// index.js
import { WEB_APP_URL, rightFields, vaccineGroups } from './constants.js';
import { toGMT5, formatAge, showNotification, getNextVaccine } from './utils.js';
import { applySexTheme } from './topbar.js';
import { buildDynamicForm, applyPrefill, collectFormData } from './form.js';
import { sendRowToSheet, updateLocalCache, fetchAllData } from './sheet.js';
import { performSearch } from './search.js';

document.addEventListener("DOMContentLoaded", () => {
  buildDynamicForm();
  fetchAllData();
});
