export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    sitemap: 'https://iqra-solutions.netlify.app/sitemap.xml',
  };
}