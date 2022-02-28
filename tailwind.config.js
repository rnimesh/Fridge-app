const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'split-main': "linear-gradient(to top, #F4FAFF 60% , white 40%);"
      },
      colors: {
        'prussian-blue': '#003A59',
        'slate-grey':'#728197',
        'solitude':'#E3E9F1',
        'dark-cerulean':'#00598D',
        'alice-blue':'#EEF3F8',
        'licorice':'#2E3849',
        'cinnabar':'#E63F3F',
        'expired-soon':'#FFFDCC',
        'expired':'#FFEBEB',
        'healthy':'#DBFFE6',
        'txt-expired-soon':'#754311',
        'txt-expired':'#752B2B',
        'txt-healthy':'#23553E',

        
      },

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        tiny: ['10px', {
          lineHeight: '12px',
        }],
        xsm: ['12px', {
          lineHeight: '15px;',
        }],
        sm: ['13px', {
          lineHeight: '16px;',
        }],
        sm2: ['14px', {
          lineHeight: '16px;',
        }],
        md: ['16px', {
          lineHeight: '19px',
        }],
        lg: ['18px', {
          lineHeight: '22px',
        }],
        xl: ['36px', {
          lineHeight: '44px',
        }],
      },
  
      letterSpacing: {
        tightest: '-0.03em;'
      }
    
    },
   
  },
  plugins: [],
}