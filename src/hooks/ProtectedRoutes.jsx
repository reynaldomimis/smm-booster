import React, { useContext } from "react";
import { UserAuth } from "../context/AuthContext";
import { Route, Navigate } from "react-router-dom";
import PMain from "../features/PMain/PMain";
import PNewOrder from "../features/PNewOrder/PNewOrder";
import PMassOrder from "../features/PMassOrder/PMassOrder";
import PAddFund from "../features/PAddFund/PAddFunds";
import PServices from "../features/PServices/PServices";
import PTicket from "../features/PTicket/PTicket";
import PUpdate from "../features/PUpdate/PUpdate";
import PAffiliate from "../features/PAffiliate/PAffiliate";

const ProtectedRoutes = () => {
  const { user } = useContext(UserAuth);

  if (!user) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Route path="/profile" element={<PMain />}>
        <Route path="/profile/new" element={<PNewOrder />} />
        <Route path="/profile/mass" element={<PMassOrder />} />
        <Route path="/profile/add" element={<PAddFund />} />
        <Route path="/profile/services" element={<PServices />} />
        <Route path="/profile/ticket" element={<PTicket />} />
        <Route path="/profile/update" element={<PUpdate />} />
        <Route path="/profile/affiliate" element={<PAffiliate />} />
      </Route>
    </>
  );
};

export default ProtectedRoutes;
