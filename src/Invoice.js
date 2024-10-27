import React, { Fragment } from "react";
import {
  Image,
  Text,
  View,
  Page,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "./Logo.png";

const Invoice = () => {
  const contract_info = {
    songtitle: "cancion",
    city: "city",
    country: "country",
    authors: [
      {
        full_name: "Guillermo Perez Martín",
        id: "923649623",
        address: "Calle de la Constitución, 1",
        email: "guillermo.perez@gmail.com",
        ipi: "923649623",
        managing_entity: "entity",
        editor: "editor",
        composition_percent: 50,
        lyrics_percent: 50,
      },
      {
        full_name: "Dummy Person",
        id: "123456789",
        address: "123 Dummy Street",
        email: "dummy.person@example.com",
        ipi: "123456789",
        managing_entity: "dummy_entity",
        editor: "dummy_editor",
        composition_percent: 50,
        lyrics_percent: 50,
      },
    ],
  };

  const styles = StyleSheet.create({
    page: {
      fontSize: 11,
      paddingTop: 20,
      paddingLeft: 40,
      paddingRight: 40,
      lineHeight: 1.5,
      flexDirection: "column",
    },

    spaceBetween: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#3E3E3E",
    },

    titleContainer: { flexDirection: "row", marginTop: 24 },

    logo: { width: 90 },

    reportTitle: { fontSize: 16, textAlign: "center" },

    addressTitle: { fontSize: 11, fontStyle: "bold" },

    invoice: { fontWeight: "bold", fontSize: 20 },

    invoiceNumber: { fontSize: 11, fontWeight: "bold" },

    address: { fontWeight: 400, fontSize: 10 },

    theader: {
      marginTop: 20,
      fontSize: 10,
      fontStyle: "bold",
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      height: 20,
      backgroundColor: "#DEDEDE",
      borderColor: "whitesmoke",
      borderRightWidth: 1,
      borderBottomWidth: 1,
    },

    theader2: { flex: 2, borderRightWidth: 0, borderBottomWidth: 1 },

    tbody: {
      fontSize: 9,
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      borderColor: "whitesmoke",
      borderRightWidth: 1,
      borderBottomWidth: 1,
    },

    total: {
      fontSize: 9,
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1.5,
      borderColor: "whitesmoke",
      borderBottomWidth: 1,
    },

    tbody2: { flex: 2, borderRightWidth: 1 },
  });

  const InvoiceTitle = () => (
    <View style={styles.titleContainer}>
      <View style={styles.spaceBetween}>
        <Image style={styles.logo} src={logo} />
        <Text style={styles.reportTitle}>Documento</Text>
      </View>
    </View>
  );

  const TableHead = () => (
    <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
      <View style={[styles.theader, styles.theader2]}>
        <Text>Nombre completo</Text>
      </View>
      <View style={styles.theader}>
        <Text>IPI</Text>
      </View>
      <View style={styles.theader}>
        <Text>Entidad de Gestión</Text>
      </View>
      <View style={styles.theader}>
        <Text>Editor</Text>
      </View>
      <View style={styles.theader}>
        <Text>Porcentaje de composición</Text>
      </View>
      <View style={styles.theader}>
        <Text>Porcentaje de letra</Text>
      </View>
    </View>
  );

  const TableBody = () =>
    contract_info.authors.map((author) => (
      <Fragment key={author.id}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={[styles.tbody, styles.tbody2]}>
            <Text>{author.full_name}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{author.ipi} </Text>
          </View>
          <View style={styles.tbody}>
            <Text>{author.managing_entity}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{author.editor}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{author.composition_percent.toFixed(2)}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{author.lyrics_percent.toFixed(2)}</Text>
          </View>
        </View>
      </Fragment>
    ));

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceTitle />

        <View
          style={{
            fontSize: 18,
            marginTop: 10,
            textAlign: "center",
          }}
        >
          <Text>Reunidos</Text>
        </View>

        <View>
          <Text>De otra parte</Text>
          {contract_info.authors.map((author) => (
            <Text>
              {author.full_name} con número de identificación nº
              {author.id}, domicilio en {author.address}y correo electrónico a
              efectos de notificaciones {author.email}y número IPI {author.ipi}.
            </Text>
          ))}
          <Text>En Adelante "Autores"</Text>
        </View>

        <View
          style={{
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <Text>EXPONEN</Text>
        </View>

        <View style={{ flexDirection: "column", width: 400 }}>
          <View style={{ flexDirection: "row", marginBottom: 4 }}>
            <Text style={{ marginHorizontal: 8 }}>•</Text>
            <Text>
              Que AUTORES han participado conjuntamente en la creación de una
              obra musical titulada {contract_info.songtitle}, en adelante " La
              obra musical y/o la obra".
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 4 }}>
            <Text style={{ marginHorizontal: 8 }}>•</Text>
            <Text>
              Que AUTORES han participado conjuntamente en la creación de una
              obra musical titulada {contract_info.songtitle}, en adelante " La
              obra musical y/o la obra".
            </Text>
          </View>
        </View>
        <TableHead />
        <TableBody />
      </Page>
    </Document>
  );
};

export default Invoice;
