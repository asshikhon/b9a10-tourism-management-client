import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import updateLogo from "../../src/assets/images/update.png"
import Swal from "sweetalert2";

const Update = () => {

const loadedUser = useLoaderData()
const navigate = useNavigate()
const handleUpdate = e => {
e.preventDefault();

const form = e.target;
const name = form.name.value;
const country = form.country.value;
const location = form.location.value;
const travel = form.travel.value;
const photoURL = form.photo.value;
const average = form.average.value;
const seasonality = form.seasonality.value;
const total = form.total.value;
const description = form.description.value;

const updateUser = {
    name,country,location, travel, photoURL,average,seasonality, total, description
    }

fetch(`https://b9a10-tourism-management-server-mu.vercel.app/spot/${loadedUser._id}`, {
method: 'PUT',
headers: {
'content-type': 'application/json'
},
body: JSON.stringify(updateUser)
})
.then(res => res.json())
.then(data => {
console.log(data);
if(data.modifiedCount > 0) {
    Swal.fire({
        title: "Successful!",
        text: "Updated successfully",
        icon: "success"
      });

}
})
navigate('/myList');
}

    return (
        <div className="px-4 md:px-0 ">
        <Helmet>
          <link
            rel="shortcut icon"
            href={updateLogo}
            type="image/x-icon"
          />
          <title>TourismTrek || Update{loadedUser._id}</title>
        </Helmet>
        <div className="container mx-auto mt-12">
          <div className="text-center  px-10 py-7 lg:px-28 lg:py-16 bg-[#eaeaea] lg:w-4/4 rounded-md mx-auto">
            <h2 className="text-5xl pb-7 text-black font-extrabold">
              Update Tourist Spot Data
            </h2>
            <p className="text-base leading-7 font-semibold text-black pb-5 w-2/3 mx-auto">
     Keep your tourist spot information accurate and up-to-date with our easy-to-use update feature. Update spot details, such as average cost, total visitors per year, and more, ensuring your visitors have the most relevant and reliable information for their travel plans.
            </p>
            <form 
            onSubmit={handleUpdate}
            className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-black font-semibold">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={loadedUser.name}
                    placeholder="Enter Your Tourist Spot Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-black font-semibold">
                      Country Name
                    </span>
                  </label>
                  <select
                  name="country"
                  defaultValue={loadedUser.country}
                  className="select select-bordered text-base w-full">
                    
                    <option  >
                      Select Country
                    </option>
                    <option >Bangladesh</option>
                    <option >Thailand</option>
                    <option >Indonesia</option>
                    <option >Malaysia</option>
                    <option >Vietnam</option>
                    <option >Cambodia</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-black font-semibold">
                      Location
                    </span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={loadedUser.location}
                    placeholder="Enter Your Spot Location"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-black font-semibold">
                      Travel Time
                    </span>
                  </label>
                  <input
                    type="text"
                    name="travel"
                    defaultValue={loadedUser.travel}
                    placeholder="travel_time => like- 7 days
                  "
                    className="input input-bordered"
                    required
                  />
                </div>

              </div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-black font-semibold">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="photo"
                    defaultValue={loadedUser.photoURL}
                    placeholder="Enter Tourist spot Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-black font-semibold">
                      Average Cost
                    </span>
                  </label>
                  <input
                    type="number"
                    name="average"
                    defaultValue={loadedUser.average}
                    placeholder="Enter Spot Average Cost"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-black font-semibold">
                      Seasonality
                    </span>
                  </label>
                  <input
                    type="text"
                    name="seasonality"
                    defaultValue={loadedUser.seasonality}
                    placeholder="Enter seasonality - like summer, winter"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-black font-semibold">
                      Total Visitors Per Year
                    </span>
                  </label>
                  <input
                    type="number"
                    name="total"
                    defaultValue={loadedUser.total}
                    placeholder="Enter totalVisitorsPerYear => like- 10000"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-black font-semibold">
                      Short Description
                    </span>
                  </label>
                  <textarea
                    placeholder="Bio"
                    name="description"
                    defaultValue={loadedUser.description}
                    className="textarea textarea-bordered row-span-2 w-full "
                  ></textarea>
                </div>
                <input
                  type="submit"
                 
                  value="Update"
                  className="btn w-full bg-orange-600 text-base text-white border-0 rounded-md border-[#331A15]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Update;