

export default function CountryPanel() {

    return (
        <>
        <div className = "rounded-lg shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] m-4 flex flex-col w-60">
        <img src = "https://flagcdn.com/ai.svg"></img>
        <div className="m-2">
            <p className="m-2"><span>Population:</span> 200</p>
             <p className="m-2"><span>Region:</span> </p>
              <p className="m-2"><span>Capital:</span> </p>
        </div>
        </div>
        </>
    )
}