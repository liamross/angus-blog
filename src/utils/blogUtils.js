/**
 * Formats blog post titles in word-word format for URL.
 * @param {string} title - Unformatted title of blog post.
 */
export const titleFormatter = title => {
  if (title && typeof title === 'string') {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z\- ]/g, '')
      .replace(/ /g, '-')
      .replace(/-+/g, '-');
  }
  return '';
};
