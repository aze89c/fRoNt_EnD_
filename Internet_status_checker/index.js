

window.addEventListener("load",checkInterConn);


function checkInterConn(){

    const statusTextEl = document.getElementById('statusText');
    const ipTextEl = document.getElementById('ipText');
    const netTextEl = document.getElementById('netText');

    statusTextEl.textContent = 'Checking...';


    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{

            ipTextEl.textContent = data.ip;
            statusTextEl.textContent = 'Connected';

            const connection = navigator.connection;

            const networkStrength = connection ?connection.downlink 
            +'Mbps' : 'Unknown';
            netTextEl.textContent = networkStrength;


        })
        .catch(()=>{
            statusTextEl.textContent = 'Disconnected';
            ipTextEl.textContent = '-';
            netTextEl.textContent = '-';
        });


    }else{
        statusTextEl.textContent = 'Disconnected';
        ipTextEl.textContent = '-';
        netTextEl.textContent = '-';
    }

}