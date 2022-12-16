import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Edit() {
    return (
        <div class="container" id="editDvdForm">
            <h1>Edit DVD</h1>
            <hr/>
            <ul class="list-group" id="errorMessagesEdit"></ul>
            <form class="form-horizontal" role="form" id="edit-form">  
                <div class="form-group">

                    <label for="edit-dvd-title" class="col-md-2 control-label">
                        DVD Title:
                    </label>
                    <div class="col-md-10">
                        <input type="text"
                               class="form-control"
                               id="edit-dvd-title"
                               placeholder="DVD Title" required/>   
                    </div>    
                </div>
                <div class="form-group">
                    <label for="edit-release-year" class="col-md-2 control-label">
                        Release Year:
                    </label>
                    <div class="col-md-10">
                        <input type="text"
                               class="form-control"
                               id="edit-release-year"
                               placeholder="Release Year" required/>   
                    </div>    
                </div>
                <div class="form-group">
                    <label for="edit-director" class="col-md-2 control-label">
                        Director:
                    </label>
                    <div class="col-md-10">
                        <input type="text"
                               class="form-control"
                               id="edit-director"
                               placeholder="Director" required/>   
                    </div>    
                </div>
                <div class="form-group">
                    <label for="edit-rating" class="col-md-2 control-label">
                        Rating:
                    </label>
                    <div class="col-md-10">
                        <select class="form-control" id="edit-rating">
                            <option value="G">G</option>
                            <option value="PG">PG</option>
                            <option value="PG-13">PG-13</option>
                            <option value="R">R</option>

                        </select>
 
                    </div>    
                </div>
                <div class="form-group">
                    <label for="edit-notes" class="col-md-2 control-label">
                        Notes:
                    </label>
                    <div class="col-md-10">
                        <textarea class='form-control' id="edit-notes" rows="8"></textarea>
                    </div>    
                </div>
                
                <div class="col-md-3">
                    <input type="hidden" id="edit-dvdId"></input>
                    <button type="button"
                        id="cancel-edit-button"
                        class="btn btn-primary">
                        Cancel
                    </button>        
                </div>
                <div class="col-md-3">
                    <button type="button"
                        id="edit-dvd-button"
                        class="btn btn-primary">
                        Submit Changes
                    </button>        
                </div>
                                                              
            </form>    
        </div>
    );
}
export default Edit;