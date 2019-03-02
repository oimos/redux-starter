export const fetchApi = (url, next, action, propName) => (
  fetch(url)
    .then(data => data.json())
    .then(json => (
      next(
        {
          ...action,
          ...{ [propName]: [...json] },
        },
      )
    )).catch(error => error)
);
