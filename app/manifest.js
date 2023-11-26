export default function manifest() {
  return {
    name: 'Cedric Florentin | Portfolio', // Full name of your app
    short_name: 'Cedric Portfolio', // Short name, used on the user's home screen, launcher, or other places where space may be limited.
    description:
      'Explore the photography portfolio of Cedric Florentin, capturing light and life through the lens.', // Description of your app
    start_url: '/', // The URL that loads when a user launches the application (e.g., when added to home screen), typically the home page
    display: 'standalone', // The display mode for the website. Standalone means it will open like a standalone app, without browser UI.
    background_color: '#fff', // The background color of the splash screen that displays when the app is launched
    theme_color: '#fff', // The default theme color for the application. This sometimes affects how the OS displays the site (e.g., on Android's task switcher, the theme color surrounds the site)
    icons: [
      {
        src: '/public/favicon.ico', // Path to the icon image
        sizes: 'any', // Size of the icon. 'any' means it can be any size.
        type: 'image/x-icon', // The media type of the icon
      },
    ],
  };
}
