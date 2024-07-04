import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
} from "@mui/x-data-grid-premium";
import AxiosClient from "../../services/AxiosClient";
import PrimaryAdminRefundForm from "./PrimaryAdminRefundForm";

export default function RefundListTable() {
  const [refunds, setRefunds] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedRefund, setSelectedRefund] = useState(null);
  const apiRef = useGridApiRef();

  useEffect(() => {
    AxiosClient.get("/admin/auth/reservation/refund")
      .then((res) => {
        const refundsWithIds = res.data.map((refund, index) => ({
          ...refund,
          id: index + 1,
        }));
        setRefunds(refundsWithIds);
      })
      .catch(() => {});
  }, []);
  const handleOpenPopup = (refund) => {
    setSelectedRefund(refund);
    setOpenPopup(true);
  };
  const handleSelectionChange = (newSelection) => {
    setSelectedRefund(newSelection.length > 0 ? newSelection[0] : null);
  };
  const columns = [
    { field: "serviceNo", headerName: "Service No", flex: 1 },
    { field: "reservationNo", headerName: "Reservation No", flex: 1 },
    { field: "contactNumber", headerName: "Contact No", flex: 1, hide: true },
    { field: "cancelledBy", headerName: "Cancelled by", flex: 1 },
    { field: "payment", headerName: "Payment", flex: 1, hide: true },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "bank", headerName: "Bank", flex: 1, hide: true },
    { field: "branch", headerName: "Branch", flex: 1, hide: true },
    { field: "createdAt", headerName: "Request date", flex: 1 },
    { field: "refundAmount", headerName: "Refund Amount", flex: 1, hide: true },
    { field: "refundDate", headerName: "Refunded Date", flex: 1, hide: true },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenPopup(params.row)}
        >
          View Details
        </Button>
      ),
    },
  ];
  const initialState = {
    apiRef,
    sorting: {
      sortModel: [{ field: "createdAt", sort: "asc" }],
    },
    columns: {
      columnVisibilityModel: {
        bank: false,
        payment: false,
        refundAmount: false,
        contactNumber: false, 
        refundDate: false,
        branch: false,
      },
    },
  };

  return (
    <Box sx={{ height: 400, width: "100%", marginTop: 10 }}>
      <DataGridPremium
        rows={refunds}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 25]}
        onSelectionModelChange={handleSelectionChange}
        getRowId={(row) => row.id}
        apiRef={apiRef}
        disableRowSelectionOnClick
        initialState={initialState}
        slots={{ toolbar: GridToolbar }}
        components={{ Toolbar: GridToolbar }}
      />
      {selectedRefund && (
        <PrimaryAdminRefundForm
          open={openPopup}
          setOpen={setOpenPopup}
          refundId={selectedRefund.refundId}
          reservationId={selectedRefund.reservationNo}
          serviceNo={selectedRefund.serviceNo}
          CancelledBy={selectedRefund.cancelledBy}
          accountHolderName={selectedRefund.accountHolder}
          accountNumber={selectedRefund.accountNumber}
          bankName={selectedRefund.bank}
          branchName={selectedRefund.branch}
          payment={selectedRefund.payment}
          contactNo={selectedRefund.contactNumber}
          status={selectedRefund.status}
          refundAmount={selectedRefund.refundAmount}
          reason={selectedRefund.reason}
          slip={selectedRefund.bankSlip}
        />
      )}
    </Box>
  );
}
