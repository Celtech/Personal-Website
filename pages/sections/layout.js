import Head from 'next/head'
import Navbar from '../sections/navbar'
import Footer from '../sections/footer'

const Layout = (props) => (
    <div>
        <head>
            <title>Personal Website</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>
        <Navbar></Navbar>
        {props.children}
        <Footer></Footer>
    </div>
);

export default Layout;