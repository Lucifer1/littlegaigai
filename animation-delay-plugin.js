const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities, e, theme }) => {
  const animationDelays = theme('animationDelay', {});
  const utilities = Object.entries(animationDelays).map(([key, value]) => {
    return {
      [`.animate-delay-${e(key)}`]: {
        'animation-delay': value,
      },
    };
  });

  addUtilities(utilities);
});