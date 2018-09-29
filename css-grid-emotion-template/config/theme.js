/* eslint quotes: off */

// You can grab your own pattern here:
// http://www.heropatterns.com/

module.exports = {
  bgPattern: `data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316191f' fill-opacity='0.8'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E`,

  colors: {
    bg: '#F6F6F6',
    color: '#16191f',
    secondary: '#b6b6b6',
    link: '#888888',
    // linkHover: '#79a8ff',
    linkHover: '#797979',

    themeColor1: 'white',
    // themeColor2: '#742038',
    
    themeColor2: 'black',

    // accentColor1: '#41CCB4', 
    accentColor1: '#FCD666',
      
  },

  breakpoints: [576, 768, 992, 1200],

  maxWidths: {
    general: '1600px',
    project: 1600,
  },
  
  gridColumns: 2,
  contentPadding: '1.0875rem',
}
