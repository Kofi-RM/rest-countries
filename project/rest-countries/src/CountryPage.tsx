
export default function CountryPage() {

    return(
        <>
         <div className="min-h-screen bg-gray-100 p-6 flex gap-6">
      
      {/* LEFT: COUNTRY LIST */}
      <div className="w-1/3 bg-white p-4 rounded-xl shadow overflow-y-auto max-h-screen">
        <h2 className="text-xl font-bold mb-4">Countries</h2>
            <div>nd</div>
            <div>nd</div>
        {/* {countries.map((c, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(c)}
            className="p-2 cursor-pointer hover:bg-gray-100 rounded"
          >
            {c.name.common}
          </div>
        ))} */}
      </div>

      {/* RIGHT: COUNTRY DETAILS */}
      <div className="flex-1 bg-white p-6 rounded-xl shadow">
        
        <img
          src={"https://flagcdn.com/ai.svg"}
        //   alt={selected.flags.alt || selected.name.common}
          className="w-full h-60 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-4">
         name
        </h1>

        <p className="text-gray-600">name</p>

        <div className="mt-6 space-y-3 text-gray-700">

          <p>
            <strong>Capital:</strong>{" "}
            capital
          </p>

          <p>
            <strong>Region:</strong>region
          </p>

          <p>
            <strong>Population:</strong>{" "}
           pop
          </p>

          <p>
            <strong>Landlocked:</strong>{" "}
           yes
          </p>

          <p>
            <strong>Car side:</strong> right
          </p>

          <p>
            <strong>Currency:</strong>{" "}
            {/* {currencyList.length
              ? currencyList.map((c) => c.name).join(", ")
              : "N/A"} */}
        Currenty
          </p>

        </div>
      </div>
    </div>
        </>
    )
}