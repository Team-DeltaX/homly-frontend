import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import AxiosClient from "../../services/AxiosClient";
import PrimaryAdminRefundForm from "./PrimaryAdminRefundForm";

export default function RefundListTable() {
  const [refunds, setRefunds] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedRefund, setSelectedRefund] = useState(null);

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

  const handleClosePopup = () => {
    setOpenPopup(false);
    setSelectedRefund(null);
  };

  const handleSelectionChange = (newSelection) => {
    setSelectedRefund(newSelection.length > 0 ? newSelection[0] : null);
  };

  const columns = [
    { field: "serviceNo", headerName: "Service No", flex: 1 },
    { field: "cancelledBy", headerName: "Cancelled by", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
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

  return (
    <div style={{ height: 400, width: "100%", marginTop: 50 }}>
      <DataGrid
        rows={refunds}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 25]}
        onSelectionModelChange={handleSelectionChange}
        getRowId={(row) => row.id}
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
    </div>
  );
}
