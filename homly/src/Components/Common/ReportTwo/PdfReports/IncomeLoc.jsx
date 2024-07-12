// PDFDocument.js
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import dayjs from "dayjs";
import logo from "../../../../Assets/images/logo.png";

const styles = StyleSheet.create({
  page: { padding: 30 },
  logo: { width: "100px", height: "auto", marginBottom: 20 },
  header: { textAlign: "center", marginBottom: 20 },
  title: { fontWeight: "bold", fontSize: 12, marginBottom: 10 },
  dateSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    fontSize: 10,
  },
  table: { display: "table", width: "auto", margin: "10px 0" },
  tableRow: { flexDirection: "row" },
  tableCol: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
  },
  tableHeader: { margin: "auto", padding: 5, fontSize: 11, fontWeight: "bold" },
  tableCell: { margin: "auto", padding: 5, fontSize: 10 },
  rightAlignedText: { textAlign: "right", fontSize: 10 },
});

const PDFDocument = ({ previewData, fromDate, toDate }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src={logo} style={styles.logo} />
      <View style={styles.header}>
        <Text style={styles.title}>Inova IT Systems - Welfare Department</Text>
        <Text>Income Details</Text>
      </View>
      <View style={styles.dateSection}>
        <Text>From: {dayjs(fromDate).format("YYYY/MM/DD")}</Text>
        <Text>To: {dayjs(toDate).format("YYYY/MM/DD")}</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableHeader}>Holiday Home</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableHeader}>
              Income per Holiday Home (LKR)
            </Text>
          </View>
        </View>
        {previewData.TotalPerHH &&
          previewData.TotalPerHH.map((row, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row.HHName}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row.TotalPrice}</Text>
              </View>
            </View>
          ))}
      </View>
      <Text style={styles.rightAlignedText}>
        Total Income (LKR): {previewData.TotalPrice}
      </Text>
    </Page>
  </Document>
);

export default PDFDocument;
