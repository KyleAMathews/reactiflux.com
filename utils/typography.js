import Typography from 'typography'

const options = {
  baseFontSize: '16px',
  baseLineHeight: '27px',
  bodyFontFamily: 'Lato, "Segoe UI", Helvetica, Arial, sans-serif',
  headerFontFamily: 'Montserrat, "Segoe UI", Helvetica, Arial, sans-serif',
  bodyWeight: 400,
  headerWeight: 400,
  boldWeight: 700,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '700',
      ],
    },
    {
      name: 'Lato',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  modularScales: [
    {
      scale: 'diminished fourth',
    },
    {
      maxWidth: '768px',
      scale: 'minor third',
    },
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
