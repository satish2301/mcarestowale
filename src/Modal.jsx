import React from 'react'
import { useState } from 'react'

const Modal = () => {
    const [data, setData] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();
    const [data4, setData4] = useState();

    const [userdata, setUserdata] = useState({
        fullname: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        tablenum: "",
    })

    let name, value;
    const getData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserdata({ ...userdata, [name]: value });
    }

    const Validate = () => {
        var a = document.getElementById("fullname").value;
        if (a ==="") {
            setData3("empty name");
           return false;
            
        }
        else if(!isNaN(a)){
            setData3("only character allow");
           return false;

        }
        else if (a.length < 3) {
            setData3("not allow");
           return false;

        }
        else {
            setData3("");
    

        }
        var b = document.getElementById("phone").value;
        if (b === "") {
            setData2("empty number")
           return false;

        }
        else if(isNaN(b)){
            setData2("character not allow")
           return false;

        }
        else if (b.length!==10) {
            setData2("must be 10 digit allow");
           return false;

        }
        else {
            setData2("");
        

        }

        

        var c = document.getElementById("email").value;

        if (c==="") {
           setData("empty email")
           return false;
        }
        else if(c.indexOf('@')<=0){
            setData("@invalid position")
           return false;

        }
        else if((c.charAt(c.length-4)!=='.') && (c.charAt(c.length-3)!=='.')){
            setData(". invalid position");
           return false;

        }
        else{
            setData("");
          

        }

    var d=document.getElementById('tablenumber').value;

       if(d.length<=4){
        setData4("Not available table");
        return false;
       }
       else{
        setData4("");
       }
        


    }
    const booktable = async (e) => {
        e.preventDefault();
        const { fullname, phone, email, date, time, tablenum } = userdata;

        if (!Validate()) {

            if (fullname && phone && email && date && time && tablenum) {

                const res = await fetch("https://restoapp-b55ef-default-rtdb.firebaseio.com/customerdata.json",
                    {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            fullname, phone, email, date, time, tablenum,
                        }),
                    });


                if (res) {
                    setUserdata(
                        {
                            fullname: "",
                            phone: "",
                            email: "",
                            date: "",
                            time: "",
                            tablenum: "",
                        }
                    )
                    alert("data store");
                }
                else {
                    alert("Table not book");
                }
            } else {
                alert("please fill  data");
            }

        } else {
            alert("something wrong...");
        }


    };
    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Give Table Info</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">Full_Name</label>
                                    <input type="text" className="form-control" id="fullname" name="fullname" value={userdata.fullname} onChange={getData} autoComplete='off' required placeholder='Enter Full Name' />
                                    <span style={{ color: "red" }}>{data3}</span>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">Phone</label>
                                    <input type="text" className="form-control" id="phone" name="phone" value={userdata.phone} onChange={getData} placeholder="Enter Mobile Number" />
                                    <span style={{ color: "red" }}>{data2}</span>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={userdata.email} onChange={getData} placeholder="Enter Email" />
                                    <span style={{ color: "red" }}>{data}</span>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">Date</label>
                                    <input type="date" className="form-control" id="date" name="date" value={userdata.date} onChange={getData} />

                                </div>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">Time</label>
                                    <input type="time" className="form-control" id="time" name="time" value={userdata.time} onChange={getData} />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">Table Number</label>
                                    <select  className="form-control" id="tablenumber" name="tablenum" value={userdata.tablenum} onChange={getData} >
                                        <option>Table 1</option>
                                        <option>Table 2</option>
                                        <option>Table 3</option>
                                        <option>Table 4</option>

                                    </select>
                                    <span style={{ color: "red" }}>{data4}</span>

                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">

                            <button id='btnsend' type="button" className="btn btn-primary" onClick={booktable}>BOOK A TABLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;