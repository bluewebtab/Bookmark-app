document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save Bookmark
function saveBookmark(e){
    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    
    
    var bookmark = {
        name: siteName,
        url:siteUrl
    }
    
    
//    //local storage Test
//    localStorage.setItem('test', 'Hello World');
//    console.log(localStorage.getItem('test'));
//    localStorage.removeItem('test');
//    console.log(localStorage.getItem('test'));
    
    //Test if bookmarks is null
    
    
    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        
        bookmarks.push(bookmark);
        
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
    }
    
    
    
    
    
    
    
    //Prevent from submitting
    e.preventDefault();
}


//delete bookmark
function deleteBookmark(url){
    console.log(url);
}


//Fetch bookmarks
function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
     
    
//Get output id 
var bookmarksResults = document.getElementById('bookmarksResults');
    
//Build output
    
bookmarksResults.innerHTML = '';
 for(var i = 0; i < bookmarks.length; i++){
     var name= bookmarks[i].name;
     var url = bookmarks[i].url;
     
     bookmarksResults.innerHTML += '<div class="well">'+
                                   '<h3>' +name+ 
                                   ' <a class="btn btn-info" target="_blank" href="' +url+'">Visit</a> ' +
                                    ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                   '</h3>'+ '</div>';
 }
}