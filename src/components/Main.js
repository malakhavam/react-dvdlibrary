import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function Main() {
   
    // to load DVDs from the API
    $(document).ready(function () {
        loadDvds();
    
    });
    function loadDvds() {
        
        var contentRows = $('#contentRows');
    
        $.ajax({
            type: 'GET',
            url: 'http://dvd-library.us-east-1.elasticbeanstalk.com/dvds/',
            success: function (data, status) {
                $.each(data, function (index, dvd) {
                    var name = dvd.title;
                    var date = dvd.releaseYear;
                    var dir = dvd.director;
                    var rate = dvd.rating;
                    var dvdId = dvd.id;
    
                    var row = '<tr>';
                    row += '<td><a onclick="showDvd(' + dvdId + ')">' + name + '</a></td>';
                    row += '<td>' + date + '</td>';
                    row += '<td>' + dir + '</td>';
                    row += '<td>' + rate + '</td>';
                    row += '<td><a onclick="editDvd(' + dvdId + ')">Edit</a> | <a onclick="deleteConfirmation(' + dvdId + ')">Delete</a></td>';
                    row += '</tr>';
    
                    contentRows.append(row);
                })
            },
            error: function () {
                $('#errorMessages')
                    .append($('<li>')
                        .attr({
                            class: 'list-group-item list-group-item-danger'
                        })
                        .text('Error calling web service. Please try again later.'));
            }
        });
    }
   // display DVD's table      
  return (
    <section className="my-5">
      <h1 id="main">DVD Library</h1>
      
      <div class="container" id="homepage">            
            <div class="form-group row" id="headerbuttons">
                    <div class="col-md-3">

                        <button type="button"
                                id="create-dvd-button"
                                class="btn btn-outline-secondary">

                            Create DVD
                        </button>
                        <button type="button"
                                id="create-dvd-button"
                                class="btn btn-outline-secondary">

                            Edit DVD
                        </button>
                    </div>
                    <div class="col-md-2">
                        <button type="button"
                            id="search-button"
                            class="btn btn-outline-secondary">
                            Search
                        </button>
                    </div>
              
                <div class="input-group mb-3 col-md">
                  <div class="input-group-prepend">

                    <div class="col-md-12 dropdown">
                        <select class="form-control" id="search-category">
                            <option value="" selected disabled>Search Category</option>
                            <option value="title">Title</option>
                            <option value="year">Release Year</option>
                            <option value="director">Director Name</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                        
                  </div>
                      <input type="text" placeholder="Search Term" aria-label="search-text" id="search-text"></input>
                </div>
            </div>
        </div> 
        
        <ul class="list-group" id="errorMessages"></ul>
            
       
           <div class="container" id="contactTableDiv">
            <div class="row">
            <div class="col-md-12">
                <div id="contactTableDiv">
                    <table id="dvdTable" class="table table-hover">
                    <tr>
                        <th width ="30%">Title</th>
                        <th width ="20%">Release Date</th>
                        <th width ="10%">Director</th>
                        <th width ="10%">Rating</th>
                        <th width ="30%"></th>
                    </tr>
                    <tbody id="contentRows"></tbody>
                    </table>
                </div>           
            </div>
            </div>
        </div>
    </section>
  );
}

export default Main;
