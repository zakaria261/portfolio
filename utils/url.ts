/**
 * URL Utility Functions
 * Helper functions for parsing and manipulating URLs
 */

/**
 * Extracts the LinkedIn username from a LinkedIn profile URL
 * @param linkedinUrl - The full LinkedIn profile URL
 * @returns The LinkedIn username (e.g., "zakaria-rahou")
 * @example
 * extractLinkedInUsername("https://linkedin.com/in/zakaria-rahou") // returns "zakaria-rahou"
 */
export const extractLinkedInUsername = (linkedinUrl: string): string => {
  try {
    const url = new URL(linkedinUrl);
    const pathname = url.pathname;
    // Extract username from paths like "/in/zakaria-rahou" or "/in/zakaria-rahou/"
    const match = pathname.match(/\/in\/([^/]+)/);
    return match ? match[1] : '';
  } catch {
    // If URL parsing fails, return empty string
    return '';
  }
};
