type ClassName = string | object | undefined | null | boolean;

/**
 * Преобразует массив с именами классов в строку.
 *
 * @example <caption>Допускается использовать объект
 * для указания имени класса</caption>
 * `{"class_name": true}`
 * @param {String[] | Object[]} classNames Список классов
 * @returns Строка со списком классов через пробел
 */
export default function joinClassNames(
  classNames: ClassName[] | undefined | null = []
) {
  if (classNames) {
    const classNamesLength = classNames.length;
    const arr = [];
    for (let i = 0; i < classNamesLength; i += 1) {
      const cls: ClassName = classNames[i];
      if (cls) {
        if (typeof cls === "object") {
          /* eslint-disable-next-line no-restricted-syntax */
          for (const [k, v] of Object.entries(cls)) {
            if (v) arr.push(k);
          }
        } else arr.push(cls);
      }
    }
    return arr.join(" ");
  }
  return "";
}
