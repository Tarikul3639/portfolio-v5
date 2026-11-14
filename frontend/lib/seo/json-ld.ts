/**
 * Safely serialize JSON-LD for an application/ld+json script element.
 * Escaping "<" prevents untrusted text from closing the script element.
 */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}
