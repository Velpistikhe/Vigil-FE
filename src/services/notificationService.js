let notifyFn = null;

export const setNotifyFunction = (fn) => {
  notifyFn = fn;
};

export const notifyGlobal = (args) => {
  if (notifyFn) notifyFn(args);
  else console.warn("notifyGlobal dipanggil sebelum provider siap");
};
