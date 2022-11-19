import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";
import { Header } from './Header'
import './App.css';
import Axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


const api_url = "http://54.160.173.1:38080/"

function Main() {
    let navigate = useNavigate()

    // var image_height;
    // var image_width; 

    const [image, setimage] = useState("");
    const { user, isAuthenticated, isLoading,logout } = useAuth0();

    var formdata = new FormData()

    formdata.append("image", image)



    const upload = () => {

        var img = new Image()

        img.src = window.URL.createObjectURL(image)

        img.onload = async function () {

            const image_height = img.naturalHeight
            const image_width = img.naturalWidth
            const image_size = image.size
            const image_type = image.type
            const image_name = image.name

            window.URL.revokeObjectURL(img.src)

            if (image_height > 200) {
                alert("Dimention of height over 200px")
            }

            else if (image_width > 200) {
                alert("Dimention of width over 200px ")
            }

            else if (image_size >= 51200) {
                alert("this file is size over 50KB")
            }

            else if (image_type != "image/jpeg") {
                alert("this file isn't a jpg")
            }
            else {
                fetch("https://8xfxl0fcfc.execute-api.us-east-1.amazonaws.com/upload", {
                method: "PUT",
                body: JSON.stringify({
                    users: user.email,
                    name: image_name,
                }),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    //put binary data to s3
                    fetch("https://9e3j2pj15i.execute-api.us-east-1.amazonaws.com/api/image-cloud-p/" + image_name, {
                        method: "PUT",
                        body: image
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        }
                        )
                })
                .catch(err => {
                    console.log(err);
                });
            }
        }
    }

    return (

        <div className='body1 '>
            <h1 className='header'>Main</h1>
            <br></br>
            <input type={"file"} onChange={(e) => setimage(e.target.files[0])} ></input><br></br><br></br>
            <button onClick={(upload)}>upload</button>  <br></br><br></br>
            <button onClick={() => logout({ returnTo: window.location.origin })}>ออกจากระบบ</button>
        </div>
    )
}
export default Main;