export function generateSlug(title: string) {
  // Convert title to lowercase and replace whitespace with hyphens
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  // Remove characters that don't match the regex
  return slug.replace(/[^a-zA-Z0-9-ء-ي]/g, '');
}
