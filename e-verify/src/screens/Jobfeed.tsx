import { useState } from "react";
import Footer from "../components/Footer";
import blackbg from "../../public/svg/blackbg.svg";
import bluelogo from "../../public/svg/bluelogo.svg";
import userIcon from "../../public/svg/userIcon.svg";

const Jobfeed = () => {
  const [isApplying, setIsApplying] = useState(false);

  const handleApplyClick = () => {
    setIsApplying(true);
  };

  const handleCancelClick = () => {
    setIsApplying(false);
  };

  return (
    <>
      <div className="flex justify-around gap-3 p-5">
        <div className="w-[40%] ">
          <div className="border-4 border-black-100 rounded mb-5 p-3">
            <h3 className="font-bold mb-3">Receptionist</h3>
            <h5 className="mb-3">UUC Internation</h5>
            <h5 className="mb-3">Lagos</h5>
            <div className="flex mb-3 gap-3">
              <button className="bg-red-500 text-white px-8 py-3 rounded-2xl">
                Full-time
              </button>
              <button className="bg-blue-800 text-white px-8 py-3 rounded-2xl">
                #400,000
              </button>
            </div>
            <p>
              A career in Information Technology, within Internal Firm Services,
              will provide you with the opportunity to support our core business
              functions by deploying applications that enable our people to work
              more efficiently and deliver the highest levels of service to our
              clients.
            </p>
          </div>
          <div className="border-4 border-black-100 rounded mb-5 p-3">
            <h3 className="font-bold mb-3">Receptionist</h3>
            <h5 className="mb-3">UUC Internation</h5>
            <h5 className="mb-3">Lagos</h5>
            <div className="flex mb-3 gap-3">
              <button className="bg-red-500 text-white px-8 py-3 rounded-2xl">
                Full-time
              </button>
              <button className="bg-blue-800 text-white px-8 py-3 rounded-2xl">
                #400,000
              </button>
            </div>
            <p>
              A career in Information Technology, within Internal Firm Services,
              will provide you with the opportunity to support our core business
              functions by deploying applications that enable our people to work
              more efficiently and deliver the highest levels of service to our
              clients.
            </p>
          </div>
          <div className="border-4 border-black-100 rounded p-3 mb-5">
            <h3 className="font-bold mb-3">Receptionist</h3>
            <h5 className="mb-3">UUC Internation</h5>
            <h5 className="mb-3">Lagos</h5>
            <div className="flex mb-3 gap-3">
              <button className="bg-red-500 text-white px-8 py-3 rounded-2xl">
                Full-time
              </button>
              <button className="bg-blue-800 text-white px-8 py-3 rounded-2xl">
                #400,000
              </button>
            </div>
            <p>
              A career in Information Technology, within Internal Firm Services,
              will provide you with the opportunity to support our core business
              functions by deploying applications that enable our people to work
              more efficiently and deliver the highest levels of service to our
              clients.
            </p>
          </div>
          <div className="border-4 border-black-100 rounded mb-5 p-3">
            <h3 className="font-bold mb-3">Receptionist</h3>
            <h5 className="mb-3">UUC Internation</h5>
            <h5 className="mb-3">Lagos</h5>
            <div className="flex mb-3 gap-3">
              <button className="bg-red-500 text-white px-8 py-3 rounded-2xl">
                Full-time
              </button>
              <button className="bg-blue-800 text-white px-8 py-3 rounded-2xl">
                #400,000
              </button>
            </div>
            <p>
              A career in Information Technology, within Internal Firm Services,
              will provide you with the opportunity to support our core business
              functions by deploying applications that enable our people to work
              more efficiently and deliver the highest levels of service to our
              clients.
            </p>
          </div>
          <div className="border-4 border-black-100  rounded mb-5 p-3">
            <h3 className="font-bold mb-3">Receptionist</h3>
            <h5 className="mb-3">UUC Internation</h5>
            <h5 className="mb-3">Lagos</h5>
            <div className="flex mb-3 gap-3">
              <button className="bg-red-500 text-white px-8 py-3 rounded-2xl">
                Full-time
              </button>
              <button className="bg-blue-800 text-white px-8 py-3 rounded-2xl">
                #400,000
              </button>
            </div>
            <p>
              A career in Information Technology, within Internal Firm Services,
              will provide you with the opportunity to support our core business
              functions by deploying applications that enable our people to work
              more efficiently and deliver the highest levels of service to our
              clients.
            </p>
          </div>
        </div>
        <div className="w-[60%] border rounded">
          <div>
            <img src={blackbg} alt="" />
            <img src={bluelogo} alt="" className="absolute bottom-[55px]" />
          </div>

          <div className="flex justify-end mt-5 p-5">
            <button
              className="bg-blue-800 text-white px-8 py-3 rounded-2xl"
              onClick={handleApplyClick}
            >
              Apply
            </button>
          </div>

          <h3 className="font-bold mb-2">Receptionist</h3>
          <h5 className="mb-2">UUC International</h5>
          <h5 className="mb-[5rem]">Lagos</h5>
          <h5 className="mb-3 font-bold">Job Details</h5>
          <div className="flex mb-3 gap-3">
            <button className="bg-red-500 text-white px-4 rounded-2xl">
              Full-time
            </button>
            <button className="bg-blue-800 text-white px-4 py-1 rounded-2xl">
              #400,000
            </button>
          </div>

          {!isApplying ? (
            <>
              <div className="p-5">
                <div className="flex gap-3">
                  <img src={userIcon} alt="" />
                  <p className="mt-1">124 Applicants</p>
                </div>
                <h3 className="font-bold">Line of Service</h3>
                <p className="mb-3">Internal Firm Services</p>
                <h3 className="font-bold">Industry/Sector</h3>
                <p className="mb-3">Not Applicable</p>
                <h3 className="font-bold">Specialism</h3>
                <p className="mb-3">IFS - Network Management</p>
                <h3 className="font-bold">Management Level</h3>
                <p className="mb-3">Associate</p>
                <div>
                  <h2 className="font-bold">Job Description & Summary</h2>
                  <p>
                    A career in Information Technology, within Internal Firm
                    Services, will provide you with the opportunity to support
                    our core business functions by deploying applications that
                    enable our people to work more efficiently and deliver the
                    highest levels of service to our clients. You'll focus on
                    managing the design and implementation of technology
                    infrastructure within PwC, developing and enhancing both
                    client and internal facing applications within PwC, and
                    providing technology tools that help create a competitive
                    advantage for the Firm to drive strategic business growth.
                    Simply put, as a part of our User Interface Design team,
                    you'll create interactive interfaces that enhance user
                    experiences. You'll help with the design, creation,
                    prototyping, and building out of analytical interfaces for
                    mobile, web, and desktop applications based on PwC's
                    business needs. As an Associate, you'll be part of a
                    cross-functional team that's responsible for the full
                    software development life cycle, from conception to
                    deployment. PwC Professional skills and responsibilities for
                    this management level include but are not limited to:
                    Designing and implementing new features on web and mobile
                    platforms, Identifying UI/UX issues and enhancing existing
                    designs for A/B tests, Supporting organization-wide projects
                    with design expertise, Working collaboratively with
                    stakeholders, developers, data analysts, and other designers
                    in a fast-moving environment, Complete ownership of design
                    projects from wireframes through to build supervision,
                    Implementation and ownership of the design system, Ensuring
                    all design standards, guidelines, and best practices are
                    adhered to, Creating static and clickable prototypes on
                    Figma, Sketch & Abstract. Required Knowledge, Skills, and
                    Abilities: Experienced in design and interaction software
                    such as Figma, Sketch, AdobeXD, Clear understanding of
                    user-centered design and best practices, Proven experience
                    completing design projects end to end, Excellent
                    understanding of agile methodology and implementation,
                    Front-end development experience using HTML/CSS, Proficiency
                    in conducting user research, competitor
                  </p>
                </div>
                <div className="w-[25%]">
                  <h3 className="font-bold">Education</h3>
                  <p>(if blank, degree and/or field of study not specified)</p>
                  <h3 className="font-bold">Degrees/Field of Study</h3>
                  <p>required: Degrees/Field of Study preferred:</p>
                  <h3 className="font-bold">Certifications</h3>
                  <p>(if blank, certifications not specified)</p>
                  <h3 className="font-bold">Required Skills</h3>
                  <p>Optional Skills</p>
                  <h3 className="font-bold">Desired Languages</h3>
                  <p>(If blank, desired languages not specified)</p>
                  <h3 className="font-bold">Travel Requirements</h3>
                  <p>Up to 20%</p>
                  <h3 className="font-bold">
                    Available for Work Visa Sponsorship?
                  </h3>
                  <p>No</p>
                  <h3 className="font-bold">Government Clearance Required?</h3>
                  <p>No</p>
                  <h3 className="font-bold">Job Posting End Date</h3>
                  <p>December 18, 2023</p>
                </div>
                <div className="mt-5">
                  <button className="bg-[#dedde9] p-3 rounded-2xl">
                    Report Job
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="p-5">
              <h3 className="font-bold mb-3">Apply for the Position</h3>
              <form>
                <div className="mb-3">
                  <label className="block mb-2">Why should we hire you?</label>
                  <textarea className="w-full p-2 border rounded"></textarea>
                </div>
                <div className="mb-3">
                  <label className="block mb-2">Availability</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-3">
                  <label className="block mb-2">Question 2</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-3">
                  <label className="block mb-2">Question 3</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-3">
                  <label className="block mb-2">CV</label>
                  <input type="file" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-3">
                  <label className="block mb-2">Additional Document</label>
                  <input type="file" className="w-full p-2 border rounded" />
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-800 text-white px-4 py-2 rounded"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Jobfeed;
