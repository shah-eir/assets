// sheet.js
import { WEB_APP_URL } from './constants.js';

export const sendRowToSheet = (hiddenForm, action, rowData) => {
  hiddenForm.innerHTML=`<input type="hidden" name="action" value="${action}">`;
  Object.keys(rowData).forEach(k=>{
    const input=document.createElement("input");
    input.type="hidden"; input.name=k; input.value=rowData[k];
    hiddenForm
