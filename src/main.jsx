import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App/App'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LoginProvider } from './Login/contexts/LoginContext'
import { addProduct, addProductWithId, addProducts, addProductsWithId, deleteProduct, getProductById, getProductbyName, getProducts, setProduct, updateProduct } from './Global/firebase/utilities/productosFirebase'

const a = { id: 1, y: '2', z: false, a: 'ww' }
const b = { id: 2, y: 'dfasdf', z: false, c: 'churro' }
const c = { id: 3, y: 1, z: false }

// addProduct(a).then(res => console.log(res.id))
// addProducts([a, b, c])
// addProductWithId(a).then(res => console.log(res))
// addProductsWithId([a, b, c])
// getProducts().then(res => console.log(res))
// getProductById(2)
// getProductbyName('dfasdf')
// setProduct({ id: 7, a: 'Papitas', z: true })
// updateProduct({ id: 7, a: 'Panchos', z: true })
// deleteProduct(7)

const darkTheme = createTheme({
	palette: {
	  //mode: 'dark',
	  primary: {
			main:"#B2A6CE",
			//dark:"#959392"
		},
	  
	},
	components:{
		MuiCssBaseline:{
			styleOverrides:{
				body: {
					backgroundImage:
					  "url(/background.svg)"
				}
			}
		}
	}
  });

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<LoginProvider>
				<App />
			</LoginProvider>
		</ThemeProvider>
	</React.StrictMode>,
)
