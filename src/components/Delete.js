import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Delete() {       
        
            $.ajax({
                type: 'DELETE',
                url: 'http://dvd-library.us-east-1.elasticbeanstalk.com/dvd' + dvdId,
                success: function () {
                    loadDvds();
                }
            })
        
            return ( $(document).ready(function () {
                loadDvds();
            
            })
            );
}

export default Delete;