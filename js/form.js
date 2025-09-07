// form.js
import { rightFields, vaccineGroups } from './constants.js';
import { toGMT5 } from './utils.js';
import { applySexTheme } from './topbar.js';

export const createField = (name,label,optional=false,depends_on=null)=>{
  const div=document.createElement("div");
  div.className="flex flex-col mb-2";
  const lbl=document.createElement("label");
  lbl.className="text-sm font-medium mb-1";
  lbl.textContent=label+(optional?" (Optional)":"");
  const input=document.createElement("input");
  input.type="text"; input.name=name; input.placeholder=label;
  input.className="border p-2 rounded w-full focus:outline-none focus:ring focus:ring-blue-400 bg-gray-100";
  if(depends_on) input.disabled=true;
  div.append(lbl,input);
  return div;
};

export const buildLeftTabs = (tabsDiv, panelsDiv) => {
  tabsDiv.innerHTML=""; panelsDiv.innerHTML="";
  vaccineGroups.forEach((grp,i)=>{
    const btn=document.createElement("button");
    btn.type="button"; btn.textContent=grp.group;
    btn.className=`w-full text-left px-3 py-2 rounded ${i===0?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`;
    btn.addEventListener("click",()=>switchTab(i));
    tabsDiv.appendChild(btn);
    const panel=document.createElement("div");
    panel.className=`tab-panel grid grid-cols-2 gap-4 ${i===0?"block":"hidden"}`;
    grp.vaccines.forEach(v=>{
      panel.appendChild(createField(v.centre,v.label+" Centre",v.optional,v.depends_on));
      panel.appendChild(createField(v.date,v.label+" Date",v.optional,v.depends_on));
    });
    panelsDiv.appendChild(panel);
  });
};

export const switchTab = index => {
  const panels=document.querySelectorAll("#vaccinePanels .tab-panel");
  const buttons=document.querySelectorAll("#vaccineTabs button");
  panels.forEach((p,i)=>p.classList.toggle("hidden",i!==index));
  buttons.forEach((b,i)=>{
    b.classList.toggle("bg-blue-500",i===index);
    b.classList.toggle("text-white",i===index);
    b.classList.toggle("bg-gray-100",i!==index);
    b.classList.toggle("text-gray-700",i!==index);
  });
};

// Additional functions like buildDynamicForm, applyPrefill, setFormEditable can go here
