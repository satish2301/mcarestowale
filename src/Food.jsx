import React from "react";

const Food =(props)=>{
    return(
        <>
            <div className="col-md-9 border ">
                            <div className="row">
                                <div className="col-6">
                                    <h1>{props.lunch}</h1>
                                </div>
                                <div className="col-6">
                                    <h1 className="text-end">{props.count}</h1>
                                </div>
                                <div className="row pt-5 justify-content-evenly">
                                    <div className="col-5">
                                        <div className="card">
                                            <img src={props.imgsrc} alt="card" className="rounded" />
                                        </div>
                                        <div>
                                            <p className="mt-2">{props.title}</p>
                                            <p>{props.price}</p>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="card">
                                            <img src={props.imgsrc} alt="card" className="rounded" />
                                        </div>
                                        <div>
                                            <p className="mt-2">Italian Sauce Mushroom</p>
                                            <p>₹190/-</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gy-2 justify-content-evenly">
                                    <div className="col-5">
                                        <div className="card">
                                            <img src={props.imgsrc} alt="card" className="rounded" />
                                        </div>
                                        <div>
                                            <p className="mt-2">Italian Sauce Mushroom</p>
                                            <p>₹170.00/-</p>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="card">
                                            <img src={props.imgsrc} alt="card" className="rounded" />
                                        </div>
                                        <div>
                                            <p className="mt-2">Italian Sauce Mushroom</p>
                                            <p>₹150.00/-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

        </>
    );

}
export default Food;