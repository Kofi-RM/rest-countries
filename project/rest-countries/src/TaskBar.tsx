
import ThemeSwitcher from "./ThemeSwitcher";




export default function TaskBar() {


    return (
        <>
        <div  style={{
      background: "var(--element)",
      color: "var(--text)",
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    }} className="p-2 flex justify-around taskbar">
      


        <h2>Where in the World?</h2>
        <ThemeSwitcher/>
        </div>      
        </>
    )
}