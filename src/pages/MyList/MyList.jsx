import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const MyList = () => {

    const {user} = useContext(AuthContext) || {};
const [item , setItem] = useState([])


useEffect(() => {
fetch(`http://localhost:5000/myList/${user?.email}`)
.then(res => res.json())
.then(data => {
    setItem(data);
})
},[user?.email])

const handleDelete = () => {

}

    return (
<div className="container mx-auto px-3 md:px-0 mt-10 md:mt-16 lg:mt-20 ">

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="hidden md:table-cell"></th>
        <th className="text-xl font-semibold">Spot Names</th>
        <th className="text-xl font-semibold">Average Cost</th>
        <th className="text-xl font-semibold">Total Visitors Per Year</th>
        <th className="text-xl font-semibold">Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {item?.map((p, idx) => (
        <tr key={idx}>
          <td className="hidden md:table-cell">{idx + 1}</td>
          <td>{p.name}</td>
          <td>{p.average}$</td>
          <td>{p.total}</td>
          <td className="flex gap-2 items-center">
            <button onClick={() => handleDelete(p._id)} className="btn">Delete</button>
            <button className="btn">Update</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>

    );
};

export default MyList;