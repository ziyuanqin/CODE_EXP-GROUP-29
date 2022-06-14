// Change YOUR_API_KEY_HERE to your apiKey
// const url =
//   "https://newsapi.org/v2/top-headlines?country=sg&apiKey=886672fe0a05440bae8342111e02c387";
// //   "https://newsapi.org/v2/everything?q=NS&from=2022-01-01&sortBy=popularity&apiKey=886672fe0a05440bae8342111e02c387";

var url =
  "https://newsapi.org/v2/everything?" +
  "q=NS&" +
  "domains=straitstimes.com,channelnewsasia.com,todayonline.com" +
  "from=2022-06-12&" +
  "sortBy=relevancy&" +
  "apiKey=886672fe0a05440bae8342111e02c387";

var req = new Request(url);

export async function getNews() {
  let result = await fetch(url).then((response) => response.json());
  return result.articles;
}
