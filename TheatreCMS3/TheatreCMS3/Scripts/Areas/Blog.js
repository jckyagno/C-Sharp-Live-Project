function toggleContent(contentID) {
    //hide all availabe content sections
    var hideElems = document.getElementsByClassName("content")
    for (let x = 0; x < hideElems.length; x++) {
        hideElems[x].style.display = 'none';
    };
    //get passed content seaction id and set display to visible
    var elem = document.getElementById(contentID);
    elem.style.display = 'block';
}

function ConfirmDelete(blogAuthorId, authorName) {
    console.log("started confirm")
    $("#author-name").text(authorName);
    $("#authorId").text(blogAuthorId);
    $("#deleteAuthorConfirmButton").show();
    $("#ModalPopUp").modal("show");
}

// Handle the actual delete action when the confirm button is clicked
$("#deleteAuthorConfirmButton").click(function () {
    var blogAuthorId = $("#authorId").text();
    console.log(blogAuthorId);
    // Perform the delete action here, e.g., through an AJAX call
    $.ajax({
        url: "BlogAuthors/DeleteAjax/" + blogAuthorId,
        type: 'POST',
        data: { id: blogAuthorId },
        success: function(data) {
            // Handle success, maybe refresh the page or update the UI
            // For now, let's close the modal
            $("#ModalPopUp").modal("hide");
            $("#" + blogAuthorId).fadeOut(500, function () {
                // Optionally, you can remove the section from the DOM after the fade-out animation completes
                $("#" + blogAuthorId).hide();
            });
        },
        error: function () {
            // Handle error if the delete action fails
            alert("Error deleting author.");
        }
    });
});