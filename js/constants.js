// constants.js
export const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzt5xArfK_lA9PGZTw_n2IJchg_FE_1DP8WBRWLrX4tAFQaVk4xsgICUaGouXwsL137NQ/exec";

export const rightFields = [
  "currently_living","unique_id","foolhumaa_form_number","beneficiary_national_id",
  "beneficiary_name","dob","sex","island_residence","current_address","mother_name",
  "mother_national_id","primary_contact","caregiver_name","caregiver_id","caregiver_contact",
  "country","birth_weight","birth_facility","hbv_not_24h","remarks"
];

export const vaccineGroups = [
  { group:"At Birth", vaccines:[ /* ... */ ] },
  { group:"2 Months", vaccines:[ /* ... */ ] },
  { group:"4 Months", vaccines:[ /* ... */ ] },
  { group:"6 Months", vaccines:[ /* ... */ ] }
];

export const sexThemes = {
  Male: { topBarBg: "bg-blue-400", formBg: "bg-blue-100", textColor: "text-gray-900", buttonBg: "bg-blue-500", buttonHover: "hover:bg-blue-600" },
  Female: { topBarBg: "bg-pink-400", formBg: "bg-pink-100", textColor: "text-gray-900", buttonBg: "bg-pink-500", buttonHover: "hover:bg-pink-600" },
  Other: { topBarBg: "bg-gray-400", formBg: "bg-gray-100", textColor: "text-gray-900", buttonBg: "bg-gray-500", buttonHover: "hover:bg-gray-600" },
  Default: { topBarBg: "bg-gray-400", formBg: "bg-white", textColor: "text-gray-900", buttonBg: "bg-gray-500", buttonHover: "hover:bg-gray-600" }
};
