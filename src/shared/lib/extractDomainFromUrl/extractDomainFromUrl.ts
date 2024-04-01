export const extractDomainFromUrl = (url: string) => {
  const urlObject = new URL(url);
  const domain = urlObject.hostname.replace("www.", "");
  return domain;
};
