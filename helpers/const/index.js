export const menu_zIndex = {
  menu: (provided) => ({
    ...provided,
    zIndex: 999,
  }),
};

export const month_options = [
  {
    value: "01",
    abbreviation: "Jan",
    label: "January",
  },
  {
    value: "02",
    abbreviation: "Feb",
    label: "February",
  },
  {
    value: "03",
    abbreviation: "Mar",
    label: "March",
  },
  {
    value: "04",
    abbreviation: "Apr",
    label: "April",
  },
  {
    value: "05",
    abbreviation: "May",
    label: "May",
  },
  {
    value: "06",
    abbreviation: "Jun",
    label: "June",
  },
  {
    value: "07",
    abbreviation: "Jul",
    label: "July",
  },
  {
    value: "08",
    abbreviation: "Aug",
    label: "August",
  },
  {
    value: "09",
    abbreviation: "Sep",
    label: "September",
  },
  {
    value: "10",
    abbreviation: "Oct",
    label: "October",
  },
  {
    value: "11",
    abbreviation: "Nov",
    label: "November",
  },
  {
    value: "12",
    abbreviation: "Dec",
    label: "December",
  },
];

export const ex_keys = [
  "item_group_name",
  "is_accessories",
  "tg_qty",
  "est_vol",
  "tg_netamt",
  "est_baht",
  "tg_bu",
  "est_bu",
  "ir_est_vol",
  "ir_est_baht",
  "ir_est_bu",
  "is_edit",
];

export const key_net_con = [
  "ly_qty",
  "tg_qty",
  "act_qty",
  "ly_netamt",
  "tg_netamt",
  "act_netamt",
  "ly_bu",
  "tg_bu",
  "act_bu",
  "ly_nc",
  "tg_nc",
  "act_nc",
  "forec_vol",
  "forec_bu",
  "forec_baht",
  "ly_qty",
  "est_vol",
  "est_bu",
  "est_baht",
  "est_net_con",
  "ir_est_vol",
  "ir_est_bu",
  "ir_est_baht",
  "ir_est_net_con",
  "diff_tg_bu",
  "diff_tg_vol",
  "diff_tg_baht",
  "diff_tg_nc",
];

export const validate_key = [
  "est_vol",
  "est_bu",
  "est_baht",
  "reason_id",
  "ir_est_vol",
  "ir_est_bu",
  "ir_reason_id",
];

export const display_num = (n) => {
  return n
    ? n.toLocaleString(undefined, {
        // minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "0.00";
};

export const lf_display = [
  { old: "netamt", new: "" },
  { old: "var", new: "VAR%" },
  { old: "gr", new: "GR%" },
  { old: "vol", new: "" },
  { old: "baht", new: "" },
  { old: "qty", new: "" },
  { old: "bu", new: "" },
  { old: "nc", new: "" },
  { old: "net", new: "" },
  { old: "con", new: "" },
  { old: "forec", new: "Forecast" },
  { old: "volume", new: "" },
  { old: "price", new: "Price" },
  { old: "amount", new: "Amount" },
];

// export const lf_display = [
//   { old: "netamt", new: "Baht" },
//   { old: "qty", new: "Volume" },
//   { old: "bu", new: "B/U" },
//   { old: "forec", new: "Forecast" },
//   { old: "volume", new: "Volume" },
//   { old: "price", new: "Price" },
//   { old: "amount", new: "Amount" },
// ];

export const divideIfNotZero = (numerator, denominator) => {
  if (parseFloat(denominator) === 0 || isNaN(denominator)) {
    return 0;
  } else {
    return (numerator / denominator).toFixed(2);
  }
};
