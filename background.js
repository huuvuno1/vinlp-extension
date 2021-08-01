chrome.extension.onMessage.addListener(
    function (request) {
        switch(request.type) {
            case 'done-check':
                saveCheckedFile();
                break;
            case 'done_assign':
                console.log(request)
                break;
        }
});

if (localStorage.getItem('checked_file') == null)
    localStorage.setItem('checked_file', '0');

if (localStorage.getItem('assign_file') == null)
localStorage.setItem('assign_file', '0');

if (localStorage.getItem('time') == null)
localStorage.setItem('time', '0');

function saveCheckedFile() {
    let checked_file = localStorage.getItem('checked_file');
    checked_file = parseInt(checked_file) + 1;
    localStorage.setItem('checked_file', checked_file);
}
    
function saveAssign(file, time) {
    
}
