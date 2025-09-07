// utils.js
export const toGMT5 = ds => {
  if(!ds) return "-";
  const d = new Date(ds);
  if(isNaN(d)) return "-";
  return new Date(d.getTime() + 5*60*60*1000).toISOString().split("T")[0];
};

export const formatAge = dobString => {
  if(!dobString||dobString=="-") return "-";
  const dob = new Date(dobString+"T00:00:00");
  if(isNaN(dob)) return "-";
  const today = new Date();
  let y = today.getFullYear()-dob.getFullYear();
  let m = today.getMonth()-dob.getMonth();
  let d = today.getDate()-dob.getDate();
  if(d<0){ m--; d+=new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
  if(m<0){ y--; m+=12; }
  return [y>0?y+"Y":"", m>0?m+"M":"", d>0?d+"D":""].filter(Boolean).join(" ") || "0D";
};

export const showNotification = (notificationBar, msg, type="info") => {
  notificationBar.textContent = msg;
  notificationBar.className = `text-center text-base font-medium ${
    type==="success"?"text-green-200":type==="error"?"text-red-200":"text-white"
  }`;
  if(msg) setTimeout(()=>{ if(notificationBar.textContent===msg) notificationBar.textContent=""; },3000);
};

export const getNextVaccine = dobString => {
  if(!dobString||dobString=="-") return { label:"-", group:null };
  const dob = new Date(dobString+"T00:00:00");
  const ageDays = Math.floor((new Date()-dob)/86400000);
  const schedule = { "At Birth":0, "2 Months":60, "4 Months":120, "6 Months":180 };
  for(const group in schedule){
    if(ageDays<schedule[group]) return { label:`${group} (${schedule[group]-ageDays} days)`, group };
  }
  return { label:"All done", group:null };
};
