import { useCallback, useState } from "react";

export const useArray = (initial: any[]): any => {
  const [value, setValue] = useState<any[]>(initial);
  return {
    value,
    setValue,
    add: useCallback((a) => setValue((v) => [...v, a]), []),
    clear: useCallback(() => setValue(() => []), []),
    removeById: useCallback(
      (id) => setValue((arr) => arr.filter((v) => v && v.id !== id)),
      []
    ),
    removeIndex: useCallback(
      (index) =>
        setValue((v) => {
          v.splice(index, 1);
          return v;
        }),
      []
    ),
    updateItemByField: useCallback(
      (fieldSearch, valueSearch, field, value) =>
        setValue((v) =>
          v.map((item: any) =>
            item?.[fieldSearch] == valueSearch
              ? {
                  ...item,
                  [field]: value,
                }
              : item
          )
        ),
      []
    ),
  };
};
