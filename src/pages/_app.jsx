import Theme from "../styles/theme";
import { StateProvider } from "../../context/ContextState";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StateProvider>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </StateProvider>
    </>
  );
}
