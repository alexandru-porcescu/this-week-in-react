export function clicky() {
  const clicky_site_ids = [];
  clicky_site_ids.push(101142968);
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "//static.getclicky.com/js";
  (
    document.getElementsByTagName("head")[0] ||
    document.getElementsByTagName("body")[0]
  ).appendChild(s);
}
