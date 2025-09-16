import { AiOutlineClose } from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import { flight_search_options } from "@/store/store";
import { FaBaby, FaChild } from "react-icons/fa";
import { useQuery } from "react-query";
import ModalLoadingContent from "../../../FlightSearch/FlightResults/modals/ModalLoadingContent";
import { Fragment } from "react";
import { useSiteConfigData } from "@/providers/SiteConfigProvider";
import axiosClient from "@/lib/axiosClient";

const AdvancedPassengerSelection = () => {
  const { origin } = useSiteConfigData();
  const { flight } = useSiteConfigData()?.component_version || {};
  const {
    travelers_adult,
    travelers_adult_age,
    travelers_child,
    travelers_child_age,
    travelers_infants,
    travelers_infants_age,
  } = flight_search_options.useState((state) => state);

  const { data, isLoading } = useQuery({
    queryKey: ["PAX_FARE_TYPES"],
    queryFn: async () => {
      const res = await axiosClient(origin).get("/tools/pax-fare-type");
      return res.data.data;
    },
  });

  return (
    <dialog id="advanced_passenger_selection" className="modal">
      <div className="max-w-2xl p-0 rounded-md modal-box bg-base-200">
        <form
          method="dialog"
          className="sticky top-0 left-0 right-0 flex min-h-[34px] bg-primary"
        >
          <h1 className="px-5 py-2 text-xl font-semibold text-primary-content">
            Advanced Passenger Selection
          </h1>
          <button className="absolute top-1 right-1 btn btn-ghost btn-circle btn-sm !text-primary-content">
            <AiOutlineClose />
          </button>
        </form>
        {isLoading ? (
          <ModalLoadingContent />
        ) : (
          <>
            <div className="px-5 pt-4">
              <p className="max-w-xl mb-4 text-base">
                Please select the exact number of passengers to view the best
                prices
              </p>
              <div className="w-full mb-4 rounded join join-vertical">
                {/* adult */}
                <div className="p-4 border join-item">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg text text-neutral/70">
                        <i className="inline-block alight-middle">
                          <FaPerson />
                        </i>
                      </span>
                      <div>
                        <h6 className="font-medium">Adults</h6>
                        <p className="text-[10px] text-neutral leading-3">
                          &gt;12 Years
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          travelers_adult > 1 &&
                            flight_search_options.update((state) => {
                              state.travelers_adult = travelers_adult - 1;
                            });
                        }}
                        type="button"
                        disabled={travelers_adult === 1}
                        className="rounded minusBtn btn btn-xs btn-primary"
                      >
                        -
                      </button>
                      <span className="value">{travelers_adult}</span>
                      <button
                        onClick={() =>
                          flight_search_options.update((state) => {
                            state.travelers_adult = travelers_adult + 1;
                          })
                        }
                        type="button"
                        className="rounded plusBtn btn btn-xs btn-primary"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {Number(travelers_adult) > 0 && (
                    <div className="grid grid-cols-3 pt-1 gap-x-6 gap-y-1">
                      {[...Array(travelers_adult)].map((_, i) => (
                        <Fragment key={"age" + i}>
                          <div className="flex items-center gap-1">
                            <div className="font-medium normal-case rounded pointer-events-none btn btn-xs btn-primary no-animation">
                              Adult {i + 1} Age
                            </div>
                            <div className="flex-1">
                              <select
                                className="w-full bg-transparent rounded-sm select select-bordered select-xs focus:outline-none focus:border-primary"
                                defaultValue={travelers_adult_age[i]}
                                onChange={(e) =>
                                  flight_search_options.update((state) => {
                                    state.travelers_adult_age[i] =
                                      e.target.value;
                                  })
                                }
                              >
                                {[...Array(88)].map((_, i) => (
                                  <option key={i} value={i + 13}>
                                    {i + 13} years
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          {flight?.search_box === "2" && (
                            <div
                              key={"type" + i}
                              className="flex items-center col-span-2 gap-1"
                            >
                              <div className="font-medium normal-case rounded pointer-events-none btn btn-xs btn-primary no-animation">
                                Fare Type
                              </div>
                              <div className="flex-1">
                                <select
                                  className="w-full bg-transparent rounded-sm select select-bordered select-xs focus:outline-none focus:border-primary"
                                  onChange={(e) =>
                                    flight_search_options.update((state) => {
                                      state.travelers_adult_types[i] =
                                        e.target.value;
                                    })
                                  }
                                >
                                  {Object.values(data?.ADT || {}).map(
                                    (item) => (
                                      <option
                                        key={item?.pax_type}
                                        value={item?.pax_type}
                                      >
                                        {item?.pax_type}-{item?.pax_title}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  )}
                </div>

                {/* child */}
                <div className="p-4 border border-t-0 join-item">
                  <div className="flex items-center justify-between gap-4 mb-1 child-container">
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-neutral/70">
                        <i className="inline-block align-middle">
                          <FaChild />
                        </i>
                      </span>
                      <div>
                        <h6 className="font-medium">Children</h6>
                        <p className="text-[10px] leading-3 text-neutral">
                          2-12 Years
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          travelers_child > 0 &&
                            flight_search_options.update((state) => {
                              state.travelers_child = travelers_child - 1;
                              state.travelers_child_age.pop();
                            });
                        }}
                        type="button"
                        className="rounded minusBtn btn btn-xs btn-primary"
                        disabled={travelers_child === 0}
                      >
                        -
                      </button>
                      <span className="value">{travelers_child}</span>
                      <button
                        onClick={() => {
                          flight_search_options.update((state) => {
                            state.travelers_child = travelers_child + 1;
                            state.travelers_child_age.push("12");
                          });
                        }}
                        type="button"
                        className="rounded plusBtn btn btn-xs btn-primary"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {Number(travelers_child) > 0 && (
                    <div className="grid grid-cols-3 pt-1 gap-x-6 gap-y-1">
                      {[...Array(travelers_child)].map((_, i) => (
                        <>
                          <div
                            key={"age" + i}
                            className="flex items-center gap-1"
                          >
                            <div className="font-medium normal-case rounded pointer-events-none btn btn-xs btn-primary no-animation">
                              Child {i + 1} Age
                            </div>
                            <div className="flex-1">
                              <select
                                className="w-full bg-transparent rounded-sm select select-bordered select-xs focus:outline-none focus:border-primary"
                                defaultValue={travelers_child_age[i]}
                                onChange={(e) =>
                                  flight_search_options.update((state) => {
                                    state.travelers_child_age[i] =
                                      e.target.value;
                                  })
                                }
                              >
                                <option value="12">12 years</option>
                                <option value="11">11 years</option>
                                <option value="10">10 years</option>
                                <option value="9">9 years</option>
                                <option value="8">8 years</option>
                                <option value="7">7 years</option>
                                <option value="6">6 years</option>
                                <option value="5">5 years</option>
                                <option value="4">4 years</option>
                                <option value="3">3 years</option>
                                <option value="2">2 years</option>
                              </select>
                            </div>
                          </div>
                          {flight?.search_box === "2" && (
                            <div
                              key={"type" + i}
                              className="flex items-center col-span-2 gap-1"
                            >
                              <div className="font-medium normal-case rounded pointer-events-none btn btn-xs btn-primary no-animation">
                                Fare Type
                              </div>
                              <div className="flex-1">
                                <select
                                  className="w-full bg-transparent rounded-sm select select-bordered select-xs focus:outline-none focus:border-primary"
                                  onChange={(e) =>
                                    flight_search_options.update((state) => {
                                      state.travelers_child_types[i] =
                                        e.target.value;
                                    })
                                  }
                                >
                                  {Object.values(data?.CNN || {}).map(
                                    (item) => (
                                      <option
                                        key={item?.pax_type}
                                        value={item?.pax_type}
                                      >
                                        {item?.pax_type}-{item?.pax_title}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  )}
                </div>

                {/* infants */}
                <div className="p-4 border join-item">
                  <div className="flex items-center justify-between gap-4 infants-container">
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-neutral/70">
                        <i className="fa-solid fa-hands-holding-child"></i>
                        <i className="inline-block align-middle">
                          <FaBaby />
                        </i>
                      </span>
                      <div>
                        <h6 className="font-medium">Infants</h6>
                        <p className="text-[10px] leading-3 text-neutral">
                          &lt;2 Years
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          travelers_infants > 0 &&
                            flight_search_options.update((state) => {
                              state.travelers_infants = travelers_infants - 1;
                              state.travelers_infants_age.pop();
                            });
                        }}
                        type="button"
                        className="rounded minusBtn btn btn-xs btn-primary"
                        disabled={travelers_infants === 0}
                      >
                        -
                      </button>
                      <span className="value">{travelers_infants}</span>
                      <button
                        onClick={() =>
                          flight_search_options.update((state) => {
                            state.travelers_infants = travelers_infants + 1;
                            state.travelers_infants_age.push("2");
                          })
                        }
                        type="button"
                        className="rounded plusBtn btn btn-xs btn-primary"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {Number(travelers_infants) > 0 && (
                    <div className="grid grid-cols-3 pt-1 gap-x-6 gap-y-1">
                      {[...Array(travelers_infants)].map((_, i) => (
                        <>
                          <div
                            key={"age" + i}
                            className="flex items-center gap-1"
                          >
                            <div className="font-medium normal-case rounded pointer-events-none btn btn-xs btn-primary no-animation">
                              Infant {i + 1} Age
                            </div>
                            <div className="flex-1">
                              <select
                                className="w-full bg-transparent rounded-sm select select-bordered select-xs focus:outline-none focus:border-primary"
                                defaultValue={travelers_infants_age[i]}
                                onChange={(e) =>
                                  flight_search_options.update((state) => {
                                    state.travelers_infants_age[i] =
                                      e.target.value;
                                  })
                                }
                              >
                                <option value="1">1 year</option>
                                <option value="0">Below 1 year</option>
                              </select>
                            </div>
                          </div>

                          {flight?.search_box === "2" && (
                            <div
                              key={"type" + i}
                              className="flex items-center col-span-2 gap-1"
                            >
                              <div className="font-medium normal-case rounded pointer-events-none btn btn-xs btn-primary no-animation">
                                Fare Type
                              </div>
                              <div className="flex-1">
                                <select
                                  className="w-full bg-transparent rounded-sm select select-bordered select-xs focus:outline-none focus:border-primary"
                                  onChange={(e) =>
                                    flight_search_options.update((state) => {
                                      state.travelers_infants_types[i] =
                                        e.target.value;
                                    })
                                  }
                                >
                                  {Object.values(data?.INF || {}).map(
                                    (item) => (
                                      <option
                                        key={item?.pax_type}
                                        value={item?.pax_type}
                                      >
                                        {item?.pax_type}-{item?.pax_title}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className="justify-center pb-2 mt-2 modal-action">
              <button
                onClick={() => {
                  document
                    .getElementById("advanced_passenger_selection")
                    .close();
                }}
                type="button"
                className="h-10 min-h-0 normal-case rounded btn btn-primary min-w-[100px]"
              >
                Apply
              </button>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
};

export default AdvancedPassengerSelection;
