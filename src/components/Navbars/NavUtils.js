export function scrollNavigate(target) {
  switch (target) {
    case "calendar":
      document
        .getElementById("calendar")
        ?.scrollIntoView({ behavior: "smooth" });
      break;
    default:
      break;
  }
}
