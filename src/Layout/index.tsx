import Topo from "../components/Topo"
import Footer from "../components/Footer"
import { Grid, GridItem } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode
}

export default function Layout(props: Props) {

const {children} = props


  return (
    
    <Grid 
    templateColumns='1fr' 
    templateRows='auto auto 64px'
    className="grid">
      <GridItem colSpan={1} rowSpan={1}>
        <Topo />
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        {children}
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <Footer />
      </GridItem>  
    </Grid>  
  )
}