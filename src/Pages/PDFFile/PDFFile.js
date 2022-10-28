import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const PDFFile = ({ id }) => {
    const [course, setCourse] = useState({});
    const { details, title } = course;
    useEffect(() => {
        fetch(`https://skilify-hmi-server.vercel.app/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [id])

    const styles = StyleSheet.create({
        body: {
            paddingTop: 30,
            paddingBottom: 60,
            paddingHorizontal: 30
        },
        title: {
            fontSize: 20,
            textAlign: 'center'
        },
        text: {
            margin: 12,
            fontsize: 10,
            textAlign: "justify"
        },
        image: {
            marginVertical: 15,
            marginHorizontal: 100
        }
    })

    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.text}>{details}</Text>
            </Page>
        </Document>
    );
};

export default PDFFile;