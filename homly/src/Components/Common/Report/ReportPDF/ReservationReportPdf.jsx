// ReservationReportPDF.js
import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import dayjs from "dayjs";
import logo from "../../../../Assets/images/logo.png";

const styles = StyleSheet.create({
  page: { padding: 30 },
  logo: { width: "100px", height: "auto", marginBottom: 20 },
  header: { textAlign: "center", marginBottom: 20 },
  title: { fontWeight: "bold", fontSize: 14, marginBottom: 10 },
  dateSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    fontSize: 10,
  },
  table: { display: "table", width: "auto", margin: "10px 0" },
  tableRow: { flexDirection: "row" },
  tableCol: {
    width: "12.5%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
  },
  tableHeader: { margin: "auto", padding: 5, fontWeight: "bold", fontSize: 8 },
  tableCell: { margin: "auto", padding: 5, fontSize: 7 },
  rightAlignedText: { textAlign: "right", fontSize: 7 },
});

const ReservationReportPDF = ({ previewData, fromDate, toDate }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src={logo} style={styles.logo} />
      <View style={styles.header}>
        <Text style={styles.title}>Inova IT Systems - Welfare Department</Text>
        <Text>Reservation Details</Text>
      </View>
      <View style={styles.dateSection}>
        <Text>From: {dayjs(fromDate).format("YYYY/MM/DD")}</Text>
        <Text>To: {dayjs(toDate).format("YYYY/MM/DD")}</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableHeader}>Reservation ID</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableHeader}>Holiday Home Name</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableHeader}>Recipient Name</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableHeader}>Check-in Date</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableHeader}>Check-out Date</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableHeader}>No. of Rooms</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableHeader}>No. of Halls</Text>
          </View>
          <View style={[styles.tableCol, { textAlign: 'right' }]}>
            <Text style={styles.tableHeader}>Payment Amount (LKR)</Text>
          </View>
        </View>
        {previewData && previewData.map((row, index) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row.reservations.ReservationId}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row.hhName}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row.empName}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row.reservations.CheckinDate}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row.reservations.CheckoutDate}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row.reservations.NoOfRooms}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row.reservations.NoOfHalls}</Text>
            </View>
            <View style={[styles.tableCol]}>
              <Text style={styles.tableCell}>{row.reservations.Price}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ReservationReportPDF;
