module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        Inter: ['Inter'],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
            visibility: "visible",
          },
        },
        blink: {
          "0%": {
            borderColor: "transparent",
          },
          "50%": {
            borderColor: "black",
          },
          "100%": {
            borderColor: "transparent",
          },
        },
        abox1: {
          '0%': { width: '112px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '12.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '25%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '37.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '50%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '62.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '75%': { width: '48px', height: '112px', marginTop: '0px', marginLeft: '0px' },
          '87.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '100%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
        },
        abox2: {
          '0%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '12.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '25%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '37.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '50%': { width: '112px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '62.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
          '75%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
          '87.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
          '100%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
        },
        abox3: {
          '0%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
          '12.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
          '25%': { width: '48px', height: '112px', marginTop: '0px', marginLeft: '64px' },
          '37.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '64px' },
          '50%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '64px' },
          '62.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '64px' },
          '75%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '64px' },
          '87.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '64px' },
          '100%': { width: '112px', height: '48px', marginTop: '64px', marginLeft: '0px' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        typing: "typing 3s steps(150) infinite alternate, blink 3s infinite",
        abox1: 'abox1 4s ease-in-out infinite',
        abox2: 'abox2 4s ease-in-out infinite',
        abox3: 'abox3 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
