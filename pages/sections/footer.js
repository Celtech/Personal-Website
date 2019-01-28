import Link from 'next/link';

class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-primary text-light pt-3">
                <div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-6 col-xs-12">
							<div className="footer-logo">
								<h5><a href="#" className="text-light">Tim Hinz</a></h5>
								<h6 className="text-muted">763-258-4873</h6>
                                <a href="index.html"><img src="../../static/img/portrait.png" alt="Logo" /></a>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-12 footer-list">
							<h4 className="text-light">Quick Links</h4>
							<ul className="list-unstyled">
								<li><a href="#" className="text-muted">How it Works</a></li>
								<li><a href="#" className="text-muted">Guarantee</a></li>
								<li><a href="#" className="text-muted">Security</a></li>
								<li><a href="#" className="text-muted">Report Bug</a></li>
								<li><a href="#" className="text-muted">Pricing</a></li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-12 footer-list">
							<h4 className="text-light">About Us</h4>
							<ul className="list-unstyled">
								<li><a href="#" className="text-muted">Jobs</a></li>
								<li><a href="#" className="text-muted">Team</a></li>
								<li><a href="#" className="text-muted">Testimonials</a></li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-12 footer-subscribe">
							<h4 className="text-light">Subscribe Us</h4>
							<form className="form my-2 my-sm-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Enter your email"/>
                            </form>
							<ul className="list-unstyled">
								<li><a href="" className="tran3s"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="" className="tran3s"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="" className="tran3s"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
								<li><a href="" className="tran3s"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
							</ul>
						</div>
					</div> 

					<div className="bottom-footer clearfix">
						<p className="float-left">&copy; 2019 <a href="#" className="tran3s text-light">Tim Hinz</a>. All rights reserved</p>
					</div>
				</div> 
            </footer>
        );
    }
}

export default Footer;