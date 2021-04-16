import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  colors: {
      g_start: "#0bab64",
      g_end: "#3bb78f"
  }
})

export default theme