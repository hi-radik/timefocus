//Фукнция нужна для того, чтобы добавить 0 перед цифрами на табло
export const getPadTime = (time) => time.toString().padStart(2, "0");
