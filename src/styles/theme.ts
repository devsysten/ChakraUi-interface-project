import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors:{
    gray:{
      '000': 'rgba(218, 218, 218, 1)',
      '001': 'rgba(153, 153, 153, 0.5)',
      '002': 'rgba(245, 248, 250, 1)',
      '003': '#999999',
      '004': '#47585B',
      '005': '#F5F8FA',
      '006': '#FFBA08',
      '007': '#DADADA',
    }
  },
  
  fonts:{
    heading: 'Poppins',
    body: 'Poppins'
  },

  styles:{
    global:{
      body:{
        bg: 'gray.005',
        color: 'gray.004'
      }
    }
  }
});