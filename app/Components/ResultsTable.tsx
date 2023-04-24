function Table() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="font-medium">
                <tr>
                  <th className="text-grayfigma font-extralight text-sm " >Categorías</th>
                  <th className="text-grayfigma font-extralight text-sm">Nivel</th>
                  <th className="text-grayfigma font-extralight text-sm">Porcentaje</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">Lectura</td>
                  <td className="text-greenfigma font-bold">B1</td>
                  <td className="font-bold">61%</td>
                </tr>
                <tr>
                  <td className="font-bold">Escritura</td>
                  <td className="text-greenfigma font-bold">A2</td>
                  <td className="font-bold">72%</td>
                </tr>
                <tr>
                  <td className="font-bold">Escuchar</td>
                  <td className="text-greenfigma font-bold">C2</td>
                  <td className="font-bold">97%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Table;