import React, { useEffect, useState } from "react";
import Style from "./MyData.module.css";
import axios from "axios";
import { useQuery } from "react-query";

export default function MyData() {
  function getData() {
    return axios.get(`https://retoolapi.dev/a4JQzR/data`);
  }

  let { data } = useQuery("personalDetails", getData);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(data?.data);
  }, [data]);
  console.log(arr);
  const person = arr?.[0];

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="bg-white rounded-bottom-4">
            <h4 className="p-4">
              <i className="h4 mx-3 icon-of-myData fa-solid fa-chalkboard-user"></i>{" "}
              My Data
            </h4>
          </div>
        </div>
      </div>

      <div className="row ">
        {person ? (
          <div key={person.id} className="col-md-4">
            <div className="bg-white my-4 px-4 pt-5 pb-3 rounded-4 myBorder">
              <div className="d-flex justify-content-center under-line mb-5">
                <div className="letter-of-name me-5 text-white d-flex justify-content-center align-items-center fw-bold fs-3">
                  {person.FirstName.charAt(0).toUpperCase()}{" "}
                  {person.LastName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h5>
                    {person.FirstName} {person.LastName}
                  </h5>
                  <h6 className="fw-light"># 0011234</h6>
                  <p className="little-word">Human Resources Specialist</p>
                </div>
              </div>

              <div className="under-line mb-5 ms-2">
                <h6 className="fw-normal ">
                  <span className="me-3 item-one-icon">
                    <i className=" fa-solid fa-id-card"></i>
                  </span>{" "}
                  {person.FirstName} {person.LastName}
                </h6>
                <h6 className="fw-normal ">
                  <span className="me-3 item-one-icon">
                    <i className=" fa-regular fa-envelope"></i>
                  </span>{" "}
                  {person.Email}
                </h6>
                <h6 className="fw-normal ">
                  <span className="me-3 item-one-icon">
                    <i className=" fa-solid fa-phone"></i>
                  </span>{" "}
                  {person.PhoneNumber}
                </h6>
                <h6 className="fw-normal ">
                  <span className="me-3 item-one-icon">
                    <i className=" fa-regular fa-flag"></i>
                  </span>{" "}
                  Egyption
                </h6>
                <h6 className="fw-normal ">
                  <span className="me-3 item-one-icon">
                    <i className="fa-regular fa-calendar-days"></i>
                  </span>{" "}
                  16 March 2000
                </h6>
              </div>

              {/* <div className="mb-5 ms-2">
              <h6 className="fw-normal little-word">
                <span className="me-3 item-one-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </span>{" "}
                Main Address
              </h6>
              <h5 className="ms-5">benha egypt</h5>
            </div> */}

              <div className="d-flex ms-2">
                <span className="me-4 item-one-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <div>
                  <p className="little-word h6 fw-normal">Main Address</p>
                  <h6 className="fw-normal">{person.Locations}</h6>
                </div>
              </div>

              <div className="d-flex ms-2 mt-2">
                <span className="me-4 item-one-icon">
                  <i className="fa-regular fa-calendar-days"></i>
                </span>
                <div>
                  <p className="little-word h6 fw-normal">Hirring Date</p>
                  <h6 className="fw-normal">19 October 2019</h6>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      {/* فــــــــــــــــــــــاصــــــــــــــــــل */}
        <div className="col-md-8">
          <div className="bg-white my-4 px-4 pt-4 pb-3 rounded-4 myBorder pb-5 ">
            {/* personal Data بدايه ال  */}
            <div className="personalData">
              <h6 className="px-2">
                <span className="me-2 item-one-icon">
                  <i className="fa-regular fa-user"></i>
                </span>{" "}
                Personal Data
              </h6>
            </div>

            <div className="row g-5 px-2 under-line2">
              <div className="col-md-6 ">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Title</p>
                    <p className="">MR.</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Pirth Place</p>
                    <p>Saudi Arabia</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Country</p>
                    <p>Egypt</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <p className="little-word">Blood Type</p>
                    <p>-- -- --</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">Gender</p>
                    <p>Male</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">Religion</p>
                    <p>Muslim</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">City</p>
                    <p>Benha</p>
                  </div>
                </div>
              </div>
            </div>
           {/* Personal Data نهايه ال  */}

           {/* Position Information بدايه ال  */}
            <div className="positionInformation mt-4">
              <h6 className="px-2">
                <span className="me-2 item-one-icon">
                  <i className="fa-solid fa-sitemap"></i>
                </span>{" "}
                Position Information
              </h6>
            </div>


            <div className="row g-5 px-2 under-line2">
              <div className="col-md-6 ">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Position Title</p>
                    <p className="">POOS12</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Unit Title</p>
                    <p>Accounting Unit</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Previous Experience Years</p>
                    <p>7 Years</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">Parent Position</p>
                    <p>HR Department Manager</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">Parent Unit</p>
                    <p>Human Resources Unit</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">Previous Experience Months</p>
                    <p>4 Months</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Position Information نهايه ال  */}

            {/* Contant Information بدايه ال  */}
            <div className="ContantInformation mt-4">
              <h6 className="px-2">
                <span className="me-2 item-one-icon">
                 <i className=" fa-solid fa-phone"></i>
                </span>{" "}
                Contact Information
              </h6>
            </div>


            <div className="row g-5 px-2 under-line2">
              <div className="col-md-6 ">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Phone Number</p>
                    <p className="">{person?.PhoneNumber}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Second Address</p>
                    <p>Giza , Egypt</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">Personal Email</p>
                    <p>{person?.Email}</p>
                  </div>
                </div>
              </div>
            </div>
           {/* Contant Information نهايه  */}

           {/* National Id Information بدايه ال  */}
           <div className="ContantInformation mt-4">
              <h6 className="px-2">
                <span className="me-2 item-one-icon">
                  <i className="fa-solid fa-id-card"></i>
                </span>{" "}
                National ID Information
              </h6>
            </div>


            <div className="row g-5 px-2 under-line2">
              <div className="col-md-6 ">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">National ID Issue Date</p>
                    <p className="">4 October 2017</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">National ID</p>
                    <p>3000457764229</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">National ID Expiry Date</p>
                    <p>4 October 2025</p>
                  </div>
                </div>
              </div>
            </div>
           {/* National Id Information نهايه  */}

           {/* Passport Information بدايه ال  */}
           <div className="ContantInformation mt-4">
              <h6 className="px-2">
                <span className="me-2 item-one-icon">
                 <i className="fa-solid fa-passport"></i>
                </span>{" "}
                Passport Information
              </h6>
            </div>


            <div className="row g-5 px-2 under-line2">
              <div className="col-md-6 ">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Passport Number</p>
                    <p className="">3000457764229</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Passport Expiry Date</p>
                    <p>4 October 2025</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">Passport Issue Date</p>
                    <p>4 October 2016</p>
                  </div>
                </div>
              </div>
            </div>
           {/* Passport Information نهايه  */}


            {/* Military Information بدايه ال  */}
           <div className="ContantInformation mt-4">
              <h6 className="px-2">
                <span className="me-2 item-one-icon">
                  <i className="fa-solid fa-person-military-rifle"></i>
                </span>{" "}
                Military Information
              </h6>
            </div>


            <div className="row g-5 px-2 under-line2">
              <div className="col-md-6 ">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Military Status</p>
                    <p className="">Completed</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Military End Date</p>
                    <p>4 October 2017</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">Military Card Number</p>
                    <p>516788732016</p>
                  </div>
                </div>
              </div>
            </div>
           {/* Military Information نهايه  */}


           {/* Car License Information بدايه ال  */}
           <div className="ContantInformation mt-4">
              <h6 className="px-2">
                <span className="me-2 item-one-icon">
                 <i className="fa-solid fa-car-rear"></i>
                </span>{" "}
                Car License
              </h6>
            </div>


            <div className="row g-5 px-2 under-line2">
              <div className="col-md-6 ">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Car License</p>
                    <p className="">6647882449877</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">Car License Date</p>
                    <p>4 October 2017</p>
                  </div>
                </div>
              </div>
            </div>
           {/* Car License Information نهايه  */}


           {/* End Of Service Information بدايه ال  */}
           <div className="ContantInformation mt-4">
              <h6 className="px-2">
                <span className="me-2 item-one-icon">
                 <i className="fa-regular fa-calendar-days"></i>
                </span>{" "}
                End Of Service Information
              </h6>
            </div>


            <div className="row g-5 px-2">
              <div className="col-md-6 ">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Leave Reason</p>
                    <p className="">-- -- --</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-1 pb-2">
                    <p className="little-word">Status</p>
                    <p className="">Active</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="personalDataDetails pt-4">
                  <div className="d-flex justify-content-between align-items-center ps-1 pb-2">
                    <p className="little-word ">Leave Date</p>
                    <p>-- -- --</p>
                  </div>
                </div>
              </div>
            </div>
           {/* End Of Service Information نهايه  */}


          </div>
        </div>
      </div>
    </>
  );
}
