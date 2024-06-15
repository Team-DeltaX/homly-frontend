// PDFDocument.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import dayjs from 'dayjs';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  header: { textAlign: 'center', marginBottom: 20 },
  table: { display: 'table', width: 'auto', margin: '10px 0' },
  tableRow: { flexDirection: 'row' },
  tableCol: { width: '50%', borderStyle: 'solid', borderWidth: 1, borderColor: '#000' },
  tableCell: { margin: 'auto', padding: 5 }
});

const PDFDocument = ({ previewData, fromDate, toDate }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>Inova IT Systems - Welfare Department</Text>
        <Text>Income Details</Text>
        <Text>From: {dayjs(fromDate).format('YYYY/MM/DD')}</Text>
        <Text>To: {dayjs(toDate).format('YYYY/MM/DD')}</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Holiday Home</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Income per Holiday Home (LKR)</Text>
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
      <Text>Total Income (LKR): {previewData.TotalPrice}</Text>
    </Page>
  </Document>
);

export default PDFDocument;
