export const handleFilterClick = (
  filterType: string,
  value: string,
  searchParams: any,
  router: any,
  pathname: string
) => {
  const currentParams = new URLSearchParams(searchParams.toString());
  const existingValues = currentParams.get(filterType)?.split(",") || [];

  if (!existingValues.includes(value)) {
    existingValues.push(value);
  } else {
    const index = existingValues.indexOf(value);
    if (index > -1) {
      existingValues.splice(index, 1);
    }
  }

  if (existingValues.length > 0) {
    currentParams.set(filterType, existingValues.join(","));
  } else {
    currentParams.delete(filterType);
  }

  const newQueryString = currentParams.toString();
  router.push(`${pathname}?${newQueryString}`, undefined);
};
