// utils/csrf.ts
export function getCookie(name: string): string | null {
  let cookieValue: string | null = null;

  if (typeof document !== "undefined" && document.cookie) {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }

  return cookieValue;
}
