import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import EditPersonalDetailsContextProvider from "./Contexts/EditPersonalDetailsContext";
import "../src/Styles/styles.css";
import ManageHomes from "../src/Pages/locationAdmin/ManageHomes";

const PrimaryDashboard = lazy(() => import("./Pages/PrimaryAdmin/PrimaryDashboard"));
const PrimaryReservations = lazy(() => import("./Pages/PrimaryAdmin/PrimaryReservations"));
const PrimaryHolidayHomes = lazy(() => import("./Pages/PrimaryAdmin/PrimaryHolidayHomes"));
const PrimaryReport = lazy(() => import("./Pages/PrimaryAdmin/PrimaryReport"));
const PrimaryManageBlacklistedUsers = lazy(() => import("./Pages/PrimaryAdmin/PrimaryManageBlacklistedUsers"));
const PrimaryBlacklistHistory = lazy(() => import("./Pages/PrimaryAdmin/PrimaryBlacklistHistory"));
const PrimaryComplaints = lazy(() => import("./Pages/PrimaryAdmin/PrimaryComplaints"));
const PrimaryAddAdmin = lazy(() => import("./Pages/PrimaryAdmin/PrimaryAddAdmin"));
const PrimaryViewAdmin = lazy(() => import("./Pages/PrimaryAdmin/PrimaryViewAdmins"));
const PrimaryAuthorizations = lazy(() => import("./Pages/PrimaryAdmin/PrimaryAuthorizations"));







const Home = lazy(() => import("../src/Pages/Home"));
const HolidayHome = lazy(() => import("../src/Pages/HolidayHome"));
const Profile = lazy(() => import("../src/Pages/Profile"));
const ContactUs = lazy(() => import("../src/Pages/ContactUs"));
const PaymentGateway = lazy(() =>
  import("../src/services/paymentGateway/PaymentGateway")
);
const UserRegistration = lazy(() =>
  import("../src/Pages/UserRegistration/UserRegistration")
);
const UserLogin = lazy(() => import("../src/Pages/UserLogin/UserLogin"));
const PersonalDetails = lazy(() =>
  import("../src/Pages/PersonalDetails/PersonalDetails")
);
const UserSecurity = lazy(() =>
  import("../src/Pages/UserSecurity/UserSecurity")
);
const PaymentDetails = lazy(() =>
  import("../src/Pages/PaymentDetails/PaymentDetails")
);
const MyReservation = lazy(() =>
  import("../src/Pages/MyReservation/MyReservation")
);


const LocationDashboard = lazy(()=>
  import("../src/Pages/locationAdmin/Dashboard")
)
const HolidayHomesDetails = lazy(()=>
  import("../src/Pages/locationAdmin/HolidayHomeDetails")
)

const CreateHolidayHome = lazy(()=>
  import("../src/Pages/locationAdmin/CreateHolidayHome")
)
const FeedBack = lazy(()=>
  import("../src/Pages/locationAdmin/Feedback")
)
const Reservations = lazy(()=>
  import("../src/Pages/locationAdmin/Reservations")
)

const Report = lazy(()=>
  import("../src/Pages/locationAdmin/Report")
)
const LocationManageHomes =lazy(()=>{
  import("../src/Pages/locationAdmin/ManageHomes")
}) 
const Login = lazy(()=>
  import("../src/Pages/locationAdmin/Login")
)


const App = () => (
  <EditPersonalDetailsContextProvider>
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HolidayHomes" element={<HolidayHome />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/paymentGateway" element={<PaymentGateway />} />
          <Route path="/Registration" element={<UserRegistration />} />
          <Route path="/Login" element={<UserLogin />} />
          <Route path="/MyProfile" element={<PersonalDetails />} />
          <Route
            path="/MyProfile/PersonalDetails"
            element={<PersonalDetails />}
          />
          <Route path="/MyProfile/Security" element={<UserSecurity />} />
          <Route
            path="/MyProfile/PaymentDetails"
            element={<PaymentDetails />}
          />
          <Route path="/MyProfile/MyReservation" element={<MyReservation />} />

          <Route path="/locationadmin/dashboard" element={<LocationDashboard/>}/>
          <Route path="/locationadmin/holidayhomes/manage" element={<ManageHomes/>}/>
          <Route path="/locationadmin/holidayhomes/details" element={<HolidayHomesDetails/>}/>
          <Route path="/locationadmin/feedback" element={<FeedBack/>}/>
          <Route path="/locationadmin/reservations" element={<Reservations/>}/>
          <Route path="/locationadmin/report" element={<Report/>}/>
          <Route path="/locationadmin/holidayhomes/createholidayhome" element={<CreateHolidayHome/>}/>





          <Route path='/primaryadmin/dashboard' element={<PrimaryDashboard/>}></Route>
          <Route path='/primaryadmin/reservations' element={<PrimaryReservations/>}></Route>
          <Route path='/primaryadmin/holidayhomes' element={<PrimaryHolidayHomes/>}></Route>
          <Route path='/primaryadmin/report' element={<PrimaryReport/>}></Route>
          <Route path='/primaryadmin/blacklistedusers/manage' element={<PrimaryManageBlacklistedUsers/>}></Route>
          <Route path='/primaryadmin/blacklistedusers/history' element={<PrimaryBlacklistHistory/>}></Route>
          <Route path='/primaryadmin/blacklistedusers/complaints' element={<PrimaryComplaints/>}></Route>
          <Route path='/primaryadmin/addadmin' element={<PrimaryAddAdmin/>}></Route>
          <Route path='/primaryadmin/viewadmin' element={<PrimaryViewAdmin/>}></Route>
          <Route path='/primaryadmin/authorizations' element={<PrimaryAuthorizations/>}></Route>







        </Routes>
      </Suspense>
    </Router>
  </EditPersonalDetailsContextProvider>
);

export default App;
