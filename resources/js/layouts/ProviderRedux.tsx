import { Provider } from "react-redux";
import { store } from "../redux/store";
import { JSX } from "react";

export default function ProviderRedux({children} : {children: JSX.Element}){
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}