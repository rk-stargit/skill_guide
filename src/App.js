import React, {useEffect, useState} from "react";
import Navbar from "./Componenets/Navbar";
import Filter from "./Componenets/Filter";
import Cards from "./Componenets/Cards";
import {apiUrl, filterData} from "./data";
import {toast} from "react-toastify";
import Spinner from "./Componenets/Spinner";
const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      //save data into a variable
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong....");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* JAI MAA OM */}
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} />
        </div>
        <div className="w=11/12 max-w-[1200px]  mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
          {loading ? <Spinner /> : <Cards courses={courses} />}
        </div>
      </div>
    </div>
  );
};

export default App;
