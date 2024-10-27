function camelToTitleCase(camelCaseString) {
  if (!camelCaseString) return "";

  return camelCaseString
    .match(/([A-Z]+(?![a-z])|[A-Z][a-z]*|[a-z]+)/g)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(camelToTitleCase("insertHTML"));
console.log(camelToTitleCase("insertAdjacentHTML"));
console.log(camelToTitleCase("firstHTMLElement"));
console.log(camelToTitleCase("releaseDate"));
console.log(camelToTitleCase(""));