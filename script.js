async function checkISP() {
    let ip = document.getElementById("ipInput").value.trim();
    //const resultElement = document.getElementById("result");

      // IPv4 regex pattern
    let ipv4Pattern = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

    let failureBox = document.getElementById('failureMessage');
    let successBox = document.getElementById('successMessage');

    let ipOutput = document.getElementById("ipOutput");
    let location = document.getElementById("location");
    let time = document.getElementById("time");
    let isp = document.getElementById("isp");

      if (ipv4Pattern.test(ip)) {
            try {
                const response = await fetch("https://ip-api.com/json/" + ip);
                const data = await response.json();

                if (data.status === "success") {
                    //THIS IF STATEMENT IS WHERE THE BUG IS
                        ipOutput.textContent = `${data.query}`;
                        //location.innerHTML = ${data.city} + ${data.regionName} + ${data.country};
                        isp.textContent = `${data.isp}`;
                        //ipOutput.innerHTML = ${data.query};
                        successBox.style.display = 'block';
                        setTimeout(() =>{
                            successBox.style.opacity = '1';
                        }, 100);

                        setTimeout(() =>{
                            successBox.style.opacity = '0';
                            successBox.style.display = 'none';

                        }, 2000);

                } else {
                  //resultElement.textContent = "Unable to find ISP info. Invalid or private IP.";
                  failureBox.style.display = 'block';
                    setTimeout(() =>{
                        failureBox.style.opacity = '1';
                    }, 100);

                    setTimeout(() =>{
                        failureBox.style.opacity = '0';
                        failureBox.style.display = 'none';
                    }, 2000);

                      //alert('unable to find ISP info. Invalid or Private IP.')
                }
            } catch (error) {
                //resultElement.textContent = "Error fetching ISP data.";
                //alert('Error fetching ISP data.')
                failureBox.style.display = 'block';
                setTimeout(() =>{
                    failureBox.style.opacity = '1';
                }, 100);

                setTimeout(() =>{
                    failureBox.style.opacity = '0';
                    failureBox.style.display = 'none';
                }, 2000);

                console.error(error);
            }
      }
      else {
            failureBox.style.display = 'block';
            setTimeout(() =>{
                failureBox.style.opacity = '1';
            }, 100);

            setTimeout(() =>{
                failureBox.style.opacity = '0';
                failureBox.style.display = 'none';
            }, 2000);



        //alert('invalid');
      }

}

function showBox(){
    document.getElementById('outBox').style.display = "block";
    document.getElementById('showBox').style.display = "none";
    document.getElementById('hideBox').style.display = "block";
}
function hideBox(){
    document.getElementById('outBox').style.display = "none";
    document.getElementById('showBox').style.display = "block";
    document.getElementById('hideBox').style.display = "none";
}