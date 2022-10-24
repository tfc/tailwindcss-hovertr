/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "src/**/*.{html,js,purs}" 
           , "node_modules/daisyui/dist/**/*.js"
           ],
  daisyui: {
    styled: true,
    themes: [
      {
        lapbench: {
          primary: "#44ADEE",
          secondary: "#a5f3fc",
          accent: "#fee2e2",
          neutral: "#1A1A1A",
          "base-100": "#fbfbfb",
          info: "#4AA8BF",
          success: "#16a34a",
          warning: "#EF8234",
          error: "#EA4034",
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
  },
  plugins: [ require("daisyui")
           ]
}
