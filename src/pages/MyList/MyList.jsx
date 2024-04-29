import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user?.email]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/spot/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
         
          const remaining = item.filter(user => user._id !== _id)
          setItem(remaining);
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <div className="container mx-auto px-3 md:px-0 mt-10 md:mt-16 lg:mt-20">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="hidden md:table-cell"></th>
              <th className="text-xl font-semibold">Spot Photo</th>
              <th className="text-xl font-semibold">Spot Names</th>
              <th className="text-xl font-semibold">Average Cost</th>
              <th className="text-xl font-semibold">Total Visitors Per Year</th>
              <th className="text-xl font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {item?.map((p, idx) => (
              <tr key={idx}>
                <td className="hidden md:table-cell">{idx + 1}</td>
                <td>
                  <img
                    className="h-[100px] w-[150px] rounded-lg"
                    src={p.photoURL}
                    alt=""
                  />
                </td>
                <td className="text-lg font-semibold">{p.name}</td>
                <td className="text-lg font-semibold">{p.average}$</td>
                <td className="text-lg font-semibold">{p.total}</td>
                <td className="flex enter gap-2 items-center pt-9">
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="btn bg-red-500 border-0 text-white font-semibold text-lg"
                  >
                    Delete
                  </button>
                  <button className="btn bg-green-600 border-0 text-white font-semibold text-lg">
                    Update
                  </button>
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
