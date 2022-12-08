import { Document, Page, PDFDownloadLink, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Coursedetails = () => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        image: {
            width: "20%",
            padding: 10
        },

        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });
    const MyDoc = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {/* <Image style={styles.image} src={image_url}></Image>
                    <Text>{title}</Text> */}
                    <Text  >{about_course}</Text>
                    {/* <Text>Price:${price}</Text> */}

                </View>

            </Page>
        </Document>
    );
    const Allcourses = useLoaderData()
    let imageStyle = {
        width: '500px'
    }
    console.log(Allcourses);
    const { course_id, author, course_name, course_img, course_price, course_ratings, course_duration, about_course } = Allcourses
    console.log(about_course);
    return (
        <div className='font-mono '>
            <h1 className='text-5xl mt-44 mb-20'>{course_name}</h1>
            <hr className='w-96 m-10 mx-auto' />
            {/* <button className="btn btn-primary">Get pdf of {course_name} course</button> */}
            <PDFDownloadLink document={<MyDoc />} fileName="detail.pdf">

                <button className='w-56 mx-auto px-8 py-3 mb-10 font-semibold rounded-md hover:text-white text-gray-100 tracking-wide transition duration-200 shadow-md bg-green-400 hover:bg-slate-700 focus:shadow-outline focus:outline-none'>Download PDF</button>

            </PDFDownloadLink>

            <div className="card md:card-side bg-base-100 shadow-xl p-4 ">
                <figure
                    className='border'
                ><img src={course_img} style={imageStyle} alt="Album" /></figure>
                <div className="card-body text-center border">
                    <h2 className="text-center text-4xl font-semibold">{course_name}</h2>
                    <p>{about_course}</p>
                    <hr />
                    <div className='flex justify-around items-center'>
                        <small className='text-xl font-bold h-10 m-6'>Price: {course_price}</small>
                        <small className='text-xl font-bold h-10 m-6'>Ratings: {course_ratings}</small>
                        <small className='text-xl font-bold h-10 m-6'>Duration: {course_duration}</small>
                    </div>
                    <div className=''>
                        <h1 className="text-3xl mb-3">Autho Information</h1>
                        <hr />
                        <div className='mb-5 flex justify-between mt-10 text-xl'>
                            <small>
                                Author Name: {author.author_name}
                            </small>
                            <small>
                                Author Experience: {author.author_experience}
                            </small>
                        </div>
                        <hr />
                    </div>
                    <Link to={`/checkout/${course_id}`} >
                        <button className='btn btn-outline px-10 py-5 rounded-md mt-10'>Get Premium Access</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Coursedetails;
