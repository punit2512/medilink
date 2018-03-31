import React, {Component} from 'react';

export class HowItWorks extends Component {
    render() {
        return (
            <div>
                <section id="services">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <h2 class="section-heading">How it works?</h2>
                                <hr class="my-4"/>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class=" col-md-4 text-center">
                                <div class="service-box mt-5 mx-auto"> <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
                                    <h3 class="mb-3">Find</h3>
                                    <p class="text-muted mb-0"> Easily search by practice / doctor, procedure / condition, zip code and insurance type View provider profile, ratings and real-time availability</p>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="service-box mt-5 mx-auto"> <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                                    <h3 class="mb-3">Schedule</h3>
                                    <p class="text-muted mb-0"> Schedule an appointment; get instant confirmation View previous and upcoming appointments; setup reminders Manage appointments â€“ cancel or update</p>
                                </div>
                            </div>
                            <div class=" col-md-4 text-center">
                                <div class="service-box mt-5 mx-auto"> <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                                    <h3 class="mb-3">Visit</h3>
                                    <p class="text-muted mb-0">Fill pre-visit information; most information auto-populated from profile Visit and rate experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}