import { useEffect, useState } from 'react';

// Reads CSS custom properties from :root after the stylesheets are applied,
// so the showcase always reflects the values compiled from @ds.ui/scss.
const useCssValues = (names: string[]) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const key = names.join('|');

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    setValues(Object.fromEntries(names.map(name => [name, styles.getPropertyValue(name).trim()])));
  }, [key]);

  return values;
};

export default useCssValues;
