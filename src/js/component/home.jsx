import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            
            <div className="mainpage">    
                                
                <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Start Boostrap</a>
                        </div>

                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#" className="text-white bg-dark">Home</a></li>
                            <li><a  href="#" className="text-secondary">Aboout</a></li>
                            <li><a  href="#" className="text-secondary">Services</a></li>
                            <li><a  href="#" className="text-secondary">Contact</a></li>   
                        </ul>
                        
                    </div>
                </nav>
                
                <div className="subbody">
                    <div className="jumboct">
                        <div className="jumbotron">
                            <h1 className="display-3">A Warm Welcome!</h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat </p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!!!</a>
                        </div>
                    </div>    
        
               
                    <div className="row text-center py-3">
                
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap" /> 
                                <div className="card-body">
                                    <h5 className="card-title1">Card title1</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                    <a href="#" className="btn btn-primary">Find out more</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap" /> 
                                <div className="card-body">
                                    <h5 className="card-title">Card title2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                    <a href="#" className="btn btn-primary">Find out more</a>
                                </div>
                            </div> 
                        </div>
                            
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap" /> 
                                <div className="card-body">
                                    <h5 className="card-title3">Card title3</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                    <a href="#" className="btn btn-primary">Find out more</a>
                                </div>
                            </div>  
                        </div>
                            
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap" /> 
                                <div className="card-body">
                                    <h5 className="card-title">Card title4</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                    <a href="#" className="btn btn-primary">Find out more</a>
                                </div>
                            </div>   
                        </div>
                    </div> 
                </div>
                
                <div className="footer class=py-5 bg-dark py-5 ml-auto">
                    <div className="container">
                        <p className="m-0 text-center text-white height:80px">Copyright © Your Website 2018</p>
                    </div>
                </div>
                
                
            </div>
            
            
            
        );
    } 
}