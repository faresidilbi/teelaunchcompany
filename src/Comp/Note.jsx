import React from "react";
import logo from './logo.jpg';


var data;
class Canvas extends React.Component {

    constructor(props) {
        super(props);
        this.downloadCanvas = this.downloadCanvas.bind(this);
     
    }

    componentDidMount() {
        let imgInput = document.getElementById('imageInput');
        imgInput.addEventListener('change', function (e) {
            if (e.target.files) {
                let imageFile = e.target.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(imageFile);
                reader.onloadend = function (e) {
                    var myImage = new Image(); 
          
                    myImage.src = e.target.result; 
                    myImage.onload = function (ev) {
                        var myCanvas = document.getElementById("myCanvas"); 
                        var myContext = myCanvas.getContext("2d"); 
                        myCanvas.width = myImage.width; 
                        myCanvas.height = myImage.height; 
                        myContext.drawImage(myImage, 0, 0); 
                        
                        var imgData = myCanvas.toDataURL("image/jpeg", 0.75); 
                        data = imgData;
                        
                  
                    }
                }
            }

        });
    }

    downloadCanvas() {
        var downloads = data;
        if (downloads == null) {
            alert("Input a file first.");
        }
        else {
            var temp = document.createElement('a');
            temp.download = 'image.png';
            temp.href = downloads;

            document.body.appendChild(temp);
            temp.click();
            document.body.removeChild(temp);
            alert("Your image has been saved.");
        }

    }



    render() {
        return (
            <form class="adjust">
                <input type="file" id="imageInput" accept="image/*" /><br />
                <button class="relocate" onClick={this.downloadCanvas}>Save Image</button>
              
                <canvas id="myCanvas" width="1000" height="700"></canvas><br/><br/>
                
         
          
    </form>
        )

    }
}



export default Canvas;