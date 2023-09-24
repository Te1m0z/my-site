import { useContext } from "react"
import { ViewportContext } from "@/app"

const useBreakpoints = () => {
  //
  const { breakpoints } = useContext(ViewportContext)
  //
  return breakpoints
};

export {
  useBreakpoints
}
