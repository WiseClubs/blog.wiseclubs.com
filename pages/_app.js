import 'element-theme-default'
import {StoreContext, StoreProvider} from "../context/store/storeContext";
import '../styles/global.css'

const INITIAL_SETTINGS = [{name: 'blog', url: 'blog.wiseclubs.com'}];

export default function App({ Component, pageProps }) {
  return <StoreProvider INITIAL_SETTINGS={INITIAL_SETTINGS}><Component {...pageProps} /></StoreProvider>
}