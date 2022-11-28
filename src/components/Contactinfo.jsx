import React, { Component } from 'react';

export default class Contactinfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center pb-4 mt-4">
                    <h2 className="pb-1 pt-2 fs-2">Contact Info</h2>
                </div>
                <div className="card  border-top-0 border-end-0 border-bottom-0 border-start-0">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item border-top-0 border-end-0 border-bottom-0 border-start-0 fs-5"><b>Main Location :</b>
                            246 Oron Road</li>
                        <li className="list-group-item border-top border-end-0 border-bottom-0 border-start-0 fs-5"><b>Phone Number :</b>
                            +2349090009216</li>
                        <li className="list-group-item border-top border-end-0 border-bottom-0 border-start-0 fs-5"><b>Email Address :</b>
                            starthub</li>
                        <li className="list-group-item border-top border-end-0 border-bottom-0 border-start-0 fs-5"><b>Main Location :</b>
                            246 Oron Road</li>
                    </ul>
                </div>
            </div>
        );
    }
}