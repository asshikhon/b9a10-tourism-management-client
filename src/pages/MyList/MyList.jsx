import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import myLogo from "../../../src/assets/images/mylist.png"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Typewriter } from 'react-simple-typewriter';

const MyList = () => {
  const { user, loading } = useContext(AuthContext) || {};
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://b9a10-tourism-management-server-mu.vercel.app/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user?.email]);
  
  if (loading) {
    return (
<div className="flex justify-center items-center h-screen">
<div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-gray-800"></div>
</div>
    );
}

  const handleDelete = (_id) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
 
        fetch(`https://b9a10-tourism-management-server-mu.vercel.app/spot/${_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
    
    })
       .then(res => res.json())
       .then(data => {
    console.log(data)
    if(data.deletedCount > 0) {
     Swal.fire({
          title: "Deleted!",
          text: "Your Coffee has been deleted.",
          icon: "success",
        });
        const remaining = item.filter(user => user._id !== _id)
        setItem(remaining);
    }
    })
      }
    });





  };

  return (
    <div className="container mx-auto px-3 md:px-0 mt-10 md:mt-16 lg:mt-20">

<div className="flex justify-center items-center text-orange-600 mb-12 text-[42px] ">
  <Typewriter 
    words={['See Your', 'Added All', 'Tourists Spot Collection']}
    loop={true}
    cursor
    cursorStyle='. . .'
    typeSpeed={170}
    deleteSpeed={80}
    delaySpeed={1200}
    style={{ fontSize: '24px' }} // Increase the text size
  />
</div>


<Helmet>
                <link rel="shortcut icon" href={myLogo} type="image/x-icon" />
                <title>TourismTrek || myList</title>
            </Helmet>

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
                  <Link to={`/update/${p._id}`} className="btn bg-green-600 border-0 text-white font-semibold text-lg">
                    Update
                  </Link>
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
