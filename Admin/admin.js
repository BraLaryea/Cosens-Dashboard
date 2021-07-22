$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('#searchUser').on('click', function () {
        $('.wrapper2').html(`
    <div class="details">
    <div class="SearchArea">
    <div class="SearchLine">
        <input title="Enter what you wish to search for" id="searchbox" type="text" />
        <a href="" class="SearchIcon"><img src="img/searchicon.png"></a>
    </div>
    </div>
    </div>`)
    })
})


function addNewInfo() {

    userReference.once('value').then((snapshot) => {
        Object.keys(snapshot.val()).forEach((key) => {

            frst = (`${snapshot.val()[key].frstname}`);
            scnd = (`${snapshot.val()[key].scndname}`);
            tell = (`${snapshot.val()[key].tel}`);
            pinn = (`${snapshot.val()[key].pin}`);
            ball = (`${snapshot.val()[key].balance}`);


            var row = document.createElement("TR");
            document.getElementById("studentsheet").appendChild(row);

            var cell1 = row.insertCell(0);
            var cell1info = document.createTextNode(frst);
            cell1.appendChild(cell1info);

            var cell2 = row.insertCell(-1);
            var cell2info = document.createTextNode(scnd);
            cell2.appendChild(cell2info);

            var cell3 = row.insertCell(-1);
            var cell3info = document.createTextNode(tell);
            cell3.appendChild(cell3info);

            var cell4 = row.insertCell(-1);
            var cell4info = document.createTextNode(pinn);
            cell4.appendChild(cell4info);

            var cell5 = row.insertCell(-1);
            var cell5info = document.createTextNode(ball);
            cell5.appendChild(cell5info);

            // var cell6 = row.insertCell(-1);
            // var cell6info = document.createTextNode(grade());
            // cell6.appendChild(cell6info);

        });
    });
}
// location.reload(addNewInfo())

window.onload(addNewInfo())
