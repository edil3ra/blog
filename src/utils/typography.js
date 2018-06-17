import Typography from 'typography'
import grandViewTheme from 'typography-theme-grand-view'
import bootstrapTheme from "typography-theme-bootstrap";
import lawtonTheme from "typography-theme-lawton";



const typography = new Typography(grandViewTheme);
// const typography = new Typography(bootstrapTheme);
// const typography = new Typography(lawtonTheme)


// const typography = new Typography({
//   baseFontSize: "30px",
//   baseLineHeight: 1.45,
//   headerFontFamily: [
//     "Avenir Next",
//     "Helvetica Neue",
//     "Segoe UI",
//     "Helvetica",
//     "Arial",
//     "sans-serif",
//   ],
//   bodyFontFamily: ["Georgia", "serif"],
// });


export default typography
