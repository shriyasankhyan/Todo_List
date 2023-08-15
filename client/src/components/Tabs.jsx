import { useDispatch } from "react-redux";
import { TABS } from "../redux/actions/type";
import { toggleTab } from "../redux/actions";

const Tabs = ({currentTab}) =>{
    const dispatch = useDispatch();
    return(
        TABS.map(tab =>(
            <button 
            key={tab}
            onClick={() => dispatch(toggleTab(tab))}
            className = {tab === currentTab ? "button selected" : "button"}
            >
                {tab}
            </button>
        ))
    )
}

export default Tabs;